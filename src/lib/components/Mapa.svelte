<script>
  import { onMount } from 'svelte';
  import * as THREE from 'three';
  import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
  import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

  let container;
  
  onMount(() => {
    // Configuración básica de Three.js
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff); // Fondo completamente blanco
    
    const camera = new THREE.PerspectiveCamera(
      45, // FOV más estrecho para mejor detalle
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.outputEncoding = THREE.sRGBEncoding; // Mejor manejo del color
    renderer.shadowMap.enabled = true; // Habilitar sombras
    container.appendChild(renderer.domElement);

    // Configurar iluminación con más intensidad
    const mainLight = new THREE.PointLight(0xffffff, 8.0); // Aumentado a 8.0
    mainLight.position.set(2, 5, 2);
    scene.add(mainLight);

    const frontLight = new THREE.PointLight(0xffffff, 5.0); // Aumentado a 5.0
    frontLight.position.set(0, 0, 10);
    scene.add(frontLight);

    const backLight = new THREE.PointLight(0xffffff, 4.0); // Aumentado a 4.0
    backLight.position.set(-2, 3, -5);
    scene.add(backLight);

    const ambientLight = new THREE.AmbientLight(0xffffff, 3.5); // Aumentado a 3.5
    scene.add(ambientLight);

    // Opcional: para debug de las luces
    // const mainLightHelper = new THREE.PointLightHelper(mainLight);
    // const frontLightHelper = new THREE.PointLightHelper(frontLight);
    // const backLightHelper = new THREE.PointLightHelper(backLight);
    // scene.add(mainLightHelper, frontLightHelper, backLightHelper);

    // Configurar controles de órbita
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.screenSpacePanning = false;
    controls.minDistance = 0.005;
    controls.maxDistance = 0.5;
    controls.maxPolarAngle = Math.PI;
    // Deshabilitar controles manuales
    controls.enableRotate = false;
    controls.enableZoom = false;
    controls.enablePan = false;

    // Referencia al modelo fuera del loader para poder acceder desde handleScroll
    let modelRef;

    // Cargar el archivo GLB
    const loader = new GLTFLoader();
    loader.load(
      '/logo.glb',
      function (gltf) {
        const model = gltf.scene;
        modelRef = model;
        
        // Mejorar el manejo de materiales para más reflejo y brillo
        model.traverse((child) => {
          if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
            
            if (child.material) {
              child.material.metalness = 0.5;    // Reducido para menos metalicidad
              child.material.roughness = 0.1;    // Reducido para más brillo
              child.material.envMapIntensity = 4.0;  // Aumentado para más brillo
            }
          }
        });
        
        // Centrar el modelo
        const box = new THREE.Box3().setFromObject(model);
        const center = box.getCenter(new THREE.Vector3());
        model.position.sub(center);
        
        // Rotar el modelo 180 grados alrededor del eje Y
        model.rotation.y = Math.PI;
        
        // Ajustar la escala a un valor aún más pequeño
        model.scale.set(0.03, 0.03, 0.03);  // Reducido de 0.05
        
        scene.add(model);
        
        // Posicionar la cámara más cerca
        const size = box.getSize(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z);
        camera.position.set(maxDim * 0.05, maxDim * 0.05, maxDim * 0.05);  // Reducido de 0.1
        camera.lookAt(0, 0, 0);
        
        controls.target.set(0, 0, 0);
        controls.update();
      },
      (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + '% cargado');
      },
      (error) => {
        console.error('Error cargando el GLB', error);
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

    // Modificar el manejador de scroll
    function handleScroll() {
      const scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      
      // Aplicar rotación al modelo (360 grados = 2 * Math.PI radianes)
      if (modelRef) {
        modelRef.rotation.y = Math.PI + (scrollPercent * 2 * Math.PI);
      }
      
      controls.update();
    }

    window.addEventListener('scroll', handleScroll);

    // Actualizar la limpieza
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
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
