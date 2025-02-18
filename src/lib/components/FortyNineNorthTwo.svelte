<script lang="ts">
  import { onMount } from 'svelte';

  let mouseX = 0;
  let mouseY = 0;
  let container: HTMLElement;

  onMount(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Ignorar eventos táctiles (que se convierten en eventos de mouse)
      if (e.sourceCapabilities?.firesTouchEvents) return;
      
      if (container) {
        const rect = container.getBoundingClientRect();
        mouseX = (e.clientX - rect.left) / rect.width;
        mouseY = (e.clientY - rect.top) / rect.height;
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  });
</script>

<section 
  bind:this={container}
  class="fixed top-0 left-0 w-full h-full bg-white -z-50 overflow-hidden"
  style="--mouse-x: {mouseX}; --mouse-y: {mouseY};"
>
  <!-- Grid Container -->
  <div class="grid grid-cols-1 md:grid-cols-2 h-full w-full">
    <!-- Texto Lado Izquierdo -->
    <div class="flex items-center justify-center p-8 relative">
      <div class="max-w-xl w-full">
        <h2 data-split-text="true" class="mobile-title" style="color:rgb(32, 3, 20);font-size:144px;position:absolute;font-family:Calibri, sans-serif;text-align:left;letter-spacing:-4.32px;font-weight:300;line-height:165.6px;margin-bottom:0px;">
          <span style="display: block; text-align: left; width: 100%;">
          </span>
        </h2>
        <h2 data-split-text="true" class="mobile-title" style="color:rgb(32, 3, 20);font-size:144px;position:absolute;font-family:Calibri, sans-serif;text-align:left;letter-spacing:-4.32px;font-weight:300;line-height:165.6px;margin-top:115.2px;">
          <span style="display: block; text-align: left; width: 100%;">
          </span>
        </h2>
      </div>
    </div>

    <!-- Animación Lado Derecho -->
    <div class="relative w-full h-full flex justify-center items-center perspective-3000">
      <!-- Aura exterior -->
      <div class="absolute aura-container animate-pulse-slow">
        <div class="absolute inset-0 bg-gradient-to-tr from-red-500/5 via-orange-400/5 to-red-500/5 rounded-full blur-xl"></div>
        <div class="absolute inset-0 bg-gradient-conic rounded-full animate-spin-slow"></div>
      </div>

      <!-- Contenedor de la figura -->
      <div class="relative group">
        <!-- Efecto de brillo -->
        <div class="absolute -inset-4 bg-gradient-to-r from-red-500/20 via-orange-400/20 to-red-500/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        
        <!-- Figura central -->
        <div class="relative transform transition-all duration-500"
             style="transform: translate({mouseX * 30}px, {mouseY * 30}px) rotate({mouseX * 10}deg)">
          <img 
            src="/figura1.svg" 
            alt="Figura 1" 
            class="figura-central transform group-hover:scale-110 transition-transform duration-700"
          />
        </div>
      </div>

      <!-- Partículas orbitantes -->
      <div class="absolute inset-0">
        <div class="orbital-ring"></div>
        <div class="orbital-ring delay-300"></div>
      </div>
    </div>
  </div>

  <!-- Fondo dinámico -->
  <div class="absolute inset-0 -z-10">
    <!-- Líneas decorativas -->
    <svg class="absolute inset-0 w-full h-full" style="pointer-events: none;">
      <defs>
        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color: rgba(239, 68, 68, 0.1)"/>
          <stop offset="50%" style="stop-color: rgba(251, 146, 60, 0.1)"/>
          <stop offset="100%" style="stop-color: rgba(239, 68, 68, 0.1)"/>
        </linearGradient>
      </defs>
      <path 
        d="M0,50 Q400,300 800,50" 
        stroke="url(#lineGradient)" 
        fill="none" 
        class="animate-draw"
      />
    </svg>
  </div>
</section>

<style lang="postcss">
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

  .perspective-3000 {
    perspective: 3000px;
  }

  .orbital-ring {
    position: absolute;
    width: 100%;
    height: 100%;
    border: 1px solid rgba(239, 68, 68, 0.1);
    border-radius: 50%;
    animation: orbit 20s linear infinite;
  }

  .animate-draw {
    stroke-dasharray: 1000;
    stroke-dashoffset: 1000;
    animation: draw 10s infinite alternate;
  }

  .aura-container {
    width: 600px;
    height: 600px;
  }

  .figura-central {
    width: 300px;
    height: 300px;
  }

  @keyframes draw {
    to { stroke-dashoffset: 0; }
  }

  @keyframes orbit {
    from { transform: rotate(0deg) scale(0.8); }
    to { transform: rotate(360deg) scale(1.2); }
  }

  .bg-gradient-conic {
    background: conic-gradient(
      from 0deg,
      rgba(239, 68, 68, 0.1),
      rgba(251, 146, 60, 0.1),
      rgba(239, 68, 68, 0.1)
    );
  }

  .animate-spin-slow {
    animation: spin 20s linear infinite;
  }

  .animate-pulse-slow {
    animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }

  /* Mobile Responsive Styles */
  @media (max-width: 768px) {
    .mobile-title {
      position: relative !important;
      font-size: 72px !important;
      line-height: 1.1 !important;
      margin: 0 !important;
      text-align: center !important;
    }

    .mobile-title span {
      text-align: center !important;
    }

    .mobile-title span span {
      transform: none !important;
    }

    .aura-container {
      width: 300px;
      height: 300px;
    }

    .figura-central {
      width: 150px;
      height: 150px;
    }

    /* Ajuste del grid en mobile para acercar elementos */
    :global(.grid) {
      gap: 0;
      padding-top: 2rem;
      padding-bottom: 2rem;
    }
  }
</style>