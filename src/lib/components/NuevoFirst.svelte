<script>
  import Mapa from './Mapa.svelte';
</script>

<section class="relative min-h-[150vh] w-full overflow-hidden bg-gradient-to-b from-white to-gray-50">
  <!-- Modelo 3D en el fondo -->
  <div class="absolute inset-0 w-full h-full opacity-40">
    <Mapa />
  </div>

  <!-- Overlay mejorado para legibilidad -->
  <div class="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white/80 backdrop-blur-[1px]"></div>

  <!-- Contenido principal -->
  <div class="relative h-full flex items-center justify-center z-20">
    <div class="container mx-auto px-6 md:px-8">
      <div class="text-center max-w-4xl mx-auto">
        <!-- Título pequeño superior -->
        <span class="block text-sm uppercase tracking-wider text-gray-500 mb-6 font-medium">
          Nuestra Filosofía
        </span>
        
        <!-- Texto principal con mejor espaciado -->
        <p class="hero-text text-[2rem] md:text-[3.5rem] leading-[1.3] tracking-[-0.02em] font-light text-gray-800">
          Con un enfoque constante en la
          <span class="text-primary-600 font-normal">innovación</span>,
          <span class="text-primary-600 font-normal">economía</span> y
          <span class="text-primary-600 font-normal">seguridad estructural</span>,
          nos destacamos por la capacidad de ofrecer
          diseños eficientes y de
          alta calidad.
        </p>

        <!-- CTA opcional -->
        <div class="mt-12">
          <button class="px-8 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-300 shadow-lg hover:shadow-xl">
            Conoce más
          </button>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .hero-text {
    font-family: 'Inter', system-ui, -apple-system, sans-serif;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.03);
  }

  :global(.viewer-container) {
    position: absolute !important;
    top: 0;
    left: 0;
    width: 100% !important;
    height: 100% !important;
  }

  /* Animación sutil de entrada */
  .hero-text {
    animation: fadeIn 1s ease-out;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>