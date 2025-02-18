<script>
  const images = [
      "https://sheraton-santiago-hotel-convention-center.santiagochilehotels.org/data/Photos/OriginalPhoto/14076/1407672/1407672122/santiago-sheraton-hotel-convention-center-photo-1.JPEG",
      "https://clicknconnect.net/servicios/wp-content/uploads/2023/05/bodenor_flexcenter-1.jpg ",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/553916387.jpg?k=3a01ab04a3d5ec9734ea45768bfdbc84ecdea80ec80a46c84e43269004d21b7f&o=&hp=1",
      "https://assetcbre.cl/wp-content/uploads/2022/09/AltoelPlomo_2.jpg ",
      "https://bernarditac.sg-host.com/wp-content/uploads/2021/02/01.jpg "
  ];

  let currentIndex = 0;

  import { onMount, onDestroy } from 'svelte';
  
  let interval;
  
  // Añadimos una variable para controlar la animación
  let isTransitioning = false;
  
  // Modificamos la función autoSlide para incluir la animación
  const autoSlide = () => {
    interval = setInterval(() => {
      triggerTransition();
    }, 5000);
  };

  const triggerTransition = () => {
    isTransitioning = true;
    setTimeout(() => {
      currentIndex = (currentIndex + 1) % images.length;
      setTimeout(() => {
        isTransitioning = false;
      }, 100);
    }, 500);
  };

  // Array de clip-paths para transformar los rectángulos en formas poligonales creativas
  const shapes = [
    'polygon(0% 0%, 100% 0%, 85% 100%, 0% 100%)',
    'polygon(15% 0%, 100% 0%, 100% 100%, 70% 100%)',
    'polygon(30% 0%, 100% 0%, 100% 100%, 55% 100%)',
    'polygon(45% 0%, 100% 0%, 100% 100%, 40% 100%)',
    'polygon(60% 0%, 100% 0%, 100% 100%, 25% 100%)',
    'polygon(75% 0%, 100% 0%, 100% 100%, 10% 100%)'
  ];
  
  onMount(() => {
    autoSlide();
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          updateWordProgress(entry.target);
        }
      });
    }, {
      threshold: Array.from({ length: 101 }, (_, i) => i / 100),
      rootMargin: '20% 0px -20% 0px'
    });
    
    let words = document.querySelectorAll('.highlight-word');
    words.forEach((word, index) => {
      word.dataset.index = index;
      observer.observe(word);
    });
    
    function updateWordProgress(word) {
      const rect = word.getBoundingClientRect();
      const index = parseInt(word.dataset.index);
      const windowHeight = window.innerHeight;
      
      const startOffset = windowHeight * (0.3 + index * 0.05);
      const endOffset = startOffset - windowHeight * 0.01;
      
      const currentPosition = windowHeight - rect.top;
      const progress = Math.min(1, Math.max(0, 
        (currentPosition - endOffset) / (startOffset - endOffset)
      ));
      
      word.style.setProperty('--highlight-progress', progress);
    }
    
    window.addEventListener('scroll', () => {
      words.forEach(word => {
        if (word.getBoundingClientRect().top < window.innerHeight) {
          updateWordProgress(word);
        }
      });
    });
  });
  
  onDestroy(() => {
    if (interval) clearInterval(interval);
  });
  
  function goToSlide(index) {
    if (index === currentIndex) return;
    if (interval) clearInterval(interval);
    triggerTransition();
    setTimeout(() => {
      currentIndex = index;
      autoSlide();
    }, 500);
  }
</script>

<svelte:head>
  <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Dancing+Script:wght@400;700&display=swap" rel="stylesheet">
</svelte:head>

<div class="relative h-screen w-full overflow-hidden">
  <div class="absolute inset-0">
    <div class="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/20 z-10"></div>
    
    <!-- Contenedor de la imagen y divisiones geométricas en 6 piezas -->
    <div class="h-full relative">
      <img 
        src={images[currentIndex]} 
        alt="Background" 
        class="w-full h-full object-cover transition-transform duration-700"
        class:scale-110={isTransitioning}
      />
      
      <!-- Seis divs geométricos superpuestos para dividir la imagen -->
      <div class="absolute inset-0 flex pointer-events-none z-15">
        {#each shapes as shape, i}
          <div 
            class="geometric-block flex-1 transition-all duration-700" 
            style="clip-path: {shape}; 
                   transition-delay: {i * 50}ms;"
            class:translate-y-full={isTransitioning}
          ></div>
        {/each}
      </div>
    </div>
    
    <!-- Indicadores -->
    <div class="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
      {#each images as _, i}
        <button 
          class="w-2 h-2 rounded-full transition-colors {i === currentIndex ? 'bg-white' : 'bg-white/50'}"
          on:click={() => goToSlide(i)}
        />
      {/each}
    </div>
  </div>

  <!-- Contenido -->
  <div class="relative h-full flex flex-col justify-center z-20">
    <div class="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1200px]">
      <div class="max-w-4xl animate-slide-up relative perspective">
        <p class="hero-text text-white text-[2rem] md:text-[3.5rem] leading-[1.2] tracking-[-0.02em] font-extralight">
          Con un enfoque constante en la 
          <span class="text-white font-normal highlight-word">innovación</span>, 
          <span class="text-white font-normal highlight-word">economía</span> y 
          <span class="text-white font-normal highlight-word">seguridad estructural</span>, 
          nos destacamos por la capacidad de ofrecer 
          <span class="text-white font-normal highlight-word">diseños eficientes</span> y de 
          <span class="text-white font-normal highlight-word">alta calidad</span>.
        </p>
      </div>
    </div>
  </div>
</div>

<style>
  @keyframes slideUp {
    0% {
      opacity: 0;
      transform: translateY(50px) rotateX(-10deg);
    }
    100% {
      opacity: 1;
      transform: translateY(0) rotateX(0);
    }
  }

  .animate-slide-up {
    animation: slideUp 1.5s cubic-bezier(0.23, 1, 0.32, 1) forwards;
    animation-delay: 0.3s;
    opacity: 0;
  }

  .hero-text {
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
    font-feature-settings: "salt" 1, "ss01" 1;
    position: relative;
  }

  .highlight-word {
    position: relative;
    display: inline-block;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    --highlight-progress: 0;
    color: white;
    transform-style: preserve-3d;
  }

  .highlight-word::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: calc(100% * var(--highlight-progress));
    height: 2px;
    background: #FF4400;
    transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    transform-origin: left;
    box-shadow: 0 0 20px rgba(255, 68, 0, 0.6);
  }

  .highlight-word:hover {
    transform: translateZ(20px);
    text-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }

  /* Estilos para bloques geométricos */
  .geometric-block {
    background-color: rgba(255, 255, 255, 0.1);
    border-right: 1px solid rgba(255, 255, 255, 0.3);
    transform: translateY(0);
    opacity: 0.8;
    backdrop-filter: blur(8px);
  }

  .geometric-block:hover {
    background-color: rgba(255, 255, 255, 0.15);
    transform: translateY(-5px);
  }

  .perspective {
    perspective: 1000px;
  }

  @keyframes scaleImage {
    0% { transform: scale(1); }
    50% { transform: scale(1.1); }
    100% { transform: scale(1); }
  }

  img {
    will-change: transform;
  }

  .scale-110 {
    animation: scaleImage 1.4s cubic-bezier(0.4, 0, 0.2, 1);
  }
</style> 