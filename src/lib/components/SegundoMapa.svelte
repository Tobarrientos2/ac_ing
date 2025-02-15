<script>
    import { onMount } from 'svelte';
    import * as THREE from 'three';
    import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';
    import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
  
    let container;
    
    onMount(() => {
      // Configuración básica de Three.js
      const scene = new THREE.Scene();
      scene.background = new THREE.Color(0xffffff);
      const camera = new THREE.PerspectiveCamera(
        45,  // Reducido de 75 a 45 para un FOV más natural
        window.innerWidth / window.innerHeight,
        0.1,
        15000
      );
      const renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setClearColor(0xffffff);
      
      renderer.setSize(window.innerWidth, window.innerHeight);
      container.appendChild(renderer.domElement);
  
      // Añadir luz
      const light = new THREE.DirectionalLight(0xffffff, 3);
      light.position.set(1, 1, 2);
      scene.add(light);
      
      // Añadir luz ambiental
      const ambientLight = new THREE.AmbientLight(0x808080, 1.5);
      scene.add(ambientLight);
  
      // Configurar controles de órbita
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.minDistance = 200;    // Aumentado el mínimo
      controls.maxDistance = 3000;   // Aumentado el máximo para poder alejar más
      
      // Cargar el archivo STL
      const loader = new STLLoader();
      loader.load(
        '/bueno.stl',
        function (geometry) {
          // Material físico con destellos
          const material = new THREE.MeshPhysicalMaterial({ 
            color: 0xa0a0a0,        // Color base aún más claro
            metalness: 0.4,         // Reducido para menos oscuridad
            roughness: 0.1,         // Mantenido para los destellos
            clearcoat: 1.0,         // Mantenido para los destellos
            clearcoatRoughness: 0.1,
            reflectivity: 1.0,
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
          
          scene.add(mesh);
          
          // Ajustar la posición de la cámara
          camera.position.z = 1500;  // Aumentado para ver desde más lejos
        },
        (xhr) => {
          console.log((xhr.loaded / xhr.total) * 100 + '% cargado');
        },
        (error) => {
          console.error('Error cargando el STL', error);
        }
      );
  
      // Función de animación
      function animate() {
        requestAnimationFrame(animate);
        controls.update();
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
  </div>
  
  <style>
    .viewer-container {
      width: 100%;
      height: 100vh;
    }
  </style>
  