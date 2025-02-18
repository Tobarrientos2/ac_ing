<script>
    import { onMount } from 'svelte';
    import * as THREE from 'three';
    import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';
    import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
  
    let container;
    
    onMount(() => {
      // Configuración básica de Three.js
      const scene = new THREE.Scene();
      scene.background = new THREE.Color(0xffffff);  // Fondo blanco
      const camera = new THREE.PerspectiveCamera(
        45,  // Reducido de 75 a 45 para un FOV más natural
        window.innerWidth / window.innerHeight,
        0.1,
        15000
      );
      const renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setClearColor(0xffffff);
      
      // Crear un plano blanco para el fade
      const fadeGeometry = new THREE.PlaneGeometry(100000, 100000);
      const fadeMaterial = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0,
        side: THREE.DoubleSide
      });
      const fadePlane = new THREE.Mesh(fadeGeometry, fadeMaterial);
      fadePlane.position.set(0, 0, 0);
      fadePlane.lookAt(camera.position);
      scene.add(fadePlane);

      renderer.setSize(window.innerWidth, window.innerHeight);
      container.appendChild(renderer.domElement);
  
      // Añadir luz
      const light = new THREE.DirectionalLight(0xffffff, 5); // Aumentada intensidad
      light.position.set(1, 1, 2);
      scene.add(light);
      
      // Añadir luz ambiental
      const ambientLight = new THREE.AmbientLight(0x404040, 2); // Ajustada luz ambiental
      scene.add(ambientLight);

      // Añadir luz puntual para más brillos
      const pointLight = new THREE.PointLight(0xffffff, 2);
      pointLight.position.set(-2, 2, 3);
      scene.add(pointLight);
  
      // Cargar el archivo STL
      const loader = new STLLoader();
      loader.load(
        '/Frame.STL',
        function (geometry) {
          // Material físico más metálico y brillante
          const material = new THREE.MeshPhysicalMaterial({ 
            color: 0xC0C0C0,        // Color plateado
            metalness: 0.9,          // Muy metálico
            roughness: 0.1,          // Muy pulido
            clearcoat: 1.0,          
            clearcoatRoughness: 0.1,
            reflectivity: 1.0,
            envMapIntensity: 1.5     // Intensidad de reflexiones
          });
  
          // Opción 2: Material con wireframe
          /*
          const material = new THREE.MeshPhongMaterial({ 
            color: 0xffffff,
            wireframe: true,
            wireframeLinewidth: 1
          });
          */
  
          // Opción 3: Material con gradiente
          /*
          const material = new THREE.MeshPhysicalMaterial({
            color: 0xffffff,
            clearcoat: 1.0,     // Capa de barniz
            clearcoatRoughness: 0.1,
            metalness: 0.9,
            roughness: 0.5,
          });
          */
  
          const mesh = new THREE.Mesh(geometry, material);
          
          // Centrar el modelo
          geometry.center();
          
          // Ajustar la escala si es necesario
          mesh.scale.set(1, 1, 1);
          
          // Rotar 90 grados en X para que quede "acostado"
          mesh.rotation.x = Math.PI / 2;
          // Rotar 90 grados en Z para orientarlo horizontalmente
          mesh.rotation.z = Math.PI / 2;
          
          scene.add(mesh);
          
          // Ajustar la posición de la cámara para mirar hacia arriba
          camera.position.set(0, -1000, 0); // Posicionamos la cámara más cerca que antes
          camera.up.set(0, 0, 1); // Establecemos que el "arriba" de la cámara es el eje Z
          camera.lookAt(0, 0, 0); // Hacemos que la cámara mire hacia el origen (arriba)
          
        },
        (xhr) => {
          console.log((xhr.loaded / xhr.total) * 100 + '% cargado');
        },
        (error) => {
          console.error('Error cargando el STL', error);
        }
      );
  
      // Función de animación
      let targetY = -20; // Posición final deseada
      let currentY = -1000; // Posición inicial más cercana
      let animationSpeed = 1.5; // Ajustamos la velocidad para la nueva distancia
      let fadeStartY = -200; // Posición donde comenzará el fade
      let fadeOpacity = 0;

      function animate() {
        requestAnimationFrame(animate);

        // Animar el acercamiento de la cámara
        if (currentY < targetY) {
          currentY += animationSpeed;
          camera.position.setY(currentY);
          camera.lookAt(0, 0, 0);
        }

        // Animar el fade a blanco cuando la cámara pase cierto punto
        if (currentY >= fadeStartY && fadeOpacity < 1) {
          // Calculamos la opacidad basada en la distancia entre fadeStartY y targetY
          fadeOpacity = (currentY - fadeStartY) / (targetY - fadeStartY);
          // Aseguramos que la opacidad no exceda 1
          fadeOpacity = Math.min(fadeOpacity, 1);
          fadeMaterial.opacity = fadeOpacity;
          fadePlane.lookAt(camera.position);
        }

        renderer.render(scene, camera);
      }
      
      animate();
  
      // Manejar el redimensionamiento de la ventana
      function handleResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      }
  
      window.addEventListener('resize', handleResize);
  
      // Limpieza al desmontar
      return () => {
        window.removeEventListener('resize', handleResize);
        container.removeChild(renderer.domElement);
      };
    });
  </script>
  
  <div bind:this={container} class="viewer-container">
    <div class="logo-container">
      <img src="/logo.svg" alt="Logo" class="logo">
    </div>
  </div>
  
  <style>
    .viewer-container {
      width: 100%;
      height: 100vh;
      position: relative;
    }

    .logo-container {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 10;
      pointer-events: none;
    }

    .logo {
      width: 400px;
      height: 400px;
      max-width: 600px;
      max-height: 600px;
      opacity: 0;
      animation: fadeIn 2s ease-in forwards;
      animation-delay: 1s;
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    @media (max-width: 768px) {
      .quote-container {
        padding: 0.5rem;
      }

      .logo {
        width: 250px;
        height: 250px;
      }
    }

    @media (max-width: 480px) {
      .logo {
        width: 200px;
        height: 200px;
      }
    }

    @media (max-width: 320px) {
      .logo {
        width: 150px;
        height: 150px;
      }
    }
  </style>
  