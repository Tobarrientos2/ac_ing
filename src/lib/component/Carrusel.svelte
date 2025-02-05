<script>
  import { onMount } from 'svelte';

  const originalBrands = [
    {
      name: 'Renaissance',
      image: 'reinacense_logo.svg',
      url: 'https://renaissancesantiago.cl/'
    },
    {
      name: 'Sheraton',
      image: 'sheraton_logo.svg',
      url: '#'
    },
    {
      name: 'Alto El Plomo',
      image: 'alto_el_plomo.svg',
      url: 'https://altoelplomo.cl/'
    },
    {
      name: 'Bodenor',
      image: 'bodenor_logo.svg',
      url: 'https://bodenorflexcenter.cl/'
    }
  ];

  // Duplicamos los brands varias veces para asegurar un scroll infinito suave
  const brands = [...originalBrands, ...originalBrands, ...originalBrands];

  let scrollEl;
  let scrollAnimation;

  onMount(() => {
    // Creamos la animación infinita
    scrollAnimation = scrollEl.animate(
      [
        { transform: 'translateX(0)' },
        { transform: 'translateX(-33.33%)' }  // Solo movemos un tercio ya que tenemos 3 copias
      ],
      {
        duration: 25000,
        iterations: Infinity,
        easing: 'linear'
      }
    );

    // Detectar cuando la animación está cerca del final para resetear suavemente
    scrollAnimation.addEventListener('finish', () => {
      scrollAnimation.currentTime = 0;
    });
  });

  const handleMouseEnter = () => {
    scrollAnimation.playbackRate = 0.5556; // (25000 / 45000)
  };

  const handleMouseLeave = () => {
    scrollAnimation.playbackRate = 1;
  };
</script>

<div class="w-full overflow-hidden bg-black py-8 carrusel-section h-[25vh] flex items-center">
  <div class="container mx-auto flex flex-col items-center justify-between h-full">
    <!-- Espacio reducido para el logo del header -->
    <div class="h-[40px]"></div>
    
    <!-- Título con espaciado ajustado -->
    <div class="flex items-center justify-center gap-4 mb-6">
      <div class="decorative-line w-12 h-[1px]"></div>
      <h2 class="text-white text-center text-[10px] font-light tracking-[0.25em] uppercase opacity-70">
        Confían en nosotros
      </h2>
      <div class="decorative-line w-12 h-[1px]"></div>
    </div>
    
    <!-- Carrusel con logos más pequeños -->
    <div class="relative partners-logo-wrapper w-full"
         on:mouseenter={handleMouseEnter}
         on:mouseleave={handleMouseLeave}>
      <!-- Asignamos bind:this para poder controlar la animación via Web Animations API -->
      <div class="flex" bind:this={scrollEl}>
        <div class="flex gap-8 md:gap-16 items-center px-10">
          {#each brands as brand}
            <a href={brand.url}
               class="flex-shrink-0 w-24 h-8 transform transition-all duration-500 hover:scale-110"
               aria-label={`Visit ${brand.name}`}>
              <img
                src={brand.image}
                alt={brand.name}
                loading="lazy"
                class="partners-logo w-full h-full object-contain"
              />
            </a>
          {/each}
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  /* Eliminamos la animación CSS que reiniciaba el ciclo */
  
  /* La siguiente regla @keyframes ya no se utiliza y puede eliminarse */
  /*
  @keyframes scroll {
    0% {
      transform: translate3d(0, 0, 0);
    }
    100% {
      transform: translate3d(-50%, 0, 0);
    }
  }
  */

  .partners-logo {
    filter: brightness(0) invert(1);
    opacity: 0.4;
    transition: all 0.5s ease;
  }

  .partners-logo:hover {
    opacity: 1;
    filter: brightness(0) invert(1) drop-shadow(0 0 10px rgba(255, 255, 255, 0.5));
  }

  .partners-logo-wrapper {
    /* Añadimos overflow hidden explícito */
    overflow: hidden;
    /* Aseguramos que el contenedor tenga posición relativa para los pseudo-elementos */
    position: relative;
    /* Añadimos un padding para evitar que los logos toquen los bordes */
    padding: 0 2rem;
  }

  .partners-logo-wrapper::before,
  .partners-logo-wrapper::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    /* Aumentamos el ancho del gradiente */
    width: 150px;
    z-index: 1;
    pointer-events: none; /* Permite que los enlaces bajo el gradiente sigan funcionando */
  }

  .partners-logo-wrapper::before {
    left: 0;
    background: linear-gradient(to right, 
      rgb(0, 0, 0) 0%,
      rgb(0, 0, 0) 50%,  /* Añadimos un paso intermedio sólido */
      transparent 100%
    );
  }

  .partners-logo-wrapper::after {
    right: 0;
    background: linear-gradient(to left, 
      rgb(0, 0, 0) 0%,
      rgb(0, 0, 0) 50%,  /* Añadimos un paso intermedio sólido */
      transparent 100%
    );
  }

  /* Estilo refinado para el título */
  h2 {
    font-family: 'Inter', sans-serif;
    letter-spacing: 0.25em;
    font-weight: 300;
  }

  /* Líneas decorativas más elegantes */
  .decorative-line {
    background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.3), transparent);
    transition: all 0.3s ease;
  }

  .decorative-line:hover {
    background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.5), transparent);
  }
</style> 