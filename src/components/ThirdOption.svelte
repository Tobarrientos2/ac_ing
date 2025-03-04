<script>
    const data = {
        tp1: "INGENIERÍA ESTRUCTURAL",
        metadata_filters: true,
        m_filters: ["Oficinas", "Hoteles", "Industria", "Entretenimiento"],
        m_selectedFilter: "Oficinas",
        m_filterContent: {
            "Oficinas": {
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
            "Industria": {
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
            "Entretenimiento": {
                text: "Creamos estructuras para espacios de entretenimiento que combinan seguridad y diseño innovador, desde complejos deportivos hasta centros de entretenimiento comercial.",
                details: [],
                mainImage: "https://pymecheck.s3.us-east-1.amazonaws.com/webpages/ac-ing/cine_hoyts.avif",
                sideImage: "https://pymecheck.s3.us-east-1.amazonaws.com/webpages/ac-ing/Estadio+La+Calera.jpg",
                mainTitle: "Cine Hoyts La Reina",
                sideTitle: "Estadio La Calera",
                mainLocation: "Santiago, Chile",
                sideLocation: "La Calera, Chile"
            }
        }
    };

    let selectedFilter = "Oficinas";

    function handleFilterClick(filter) {
        selectedFilter = filter;
    }
</script>

<section class="bg-black text-white py-20">
    <div class="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div class="lg:col-span-8">
                <div class="prose max-w-none mb-8">
                    <h2 class="text-4xl md:text-5xl font-light tracking-tight text-white mb-8 font-lato">
                        {data.tp1}
                        </h2>
                    <div class="flex flex-wrap gap-4 mb-8">
                        <p class="text-lg leading-relaxed text-white font-lato font-normal flex items-center">Para</p>
                        {#each data.m_filters as filter}
                            <button 
                                class="px-6 py-2.5 text-sm font-medium transition-all duration-200 rounded-full border {selectedFilter === filter ? 'bg-white text-black border-white hover:bg-gray-100' : 'text-gray-400 border-gray-700 hover:border-white hover:text-white'} focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 transform hover:scale-105"
                                on:click={() => handleFilterClick(filter)}
                            >
                                {filter}
                            </button>
                        {/each}
                    </div>
                    <p class="text-lg leading-relaxed text-white mb-6 font-lato font-normal">
                        {data.m_filterContent[selectedFilter].text}
                    </p>
                    
                    {#if data.m_filterContent[selectedFilter].details.length > 0}
                        <ul class="list-none space-y-3 mb-12">
                            {#each data.m_filterContent[selectedFilter].details as detail, i}
                                {#if i === 0 && detail.includes(":")}
                                    <li class="text-white font-lato font-medium text-lg">{detail}</li>
                                {:else if i > 0 && data.m_filterContent[selectedFilter].details[0].includes(":")}
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
                                src={data.m_filterContent[selectedFilter].mainImage}
                                alt={data.m_filterContent[selectedFilter].mainTitle}
                                class="w-full h-full object-cover"
                            />
                        </div>
                        <figcaption class="mt-3 text-sm text-white font-lato">
                            {data.m_filterContent[selectedFilter].mainTitle}
                            <span class="text-gray-400">{data.m_filterContent[selectedFilter].mainLocation}</span>
                        </figcaption>
                    </figure>
                </div>
                    </div>

            <div class="lg:col-span-4 lg:border-l border-gray-600 lg:pl-8 mt-8 lg:mt-0">
                <figure class="mb-8">
                    <div class="relative aspect-[3/4] overflow-hidden">
                        <img 
                            src={data.m_filterContent[selectedFilter].sideImage}
                            alt={data.m_filterContent[selectedFilter].sideTitle}
                            class="w-full h-full object-cover"
                        />
                    </div>
                    <figcaption class="mt-3 text-sm text-white font-lato">
                        {data.m_filterContent[selectedFilter].sideTitle}
                        <span class="text-gray-400">{data.m_filterContent[selectedFilter].sideLocation}</span>
                    </figcaption>
                </figure>
                </div>
        </div>
    </div>
</section>

<style>
    :global(.font-lato) {
        font-family: 'Lato', sans-serif;
    }
</style>