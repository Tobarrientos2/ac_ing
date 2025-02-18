<script>
  import { onMount } from 'svelte';

  onMount(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const heroText = document.querySelector('.hero-text');
      if (heroText) {
        heroText.style.transform = `translateY(${scrolled * 0.2}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
</script>

<section class="relative min-h-[150vh] w-full overflow-hidden">
  <!-- SVG en el fondo -->
  <div class="absolute inset-0 w-full h-[180vh] flex justify-center items-center">
    <img src="figura3.svg" alt="Figura decorativa" class="h-full w-auto object-contain">
  </div>

  <!-- Contenido principal -->
  <div class="relative h-screen flex items-center justify-center z-20">
    <div class="container mx-auto px-6 md:px-8">
      <div class="grid grid-cols-12 gap-4">
        <!-- Título pequeño superior -->
        <span class="col-start-2 col-span-3 text-sm uppercase tracking-wider text-gray-500 mb-6 font-medium transform -rotate-90 origin-left translate-y-24">
          Nuestra Filosofía
        </span>
        
        <!-- Texto principal con mejor espaciado -->
        <p class="col-start-4 col-span-8 hero-text text-[2rem] md:text-[3.5rem] leading-[1.3] tracking-[-0.02em] font-light text-gray-800">
          Con un enfoque constante en la
          <span class="text-primary-600 font-normal hover:text-primary-700 transition-colors duration-300">innovación</span>,
          <span class="text-primary-600 font-normal hover:text-primary-700 transition-colors duration-300">economía</span> y
          <span class="text-primary-600 font-normal hover:text-primary-700 transition-colors duration-300">seguridad estructural</span>,
          nos destacamos por la capacidad de ofrecer
          diseños eficientes y de
          alta calidad.
        </p>
      </div>
    </div>
  </div>
</section>

<style>
  .hero-text {
    font-family: 'Inter', system-ui, -apple-system, sans-serif;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.03);
  }

  /* Animación refinada de entrada */
  .hero-text {
    animation: slideIn 1.2s cubic-bezier(0.16, 1, 0.3, 1);
  }

  @keyframes slideIn {
    0% {
      opacity: 0;
      transform: translateY(40px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Añadir efecto de parallax suave al scroll */
  section {
    perspective: 1000px;
  }

  .hero-text span {
    display: inline-block;
    transition: transform 0.3s ease;
  }

  .hero-text span:hover {
    transform: translateY(-2px);
  }
</style>