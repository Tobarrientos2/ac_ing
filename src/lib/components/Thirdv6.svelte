<script>
    // Definición de versiones disponibles
    const versions = {
        "version1": {
            name: "Version 1",
            description: "Versión con eventos históricos, galería de imágenes, partners y sponsors",
            layout: "events-showcase",
            features: [
                "title",
                "main_content",
                "image_gallery",
                "event_details",
                "partners_section",
                "sponsors_section",
                "news_link"
            ]
        }
    };

    // Datos específicos para EVENTOS
    const data = {
        tp1: "EVENTOS",
        tg1: "En 2006 organizamos la visita de Leslie E. Robertson, ingeniero estructural pionero con el diseño de 4 de los 10 edificios más altos del mundo, incluyendo las Torres Gemelas de Nueva York, el Shanghai World Financial Center, la Bank of China Tower en Hong Kong y las torres Puerta de Europa en Madrid.",
        tg2: "En 2018 realizamos el evento 'La Estructura del Diseño' haciendo alusión a su libro que narra su carrera como ingeniero estructural y su colaboración con grandes arquitectos.",
        tp2: "Visita de Leslie E. Robertson a Chile, 2006",
        tp4: "Evento 'La Estructura del Diseño', 2018",
        tp6: "Evento 'La Estructura del Diseño'",
        tp8: "Visita de Leslie E. Robertson a Chile, 2018",
        media: [
            {
                url: "https://pymecheck.s3.us-east-1.amazonaws.com/webpages/ac-ing/EVENTO+2006+-+Alberto-Les-SawTeen-Victor+(1).JPG",
                title: "Visita de Leslie E. Robertson a Chile, 2006",
                description: "",
                event_details: {
                    partners: ["Universidad del Desarrollo", "Copromet"],
                    sponsors: ["Embajada de Estados Unidos"]
                }
            },
            {
                url: "https://pymecheck.s3.us-east-1.amazonaws.com/webpages/ac-ing/2018+Alberto-Les-SawTeen-Patricio+(1).JPG",
                title: "Evento 'La Estructura del Diseño', 2018",
                description: ""
            },
            {
                url: "https://pymecheck.s3.us-east-1.amazonaws.com/webpages/ac-ing/EVENTO+2006+-+SHERATON+AUDIENCIA.JPG",
                title: "Evento 'La Estructura del Diseño', 2006",
            },
            
            {
                url: "https://pymecheck.s3.us-east-1.amazonaws.com/webpages/ac-ing/EVENTO+2018+-+DISEN%CC%83O+LA+ESTRUCTURA+DEL+DISEN%CC%83O+2018.png",
                title: "Evento 'La Estructura del Diseño', 2018",
                description: ""
            },
            {
                url: "https://pymecheck.s3.us-east-1.amazonaws.com/webpages/ac-ing/Leslie+Robertson+2018.JPG",
                title: "Leslie Robertson 2018",
                description: "Leslie Robertson durante su visita en 2018"
            }
        ],
        news_link: "https://www.ingenieros.cl/colegio-de-ingenieros-reconocio-a-leslie-e-robertson-en-seminario-la-estructura-del-diseno-organizado-por-bming/",
        partners: [
            "Copromet",
            "CAP",
            "Gerdau",
            "Jotun",
            "Imel",
            "Multiaceros",
            "Ready Mix"
        ],
        sponsors: [
            "Asociación de Ingenieros Estructurales",
            "Asociación de Oficinas de Arquitectura",
            "Colegio de Ingenieros",
            "Cámara Chilena de la Construcción",
            "Corporación Instituto Chileno del Acero"
        ],
        event_2006: {
            title: "Visita de Leslie E. Robertson a Chile, 2006",
            partners: ["Universidad del Desarrollo", "Copromet"],
            sponsors: ["Embajada de Estados Unidos"]
        }
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

                    <!-- Evento 2006 -->
                    <figure class="mb-8 md:mb-12">
                        <div class="relative aspect-[16/9] overflow-hidden">
                            <img 
                                src={data.media[0].url}
                                alt={data.media[0].title}
                                class="w-full h-full object-cover"
                            />
                        </div>
                        <figcaption class="mt-3 text-sm text-white font-lato">
                            {data.media[0].title}
                            {#if data.media[0].event_details}
                                <div class="mt-2 space-y-1">
                                    <div class="text-gray-400">
                                        <span class="text-white">Partner:</span> {data.media[0].event_details.partners.join(" y ")}
                                    </div>
                                    <div class="text-gray-400">
                                        <span class="text-white">Patrocinio:</span> {data.media[0].event_details.sponsors.join(", ")}
                                    </div>
                                </div>
                            {/if}
                            {#if data.media[0].description}
                                <div class="text-gray-400">{data.media[0].description}</div>
                            {/if}
                        </figcaption>
                    </figure>

                    <div class="prose max-w-none mb-8 md:mb-12">
                        <p class="text-lg leading-relaxed text-white font-lato font-normal">
                            {data.tg2}
                        </p>
                    </div>

                    <!-- Evento 2018 -->
                    <figure class="mb-8 md:mb-12">
                        <div class="relative aspect-[16/9] overflow-hidden">
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

                    <!-- Leslie Robertson 2018 Additional -->
                    <figure class="mb-8 md:mb-12">
                        <div class="relative aspect-[16/9] overflow-hidden">
                            <img 
                                src={data.media[4].url}
                                alt={data.media[4].title}
                                class="w-full h-full object-cover"
                            />
                        </div>
                        <figcaption class="mt-3 text-sm text-white font-lato">
                            {data.media[4].title}
                            {#if data.media[4].description}
                                <div class="text-gray-400">{data.media[4].description}</div>
                            {/if}
                        </figcaption>
                    </figure>

                    <!-- Partners and Sponsors Section -->
                    <div class="mt-12 space-y-8">
                        <!-- News Link -->
                        <div>
                            <h3 class="text-xl font-light text-white mb-4">Cobertura del Evento</h3>
                            <a href={data.news_link} target="_blank" rel="noopener noreferrer" 
                               class="text-blue-400 hover:text-blue-300 transition-colors duration-200">
                                Leer más en Colegio de Ingenieros →
                            </a>
                        </div>

                        <!-- Partners -->
                        <div>
                            <h3 class="text-xl font-light text-white mb-4">Partners</h3>
                            <div class="flex flex-wrap gap-2">
                                {#each data.partners as partner}
                                    <span class="px-3 py-1 bg-gray-800 text-white rounded-full text-sm">
                                        {partner}
                                    </span>
                                {/each}
                            </div>
                        </div>

                        <!-- Sponsors -->
                        <div>
                            <h3 class="text-xl font-light text-white mb-4">Patrocinio</h3>
                            <div class="flex flex-wrap gap-2">
                                {#each data.sponsors as sponsor}
                                    <span class="px-3 py-1 bg-gray-800 text-white rounded-full text-sm">
                                        {sponsor}
                                    </span>
                                {/each}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Right Column with Border -->
            <div class="lg:col-span-4 lg:border-l border-gray-600 lg:pl-8 mt-8 lg:mt-0">
                <!-- Audiencia Sheraton -->
                <figure class="mb-8">
                    <div class="relative aspect-[3/4] overflow-hidden">
                        <img 
                            src={data.media[2].url}
                            alt={data.media[2].title}
                            class="w-full h-full object-cover"
                        />
                    </div>
                    <figcaption class="mt-3 text-sm text-white font-lato">
                        {data.media[2].title}
                        {#if data.media[2].description}
                            <div class="text-gray-400">{data.media[2].description}</div>
                        {/if}
                    </figcaption>
                </figure>

                <!-- Leslie Robertson 2018 -->
                <figure class="mb-8">
                    <div class="relative aspect-[3/4] overflow-hidden">
                        <img 
                            src={data.media[3].url}
                            alt={data.media[3].title}
                            class="w-full h-full object-cover"
                        />
                    </div>
                    <figcaption class="mt-3 text-sm text-white font-lato">
                        {data.media[3].title}
                        {#if data.media[3].description}
                            <div class="text-gray-400">{data.media[3].description}</div>
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