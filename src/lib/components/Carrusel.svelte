<script>
  const buildings = [
    // EDIFICIOS HABITACIONALES Y DE OFICINAS
    {
      title: 'Edificio Alonso',
      description: 'Diseño estructural y supervisión de obra',
      image: 'https://ambientesdigital.com/wp-content/uploads/2023/06/R1A0137-.jpg',
      tag: 'News',
      date: 'February 1, 2025'
    },
    {
      title: 'Edificio Estoril 2',
      description: 'Innovación en diseño sísmico',
      image: './estoril_II_nueva.png',
      tag: 'News',
      date: 'November 22, 2024'
    },
    {
      title: 'Edificio Estoril',
      description: 'Proyecto residencial de alto estándar',
      image: 'estoril_I.jpg',
      tag: 'News',
      date: 'November 15, 2024'
    },
    // EDIFICIOS INDUSTRIALES
    {
      title: 'Edificio Kaufman',
      description: 'Diseño estructural y supervisión de obra',
      image: 'https://www.kaufmann.cl/documents/68916/166093/head-nuestro-equipo.jpg/0c8e2e65-b191-5e8a-735b-7e6218fdb758?t=1597699010935',
      tag: 'News',
      date: 'February 1, 2025'
    },
    {
      title: 'Edificio Cine Hoyts La Reina',
      description: 'Innovación en diseño sísmico',
      image: 'https://arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/IIJXQ7BEYNGMZNZPZ3PUK7FCUA.png',
      tag: 'News',
      date: 'November 22, 2024'
    },
     // EDIFICIOS ESPECIALES
     // Add any "Edificios Especiales" here, following the same structure.
  ];

  let visibleCards = 2.25;
  let currentIndex = 0;
  let maxIndex = buildings.length - Math.floor(visibleCards);

  function next() {
    if (currentIndex < maxIndex) {
      currentIndex++;
    }
  }

  function prev() {
    if (currentIndex > 0) {
      currentIndex--;
    }
  }

  import { onMount } from 'svelte';

  onMount(() => {
    // Agregar el link de Material Symbols si no existe
    if (!document.querySelector('link[href*="Material+Symbols+Outlined"]')) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&icon_names=subdirectory_arrow_right';
      document.head.appendChild(link);
    }

    const groups = document.querySelectorAll('.group');
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    cursor.innerHTML = '<span class="material-symbols-outlined">subdirectory_arrow_right</span> View';
    document.body.appendChild(cursor);
    
    groups.forEach(group => {
      group.addEventListener('mouseenter', () => {
        cursor.style.opacity = '1';
      });
      
      group.addEventListener('mouseleave', () => {
        cursor.style.opacity = '0';
      });
    });

    document.addEventListener('mousemove', (e) => {
      if (e.target instanceof HTMLElement && e.target.closest('.group')) {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
      }
    });
  });
</script>

<div class="w-full bg-white">
  <div class="max-w-[1400px] mx-auto py-16 px-8">
    <!-- Hero Section -->
    <div class="max-w-[1400px] mx-auto py-16 px-8">
      <p class="text-[2.75rem] leading-[1.15] font-light tracking-tight max-w-2xl">
        We're a global design firm with colleagues spanning four continents creating experiences that amplify the joy felt in shared human moments.
      </p>
    </div>

    <!-- News Section -->
    <div class="flex justify-between items-center mb-8">
      <h2 class="text-2xl">News</h2>
      <div class="flex items-center gap-4">
        <div class="flex gap-1">
          <button
            on:click={prev}
            class="w-8 h-8 border border-gray-300 rounded flex items-center justify-center text-gray-700 transition-colors hover:bg-gray-50"
            aria-label="Previous slide"
          >
            ←
          </button>
          <button
            on:click={next}
            class="w-8 h-8 border border-gray-300 rounded flex items-center justify-center text-gray-700 transition-colors hover:bg-gray-50"
            aria-label="Next slide"
          >
            →
          </button>
        </div>
        <a href="#" class="text-sm hover:underline flex items-center gap-1">
          View all
        </a>
      </div>
    </div>

    <!-- Carousel -->
    <div class="overflow-hidden">
      <div
        class="flex gap-8 transition-transform duration-500 ease-in-out"
        style="transform: translateX(-{currentIndex * (100 / visibleCards)}%);"
      >
        {#each buildings as item}
          <div class="flex-shrink-0 w-[calc(44.44%-1.5rem)] relative group">
            <div class="absolute top-4 left-4 bg-white px-3 py-1 rounded-sm text-xs z-10">
              {item.tag}
            </div>
            <img
              src={item.image || "/placeholder.svg"}
              alt={item.title}
              class="w-full aspect-[3/2] object-cover rounded-sm"
            />
            <div class="mt-4 space-y-1">
              <time class="text-sm text-gray-600">{item.date}</time>
              <h3 class="text-xl font-normal leading-tight">{item.title}</h3>
              <p class="text-sm text-gray-600">{item.description}</p>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</div>

<style>
  .group {
    cursor: none;
    position: relative;
  }

  :global(.custom-cursor) {
    position: fixed;
    pointer-events: none;
    opacity: 0;
    background: #FF4D00;
    color: white;
    padding: 6px 12px;
    border-radius: 4px;
    font-size: 14px;
    transform: translate(-50%, -50%);
    transition: opacity 0.15s ease;
    z-index: 9999;
    white-space: nowrap;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    display: flex;
    align-items: center;
    gap: 4px;
  }

  :global(.custom-cursor .material-symbols-outlined) {
    font-size: 18px;
    font-variation-settings:
      'FILL' 0,
      'wght' 400,
      'GRAD' 0,
      'opsz' 24;
  }

  img {
    transition: transform 0.6s ease-out;
  }

  .group:hover img {
    transform: scale(1.01);
    transition: transform 0.6s ease-out;
  }
</style>