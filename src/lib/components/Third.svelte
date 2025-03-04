<script>
    // Datos de servicios según la información proporcionada
    const data = {
        "ingenieria-estructural": {
            tp1: "INGENIERÍA ESTRUCTURAL",
            tg1: "Desarrollamos proyectos de ingeniería estructural para edificios habitacionales y de oficinas, aplicando soluciones innovadoras y eficientes que garantizan la seguridad y funcionalidad de cada estructura.",
            tg2: "Nuestra experiencia abarca también edificios industriales, donde hemos implementado soluciones estructurales adaptadas a las necesidades específicas de cada industria, optimizando espacios y recursos.",
            tp2: "Edificio Alonso - Vista lateral",
            tp3: "Santiago, Chile",
            tp4: "Edificio Alonso - Proyecto Habitacional/Oficina",
            tp5: "Santiago, Chile",
            media: [
                "https://pymecheck.s3.us-east-1.amazonaws.com/webpages/ac-ing/edificio-alonso.jpg",
                "https://pymecheck.s3.us-east-1.amazonaws.com/webpages/ac-ing/edificio_alonso_foto_2.jpg"
            ]
        },
        "revision-ingenieria-estructural": {
            tp1: "REVISIÓN EN INGENIERÍA ESTRUCTURAL",
            tg1: "Contamos con la categoría de Primera Categoría otorgada por el Ministerio de Urbanismo y Vivienda de acuerdo a la Ley 19.748, a través de nuestro ingeniero Alberto Maccioni Quezada.",
            tg2: "Este reconocimiento nos permite ofrecer servicios de revisión estructural con los más altos estándares de calidad y cumplimiento normativo, garantizando la seguridad y conformidad de los proyectos que evaluamos.",
            tp2: "Edificio GINO - Proyecto de ingeniería estructural",
            tp3: "FALTA INFORMACIÓN",
            tp4: "Edificio Santarita - Proyecto de ingeniería estructural",
            tp5: "FALTA INFORMACIÓN",
            media: [
                "https://pymecheck.s3.us-east-1.amazonaws.com/webpages/ac-ing/Gino.JPG",
                "https://pymecheck.s3.us-east-1.amazonaws.com/webpages/ac-ing/santarita.jpg"
            ]
        },
        "desarrollo-sistemas-innovativos": {
            tp1: "DESARROLLO DE SISTEMAS INNOVATIVOS",
            tg1: "Inventamos el sistema de protección de taludes de subterráneos mediante tensores a terreno, utilizado por primera vez en el proyecto de ampliación del Hotel Sheraton San Cristóbal en 1995.",
            tg2: "Hemos desarrollado múltiples sistemas innovadores como el sistema COPROCELL de vigas laminadas expandidas de acero, el sistema de vigas Steel Joist de AZA (JOISTEC) y el sistema de mega costaneras continuas para COPROMET.",
            tp2: "Sistema COPROCELL",
            tp3: "",
            tp4: "Sistema de vigas laminadas expandidas COPROCELL",
            tp5: "FALTA INFORMACIÓN",
            media: [
                "https://pymecheck.s3.us-east-1.amazonaws.com/webpages/ac-ing/Sheraton-10b2-1030x525.jpg",
                "https://pymecheck.s3.us-east-1.amazonaws.com/webpages/ac-ing/SISTEMA-CONSTRUCTIVO-COPROCELL.png"
            ]
        },
        "asesorias": {
            tp1: "ASESORÍAS",
            tg1: "Desarrollamos el Manual ICHA de Diseño de Estructuras de Acero en 2006, una referencia fundamental para profesionales del sector de la construcción en Chile.",
            tg2: "Nuestra experiencia también incluye el desarrollo del Manual del Sistema Zeta-Tubest de CINTAC y la revisión del Manual de Diseño Estructural de Productos CINTAC, contribuyendo a la estandarización y mejora de las prácticas constructivas.",
            tp2: "Manual ICHA de Diseño de Estructuras de Acero",
            tp3: "© AC Proyectos y Asesorías | 2006",
            tp4: "Manual Sistema Zeta-Tubest de CINTAC",
            tp5: "FALTA INFORMACIÓN",
            media: [
                "https://pymecheck.s3.us-east-1.amazonaws.com/webpages/ac-ing/imagen-destacada-diseno-de-estructuras-600-x-335.jpg",
                "https://pymecheck.s3.us-east-1.amazonaws.com/webpages/ac-ing/manual_z_tubest.webp"
            ]
        },
        "eventos": {
            tp1: "EVENTOS",
            tg1: "En 2006 organizamos la visita de Leslie E. Robertson, ingeniero estructural pionero con el diseño de 4 de los 10 edificios más altos del mundo, incluyendo las Torres Gemelas de Nueva York, el Shanghai World Financial Center, la Bank of China Tower en Hong Kong y las torres Puerta de Europa en Madrid.",
            tg2: "En 2018 realizamos el evento 'La Estructura del Diseño', haciendo alusión al libro de Robertson que narra su carrera como ingeniero estructural y su colaboración con grandes arquitectos.",
            tp2: "Visita de Leslie E. Robertson a Chile",
            tp3: "© AC Proyectos y Asesorías | Partner: Universidad del Desarrollo y Copromet | Patrocinio: Embajada de Estados Unidos | 2006",
            tp4: "Evento 'La Estructura del Diseño'",
            tp5: "© AC Proyectos y Asesorías | 2018",
            media: [
                "https://pymecheck.s3.us-east-1.amazonaws.com/webpages/ac-ing/2018+Alberto-Les-SawTeen-Patricio+(1).JPG",
                "https://pymecheck.s3.us-east-1.amazonaws.com/webpages/ac-ing/EVENTO+2018+-+DISEN%CC%83O+LA+ESTRUCTURA+DEL+DISEN%CC%83O+2018.png",
            ]
        }
    };
