<script>
    // Datos de servicios según la información proporcionada
    const data = {
        "ingenieria-estructural": {
            tp1: "INGENIERÍA ESTRUCTURAL",
            metadata_filters: true,
            m_filters: ["Habitacional", "Hoteles", "Industrial", "Otros"],
            m_selectedFilter: "Habitacional",
            m_filterContent: {
                "Habitacional": {
                    text: "Desarrollamos proyectos de ingeniería estructural para edificios corporativos y de oficinas, aplicando soluciones innovadoras y eficientes que garantizan la seguridad y funcionalidad de cada estructura.",
                    details: [
                        "Área habitacional y edificios corporativos",
                        "Verificación y estudio de refuerzos de edificios con cambio de uso"
                    ],
                    mainImage: "https://pymecheck.s3.us-east-1.amazonaws.com/webpages/ac-ing/edificio-alonso.jpg",
                    sideImage: "https://pymecheck.s3.us-east-1.amazonaws.com/webpages/ac-ing/edificio_alonso_foto_2.jpg",
                    mainTitle: "Edificio Alonso - Vista lateral",
                    sideTitle: "Edificio Alonso - Vista frontal",
                    mainLocation: "Santiago, Chile",
                    sideLocation: "Santiago, Chile"
                },
                "Hoteles": {
                    text: "Diseñamos estructuras para hoteles que combinan seguridad, funcionalidad y estética, adaptándonos a las necesidades específicas del sector hotelero.",
                    details: [],
                    mainImage: "https://pymecheck.s3.us-east-1.amazonaws.com/webpages/ac-ing/Sheraton-04-1-684x1030+(1).jpg",
                    sideImage: "https://pymecheck.s3.us-east-1.amazonaws.com/webpages/ac-ing/Hotel+y+Oficina+Renaissance+2.jpg",
                    mainTitle: "Hotel Sheraton San Cristóbal",
                    sideTitle: "Hotel Renaissance",
                    mainLocation: "Santiago, Chile",
                    sideLocation: "Santiago, Chile"
                },
                "Industrial": {
                    text: "Implementamos soluciones estructurales especializadas para el sector industrial, abarcando una amplia gama de estructuras y equipos industriales.",
                    details: [
                        "Estructuras de apoyo de equipos industriales:",
                        "Puentes grúas",
                        "Silos y tolvas",
                        "Torres de enfriamiento",
                        "Calderas",
                        "Estructuras de apoyo de equipos vibratorios",
                        "Cintas transportadoras"
                    ],
                    mainImage: "https://pymecheck.s3.us-east-1.amazonaws.com/webpages/ac-ing/Kaufmann.jpg",
                    sideImage: "https://pymecheck.s3.us-east-1.amazonaws.com/webpages/ac-ing/sandvik.jpg",
                    mainTitle: "Edificio Industrial Kauffmann",
                    sideTitle: "Edificio Industrial SANDVIK",
                    mainLocation: "Santiago, Chile",
                    sideLocation: "Santiago, Chile"
                },
                "Otros": {
                    text: "Creamos estructuras para espacios de entretenimiento que combinan seguridad y diseño innovador, desde complejos deportivos hasta centros de entretenimiento comercial.",
                    details: [],
                    mainImage: "https://pymecheck.s3.us-east-1.amazonaws.com/webpages/ac-ing/cine_hoyts.avif",
                    sideImage: "https://pymecheck.s3.us-east-1.amazonaws.com/webpages/ac-ing/Estadio+La+Calera.jpg",
                    mainTitle: "Cine Hoyts La Reina",
                    sideTitle: "Estadio La Calera",
                    mainLocation: "Santiago, Chile",
                    sideLocation: "La Calera, Chile"
                }
            },
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
            tp2: "",
            tp3: "",
            tp4: "",
            tp5: "",
            media: []
        },
        "desarrollo-sistemas-innovativos": {
            tp1: "DESARROLLO DE SISTEMAS INNOVATIVOS",
            tg1: "Desarrollo de productos y soluciones constructivas innovadoras, para obras con requerimientos específicos, de éxito comercial y amplia utilización en Chile.",
            tg2: "Creación del sistema de entibación de taludes de excavación mediante tensores a terreno. Este sistema creado por Alberto Maccioni se diseñó por primera vez en la obra del Hotel Sheraton San Cristóbal, siendo hoy en día masivamente utilizado en la construcción de edificios de varios subterráneos.",
            tp2: "Hotel Sheraton - Sistema de protección de taludes",
            tp3: "",
            tp4: "Presenta la información necesaria para diseñar naves de acero y sistemas de piso con vigas celulares Coprocell® (laminadas optimizadas), recogiendo la exitosa experiencia europea y norteamericana, adaptada para el caso chileno. Se obtiene estructuras de grandes luces libres a bajo costo, entre otras ventajas relevantes para ingenieros arquitectos y mandantes. Su contenido está dirigido a ingenieros, arquitectos y empresas del rubro de la construcción.",
            tp5: "FALTA INFORMACIÓN",
            tp6: "Sistema constructivo Joistec®",
            tp7: "Presenta la información necesaria para diseñar estructuras con el sistema Joistec®, recogiendo la exitosa experiencia europea y norteamericana, adaptada para el caso chileno. La principal característica del sistema es lograr estructuras muy económicas, con menores plazos constructivos, entre otros beneficios importantes.",
            third: true,
            media: [
                "https://pymecheck.s3.us-east-1.amazonaws.com/webpages/ac-ing/Sheraton-10b2-1030x525.jpg",
                "https://pymecheck.s3.us-east-1.amazonaws.com/webpages/ac-ing/SISTEMA-CONSTRUCTIVO-COPROCELL.png",
                "https://bming.cl/wp-content/uploads/2020/03/joistec-300x300.jpg"
            ]
        },
        "asesorias": {
            tp1: "ASESORÍAS",
            tg1: "Desarrollamos el Manual ICHA de Diseño de Estructuras de Acero en 2006, una referencia fundamental para profesionales del sector de la construcción en Chile.",
            tg2: "Nuestra experiencia también incluye el desarrollo del Manual del Sistema Zeta-Tubest de CINTAC y la revisión del Manual de Diseño Estructural de Productos CINTAC, contribuyendo a la estandarización y mejora de las prácticas constructivas.",
            tp2: "Manual ICHA de Diseño de Estructuras de Acero",
            tp3: " AC Proyectos y Asesorías | 2006",
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
            tp3: " AC Proyectos y Asesorías | 2006",
            tp4: "Evento 'La Estructura del Diseño'",
            tp5: " AC Proyectos y Asesorías | 2018",
            tp6: "Evento 'La Estructura del Diseño' - Vista del público",
            tp7: " AC Proyectos y Asesorías | 2018",
            tp8: "Evento 'La Estructura del Diseño'",
            tp9: " AC Proyectos y Asesorías | 2018",
            third: true,
            media: [
                "https://pymecheck.s3.us-east-1.amazonaws.com/webpages/ac-ing/EVENTO+2006+-+Alberto-Les-SawTeen-Victor+(1).JPG",
                "https://pymecheck.s3.us-east-1.amazonaws.com/webpages/ac-ing/EVENTO+2018+-+DISEN%CC%83O+LA+ESTRUCTURA+DEL+DISEN%CC%83O+2018.png",
                "https://pymecheck.s3.us-east-1.amazonaws.com/webpages/ac-ing/EVENTO+2006+-+SHERATON+AUDIENCIA.JPG",
                "https://pymecheck.s3.us-east-1.amazonaws.com/webpages/ac-ing/2018+Alberto-Les-SawTeen-Patricio+(1).JPG",
            ]
        }
    };

    let selectedFilter = "Habitacional";

    function handleFilterClick(service, filter) {
        if (service.metadata_filters) {
            selectedFilter = filter;
        }
    }
