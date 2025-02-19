<script lang="ts">
    import { slide } from 'svelte/transition';
    import { quintOut } from 'svelte/easing';

    // Define the accordion items
    const accordionItems = [
        { 
            title: 'Ingeniería Estructural', 
            content: 'Más de 1 millón de m2 proyectados en naves industriales. Diseñamos y calculamos estructuras para todo tipo de edificaciones, desde naves industriales hasta edificios residenciales.'
        },
        { 
            title: 'Revisión de Proyectos de Ingeniería Estructural', 
            content: 'Se cuenta con registro de Revisión Estructural en PRIMERA CATEGORÍA, lo que significa estar autorizados para revisar todo tipo de proyectos estructurales, inclusive grandes obras de infraestructura. De acuerdo al decreto de ley 19.748 del año 2005, se deberán revisar todos los proyectos de cálculo estructural.'
        },
        { 
            title: 'Desarrollo de Sistemas Innovativos', 
            content: 'Más de 300 proyectos de edificios de hormigón armado. Implementamos soluciones innovadoras y eficientes para cada proyecto, utilizando las últimas tecnologías y metodologías en ingeniería estructural.'
        },
        { 
            title: 'Asesorías', 
            content: 'Brindamos asesoría especializada en ingeniería estructural, con más de 2.400 obras proyectadas a la fecha. Nuestro equipo de expertos está disponible para resolver cualquier desafío estructural.'
        },
        { 
            title: 'Eventos', 
            content: 'Participamos y organizamos eventos relacionados con la ingeniería estructural, compartiendo conocimientos y experiencias con la comunidad profesional.'
        }
    ];

    // Initialize an array to track which items are open
    let openItems = new Array(accordionItems.length).fill(false);

    // Function to toggle the open state of an item
    function toggleItem(index: number) {
        // Crear una nueva copia del array para asegurar la reactividad
        openItems = openItems.map((item, i) => i === index ? !item : item);
    }
</script>

<style>
    @font-face {
        font-family: 'Calibri Light';
        src: url('/fonts/calibri-light.ttf') format('truetype');
        font-weight: 300;
        font-style: normal;
    }

    .calibri-light {
        font-family: 'Calibri Light', sans-serif;
    }

    circle {
        transform-origin: center;
        transform: rotate(-90deg);
    }
</style>

<div class="z-[1] bg-white relative">
    <div class="px-2 md:px-4 lg:px-6 max-w-[1920px] mx-auto py-12">
        <div class="relative flex flex-col z-[1]">
            <div class="flex flex-col gap-2">
                <div class="text-sm text-gray-500">Más acerca de</div>
                <h2 class="calibri-light text-4xl lg:text-6xl font-light leading-tight tracking-tight my-0">Lo que hacemos</h2>
            </div>
        </div>

        <div class="grid lg:grid-cols-2 gap-8 mt-8">
            <div class="hidden lg:block">
                <img
                    src="/sandvik.jpg"
                    alt="Servicios"
                    class="w-full h-full object-cover rounded-lg"
                />
            </div>

            <div class="w-full">
                <div class="flex justify-between w-full mt-8 pb-8 gap-8">
                    <div class="flex flex-col w-full">
                        {#each accordionItems as item, index}
                            <div data-index={index + 1} class="relative flex cursor-pointer py-6 gap-4" on:click={() => toggleItem(index)}>
                                <div class="absolute inset-0 h-[1px] bg-gray-200"></div>
                                <div class="w-full">
                                    <div class="flex items-center gap-4 mb-2">
                                        <div class="accordion-icon relative w-10 h-10 transition-transform duration-300 group">
                                            <div class="absolute inset-0 flex items-center justify-center">
                                                <svg class="w-10 h-10 transform -rotate-90" viewBox="0 0 40 40">
                                                    <circle 
                                                        cx="20" 
                                                        cy="20" 
                                                        r="19" 
                                                        fill="white"
                                                        stroke="#E5E5E5"
                                                        stroke-width="2"
                                                    />
                                                    <circle 
                                                        cx="20" 
                                                        cy="20" 
                                                        r="19"
                                                        fill="none"
                                                        stroke="black"
                                                        stroke-width="2"
                                                        class="transition-all duration-800 ease-out"
                                                        style="stroke-dasharray: 120; stroke-dashoffset: {openItems[index] ? '0' : '120'};"
                                                    />
                                                    <g class="transform translate-[-50%,-50%]" style="transform-origin: center;">
                                                        <line 
                                                            x1="15" 
                                                            y1="20" 
                                                            x2="25" 
                                                            y2="20" 
                                                            stroke="black" 
                                                            stroke-width="2"
                                                            class="transition-all duration-500 group-hover:stroke-white"
                                                        />
                                                        <line 
                                                            x1="20" 
                                                            y1="15" 
                                                            x2="20" 
                                                            y2="25" 
                                                            stroke="black" 
                                                            stroke-width="2"
                                                            class="transition-all duration-500 {openItems[index] ? 'scale-y-0' : ''} group-hover:stroke-white"
                                                        />
                                                    </g>
                                                </svg>
                                            </div>
                                        </div>
                                        <h4 class="calibri-light text-2xl lg:text-4xl tracking-normal font-light leading-tight my-0 text-gray-900">{item.title}</h4>
                                    </div>
                                    {#if openItems[index]}
                                        <div transition:slide|local={{ duration: 300, easing: quintOut }} class="w-full pl-14">
                                            <div class="max-w-xl">
                                                <p class="calibri-light text-gray-600 text-lg lg:text-xl leading-relaxed my-0">{item.content}</p>
                                                <div class="w-full pt-4"></div>
                                            </div>
                                        </div>
                                    {/if}
                                </div>
                            </div>
                        {/each}
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>