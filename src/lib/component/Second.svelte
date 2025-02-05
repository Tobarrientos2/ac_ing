<script>
    export let title = "FILOSOFÍA";
    export let mainHeading = "Con un enfoque constante en la innovación, economía y seguridad estructural, nos destacamos por la capacidad de ofrecer diseños eficientes y de alta calidad.";
</script>

<section class="max-w-[1200px] mx-auto px-4 py-20">
    <!-- Título superior -->
    <div class="mb-12">
        <h2 class="text-gray-800 text-lg font-medium tracking-wide">
            {title}
        </h2>
    </div>

    <!-- Contenedor principal -->
    <div class="flex flex-col gap-16">
        <!-- Encabezado principal -->
        <div class="max-w-[800px]">
            <h3 class="text-4xl md:text-5xl font-normal leading-tight">
                {mainHeading}
            </h3>
        </div>

        <!-- Divisor -->
        <div class="w-full h-[1px] bg-gray-200"></div>

        <!-- Botón de portafolio -->
        <div class="pt-8">
            <a href="/portfolio" 
               class="inline-flex items-center gap-2 text-[#FF4400] hover:text-black transition-colors duration-300 group"
               role="button"
               aria-label="Ver nuestro portafolio">
                Portafolio
                <span class="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
        </div>
    </div>
</section>