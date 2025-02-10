<script>
  import Logo from './Logo.svelte';

  const links = [
    { name: 'Portafolio', url: '#' },
    { name: 'Servicios', url: '#' }
  ];

  const contactInfo = [
    {
      group: 'Dirección',
      icon: 'fas fa-location-dot',
      items: [
        'Encomenderos 231, Oficina 402',
        'Las Condes, Santiago, Chile',
        'Código Postal 7550166'
      ]
    },
    {
      group: 'Contacto',
      icon: 'fas fa-envelope',
      items: [
        'contacto@ac-ing.cl',
        '+569 9818 1332'
      ]
    }
  ];

  // Añadir la API key de Google Maps (deberías manejarla en variables de entorno)
  const GOOGLE_MAPS_API_KEY = 'TU_API_KEY';
  
  // Coordenadas de Encomenderos 231, Las Condes
  const coordinates = {
    lat: -33.4141,
    lng: -70.6015
  };

  // Función para cargar el mapa una vez que el componente esté montado
  let mapElement;
  
  function initMap() {
    if (typeof google !== 'undefined' && mapElement) {
      const map = new google.maps.Map(mapElement, {
        center: coordinates,
        zoom: 16,
        styles: [
          {
            "elementType": "geometry",
            "stylers": [{"color": "#242f3e"}]
          },
          // ... puedes añadir más estilos para un tema oscuro
        ]
      });

      new google.maps.Marker({
        position: coordinates,
        map: map,
        title: 'AC Ingeniería'
      });
    }
  }

  import { onMount } from 'svelte';

  onMount(() => {
    // Cargar el script de Google Maps
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&callback=initMap`;
    script.async = true;
    script.defer = true;
    window.initMap = initMap;
    document.head.appendChild(script);
  });
</script>

<footer class="relative z-30 bg-black text-white py-20 px-4">
  <div class="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
    <!-- Sección de marca - 3 columnas -->
    <div class="md:col-span-3 space-y-6">
      <div class="w-[60px] opacity-90 hover:opacity-100 transition-opacity duration-300">
        <Logo inverted={true} />
      </div>
      <p class="text-gray-300 max-w-sm">
        Comprometidos con la excelencia en cada proyecto, brindando soluciones de ingeniería innovadoras y sostenibles.
      </p>
    </div>

    <!-- Enlaces rápidos - 2 columnas -->
    <div class="md:col-span-2 space-y-6">
      <h3 class="text-xl font-semibold">Enlaces</h3>
      <ul class="space-y-4">
        {#each links as link}
          <li>
            <a href={link.url} class="text-gray-300 hover:text-white transition-colors">
              {link.name}
            </a>
          </li>
        {/each}
      </ul>
    </div>

    <!-- Información de contacto - 3 columnas -->
    <div class="md:col-span-3 space-y-6">
      <div class="space-y-4">
        <div class="flex items-center gap-2">
          <i class="fas fa-location-dot text-[#FF4400]"></i>
          <h3 class="text-xl font-semibold">Dirección</h3>
        </div>
        <div class="space-y-2 text-gray-300">
          <p>Encomenderos 231, Oficina 402</p>
          <p>Las Condes, Santiago, Chile</p>
          <p>Código Postal 7550166</p>
        </div>
      </div>
      
      <div class="space-y-4">
        <div class="flex items-center gap-2">
          <i class="fas fa-envelope text-[#FF4400]"></i>
          <h3 class="text-xl font-semibold">Contacto</h3>
        </div>
        <div class="space-y-2 text-gray-300">
          <p>contacto@ac-ing.cl</p>
          <p>+569 9818 1332</p>
        </div>
      </div>
    </div>

    <!-- Mapa - 4 columnas -->
    <div class="md:col-span-4">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3330.2889261804397!2d-70.60399492432534!3d-33.41411999833866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cf40e9cea79f%3A0x7ce06d7839963e4a!2sEncomenderos%20231%2C%20Las%20Condes%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses!2scl!4v1709612433044!5m2!1ses!2scl"
        class="w-full h-[300px] rounded-lg"
        style="border:0;"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade">
      </iframe>
    </div>
  </div>

  <!-- Copyright -->
  <div class="max-w-[1200px] mx-auto mt-20 pt-8 border-t border-gray-800">
    <div class="flex justify-center">
      <p class="text-sm text-gray-400">© AC Ingeniería. Todos los derechos reservados.</p>
    </div>
  </div>
</footer>

<style>
  @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css');
</style> 