<!-- Asegurarse de que el link de Google Fonts esté en el head del documento -->
<svelte:head>
    <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap" rel="stylesheet"/>
</svelte:head>

<script lang="ts">
    export let data: Record<string, any>;
    export let selectedFilter: string;
    export let handleFilterClick: (service: any, filter: string) => void;
</script>

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