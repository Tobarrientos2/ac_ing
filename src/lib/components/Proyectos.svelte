<script>
  import { onMount } from 'svelte';

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
          entry.target.classList.add('show');
        }
      });
    }, {
      threshold: 0.1
    });

    document.querySelectorAll('.project-divider').forEach((el) => observer.observe(el));
    document.querySelectorAll('.project-section').forEach((el) => observer.observe(el));
  });
</script>

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

  /* Asegurarse de que las animaciones funcionen correctamente */
  :global(.show) {
    opacity: 1 !important;
    transform: none !important;
  }
</style>

<!-- Actualización del fondo principal a gris oscuro en lugar de negro -->
<section class="bg-zinc-900 text-white min-h-screen pt-20">
  {#each projects as project, i}
    {#if i === 0}
      <div class="text-center mb-20">
        <h1 class="text-6xl font-light mb-6 max-w-4xl mx-auto leading-tight">
          {project.title}
        </h1>
        <!-- Línea decorativa actualizada con gradiente gris claro -->
        <div class="h-[2px] max-w-[200px] mx-auto lava-line bg-gradient-to-r from-zinc-900 via-white to-zinc-900"></div>
      </div>
    {/if}

    <!-- Separador actualizado a gris claro -->
    {#if i > 0}
      <div class="project-divider h-[1px] w-full bg-zinc-300/20 my-20 origin-left"></div>
    {/if}

    <!-- Proyecto -->
    <div class="project-section p-8 flex flex-col justify-center">
      <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <!-- Imagen con borde actualizado -->
        <div class="aspect-[4/3] overflow-hidden border border-zinc-300/10">
          <img
            src={project.imageUrl}
            alt="Architectural space"
            class="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
          />
        </div>

        <!-- Contenido -->
        <div class="space-y-6">
          <div class="flex items-center gap-4">
            <h2 class="text-2xl font-light text-[#F98030]">{project.projectTitle}</h2>
            <!-- Año actualizado a gris claro -->
            <span class="text-zinc-300">{project.year}</span>
          </div>
          
          <!-- Texto descriptivo actualizado a gris más claro -->
          <p class="text-zinc-200 leading-relaxed">
            {project.description}
          </p>

          <!-- Botón actualizado con hover en gris claro -->
          <button class="border border-zinc-300 px-6 py-2 rounded-full hover:bg-zinc-100 hover:text-zinc-900 hover:border-transparent transition-all duration-300">
            read more
          </button>
        </div>
      </div>
    </div>
  {/each}
</section> 