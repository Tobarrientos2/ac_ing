<script>
    // Definición de versiones disponibles
    const versions = {
        "version1": {
            name: "Version 1",
            description: "Versión simple con título y dos párrafos de texto",
            layout: "single-column",
            features: [
                "title",
                "main_content",
                "text_only"
            ]
        }
    };

    // Datos específicos para REVISIÓN EN INGENIERÍA ESTRUCTURAL
    const data = {
        tp1: "REVISIÓN EN INGENIERÍA ESTRUCTURAL",
        tg1: "Contamos con la categoría de Primera Categoría otorgada por el Ministerio de Urbanismo y Vivienda de acuerdo a la Ley 19.748, a través de nuestro ingeniero Alberto Maccioni Quezada.",
        tg2: "Este reconocimiento nos permite ofrecer servicios de revisión estructural con los más altos estándares de calidad y cumplimiento normativo, garantizando la seguridad y conformidad de los proyectos que evaluamos."
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