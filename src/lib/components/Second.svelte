<script>
  import { onMount } from 'svelte';
  import { fly } from 'svelte/transition';

  const data = {
    "proyectos": {
      "edificio-alonso": {
        h1: "Edificio Habitacional/Oficina",
        h2: "Edificio Alonso",
        h3: "Santiago, Chile",
        h4: "Edificio Alonso - Proyecto de ingeniería estructural",
        media: [
          "https://pymecheck.s3.us-east-1.amazonaws.com/webpages/ac-ing/edificio-alonso.jpg",
        ]
      },
      "estoril-i": {
        h1: "Edificio Habitacional/Oficina",
        h2: "Estoril I",
        h3: "Santiago, Chile",
        h4: "Edificio Estoril I - Proyecto de ingeniería estructural",
        media: [
          "https://pymecheck.s3.us-east-1.amazonaws.com/webpages/ac-ing/estoril-I.jpg"
        ]
      },
      "estoril-ii": {
        h1: "Edificio Habitacional/Oficina",
        h2: "Estoril II",
        h3: "Santiago, Chile",
        h4: "Edificio Estoril II - Proyecto de ingeniería estructural",
        media: [
          "https://pymecheck.s3.us-east-1.amazonaws.com/webpages/ac-ing/estoril-II.jpg"
        ]
      },
      "kauffmann": {
        h1: "Edificio Industrial",
        h2: "Kauffmann",
        h3: "Santiago, Chile",
        h4: "Edificio Industrial Kauffmann - Proyecto de ingeniería estructural",
        media: [
          "https://pymecheck.s3.us-east-1.amazonaws.com/webpages/ac-ing/Kaufmann.jpg"
        ]
      },
      "lan": {
        h1: "Edificio Industrial",
        h2: "LAN",
        h3: "Santiago, Chile",
        h4: "Edificio Industrial LAN - Proyecto de ingeniería estructural",
        position: "left",
        media: [
          "https://pymecheck.s3.us-east-1.amazonaws.com/webpages/ac-ing/edificio_lan.jpg"
        ]
      },
      "gino": {
        h1: "Edificio Industrial",
        h2: "GINO",
        h3: "Santiago, Chile",
        h4: "Edificio Industrial GINO - Proyecto de ingeniería estructural",
        media: [
          "https://pymecheck.s3.us-east-1.amazonaws.com/webpages/ac-ing/Gino.JPG"
        ]
      },
      "salmofood": {
        h1: "Edificio Industrial",
        h2: "SALMOFOOD",
        h3: "Puerto Montt, Chile",
        h4: "Edificio Industrial SALMOFOOD - Proyecto de ingeniería estructural",
        media: [
          "https://pymecheck.s3.us-east-1.amazonaws.com/webpages/ac-ing/Salmofood.jpg"
        ]
      },
      "sandvik": {
        h1: "Edificio Industrial",
        h2: "SANDVIK",
        h3: "Santiago, Chile",
        h4: "Edificio Industrial SANDVIK - Proyecto de ingeniería estructural",
        media: [
          "https://pymecheck.s3.us-east-1.amazonaws.com/webpages/ac-ing/sandvik.jpg"
        ]
      },
      "cine-hoyts-la-reina": {
        h1: "Otros",
        h2: "Cine Hoyts La Reina",
        h3: "Santiago, Chile",
        h4: "Cine Hoyts La Reina - Proyecto de ingeniería estructural",
        media: [
          "https://pymecheck.s3.us-east-1.amazonaws.com/webpages/ac-ing/cine_hoyts.avif"
        ]
      },
      "vina-santa-rita": {
        h1: "Edificio Industrial",
        h2: "Viña Santa Rita",
        h3: "Santiago, Chile",
        h4: "Viña Santa Rita - Proyecto de ingeniería estructural",
        media: [
          "https://pymecheck.s3.us-east-1.amazonaws.com/webpages/ac-ing/santarita.jpg"
        ]
      },
      "sheraton": {
        h1: "Edificio Hotelero",
        h2: "Hotel Renaissance Santiago",
        h3: "Santiago, Chile",
        h4: "Hotel Renaissance Santiago - Proyecto de ingeniería estructural",
        media: [
          "https://pymecheck.s3.us-east-1.amazonaws.com/webpages/ac-ing/Sheraton-04-1-684x1030+(1).jpg"
        ]
      },
      "bodenor-flexcenter": {
        h1: "Edificio Industrial",
        h2: "Bodenor Flexcenter",
        h3: "Santiago, Chile",
        h4: "Bodenor Flexcenter - Proyecto de ingeniería estructural",
        media: [
          "https://pymecheck.s3.us-east-1.amazonaws.com/webpages/ac-ing/bodenor1.jpg"
        ]
      },
      "hotel-renaissance": {
        h1: "Edificio Hotelero",
        h2: "Hotel Renaissance Santiago",
        h3: "Santiago, Chile",
        h4: "Hotel Renaissance Santiago - Proyecto de ingeniería estructural",
        media: [
          "https://pymecheck.s3.us-east-1.amazonaws.com/webpages/ac-ing/Hotel+y+Oficina+Renaissance+2.jpg"
        ]
      },
      "alto-el-plomo": {
        h1: "Edificio Habitacional/Oficina",
        h2: "Alto El Plomo",
        h3: "Santiago, Chile",
        h4: "Alto El Plomo - Proyecto de ingeniería estructural",
        media: [
          "https://pymecheck.s3.us-east-1.amazonaws.com/webpages/ac-ing/Edificio+El+Plomo+-+V7.jpg"
        ]
      },
      "estadio-la-calera": {
        h1: "Otros",
        h2: "Estadio La Calera",
        h3: "La Calera, Chile",
        h4: "Estadio La Calera - Proyecto de ingeniería estructural",
        media: [
          "https://pymecheck.s3.us-east-1.amazonaws.com/webpages/ac-ing/Estadio+La+Calera.jpg"
        ]
      },
      "roberto-simpson": {
        h1: "Edificio Habitacional/Oficina",
        h2: "Roberto Simpson",
        h3: "Santiago, Chile",
        h4: "Roberto Simpson - Proyecto de ingeniería estructural",
        media: [
          "https://pymecheck.s3.us-east-1.amazonaws.com/webpages/ac-ing/Roberto+Simpson.jpg"
        ]
      }
    }
  };

  // Convertir el objeto proyectos a un array para mantener compatibilidad con el #each
  const allProyectos = Object.entries(data.proyectos).map(([slug, proyecto]) => ({
    slug,
    ...proyecto
  }));

  // Inicialmente mostrar solo los primeros 4 proyectos en desktop, todos en móvil
  let displayedProjects = allProyectos;
  let isLoading = false;
  let allProjectsLoaded = false;
  
  // Función para cargar más proyectos (solo para desktop)
  function loadMoreProjects() {
    if (isLoading || allProjectsLoaded || window.innerWidth < 768) return;
    
    isLoading = true;
    
    // Simular una carga con un pequeño retraso
    setTimeout(() => {
      const currentLength = displayedProjects.length;
      const nextBatch = allProyectos.slice(currentLength, currentLength + 4);
      
      if (nextBatch.length > 0) {
        displayedProjects = [...displayedProjects, ...nextBatch];
      }
      
      allProjectsLoaded = displayedProjects.length >= allProyectos.length;
      isLoading = false;
    }, 800);
  }
  
  // Configurar el observador de intersección para carga infinita
  let loadMoreTrigger;
  let observer;
  
  onMount(() => {
    if (typeof IntersectionObserver !== 'undefined') {
      observer = new IntersectionObserver((entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !isLoading && !allProjectsLoaded) {
          loadMoreProjects();
        }
      }, {
        rootMargin: '200px'
      });
      
      if (loadMoreTrigger) {
        observer.observe(loadMoreTrigger);
      }
    }
    
    return () => {
      if (observer && loadMoreTrigger) {
        observer.unobserve(loadMoreTrigger);
      }
    };
  });

  // Estado para controlar el carrusel en móvil
  let currentIndex = 0;
  let totalSlides = displayedProjects.length;

  // Variables para el manejo de swipe
  let startX = 0;
  let currentX = 0;
  let isDragging = false;
  let dragOffset = 0;
  let slideWidth = 0;
  let carouselElement;
  
  // Umbral para considerar un swipe (en porcentaje del ancho)
  const swipeThreshold = 0.15;

  // Función para navegar al slide anterior
  function prevSlide() {
    if (currentIndex > 0) {
      currentIndex--;
      dragOffset = 0;
    }
  }

  // Función para navegar al siguiente slide
  function nextSlide() {
    if (currentIndex < displayedProjects.length - 1) {
      currentIndex++;
      dragOffset = 0;
    }
  }
  
  // Manejadores de eventos para swipe
  function handleTouchStart(event) {
    startX = event.touches[0].clientX;
    isDragging = true;
    dragOffset = 0;
    
    // Obtener el ancho del slide para cálculos
    if (carouselElement) {
      slideWidth = carouselElement.offsetWidth;
    }
  }
  
  function handleTouchMove(event) {
    if (!isDragging) return;
    
    currentX = event.touches[0].clientX;
    dragOffset = currentX - startX;
    
    // Limitar el arrastre en los extremos
    if ((currentIndex === 0 && dragOffset > 0) || 
        (currentIndex === displayedProjects.length - 1 && dragOffset < 0)) {
      dragOffset = dragOffset / 3; // Resistencia en los extremos
    }
    
    // Prevenir scroll vertical mientras se arrastra horizontalmente
    if (Math.abs(dragOffset) > 10) {
      event.preventDefault();
    }
  }
  
  function handleTouchEnd() {
    if (!isDragging) return;
    
    // Calcular si el swipe fue suficiente para cambiar de slide
    const swipePercentage = Math.abs(dragOffset) / slideWidth;
    
    if (swipePercentage > swipeThreshold) {
      if (dragOffset > 0 && currentIndex > 0) {
        prevSlide();
      } else if (dragOffset < 0 && currentIndex < displayedProjects.length - 1) {
        nextSlide();
      }
    }
    
    // Resetear estado
    isDragging = false;
    dragOffset = 0;
  }
  
  // Calcular la transformación con el offset de arrastre
  $: transformValue = `translateX(calc(-${currentIndex * 100}% + ${dragOffset}px))`;
  
  // Actualizar totalSlides cuando cambia displayedProjects
  $: totalSlides = displayedProjects.length;

  // Configuración de la animación
  const animationDuration = 400;
  function getAnimationDelay(index) {
    return index * 150; // Retraso escalonado entre elementos
  }
