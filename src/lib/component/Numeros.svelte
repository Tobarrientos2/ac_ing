<script>
  import { onMount } from 'svelte';

  const stats = [
    { number: 50, suffix: '+', label: 'SUCCESFUL PROJECTS' },
    { number: 5, suffix: '+', label: 'YEARS OF EXPERIENCE' },
    { number: 110, suffix: '+', label: 'ENGINEERING EXPERTS' },
    { number: 20, suffix: '+', label: 'AWARDS' },
    { number: 60, suffix: '+', label: 'CUSTOMERS' }
  ];

  let counters = stats.map(() => 0);
  
  function animateValue(index, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      counters[index] = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }

  onMount(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          stats.forEach((stat, index) => {
            animateValue(index, 0, stat.number, 2000);
          });
          observer.disconnect();
        }
      });
    }, { threshold: 0.1 });

    const element = document.querySelector('.numbers-grid');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  });
</script>

<section class="bg-black text-white py-20">
  <div class="container mx-auto px-4">
    <!-- Título -->
    <div class="mb-16">
      <h2 class="text-lg font-medium tracking-wide">
        NUMBERS
      </h2>
    </div>

    <!-- Grid de números -->
    <div class="numbers-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
      {#each stats as stat, i}
        <div class="flex flex-col space-y-4">
          <div class="text-6xl md:text-7xl lg:text-8xl font-light">
            {counters[i]}{stat.suffix}
          </div>
          <div class="text-sm tracking-wider">
            {stat.label}
          </div>
          <!-- Línea decorativa -->
          <div class="w-full h-[1px] bg-white/20 mt-4"></div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  /* Asegura que los números tengan la misma anchura */
  .numbers-grid {
    font-variant-numeric: tabular-nums;
  }

  /* Animación suave para los números */
  .numbers-grid div {
    transition: all 0.3s ease-out;
  }
</style> 