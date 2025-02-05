<script>
  import { onMount } from 'svelte';
  import { activeTheme } from '../config/themes';

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
  let carruselSection;

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

    // Actualizar estilos según el tema
    const updateCarruselStyles = () => {
      if (carruselSection) {
        carruselSection.style.setProperty('--carrusel-background', $activeTheme.colors.background);
        carruselSection.style.setProperty('--text-color', $activeTheme.name === 'Light Theme' ? '#18181B' : '#FFFFFF');
        carruselSection.style.setProperty('--logo-filter', $activeTheme.name === 'Light Theme' ? 'brightness(0)' : 'brightness(0) invert(1)');
      }
    };

    const unsubscribe = activeTheme.subscribe(updateCarruselStyles);
    return () => unsubscribe();
  });

  const handleMouseEnter = () => {
    scrollAnimation.playbackRate = 0.5556; // (25000 / 45000)
  };

  const handleMouseLeave = () => {
    scrollAnimation.playbackRate = 1;
  };
</script>

<div 
  class="w-full overflow-hidden py-8 carrusel-section h-[25vh] flex items-center"
  bind:this={carruselSection}
>
  <div class="container mx-auto flex flex-col items-center justify-between h-full">
    <!-- Espacio reducido para el logo del header -->
    <div class="h-[40px]"></div>
    
    <!-- Título con espaciado ajustado -->
    <div class="flex items-center justify-center gap-4 mb-6">
      <div class="decorative-line w-12 h-[1px]"></div>
      <h2 class="text-center text-[10px] font-light tracking-[0.25em] uppercase opacity-70">
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
  .carrusel-section {
    background-color: var(--carrusel-background);
    color: var(--text-color);
  }

  .partners-logo {
    filter: var(--logo-filter);
    opacity: 0.4;
    transition: all 0.5s ease;
  }

  .partners-logo:hover {
    opacity: 1;
    filter: var(--logo-filter) drop-shadow(0 0 10px rgba(255, 255, 255, 0.5));
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
      var(--carrusel-background) 0%,
      var(--carrusel-background) 50%,
      transparent 100%
    );
  }

  .partners-logo-wrapper::after {
    right: 0;
    background: linear-gradient(to left, 
      var(--carrusel-background) 0%,
      var(--carrusel-background) 50%,
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
    background: linear-gradient(
      to right, 
      transparent, 
      color-mix(in srgb, var(--text-color) 30%, transparent),
      transparent
    );
  }

  .decorative-line:hover {
    background: linear-gradient(
      to right, 
      transparent, 
      color-mix(in srgb, var(--text-color) 50%, transparent),
      transparent
    );
  }
</style> 