</script>

<!-- Asegurarse de que el link de Google Fonts esté en el head del documento -->
<svelte:head>
    <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap" rel="stylesheet"/>
</svelte:head>

<div class="overflow-hidden antialiased bg-black font-lato pb-12 md:pb-16 lg:pb-24 z-40 relative">
    <!-- Header Section -->
    <div class="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-16 md:pt-24">
            <div class="lg:col-span-8">
                <div class="prose max-w-none">
                    <h1 id="servicios" class="text-4xl md:text-5xl font-light tracking-tight text-white mb-8 font-lato">
                        NUESTROS SERVICIOS
                    </h1>
                   
                </div>
            </div>
        </div>
    </div>

    <!-- Servicios Section -->
    {#each Object.entries(data) as [slug, service], index}
        <div class="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 mt-8 md:mt-12 {index > 0 ? 'pt-16 border-t border-gray-600' : ''}">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <!-- Main Content -->
                <div class="lg:col-span-{service.metadata_showInfo === false ? '12' : '8'}">
                    <div class="prose max-w-none mb-8">
                        <h2 class="text-4xl md:text-5xl font-light tracking-tight text-white mb-8 font-lato">
                            {service.tp1}
                        </h2>
                        {#if service.metadata_filters}
                            <div class="flex flex-wrap gap-4 mb-8">
                                {#each service.m_filters as filter}
                                    <button 
                                        class="px-6 py-2.5 text-sm font-medium transition-all duration-200 rounded-full border {selectedFilter === filter ? 'bg-white text-black border-white hover:bg-gray-100' : 'text-gray-400 border-gray-700 hover:border-white hover:text-white'} focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 transform hover:scale-105"
                                        on:click={() => handleFilterClick(service, filter)}
                                    >
                                        {filter}
                                    </button>
                                {/each}
                            </div>
                            <p class="text-lg leading-relaxed text-white mb-6 font-lato font-normal">
                                {service.m_filterContent[selectedFilter].text}
                            </p>
                            
                            {#if service.m_filterContent[selectedFilter].details.length > 0}
                                <ul class="list-none space-y-3 mb-12">
                                    {#each service.m_filterContent[selectedFilter].details as detail, i}
                                        {#if i === 0 && detail.includes(":")}
                                            <li class="text-white font-lato font-medium text-lg">{detail}</li>
                                        {:else if i > 0 && service.m_filterContent[selectedFilter].details[0].includes(":")}
                                            <li class="text-white font-lato ml-4 flex items-start">
                                                <span class="inline-block w-1.5 h-1.5 rounded-full bg-white mt-2 mr-2"></span>
                                                <span>{detail}</span>
                                            </li>
                                        {:else}
                                            <li class="text-white font-lato flex items-start">
                                                <span class="inline-block w-1.5 h-1.5 rounded-full bg-white mt-2 mr-2"></span>
                                                <span>{detail}</span>
                                            </li>
                                        {/if}
                                    {/each}
                                </ul>
                            {:else}
                                <div class="mb-12"></div>
                            {/if}
                        
                            <figure class="mb-8 md:mb-12">
                                <div class="relative aspect-[16/9] overflow-hidden">
                                    <img 
                                        src={service.m_filterContent[selectedFilter].mainImage}
                                        alt={service.m_filterContent[selectedFilter].mainTitle}
                                        class="w-full h-full object-cover"
                                    />
                                </div>
                                <figcaption class="mt-3 text-sm text-white font-lato">
                                    {service.m_filterContent[selectedFilter].mainTitle}
                                    <span class="text-gray-400">{service.m_filterContent[selectedFilter].mainLocation}</span>
                                </figcaption>
                            </figure>
                        {:else if service.metadata_showInfo !== false}
                            <p class="text-lg leading-relaxed text-white mb-12 font-lato font-normal">
                                {service.tg1}
                            </p>
                        
                            {#if service.media && service.media.length > 0}
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
                                    <figcaption class="mt-3 text-sm text-white font-lato">
                                        {service.tp2}
                                        {#if service.tp3 !== "FALTA INFORMACIÓN"}
                                            <span class="text-gray-400">{service.tp3}</span>
                                        {/if}
                                    </figcaption>
                                </figure>
                            {/if}

                            <div class="prose max-w-none mb-8 md:mb-12">
                                <p class="text-lg leading-relaxed text-white font-lato font-normal">
                                    {service.tg2}
                                </p>
                            </div>

                            <!-- Nueva imagen adicional para la sección EVENTOS -->
                            {#if slug === 'eventos' && service.media && service.media.length > 3}
                                <figure class="mb-8 md:mb-12">
                                    <div class="relative aspect-[16/9] overflow-hidden">
                                        {#if service.media[3].endsWith('.mp4')}
                                            <video 
                                                src={service.media[3]}
                                                title={service.tp8}
                                                class="w-full h-full object-cover"
                                                autoplay 
                                                muted 
                                                loop 
                                                playsinline 
                                                preload="auto"
                                            ></video>
                                        {:else}
                                            <img 
                                                src={service.media[3]}
                                                alt={service.tp8}
                                                class="w-full h-full object-cover"
                                            />
                                        {/if}
                                    </div>
                                    <figcaption class="mt-3 text-sm text-white font-lato">
                                        {service.tp8}
                                        {#if service.tp9 !== "FALTA INFORMACIÓN"}
                                            <span class="text-gray-400">{service.tp9}</span>
                                        {/if}
                                    </figcaption>
                                </figure>
                            {/if}
                        {/if}
                    </div>
                </div>

                <!-- Right Image Section -->
                {#if service.metadata_filters}
                    <div class="lg:col-span-4 lg:border-l border-gray-600 lg:pl-8 mt-8 lg:mt-0">
                        <figure class="mb-8">
                            <div class="relative aspect-[3/4] overflow-hidden">
                                <img 
                                    src={service.m_filterContent[selectedFilter].sideImage}
                                    alt={service.m_filterContent[selectedFilter].sideTitle}
                                    class="w-full h-full object-cover"
                                />
                            </div>
                            <figcaption class="mt-3 text-sm text-white font-lato">
                                {service.m_filterContent[selectedFilter].sideTitle}
                                <span class="text-gray-400">{service.m_filterContent[selectedFilter].sideLocation}</span>
                            </figcaption>
                        </figure>
                    </div>
                {:else if service.metadata_showInfo !== false}
                    <div class="lg:col-span-4 lg:border-l border-gray-600 lg:pl-8 mt-8 lg:mt-0">
                        {#if service.media && service.media.length > 1}
                            <figure class="mb-8">
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
                                <figcaption class="mt-3 text-sm text-white font-lato">
                                    {service.tp4}
                                    {#if service.tp5 !== "FALTA INFORMACIÓN"}
                                        <span class="text-gray-400">{service.tp5}</span>
                                    {/if}
                                </figcaption>
                            </figure>
                        {/if}

                        {#if service.third && service.media && service.media.length > 2}
                            <figure>
                                <div class="relative aspect-[3/4] overflow-hidden">
                                    {#if service.media[2].endsWith('.mp4')}
                                        <video 
                                            src={service.media[2]}
                                            title={service.tp6}
                                            class="w-full h-full object-cover"
                                            autoplay 
                                            muted 
                                            loop 
                                            playsinline 
                                            preload="auto"
                                        ></video>
                                    {:else}
                                        <img 
                                            src={service.media[2]}
                                            alt={service.tp6}
                                            class="w-full h-full object-cover"
                                        />
                                    {/if}
                                </div>
                                <figcaption class="mt-3 text-sm text-white font-lato">
                                    {service.tp6}
                                    {#if service.tp7}
                                        <span class="text-gray-400">{service.tp7}</span>
                                    {/if}
                                </figcaption>
                            </figure>
                        {/if}
                    </div>
                {/if}
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