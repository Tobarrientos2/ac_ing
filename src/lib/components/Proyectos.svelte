<script>
  import { onMount } from 'svelte';
  import { activeTheme } from '../config/themes';
  import Pattern from './Pattern.svelte';

  export let projects = [
    {
      title: "INGENIERÍA ESTRUCTURAL",
      subsections: [
        {
          subtitle: "EDIFICIOS HABITACIONALES Y DE OFICINAS",
          projects: [
            { projectTitle: "EDIFICIO ALONSO", imageUrl: "placeholder" },
            { projectTitle: "ESTORIL I", imageUrl: "placeholder" },
            { projectTitle: "ESTORIL II", imageUrl: "placeholder" },
          ]
        },
        {
          subtitle: "EDIFICIOS INDUSTRIALES",
          projects: [
            { projectTitle: "KAUFFMANN", imageUrl: "placeholder" },
            { projectTitle: "LAN", imageUrl: "placeholder" },
            { projectTitle: "SALMOFOOD", imageUrl: "placeholder" },
            { projectTitle: "SANDVIK", imageUrl: "placeholder" },
            { projectTitle: "CINE HOYTS LA REINA", imageUrl: "placeholder" },
            { projectTitle: "VIÑA SANTA RITA", imageUrl: "placeholder" }
          ]
        },
        {
          subtitle: "EDIFICIOS ESPECIALES",
          projects: []
        }
      ]
    },
    {
      title: "REVISION DE PROYECTOS DE INGENIERÍA ESTRUCTURAL",
      subsections: [
        {
          subtitle: "PRIMERA CATEGORÍA OTORGADO POR EL MINISTERIO DE URBANISMO Y VIVIENDA DE ACUERDO A LA LEY 19.748:",
          projects: [
            { projectTitle: "ALBERTO MACCIONI QUEZADA", imageUrl: "placeholder" }
          ]
        }
      ]
    },
    {
      title: "DESARROLLO DE SISTEMAS INNOVATIVOS",
      subsections: [
        {
          subtitle: "INVENSIÓN DEL SISTEMA DE PROTECCIÓN DE TALUDES DE SUBTERRÁNEOS MEDIANTE TENSORES A TERRENO. SE UTILIZA POR PRIMERA VEZ EN EL PROYECTO DE AMPLIACIÓN DEL HOTEL SHERATON SAN CRISTÓBAL EN 1995.",
          projects: [
            { projectTitle: "SHERATON TALUDES", imageUrl: "placeholder" }
          ]
        },
        {
          subtitle: "DESARROLLO DEL SISTEMA COPROCELL, DE VIGAS LAMINADAS EXPANDIDAS DE ACERO.",
          projects: [
            { projectTitle: "NAVE BODENOR", imageUrl: "placeholder" }
          ]
        },
        {
          subtitle: "DESARROLLO DEL SISTEMA DE VIGAS STEEL JOIST DE AZA, JOISTEC",
          projects: [
            { projectTitle: "BODENOR", imageUrl: "placeholder" }
          ]
        },
        {
          subtitle: "DESARROLLO DEL SISTEMA DE MEGA COSTANERAS CONTINUAS, COPROMET",
          projects: [
            { projectTitle: "BODENOR", imageUrl: "placeholder" }
          ]
        }
      ]
    },
    {
      title: "ASESORÍAS",
      subsections: [
        {
          subtitle: "DESARROLLO MANUAL ICHA, DE DISEÑO DE ESTRUCTURAS DE ACERO, 2006",
          projects: [
            { projectTitle: "MANUAL", imageUrl: "placeholder" }
          ]
        },
        {
          subtitle: "DESARROLLO MANUAL SISTEMA ZETA-TUBEST DE CINTAC",
          projects: [
            { projectTitle: "placeholder", imageUrl: "placeholder" }
          ]
        },
        {
          subtitle: "REVISIÓN MANUAL DE DISEÑO ESTRUCTURAL DE PRODUCTOS CINTAC",
          projects: [
            { projectTitle: "placeholder", imageUrl: "placeholder" }
          ]
        }
      ]
    },
    {
      title: "EVENTOS",
      subsections: [
        {
          subtitle: "Se realizan dos eventos producidos por BMing, hoy AC Ingeniería Estructural en Chile, 2006 y 2018 con la visita de Leslie E. Robertson, ingeniero estructural pionero quien tiene a su haber el diseño de 4 de los 10 edificios más altos del mundo, entre los que destacan, Las Torres Gemelas de Nueva York (World Trade Center), el Shanghai World Financial Center y la Bank of China Tower en Hong Kong, y las torres Puerta de Europa en Madrid.",
          projects: [
            { projectTitle: "FOTOS del evento", imageUrl: "placeholder" }
          ]
        }
      ]
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
    {#each projects as service, i}
      <div class="text-center mb-20">
        <h1 class="text-6xl font-light mb-6 max-w-4xl mx-auto leading-tight {$activeTheme.colors.text.primary}">
          {service.title}
        </h1>
        <div class="h-[2px] max-w-[200px] mx-auto"
              style="background: linear-gradient(to right, {$activeTheme.colors.background}, {$activeTheme.colors.primary}, {$activeTheme.colors.background})">
        </div>
      </div>

      {#if i > 0}
        <div data-type="divider" class="h-[1px] w-full my-20 origin-left scale-x-0 transition-transform duration-1000 ease-in-out {$activeTheme.colors.border.secondary}"></div>
      {/if}

      {#each service.subsections as subsection, j}
        {#each subsection.projects as project, k}
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
                  {#if subsection.subtitle}
                    <span class="{$activeTheme.colors.text.secondary}">{subsection.subtitle}</span>
                  {/if}
                </div>
              </div>
            </div>
          </div>
          {#if k < subsection.projects.length - 1}
            <div data-type="divider" class="h-[1px] w-full my-20 origin-left scale-x-0 transition-transform duration-1000 ease-in-out {$activeTheme.colors.border.secondary}"></div>
          {/if}
        {/each}
      {/each}
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