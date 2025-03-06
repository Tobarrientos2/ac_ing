<script>
    // Definición de versiones disponibles
    const versions = {
        "version1": {
            name: "Version 1",
            description: "Versión con dos manuales técnicos y sus descripciones",
            layout: "two-manuals",
            features: [
                "title",
                "main_content",
                "manual_showcase",
                "technical_descriptions"
            ]
        }
    };

    // Datos específicos para ASESORÍAS
    const data = {
        tp1: "ASESORÍAS",
        tg1: "Desarrollamos el Manual ICHA de Diseño de Estructuras de Acero en 2006, una referencia fundamental para profesionales del sector de la construcción en Chile.",
        tg2: "Nuestra experiencia también incluye el desarrollo del Manual del Sistema Zeta-Tubest de CINTAC y la revisión del Manual de Diseño Estructural de Productos CINTAC, contribuyendo a la estandarización y mejora de las prácticas constructivas.",
        media: [
            {
                url: "https://pymecheck.s3.us-east-1.amazonaws.com/webpages/ac-ing/manual_icha.png",
                title: "Manual ICHA de Diseño de Estructuras de Acero",
                description: ""
            },
            {
                url: "https://pymecheck.s3.us-east-1.amazonaws.com/webpages/ac-ing/manual_z_tubest.webp",
                title: "Manual Sistema Zeta-Tubest de CINTAC",
                description: ""
            }
        ]
    };
</script>

<!-- Asegurarse de que el link de Google Fonts esté en el head del documento -->
<svelte:head>
    <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap" rel="stylesheet"/>
</svelte:head>

<div class="overflow-hidden antialiased bg-black font-lato pb-12 md:pb-16 lg:pb-24 z-40 relative">
    <!-- Header Section -->
    <div class="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-16 md:pt-24 border-t border-gray-600">
            <div class="lg:col-span-8">
                <div class="prose max-w-none">
                    <h1 id="servicios" class="text-4xl md:text-5xl font-light tracking-tight text-white mb-8 font-lato">
                        {data.tp1}
                    </h1>
                </div>
            </div>
        </div>
    </div>

    <!-- Main Content Section -->
    <div class="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 mt-8 md:mt-12">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <!-- Main Content -->
            <div class="lg:col-span-8">
                <div class="prose max-w-none mb-8">
                    <p class="text-lg leading-relaxed text-white mb-12 font-lato font-normal">
                        {data.tg1}
                    </p>
                
                    <div class="prose max-w-none mb-8 md:mb-12">
                        <p class="text-lg leading-relaxed text-white font-lato font-normal">
                            {data.tg2}
                        </p>
                    </div>
                </div>
            </div>

            <!-- Right Column with Border -->
            <div class="lg:col-span-4 lg:border-l border-gray-600 lg:pl-8 mt-8 lg:mt-0">
                <!-- Manual ICHA -->
                <figure class="mb-8 max-w-[280px] mx-auto">
                    <div class="relative aspect-[4/5] overflow-hidden">
                        <img 
                            src={data.media[0].url}
                            alt={data.media[0].title}
                            class="w-full h-full object-cover"
                        />
                    </div>
                    <figcaption class="mt-3 text-sm text-white font-lato">
                        {data.media[0].title}
                        {#if data.media[0].description}
                            <div class="text-gray-400">{data.media[0].description}</div>
                        {/if}
                    </figcaption>
                </figure>

                <!-- Manual Zeta-Tubest -->
                <figure class="mb-8 max-w-[280px] mx-auto">
                    <div class="relative aspect-[4/5] overflow-hidden">
                        <img 
                            src={data.media[1].url}
                            alt={data.media[1].title}
                            class="w-full h-full object-cover"
                        />
                    </div>
                    <figcaption class="mt-3 text-sm text-white font-lato">
                        {data.media[1].title}
                        {#if data.media[1].description}
                            <div class="text-gray-400">{data.media[1].description}</div>
                        {/if}
                    </figcaption>
                </figure>
            </div>
        </div>
    </div>
</div>

<style>
    /* Estilos adicionales si son necesarios */
    :global(.prose) {
        max-width: none;
    }

    /* Configuración de la fuente Lato */
    :global(.font-lato) {
        font-family: 'Lato', sans-serif;
    }
</style> 