</script>

<svelte:head>
    <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap" rel="stylesheet"/>
</svelte:head>

<section id="proyectos" data-theme="black" class="py-8 md:py-[63px] box-border block font-['Lato'] antialiased relative z-10">
  <div class="mx-4 sm:mx-6 md:mx-[60px] box-border">
    <!-- Título de la sección -->
    
    <!-- Vista de escritorio - Grid -->
    <div class="hidden md:grid gap-x-[30px] gap-y-[50px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mr-0 w-full relative transition-[0.3s_ease-out] box-border">
      {#each displayedProjects as item, index}
        <article 
          in:fly={{ y: 50, duration: animationDuration, delay: getAnimationDelay(index) }}
          data-theme="black" 
          data-card-title={item.h2}
          data-card-type={item.h1.toLowerCase()} 
          class="relative box-border block {index > 0 && index % 4 !== 0 ? 'border-l border-gray-700' : ''} pl-[15px] first:pl-0"
          on:click|preventDefault|stopPropagation={() => {}}
        >
          <!-- Imagen del proyecto -->
          <div class="mb-6 box-border" on:click|preventDefault|stopPropagation={() => {}}>
            <a 
              href="/proyectos/{item.slug}" 
              aria-label="Proyecto image link to {item.h2}" 
              data-orientation="landscape" 
              class="relative h-[180px] sm:h-[200px] md:h-[230.625px] block overflow-hidden box-border bg-transparent no-underline"
              on:click|preventDefault|stopPropagation={() => {}}
            >
              <picture class="inset-0 m-auto overflow-hidden absolute block h-full w-full box-border" on:click|preventDefault|stopPropagation={() => {}}>
                {#if item.media[0].endsWith('.mp4')}
                  <video 
                    src={item.media[0]}
                    title={item.h4}
                    class="h-full object-cover w-full block transition-transform duration-1000 transform-origin-center box-border border-0"
                    autoplay 
                    muted 
                    loop 
                    playsinline 
                    preload="auto"
                    on:click|preventDefault|stopPropagation={() => {}}
                  ></video>
                {:else}
                  <source media="(max-width: 767px)" srcset={item.media[0]}>
                  <source media="(min-width: 768px) and (max-width: 1279px)" srcset={item.media[1] || item.media[0]}>
                  <source media="(min-width: 1280px)" srcset={item.media[2] || item.media[0]}>
                  <img 
                    src={item.media[0]} 
                    alt={item.h4} 
                    class="h-full object-cover w-full block transition-transform duration-1000 transform-origin-center box-border border-0 {item.position === 'left' ? 'object-left' : ''}"
                    on:click|preventDefault|stopPropagation={() => {}}
                  >
                {/if}
              </picture>
            </a>
          </div>
          
          <!-- Contenido del proyecto -->
          <div class="relative box-border" on:click|preventDefault|stopPropagation={() => {}}>
            <span class="text-white block font-bold text-sm leading-[17px] mb-3 capitalize box-border" on:click|preventDefault|stopPropagation={() => {}}>
              {item.h1}
            </span>
            <h3 class="text-lg leading-[22px] text-white font-normal mb-2 box-border" on:click|preventDefault|stopPropagation={() => {}}>
              <a 
                href="/proyectos/{item.slug}" 
                title={item.h2} 
                class="text-white box-border bg-transparent no-underline hover:underline"
                on:click|preventDefault|stopPropagation={() => {}}
              >
                {item.h2}
              </a>
            </h3>
            <p class="flex text-gray-500 text-sm font-normal leading-[17px] m-0 box-border" on:click|preventDefault|stopPropagation={() => {}}>
              <span class="box-border" on:click|preventDefault|stopPropagation={() => {}}>
                {item.h3}
              </span>
            </p>
          </div>
        </article>
      {/each}
    </div>
    
    <!-- Vista móvil - Carrusel con soporte para swipe -->
    <div 
      class="md:hidden w-full relative overflow-hidden touch-pan-y"
      bind:this={carouselElement}
      on:touchstart={handleTouchStart}
      on:touchmove={handleTouchMove}
      on:touchend={handleTouchEnd}
      on:touchcancel={handleTouchEnd}
      on:click|preventDefault|stopPropagation={() => {}}
    >
      <div 
        class="flex transition-transform duration-300 ease-out" 
        style="transform: {transformValue}; {isDragging ? 'transition: none;' : ''}"
        on:click|preventDefault|stopPropagation={() => {}}
      >
        {#each displayedProjects as item, index}
          <article 
            in:fly={{ y: 50, duration: animationDuration, delay: getAnimationDelay(index) }}
            data-theme="black" 
            data-card-title={item.h2}
            data-card-type={item.h1.toLowerCase()} 
            class="w-full flex-shrink-0 relative box-border block"
            on:click|preventDefault|stopPropagation={() => {}}
          >
            <!-- Contenido del artículo -->
            <div class="mb-6 box-border">
              <a 
                href="/proyectos/{item.slug}" 
                aria-label="Proyecto image link to {item.h2}" 
                data-orientation="landscape" 
                class="relative h-[200px] block overflow-hidden box-border bg-transparent no-underline"
              >
                <picture class="inset-0 m-auto overflow-hidden absolute block h-full w-full box-border">
                  {#if item.media[0].endsWith('.mp4')}
                    <video 
                      src={item.media[0]}
                      title={item.h4}
                      class="h-full object-cover w-full block transition-transform duration-1000 transform-origin-center box-border border-0"
                      autoplay 
                      muted 
                      loop 
                      playsinline 
                      preload="auto"
                    ></video>
                  {:else}
                    <source media="(max-width: 767px)" srcset={item.media[0]}>
                    <img 
                      src={item.media[0]} 
                      alt={item.h4} 
                      class="h-full object-cover w-full block transition-transform duration-1000 transform-origin-center box-border border-0 {item.position === 'left' ? 'object-left' : ''}"
                    >
                  {/if}
                </picture>
              </a>
            </div>
            
            <!-- Contenido del proyecto -->
            <div class="relative box-border">
              <span class="text-white block font-bold text-sm leading-[17px] mb-3 capitalize box-border">
                {item.h1}
              </span>
              <h3 class="text-lg leading-[22px] text-white font-normal mb-2 box-border">
                <a 
                  href="/proyectos/{item.slug}" 
                  title={item.h2} 
                  class="text-white box-border bg-transparent no-underline hover:underline"
                >
                  {item.h2}
                </a>
              </h3>
              <p class="flex text-gray-500 text-sm font-normal leading-[17px] m-0 box-border">
                <span class="box-border">
                  {item.h3}
                </span>
              </p>
            </div>
          </article>
        {/each}
      </div>
      
      <!-- Indicador de posición actual/total -->
      <div class="absolute bottom-3 right-3 bg-black/50 px-3 py-1 rounded-full text-white text-sm">
        {currentIndex + 1}/{displayedProjects.length}
      </div>
      
      <!-- Indicadores de paginación -->
      <div class="flex justify-center mt-6 mb-4">
        {#each Array(totalSlides) as _, i}
          <button 
            class="w-3 h-3 mx-2 rounded-full {i === currentIndex ? 'bg-white' : 'bg-white/30'} transition-all duration-300"
            on:click={() => currentIndex = i}
            aria-label="Go to slide {i + 1}"
          ></button>
        {/each}
      </div>
    </div>
    
    <!-- Botón "Cargar más proyectos" o indicador de carga (solo visible en desktop) -->
    <div class="hidden md:block text-center mt-10">
      {#if !allProjectsLoaded}
        <button 
          on:click={loadMoreProjects}
          class="inline-block px-8 py-3 border border-white text-white hover:bg-white hover:text-black transition-colors {isLoading ? 'opacity-70 cursor-wait' : ''}"
          disabled={isLoading}
        >
          {isLoading ? 'Cargando...' : 'Cargar más proyectos'}
        </button>
      {:else}
        <p class="text-white opacity-70">Has visto todos los proyectos disponibles</p>
      {/if}
    </div>
    
    <!-- Elemento invisible para detectar cuando el usuario llega al final y cargar más (solo desktop) -->
    <div 
      bind:this={loadMoreTrigger} 
      class="hidden md:block h-10 w-full mt-10 opacity-0"
      aria-hidden="true"
    ></div>
  </div>
</section>