</script>

<!-- Asegurarse de que el link de Google Fonts esté en el head del documento -->
<svelte:head>
    <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap" rel="stylesheet"/>
</svelte:head>

<div  class="overflow-hidden antialiased bg-white font-lato pb-12 md:pb-16 lg:pb-24 z-40 relative">
    <!-- Header Section -->
    <div class="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        <div  class="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-16 md:pt-24">
            <div class="lg:col-span-8">
                <div class="prose max-w-none">
                    <h1 id="servicios" class="text-4xl md:text-5xl font-light tracking-tight text-[#151515] mb-8 font-lato">
                        Nuestros Servicios
                    </h1>
                    <p class="text-lg leading-relaxed text-[#151515] mb-12 font-lato font-normal">
                        En AC Ingeniería Estructural ofrecemos una amplia gama de servicios especializados en ingeniería estructural, 
                        diseñados para satisfacer las necesidades específicas de cada proyecto y cliente.
                    </p>
                </div>
            </div>
        </div>
    </div>

    <!-- Servicios Section -->
    {#each Object.entries(data) as [slug, service], index}
        <div class="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 mt-8 md:mt-12 {index > 0 ? 'pt-16 border-t border-[#E4E4E4]' : ''}">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <!-- Main Content -->
                <div class="lg:col-span-8">
                    <div class="prose max-w-none mb-8">
                        <h2 class="text-4xl md:text-5xl font-light tracking-tight text-[#151515] mb-8 font-lato">
                            {service.tp1}
                        </h2>
                        <p class="text-lg leading-relaxed text-[#151515] mb-12 font-lato font-normal">
                            {service.tg1}
                        </p>
                    </div>

                    <figure class="mb-8 md:mb-12">
                        <div class="relative aspect-[16/9] overflow-hidden">
                            {#if service.media[0].endsWith('.mp4')}
                                <video 
                                    src={service.media[0]}
                                    title={service.tp2}
                                    class="w-full h-full object-cover"
                                    autoplay 
                                    muted 
                                    loop 
                                    playsinline 
                                    preload="auto"
                                ></video>
                            {:else}
                                <img 
                                    src={service.media[0]}
                                    alt={service.tp2}
                                    class="w-full h-full object-cover"
                                />
                            {/if}
                        </div>
                        <figcaption class="mt-3 text-sm text-[#151515] font-lato">
                            {service.tp2}
                            {#if service.tp3 !== "FALTA INFORMACIÓN"}
                                <span class="text-[#767676]">{service.tp3}</span>
                            {/if}
                        </figcaption>
                    </figure>

                    <div class="prose max-w-none mb-8 md:mb-12">
                        <p class="text-lg leading-relaxed text-[#151515] font-lato font-normal">
                            {service.tg2}
                        </p>
                    </div>
                </div>

                <!-- Right Image Section -->
                <div class="lg:col-span-4 lg:border-l border-[#E4E4E4] lg:pl-8 mt-8 lg:mt-0">
                    <figure>
                        <div class="relative aspect-[3/4] overflow-hidden">
                            {#if service.media[1].endsWith('.mp4')}
                                <video 
                                    src={service.media[1]}
                                    title={service.tp4}
                                    class="w-full h-full object-cover"
                                    autoplay 
                                    muted 
                                    loop 
                                    playsinline 
                                    preload="auto"
                                ></video>
                            {:else}
                                <img 
                                    src={service.media[1]}
                                    alt={service.tp4}
                                    class="w-full h-full object-cover"
                                />
                            {/if}
                        </div>
                        <figcaption class="mt-3 text-sm text-[#151515] font-lato">
                            {service.tp4}
                            {#if service.tp5 !== "FALTA INFORMACIÓN"}
                                <span class="text-[#767676]">{service.tp5}</span>
                            {/if}
                        </figcaption>
                    </figure>
                </div>
            </div>
        </div>
    {/each}
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