<script>
  const data = {
    "slides": {
      "hotel-sheraton": {
        tp1: "Hotel Sheraton",
        media: [
          "https://pymecheck.s3.us-east-1.amazonaws.com/webpages/ac-ing/Sheraton-10b2-1030x525.jpg"
        ]
      },
      "bodenor-flexcenter": {
        tp1: "Bodenor Flexcenter",
        media: [
          "https://pymecheck.s3.us-east-1.amazonaws.com/webpages/ac-ing/bodenor1.jpg"
        ]
      },
      "hotel-renaissance": {
        tp1: "Hotel Renaissance Santiago",
        media: [
          "https://pymecheck.s3.us-east-1.amazonaws.com/webpages/ac-ing/Hotel+Renaissance.jpg"
        ]
      },
      "alto-el-plomo": {
        tp1: "ALTO EL PLOMO",
        media: [
          "https://pymecheck.s3.us-east-1.amazonaws.com/webpages/ac-ing/Edificio+El+Plomo+-+V7.jpg"
        ]
      },
      "estadio-la-calera": {
        tp1: "ESTADIO LA CALERA",
        media: [
          "https://pymecheck.s3.us-east-1.amazonaws.com/webpages/ac-ing/Estadio+La+Calera.jpg"
        ]
      },
      "roberto-simpson": {
        tp1: "EDIFICIO ROBERTO SIMPSON",
        media: [
          "https://pymecheck.s3.us-east-1.amazonaws.com/webpages/ac-ing/Roberto+Simpson.jpg"
        ]
      }
    },
    "tg1": "Con un enfoque en la innovación, economía y seguridad estructural, nos destacamos en diseños eficientes y de alta calidad"
  };

  const slides = Object.entries(data.slides).map(([slug, slideData]) => ({
    slug,
    ...slideData,
    tg1: data.tg1
  }));

  let currentIndex = 0;
  let isPlaying = true;
  let interval;
  let scrollY = 0;
  let opacity = 0;
  let headerElement;
  
  const nextSlide = () => {
      currentIndex = (currentIndex + 1) % slides.length;
  };

  const previousSlide = () => {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  };

  const goToSlide = (index) => {
      currentIndex = index;
      if (isPlaying) {
          clearInterval(interval);
          startAutoplay();
      }
  };

  const togglePlay = () => {
      isPlaying = !isPlaying;
      if (isPlaying) {
          startAutoplay();
      } else {
          clearInterval(interval);
      }
  };

  const startAutoplay = () => {
      clearInterval(interval);
      interval = setInterval(nextSlide, 5000);
  };

  // Iniciamos el autoplay inmediatamente si isPlaying es true
  if (typeof window !== 'undefined' && isPlaying) {
      startAutoplay();
  }
  
  // Reactividad para el scroll
  $: {
      if (typeof window !== 'undefined') {
          const startFade = 0;
          const endFade = window.innerHeight * 0.7;
          const scrollRange = endFade - startFade;
          
          if (scrollY <= startFade) {
              opacity = 0;
          } else if (scrollY >= endFade) {
              opacity = 1.0;
          } else {
              const progress = (scrollY - startFade) / scrollRange;
              const easedProgress = Math.pow(progress, 0.7);
              opacity = 1.0 * easedProgress;
          }
      }
  }
</script>

<svelte:head>
  <link href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700&display=swap" rel="stylesheet"/>
</svelte:head>

<svelte:window bind:scrollY />

<header 
  class="relative h-screen w-screen overflow-hidden text-white font-lato antialiased" 
  aria-live="polite"
  bind:this={headerElement}
