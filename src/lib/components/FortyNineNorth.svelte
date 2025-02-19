<script lang="ts">
    import { page } from '$app/stores';
    import { onMount } from 'svelte';

    let currentBuilding = null;
    let imageUrl = '';

    onMount(async () => {
        const slug = $page.params.slug;
        const res = await fetch('/src/lib/data/buildings.json');
        const data = await res.json();

        // Buscar en todas las secciones
        for (const section of ['buildings', 'systems', 'manuals']) {
            const found = data[section].find(item => item.slug === slug);
            if (found) {
                currentBuilding = found;
                // Si hay múltiples imágenes, tomar la primera, si no, usar la imagen única
                imageUrl = found.images ? found.images[0] : found.image;
                break;
            }
        }
    });
</script>

<div class="cursor-auto bg-white font-sans text-[#200314] text-base overscroll-none leading-6 m-0 box-border scrollbar-none antialiased">
    <div class="box-border antialiased">
        <div class="block fixed inset-[0%_auto_auto_0%] box-border"> </div>
        
        <div class="hidden z-[9999] fixed inset-0">
            <div class="flex flex-col justify-between items-end absolute inset-0">
                <div class="w-0 bg-[#2A2A2A] flex-1 h-full"></div>
                <div class="w-0 bg-[#2A2A2A] flex-1 h-full"></div>
                <div class="w-0 bg-[#2A2A2A] flex-1 h-full"></div>
            </div>
        </div>

        <div class="opacity-100">
            <section class="text-black relative mb-32">
                <div class="w-full px-[43.1953px]">
                    <div class="mx-auto w-full max-w-full">
                        <div class="pb-16 pt-32">
                            <div class="gap-5 flex flex-col">
                                <div class="overflow-hidden max-w-[1760px]">
                                    <h1 class="text-[50.0835px] font-sans tracking-[-1.50251px] font-normal leading-[55.0919px] m-0">
                                        {#if currentBuilding}
                                            <span class="block text-start w-full">
                                                {currentBuilding.h1}
                                            </span>
                                        {:else}
                                            <!-- Mantener el texto por defecto si no hay building -->
                                            <span style="display: block; text-align: start; width: 100%;">
                                                <span style="display: inline-block;">Con un enfoque constante en la </span>
                                                <span style="display: inline-block; position: relative; font-family:Recklessneue, sans-serif; font-style:italic;">innovación,</span>
                                                <span style="display: inline-block;"> economía y seguridad estructural,</span>
                                            </span>
                                            <span style="display: block; text-align: start; width: 100%;">
                                                <span style="display: inline-block;">nos destacamos por la capacidad de ofrecer </span>
                                                <span style="display: inline-block; position: relative; font-family:Recklessneue, sans-serif; font-style:italic;">diseños eficientes</span>
                                            </span>
                                            <span style="display: block; text-align: start; width: 100%;">
                                                <span style="display: inline-block;">y de </span>
                                                <span style="display: inline-block; position: relative; font-family:Recklessneue, sans-serif; font-style:italic;">alta calidad</span>
                                                <span style="display: inline-block;">.</span>
                                            </span>
                                        {/if}
                                    </h1>
                                </div>
                                <div class="z-10 rounded-[14.9712px] w-full relative overflow-hidden mb-16">
                                    <div class="translate-0 rotate-0 scale-100 w-full relative">
                                        <div class="w-0 z-1 bg-white block absolute inset-[0%_0%_0%_auto]"></div>
                                        {#if imageUrl}
                                            <img 
                                                src={imageUrl} 
                                                loading="lazy" 
                                                width="1289" 
                                                height="756" 
                                                alt={currentBuilding?.h1 || 'Building image'} 
                                                class="translate-0 rotate-0 scale-100 object-cover overflow-clip aspect-video w-full h-auto -mt-[50px] max-w-full"
                                            >
                                        {/if}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="translate-0 rotate-0 scale-100 bg-[#2A2A2A] -z-10 absolute w-full" style="height: 30%; bottom: 0;"></div>
            </section>
        </div>
    </div>
    <div  style="box-sizing:border-box;-webkit-font-smoothing:antialiased;">
        <div style="box-sizing:border-box;-webkit-font-smoothing:antialiased;"></div>
    </div>


</div>
