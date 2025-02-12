<script lang="ts">
  import { onMount } from 'svelte';

  let customCursor: HTMLElement;
  let cursorText = "Drag";

  onMount(() => {
    customCursor = document.createElement('div');
    customCursor.className = 'custom-cursor';
    customCursor.innerHTML = `${cursorText} <span class="material-symbols-outlined">arrow_forward</span>`;
    document.body.appendChild(customCursor);

    return () => {
      if (customCursor && customCursor.parentNode) {
        customCursor.parentNode.removeChild(customCursor);
      }
    };
  });

  function handleMouseMove(e: MouseEvent) {
    if (customCursor) {
      customCursor.style.left = e.clientX + 'px';
      customCursor.style.top = e.clientY + 'px';
    }
  }

  function handleMouseEnter() {
    if (customCursor) {
      customCursor.style.opacity = '1';
    }
  }

  function handleMouseLeave() {
    if (customCursor) {
      customCursor.style.opacity = '0';
    }
  }

  const newsItems = [
    {
      category: 'Buildings',
      title: 'Edificio Latam',
      image: 'https://cloudfront-us-east-1.images.arcpublishing.com/infobae/OYDWL3CSPFFFPJZYW56PCM6LBE.jpg'
    },
    {
      category: 'Buildings',
      title: 'Edificio Alonso',
      image: 'https://ambientesdigital.com/wp-content/uploads/2023/06/R1A0137-.jpg'
    },
    {
      category: 'Buildings',
      title: 'Edificio Kaufman',
      image: 'https://www.kaufmann.cl/documents/68916/166093/head-nuestro-equipo.jpg/0c8e2e65-b191-5e8a-735b-7e6218fdb758?t=1597699010935'
    },
    {
      category: 'Buildings',
      title: 'Edificio Sheraton',
      image: 'https://images2.mega.cl/meganoticias/2024/07/25/anteproyecto-sheraton-santiago_453841_2_66a29fd6e1f2d.jpg'
    },
    {
      category: 'Buildings',
      title: 'Edificio Bodenor',
      image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEju6-MP0bnd5WqmYlF1HhF3p9KD4RFxe3MXv_0jI5dd-tJHl7uGVodDwKYE5ITSCBbHVM_gACjfbu4OZQt1dHeoIY1Yw-24oG5WW6ai_gEiZidwM9-mdOuDGAgzGxL-NrnS3ZklKlCiUvM/s1600/Vigas+Joist++Arquitectura+en+Acero++Vigas+Estructurales++Entrepisos+con+viguetas+met%25C3%25A1licas+steel+joist+%25283%2529.jpg'
    },
    {
      category: 'Buildings',
      title: 'Cine Hoyts La Reina',
      image: 'https://arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/IIJXQ7BEYNGMZNZPZ3PUK7FCUA.png'
    }
  ];

  let visibleCards = 2.25;
  let currentIndex = 0;
  let maxIndex = newsItems.length - Math.floor(visibleCards);

  function previousSlide() {
    if (currentIndex > 0) {
      currentIndex--;
    }
  }

  function nextSlide() {
    if (currentIndex < maxIndex) {
      currentIndex++;
    }
  }
</script>

<section class="w-full bg-white">
  <div class="max-w-[1400px] mx-auto py-16 px-8">
    <div class="flex justify-between items-center mb-8">
      <h2 class="text-4xl">News</h2>
      <div class="flex items-center gap-4">
        <div class="flex gap-2">
          <button
            class="w-10 h-10 flex items-center justify-center rounded border border-black hover:bg-black hover:text-white transition-colors"
            on:click={previousSlide}
            aria-label="Previous slide"
          >
            ←
          </button>
          <button
            class="w-10 h-10 flex items-center justify-center rounded border border-black hover:bg-black hover:text-white transition-colors"
            on:click={nextSlide}
            aria-label="Next slide"
          >
            →
          </button>
        </div>
        <a
          href="/news"
          class="flex items-center gap-2 hover:underline"
        >
          <span class="text-sm">View all</span>
          <span class="text-sm">↳</span>
        </a>
      </div>
    </div>

    <div class="relative w-full overflow-hidden"
      on:mousemove={handleMouseMove}
      on:mouseenter={handleMouseEnter}
      on:mouseleave={handleMouseLeave}>
      <div 
        class="flex gap-8 transition-transform duration-500 ease-in-out"
        style="transform: translateX(-{currentIndex * (100 / visibleCards)}%);"
      >
        {#each newsItems as item}
          <article class="flex-shrink-0 w-[calc(44.44%-1.5rem)] group cursor-pointer">
            <div class="relative aspect-[16/9] overflow-hidden mb-4">
              <img
                src={item.image}
                alt=""
                class="w-full h-full object-cover transition-transform duration-600 ease-out group-hover:scale-[1.01]"
              />
              <span class="absolute top-4 left-4 px-3 py-1 bg-white text-sm rounded z-10">
                {item.category}
              </span>
            </div>
            <time class="text-sm text-gray-600 block mb-2">
              {item.date}
            </time>
            <h3 class="text-xl font-normal leading-tight">
              {item.title}
            </h3>
          </article>
        {/each}
      </div>
    </div>
  </div>
</section>

<style>
  img {
    transition: transform 0.6s ease-out;
  }

  .group:hover img {
    transform: scale(1.01);
    transition: transform 0.6s ease-out;
  }

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
  }
</style>