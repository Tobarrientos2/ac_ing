<script>
  import { onMount } from 'svelte';
  import Logo from './Logo.svelte';

  const links = [
    { name: 'Portafolio', url: '#' },
    { name: 'Servicios', url: '#' }
  ];
</script>

<style>
  @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css');

  @font-face {
    font-family: 'Calibri';
    src: url('/fonts/calibri-regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Calibri';
    src: url('/fonts/calibri-bold.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: 'Calibri';
    src: url('/fonts/calibri-italic.ttf') format('truetype');
    font-weight: normal;
    font-style: italic;
  }

  @font-face {
    font-family: 'Calibri';
    src: url('/fonts/calibri-bold-italic.ttf') format('truetype');
    font-weight: bold;
    font-style: italic;
  }

  :global(body) {
    font-family: 'Calibri', sans-serif;
  }
</style>

<section class="bg-[#2A2A2A] text-[#ECE8E7] py-16 z-[1] relative">
  <div class="container mx-auto px-4 md:px-8">
    <!-- Grid Principal -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
      <!-- Logo y descripción -->
      <div class="border-t border-[#ECE8E7] pt-6">
        <div class="w-[60px] opacity-90 hover:opacity-100 transition-opacity duration-300">
          <Logo inverted={true} />
        </div>
        <p class="text-gray-300 max-w-sm mt-6 leading-relaxed">
          Comprometidos con la excelencia en cada proyecto, brindando soluciones de ingeniería innovadoras y sostenibles.
        </p>
      </div>

      <!-- Dirección y Contacto -->
      <div class="border-t border-[#ECE8E7] pt-6">
        <div class="space-y-6">
          <div>
            <h3 class="text-xl font-semibold mb-4">Dirección</h3>
            <div class="space-y-2 text-gray-300">
              <p>Encomenderos 231, Oficina 402</p>
              <p>Las Condes, Santiago, Chile</p>
              <p>Código Postal 7550166</p>
            </div>
          </div>
          
          <div>
            <h3 class="text-xl font-semibold mb-4">Contacto</h3>
            <div class="space-y-2 text-gray-300">
              <a href="mailto:contacto@ac-ing.cl" 
                 class="block hover:text-white transition-colors duration-300">
                contacto@ac-ing.cl
              </a>
              <a href="tel:+56998181332" 
                 class="block hover:text-white transition-colors duration-300">
                +569 9818 1332
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Mapa -->
      <div class="border-t border-[#ECE8E7] pt-6 lg:col-span-2">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3330.2889261804397!2d-70.60399492432534!3d-33.41411999833866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cf40e9cea79f%3A0x7ce06d7839963e4a!2sEncomenderos%20231%2C%20Las%20Condes%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses!2scl!4v1709612433044!5m2!1ses!2scl"
          class="w-full h-[300px] rounded-lg"
          style="border:0;"
          allowfullscreen
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
    </div>

    <!-- Copyright -->
    <div class="mt-16 pt-6 border-t border-gray-800">
      <div class="text-center">
        <p class="text-sm text-gray-400">© AC Ingeniería. Todos los derechos reservados.</p>
      </div>
    </div>
  </div>
</section> 