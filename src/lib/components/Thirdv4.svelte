<script>
    // Definición de versiones disponibles
    const versions = {
        "version1": {
            name: "Version 1",
            description: "Versión con múltiples imágenes y descripciones detalladas",
            layout: "multi-section",
            features: [
                "title",
                "main_content",
                "multiple_images",
                "detailed_descriptions",
                "system_showcase"
            ]
        }
    };

    // Datos específicos para DESARROLLO DE SISTEMAS INNOVATIVOS
    const data = {
        tp1: "DESARROLLO DE SISTEMAS INNOVATIVOS",
        tg2: "Creación del sistema de entibación de taludes de excavación mediante tensores a terreno. Este sistema creado por Alberto Maccioni se diseñó por primera vez en la obra del Hotel Sheraton San Cristóbal, siendo hoy en día masivamente utilizado en la construcción de edificios de varios subterráneos.",
        tp2: "Hotel Sheraton - Sistema de protección de taludes",
        tp4: "Presenta la información necesaria para diseñar naves de acero y sistemas de piso con vigas celulares Coprocell® (laminadas optimizadas), recogiendo la exitosa experiencia europea y norteamericana, adaptada para el caso chileno. Se obtiene estructuras de grandes luces libres a bajo costo, entre otras ventajas relevantes para ingenieros arquitectos y mandantes. Su contenido está dirigido a ingenieros, arquitectos y empresas del rubro de la construcción.",
        tp6: "Sistema constructivo Joistec®",
        tp7: "Presenta la información necesaria para diseñar estructuras con el sistema Joistec®, recogiendo la exitosa experiencia europea y norteamericana, adaptada para el caso chileno. La principal característica del sistema es lograr estructuras muy económicas, con menores plazos constructivos, entre otros beneficios importantes.",
        media: [
            "https://pymecheck.s3.us-east-1.amazonaws.com/webpages/ac-ing/foto_taludes.png",
            "https://pymecheck.s3.us-east-1.amazonaws.com/webpages/ac-ing/SISTEMA-CONSTRUCTIVO-COPROCELL.png",
            "https://bming.cl/wp-content/uploads/2020/03/joistec-300x300.jpg"
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

                    <!-- Sistema de protección de taludes -->
                    <figure class="mb-8 md:mb-12">
                        <div class="relative aspect-[2/3] overflow-hidden max-w-[300px] ml-0">
                            <img 
                                src={data.media[0]}
                                alt={data.tp2}
                                class="w-full h-full object-cover"
                            />
                        </div>
                        <figcaption class="mt-3 text-sm text-white font-lato">
                            {data.tp2}
                        </figcaption>
                    </figure>

                    <!-- Sistema Coprocell -->
                    <figure class="mb-8 md:mb-12">
                        <div class="relative overflow-hidden">
                            <img 
                                src={data.media[1]}
                                alt="Sistema Constructivo Coprocell"
                                class="w-full object-contain"
                            />
                        </div>
                        <figcaption class="mt-3 text-sm text-white font-lato">
                            {data.tp4}
                        </figcaption>
                    </figure>

                    <!-- Sistema Joistec -->
                    <figure class="mb-8 md:mb-12">
                        <div class="relative overflow-hidden">
                            <img 
                                src={data.media[2]}
                                alt="Sistema Constructivo Joistec"
                                class="w-full object-contain"
                            />
                        </div>
                        <figcaption class="mt-3 text-sm text-white font-lato">
                            {data.tp6}
                            <span class="text-gray-400 block mt-2">{data.tp7}</span>
                        </figcaption>
                    </figure>
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