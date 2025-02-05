<script>
  import { onMount } from 'svelte';
  import { activeTheme } from '../config/themes';
  import Pattern from './Pattern.svelte';

  export let projects = [
    {
      title: "Projects that inspire generations",
      projectTitle: "The shapes",
      year: "2023",
      description: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque ut neque. Sed augue ipsum, egestas nec, vestibulum et, malesuada adipiscing, dui. Vivamus euismod mauris.",
      imageUrl: "https://ambientesdigital.com/wp-content/uploads/2023/06/R1A0137-.jpg"
    },
    {
      projectTitle: "The curves",
      year: "2024",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
      imageUrl: "https://ambientesdigital.com/wp-content/uploads/2023/06/R1A0137-.jpg"
    }
  ];

  onMount(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target.dataset.type === 'divider') {
            entry.target.classList.add('scale-x-100');
          } else if (entry.target.dataset.type === 'section') {
            entry.target.classList.add('opacity-100', 'translate-y-0');
          }
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('[data-type="divider"]').forEach((el) => observer.observe(el));
    document.querySelectorAll('[data-type="section"]').forEach((el) => observer.observe(el));

    return () => {
      // Limpieza del observer
    };
  });
</script>

<section class="min-h-screen pt-20 relative" style="background-color: {$activeTheme.colors.background}">
  <!-- Se utiliza el componente de patrón separada -->
  <Pattern />

  <div class="content-wrapper">
    {#each projects as project, i}
      {#if i === 0}
        <div class="text-center mb-20">
          <h1 class="text-6xl font-light mb-6 max-w-4xl mx-auto leading-tight {$activeTheme.colors.text.primary}">
            {project.title}
          </h1>
          <div class="h-[2px] max-w-[200px] mx-auto" 
               style="background: linear-gradient(to right, {$activeTheme.colors.background}, {$activeTheme.colors.primary}, {$activeTheme.colors.background})">
          </div>
        </div>
      {/if}

      {#if i > 0}
        <div data-type="divider" class="h-[1px] w-full my-20 origin-left scale-x-0 transition-transform duration-1000 ease-in-out {$activeTheme.colors.border.secondary}"></div>
      {/if}

      <div data-type="section" class="p-8 flex flex-col justify-center opacity-0 translate-y-5 transition-opacity transition-transform duration-800 ease-out">
        <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div class="aspect-[4/3] overflow-hidden {$activeTheme.colors.border.secondary}">
            <img
              src={project.imageUrl}
              alt="Architectural space"
              class="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>

          <div class="space-y-6">
            <div class="flex items-center gap-4">
              <h2 class="text-2xl font-light {$activeTheme.colors.text.accent}">{project.projectTitle}</h2>
              <span class="{$activeTheme.colors.text.secondary}">{project.year}</span>
            </div>
            
            <p class="{$activeTheme.colors.text.secondary} leading-relaxed">
              {project.description}
            </p>

            <button class="border {$activeTheme.colors.border.primary} px-6 py-2 rounded-full hover:bg-[{$activeTheme.colors.primary}] hover:text-white hover:border-transparent transition-all duration-300">
              read more
            </button>
          </div>
        </div>
      </div>
    {/each}
  </div>
</section>

<style>
  @keyframes lavaFlow {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  .lava-line {
    background-size: 400% 400%;
    animation: lavaFlow 8s ease infinite;
  }

  .project-divider {
    transform: scaleX(0);
    transition: transform 1s ease-in-out;
  }

  .project-divider.show {
    transform: scaleX(1);
  }

  .project-section {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.8s ease-out, transform 0.8s ease-out;
  }

  .project-section.show {
    opacity: 1;
    transform: translateY(0);
  }

  :global(.show) {
    opacity: 1 !important;
    transform: none !important;
  }
</style> 