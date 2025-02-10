<script>
  const buildings = [
    // EDIFICIOS HABITACIONALES Y DE OFICINAS
    {
      title: 'Edificio Alonso',
      image: 'https://ambientesdigital.com/wp-content/uploads/2023/06/R1A0137-.jpg',
      tag: 'Edificios Habitacionales y de Oficinas'
    },
    {
      title: 'Edificio Estoril 2',
      image: './estoril_II_nueva.png',
      tag: 'Edificios Habitacionales y de Oficinas'
    },
    {
      title: 'Edificio Estoril',
      image: 'estoril_I.jpg', //  provide a valid image path
      tag: 'Edificios Habitacionales y de Oficinas'
    },
    // EDIFICIOS INDUSTRIALES
    {
      title: 'Edificio Kaufman',
      image: 'https://www.kaufmann.cl/documents/68916/166093/head-nuestro-equipo.jpg/0c8e2e65-b191-5e8a-735b-7e6218fdb758?t=1597699010935',
      tag: 'Edificios Industriales'
    },
    {
      title: 'Edificio Cine Hoyts La Reina',
      image: 'https://arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/IIJXQ7BEYNGMZNZPZ3PUK7FCUA.png',
      tag: 'Edificios Industriales'
    },
     // EDIFICIOS ESPECIALES
     // Add any "Edificios Especiales" here, following the same structure.
  ];

  let visibleCards = 3;
  let currentIndex = 0;

    function next() {
        currentIndex = (currentIndex + 1) % buildings.length;
    }

    function prev() {
        currentIndex = (currentIndex - 1 + buildings.length) % buildings.length;
    }

    $: visibleBuildings = [...buildings.slice(currentIndex), ...buildings.slice(0, currentIndex)];

</script>

<div class="w-full bg-white">
  <!-- Hero Section -->
  <div class="max-w-[1400px] mx-auto py-32 px-8">
    <p class="text-[2.75rem] leading-[1.15] font-light tracking-tight max-w-2xl">
      We're a global design firm with colleagues spanning four continents creating experiences that amplify the joy felt in shared human moments.
    </p>
  </div>

  <!-- News Section -->
  <div class="max-w-[1400px] mx-auto pb-32 px-8">
    <div class="flex justify-between items-center mb-12">
      <h2 class="text-2xl font-light tracking-tight">Ingeniería Estructural</h2>
      <div class="flex items-center gap-4">
        <div class="flex gap-2">
          <button
            on:click={prev}
            class="w-10 h-10 border border-gray-200 rounded-md flex items-center justify-center text-gray-900 transition-colors hover:bg-gray-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>
          <button
            on:click={next}
            class="w-10 h-10 border border-gray-200 rounded-md flex items-center justify-center text-gray-900 transition-colors hover:bg-gray-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>
        <a
          href="#"
          class="text-sm text-gray-900 font-medium hover:underline flex items-center gap-2"
        >
          View all
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M7 7h10v10" />
            <path d="M7 17 17 7" />
          </svg>
        </a>
      </div>
    </div>

    <!-- Carousel -->
    <div class="overflow-hidden">
      <div
        class="flex gap-6 transition-transform duration-500 ease-in-out"
        style="transform: translateX(-{currentIndex * (100 / visibleCards)}%);"
      >
        {#each visibleBuildings as item}
          <div class="flex-shrink-0 w-[calc(33.33%-1rem)] relative group">
            <div class="absolute top-4 left-4 bg-white px-2.5 py-1 rounded text-xs font-medium z-10">
              {item.tag}
            </div>
            <img
              src={item.image || "/placeholder.svg"}
              alt={item.title}
              class="w-full aspect-[4/3] object-cover rounded-lg"
            />
            <div class="absolute bottom-0 inset-x-0 p-8 bg-gradient-to-t from-black/90 via-black/50 to-transparent text-white rounded-b-lg">
              <time class="text-sm text-white/90">{item.date}</time>
              <h3 class="mt-2 text-xl font-normal leading-tight">{item.title}</h3>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</div>

<style>
  /* Optional: Add smooth transition for hover effects */
  .group:hover img {
    transform: scale(1.02);
    transition: transform 0.3s ease-out;
  }

  img {
    transition: transform 0.3s ease-out;
  }
</style>