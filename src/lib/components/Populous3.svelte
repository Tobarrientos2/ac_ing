<script>
  import { fly } from 'svelte/transition';
  import { cubicOut } from 'svelte/easing';
  
  let visible = false;
  
  const services = [
    'Ingeniería Estructural',
    'Revisión de Proyectos de Ingeniería Estructural',
    'Desarrollo de Sistemas Innovativos',
    'Asesorías',
    'Eventos'
  ];
  
  // Hacemos visible el contenido después del montaje
  import { onMount } from 'svelte';
  onMount(() => {
    visible = true;
  });
</script>

<svelte:head>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=arrow_forward" />
</svelte:head>

<div class="relative z-30 w-full min-h-screen bg-[#ffffff] flex items-center">
  <div class="container mx-auto px-4 py-12 md:py-24 flex flex-col md:flex-row max-w-6xl">
    {#if visible}
      <h2 
        class="text-[1.75rem] md:text-[2rem] font-normal w-full md:w-1/4 mb-8 md:mb-0 md:-ml-16"
        transition:fly={{ y: 50, duration: 800, delay: 200, easing: cubicOut }}
      >
        Servicios
      </h2>
      
      <div class="space-y-0 w-full md:w-3/4 md:pl-[18rem]">
        {#each services as service, i}
          <div 
            class="group border-t border-black/10 relative"
            transition:fly={{ y: 50, duration: 800, delay: 300 + (i * 100), easing: cubicOut }}
          >
            <div class="text-[1.5rem] md:text-[2rem] leading-tight transition-all cursor-pointer py-3">
              <span class="group-hover:text-[#EE8035] inline-flex items-center">
                <span class="material-symbols-outlined absolute left-[-2.5rem] opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300 hidden md:inline-block">
                  arrow_forward
                </span>
                <span class="transform group-hover:translate-x-2 transition-transform duration-300">{service}</span>
              </span>
            </div>
          </div>
        {/each}
        <div 
          class="border-t border-black/10 mt-3"
          transition:fly={{ y: 50, duration: 800, delay: 300 + (services.length * 100), easing: cubicOut }}
        ></div>
      </div>
    {/if}
  </div>
</div>

<style>
  @font-face {
    font-family: 'Calibri';
    src: url('/fonts/calibri-regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Calibri';
    src: url('/fonts/calibri-bold.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: 'Calibri';
    src: url('/fonts/calibri-italic.ttf') format('truetype');
    font-weight: normal;
    font-style: italic;
  }

  @font-face {
    font-family: 'Calibri';
    src: url('/fonts/calibri-bold-italic.ttf') format('truetype');
    font-weight: bold;
    font-style: italic;
  }

  :global(body) {
    font-family: 'Calibri', sans-serif;
  }
  
  /* Animación suave para el hover */
  .group {
    transition: all 0.3s ease-out;
  }
  
  /* Removemos el hover del background */
  .group:hover {
    background-color: transparent;
  }
  
  /* Ajustamos el color naranja al nuevo color */
  .group:hover span {
    color: #EE8035; /* Nuevo color naranja */
  }
  
  .material-symbols-outlined {
    font-variation-settings:
      'FILL' 0,
      'wght' 400,
      'GRAD' 0,
      'opsz' 24;
    font-size: inherit; /* Para que coincida con el tamaño del texto */
    line-height: 1; /* Mejor alineación vertical */
  }
  
  /* Animación del icono en hover */
  .group:hover .material-symbols-outlined {
    font-variation-settings:
      'FILL' 1,
      'wght' 400,
      'GRAD' 0,
      'opsz' 24;
  }

  /* Media queries para ajustes adicionales en móvil */
  @media (max-width: 768px) {
    .container {
      padding-left: 1rem;
      padding-right: 1rem;
    }
  }
</style> 