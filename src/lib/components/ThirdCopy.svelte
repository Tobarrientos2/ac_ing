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
                    sideImage: "https://pymecheck.s3.us-east-1.amazonaws.com/webpages/ac-ing/Edificio+El+Plomo+-+V7.jpg",
                    mainTitle: "Edificio Alonso",
                    sideTitle: "Edificio Alto El Plomo",
                    mainLocation: "",
                    sideLocation: "",
                    extraImages: [
                        {
                            image: "https://pymecheck.s3.us-east-1.amazonaws.com/webpages/ac-ing/estoril-I.jpg",
                            title: "Edificio Estoril I",
                            location: ""
                        }
                    ]
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
            tp2: "Edificio Alonso",
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
            tp3: "AC Proyectos y Asesorías | 2006",
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
            tg2: "En 2018 realizamos el evento 'La Estructura del Diseño' haciendo alusión a su libro que narra su carrera como ingeniero estructural y su colaboración con grandes arquitectos.",
            tp2: "Visita de Leslie E. Robertson a Chile, 2006",
            tp3: "",
            tp4: "Evento 'La Estructura del Diseño', 2018",
            tp5: "",
            tp6: "Evento 'La Estructura del Diseño'",
            tp7: "",
            tp8: "Visita de Leslie E. Robertson a Chile, 2018",
            tp9: "",
            third: true,
            media: [
                "https://pymecheck.s3.us-east-1.amazonaws.com/webpages/ac-ing/EVENTO+2006+-+Alberto-Les-SawTeen-Victor+(1).JPG",
                "https://pymecheck.s3.us-east-1.amazonaws.com/webpages/ac-ing/EVENTO+2018+-+DISEN%CC%83O+LA+ESTRUCTURA+DEL+DISEN%CC%83O+2018.png",
                "https://pymecheck.s3.us-east-1.amazonaws.com/webpages/ac-ing/EVENTO+2006+-+SHERATON+AUDIENCIA.JPG",
                "https://pymecheck.s3.us-east-1.amazonaws.com/webpages/ac-ing/2018+Alberto-Les-SawTeen-Patricio+(1).JPG",
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

                            {#if slug === 'desarrollo-sistemas-innovativos' && service.media && service.media.length > 1}
                                <!-- Imagen Coprocell -->
                                <figure class="mb-8 md:mb-12">
                                    <div class="relative aspect-[16/9] overflow-hidden">
                                        <img 
                                            src={service.media[1]}
                                            alt="Sistema Constructivo Coprocell"
                                            class="w-full h-full object-cover"
                                        />
                                    </div>
                                    <figcaption class="mt-3 text-sm text-white font-lato">
                                        {service.tp4}
                                        {#if service.tp5 !== "FALTA INFORMACIÓN"}
                                            <span class="text-gray-400">{service.tp5}</span>
                                        {/if}
                                    </figcaption>
                                </figure>

                                <!-- Imagen Joistec -->
                                <figure class="mb-8 md:mb-12">
                                    <div class="relative aspect-[16/9] overflow-hidden">
                                        <img 
                                            src={service.media[2]}
                                            alt="Sistema Constructivo Joistec"
                                            class="w-full h-full object-cover"
                                        />
                                    </div>
                                    <figcaption class="mt-3 text-sm text-white font-lato">
                                        {service.tp6}
                                        {#if service.tp7}
                                            <span class="text-gray-400">{service.tp7}</span>
                                        {/if}
                                    </figcaption>
                                </figure>
                            {/if}

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
                                        {#if service.event_2006}
                                            <div class="mt-2 space-y-1">
                                                <div class="text-gray-400">
                                                    <span class="text-white">Partner:</span> {service.event_2006.partners.join(" y ")}
                                                </div>
                                                <div class="text-gray-400">
                                                    <span class="text-white">Patrocinio:</span> {service.event_2006.sponsors.join(", ")}
                                                </div>
                                            </div>
                                        {/if}
                                    </figcaption>
                                </figure>

                                <!-- Nueva imagen de Leslie Robertson 2018 -->
                                <figure class="mb-8 md:mb-12">
                                    <div class="relative aspect-[16/9] overflow-hidden">
                                        <img 
                                            src="https://pymecheck.s3.us-east-1.amazonaws.com/webpages/ac-ing/Leslie+Robertson+2018.JPG"
                                            alt="Leslie Robertson 2018"
                                            class="w-full h-full object-cover"
                                        />
                                    </div>
                                    <figcaption class="mt-3 text-sm text-white font-lato">
                                        Leslie Robertson 2018
                                    </figcaption>
                                </figure>
                            {/if}

                            <!-- Partners and Sponsors Section for Eventos -->
                            {#if slug === 'eventos'}
                                <div class="mt-12 space-y-8">
                                    <!-- News Link -->
                                    <div>
                                        <h3 class="text-xl font-light text-white mb-4">Cobertura del Evento</h3>
                                        <a href={service.news_link} target="_blank" rel="noopener noreferrer" 
                                           class="text-blue-400 hover:text-blue-300 transition-colors duration-200">
                                            Leer más en Colegio de Ingenieros →
                                        </a>
                                    </div>

                                    <!-- Partners -->
                                    <div>
                                        <h3 class="text-xl font-light text-white mb-4">Partners</h3>
                                        <div class="flex flex-wrap gap-2">
                                            {#each service.partners as partner}
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
                                            {#each service.sponsors as sponsor}
                                                <span class="px-3 py-1 bg-gray-800 text-white rounded-full text-sm">
                                                    {sponsor}
                                                </span>
                                            {/each}
                                        </div>
                                    </div>
                                </div>
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
                        {#if service.m_filterContent[selectedFilter].extraImages}
                            {#each service.m_filterContent[selectedFilter].extraImages as extraImage}
                                <figure class="mb-8">
                                    <div class="relative aspect-[3/4] overflow-hidden">
                                        <img 
                                            src={extraImage.image}
                                            alt={extraImage.title}
                                            class="w-full h-full object-cover"
                                        />
                                    </div>
                                    <figcaption class="mt-3 text-sm text-white font-lato">
                                        {extraImage.title}
                                        <span class="text-gray-400">{extraImage.location}</span>
                                    </figcaption>
                                </figure>
                            {/each}
                        {/if}
                    </div>
                {:else if service.metadata_showInfo !== false}
                    <div class="lg:col-span-4 lg:border-l border-gray-600 lg:pl-8 mt-8 lg:mt-0">
                        {#if service.third && service.media && service.media.length > 2 && slug !== 'desarrollo-sistemas-innovativos'}
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