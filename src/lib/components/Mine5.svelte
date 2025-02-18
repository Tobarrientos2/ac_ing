<script>
  import { onMount } from 'svelte';
  import Logo from './Logo.svelte';

  const links = [
    { name: 'Portafolio', url: '#' },
    { name: 'Servicios', url: '#' }
  ];
</script>

<section class="bg-[#2A2A2A] text-[#ECE8E7] py-20">
  <div class="container mx-auto px-[43.1953px]">
    <!-- Grid Principal -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
      <!-- Logo -->
      <div class="border-t border-[#ECE8E7] pt-4">
        <div class="w-[60px] opacity-90 hover:opacity-100 transition-opacity duration-300">
          <Logo inverted={true} />
        </div>
        <p class="text-gray-300 max-w-sm mt-4">
          Comprometidos con la excelencia en cada proyecto, brindando soluciones de ingeniería innovadoras y sostenibles.
        </p>
      </div>

   

      <!-- Dirección y Contacto -->
      <div class="border-t border-[#ECE8E7] pt-4">
        <div class="space-y-4">
          <div class="flex items-center gap-2">
            <h3 class="text-xl font-semibold">Dirección</h3>
          </div>
          <div class="space-y-2 text-gray-300">
            <p>Encomenderos 231, Oficina 402</p>
            <p>Las Condes, Santiago, Chile</p>
            <p>Código Postal 7550166</p>
          </div>
        </div>
        
        <div class="space-y-4 mt-6">
          <div class="flex items-center gap-2">
            <h3 class="text-xl font-semibold">Contacto</h3>
          </div>
          <div class="space-y-2 text-gray-300">
            <p>contacto@ac-ing.cl</p>
            <p>+569 9818 1332</p>
          </div>
        </div>
      </div>

      <!-- Mapa -->
      <div class="border-t border-[#ECE8E7] pt-4">
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
  </div>
</section>

<style>
  @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css');
</style> 