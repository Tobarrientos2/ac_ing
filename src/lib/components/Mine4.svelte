<script>
  export let title = "SOBRE NOSOTROS";
  export let mainHeading = "Más de 30 años de experiencia en el desarrollo de proyectos y cálculo estructural.";
  export let sectionTitle = "Experiencia y Profesionalismo";
  export let description = "Cuenta con un gran equipo profesional de ingenieros civiles estructurales, arquitectos, proyectistas, dibujantes y administrativos, quienes ofrecen el mejor servicio a sus clientes. A la cabeza de esta empresa se encuentra Alberto Maccioni, ingeniero civil estructural de la Universidad de Chile, quien posee experiencia en diversos sistemas estructurales, acero, hormigón armado y sistemas constructivos innovadores.";
  export let projectsDescription = "Destacan más de 300 proyectos de edificios de hormigón armado, los que presentan entre 10 y 35 niveles de altura, tanto en el área habitacional, de oficinas, hospitalaria, turismo e industrial. Entre sus obras emblemáticas se encuentran; Hotel Sheraton, Edificio LAN, Cine Hoyts de La Reina, Costa Cachagua, Bodenor Flexcenter, Viña Santa Rita, Edificio Alonso, Kaufmann Mercedes-Benz, Cerro El Plomo, Estoril 100, Estadio de la Calera, Hotel Renaissance Santiago, entre otros.";
  export let constructionImage = "/images/construction-workers.jpg";
</script>

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
</style>

<section class="max-w-[1200px] mx-auto px-4 py-20">
  <!-- Título superior -->
  <div class="mb-12">
    <h2 class="text-gray-800 text-lg font-medium tracking-wide">
      {title}
    </h2>
  </div>

  <!-- Encabezado principal -->
  <div class="mb-16 max-w-[900px]">
    <h3 class="text-4xl md:text-5xl font-normal leading-tight">
      {mainHeading}
    </h3>
  </div>

  <!-- Grid de contenido -->
  <div class="grid md:grid-cols-2 gap-12">
    <!-- Columna de texto (ahora ocupando todo el ancho) -->
    <div class="flex flex-col justify-center space-y-8 col-span-2">
      <h4 class="text-2xl font-medium">
        {sectionTitle}
      </h4>
      
      <p class="text-gray-600 text-lg leading-relaxed">
        {description}
      </p>

      <p class="text-gray-600 text-lg leading-relaxed">
        {projectsDescription}
      </p>
    </div>
  </div>
</section>