>
  <p class="mx-4 md:mx-15 sticky top-32 text-xl md:text-2xl leading-[29px] z-10"></p>
  
  <div class="h-full fixed top-0 left-0 w-full overflow-hidden box-border">
      <div class="h-1/2 absolute top-0 left-0 w-full bg-gradient-to-t from-transparent to-[rgba(10,10,10,0.45)] pointer-events-none z-10"></div>
      
      <div class="h-full absolute top-0 left-0 w-full">
          <!-- Video Slides -->
          {#each slides as slide, index}
          <div class="h-full w-full fixed top-0 right-0 overflow-hidden cursor-grab transition-transform duration-500 ease-in-out {index !== currentIndex ? 'translate-x-full' : 'translate-x-0'}">
              <div class="h-full w-full {index !== currentIndex ? 'scale-120' : 'scale-100'} transition-transform duration-500 backface-hidden">
                  <div class="h-full w-full relative pointer-events-none">
                      {#if slide.media[0].endsWith('.mp4')}
                          <video 
                              src={slide.media[0]}
                              title={slide.tp1}
                              class="object-cover h-full w-full z-10 inline-block"
                              autoplay 
                              muted 
                              loop 
                              playsinline 
                              preload="auto" 
                              tabindex="0"
                          ></video>
                      {:else}
                          <img 
                              src={slide.media[0]}
                              alt={slide.tp1}
                              class="object-cover h-full w-full z-10 inline-block"
                          />
                      {/if}
                  </div>
              </div>
          </div>
          {/each}
      </div>
      
      <!-- Gradiente lateral de izquierda a derecha -->
      <div class="h-full absolute top-0 left-0 w-full bg-gradient-to-r from-[rgba(0,0,0,0.7)] to-transparent pointer-events-none z-15"></div>
      
      <!-- Content Overlay -->
      <div class="absolute bottom-10 md:bottom-20 left-3 md:left-10 w-full md:w-[713.75px] z-20">
          {#each slides as slide, index}
          <div inert={index !== currentIndex} class="absolute bottom-0 left-0 transition-opacity duration-500 {index === currentIndex ? 'opacity-100' : 'opacity-0'}">
              <div class="text-white">
                  <h2 class="text-2xl md:text-4xl leading-tight md:leading-[52px] font-lato font-light m-0 w-[60%] md:w-full break-words">
                      <div class="overflow-hidden">
                          <span class="inline-block whitespace-normal">{slide.tg1}</span>
                      </div>
                  </h2>
              </div>
          </div>
          {/each}
      </div>
      
      <!-- Navigation Dots -->
      <ul class="absolute bottom-3 md:bottom-10 left-3 md:left-10 flex items-center list-none m-0 p-0 z-20">
          {#each slides as _, index}
          <li class="mr-6">
              <button 
                  type="button" 
                  on:click={() => goToSlide(index)}
                  class="w-2 h-2 bg-white rounded-full {index === currentIndex ? 'opacity-100' : 'opacity-40'} border border-white transition-opacity duration-300 cursor-pointer"
              ></button>
          </li>
          {/each}
      </ul>
      
      <!-- Bottom Gradient -->
      <div class="h-2/3 absolute bottom-0 left-0 w-full bg-gradient-to-b from-transparent to-[rgba(10,10,10,0.45)] pointer-events-none z-10"></div>
      
      <!-- Overlay for scroll darkening -->
      <div 
          class="absolute inset-0 bg-black pointer-events-none z-40 transition-opacity duration-500 ease-out will-change-[opacity]"
          style="opacity: {opacity}"
      ></div>
  </div>
</header>

<style>
:global(.font-lato) {
  font-family: 'Lato', sans-serif;
}

:global(.font-light) {
  font-weight: 300;
}

:global(.font-normal) {
  font-weight: 400;
}

:global(.break-words) {
  word-wrap: break-word;
  overflow-wrap: break-word;
  word-break: keep-all;
  hyphens: none;
}

/* Clase para escalar elementos */
:global(.scale-120) {
  transform: scale(1.2);
}

/* Clase para evitar el parpadeo durante transformaciones */
:global(.backface-hidden) {
  backface-visibility: hidden;
}
</style>