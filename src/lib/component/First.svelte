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
  
  const autoSlide = () => {
    interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % images.length;
    }, 5000);
  };
  
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
    currentIndex = index;
    if (interval) clearInterval(interval);
    autoSlide();
  }
</script>

<svelte:head>
  <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Dancing+Script:wght@400;700&display=swap" rel="stylesheet">
</svelte:head>

<div class="relative h-screen w-full overflow-hidden">
  <div class="absolute inset-0">
    <div class="absolute inset-0 bg-black/50 z-10"></div>
    <div class="h-full">
      <img 
        src={images[currentIndex]} 
        alt="Background" 
        class="w-full h-full object-cover"
      />
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
      <div class="max-w-4xl animate-slide-up relative">
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
    from {
      opacity: 0;
      transform: translateY(50px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
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
    transition: all 0.2s ease;
    --highlight-progress: 0;
    color: white;
  }

  .highlight-word::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: calc(100% * var(--highlight-progress));
    height: 2px;
    background: #FF4400;
    transition: width 0.2s ease;
    transform-origin: left;
  }

  .highlight-word {
    text-shadow: 0 0 calc(15px * var(--highlight-progress)) rgba(255, 68, 0, calc(0.3 * var(--highlight-progress)));
  }
</style> 