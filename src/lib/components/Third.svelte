<script>
  export let title = "ABOUT THE STUDIO";
  export let mainHeading = "Builder W values open communication and collaboration. We work closely with our clients to understand their goals and ensure their satisfaction throughout the entire construction journey.";
  export let sectionTitle = "Client-Centric Approach";
  export let description = "Whether you're envisioning your dream home, a cutting-edge office space, or an industrial facility that meets the highest standards, our team of skilled professionals is equipped to handle projects of any scale or complexity.";
  export let constructionImage = "/images/construction-workers.jpg";
</script>

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
    <!-- Columna de imagen -->
    <div class="relative aspect-[4/3] overflow-hidden">
      <img 
        src={constructionImage} 
        alt="Construction workers on site" 
        class="w-full h-full object-cover"
      />
    </div>

    <!-- Columna de texto -->
    <div class="flex flex-col justify-center space-y-8">
      <h4 class="text-2xl font-medium">
        {sectionTitle}
      </h4>
      
      <p class="text-gray-600 text-lg leading-relaxed">
        {description}
      </p>

      <!-- Botón CTA -->
      <div class="pt-4">
        <a 
          href="/contact" 
          class="inline-flex items-center gap-2 text-[#FF4400] hover:text-black transition-colors duration-300 group"
          role="button"
          aria-label="Ask us your questions"
        >
          Ask us your questions
          <span class="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
        </a>
      </div>
    </div>
  </div>
</section>