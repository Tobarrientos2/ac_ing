<script lang="ts">
    import { page } from '$app/stores';
    import { onMount } from 'svelte';
    import Info from '$lib/components/Info.svelte';
    import ErrorComponent from '$lib/components/ErrorComponent.svelte';
    import FortyNineNorth from '$lib/components/FortyNineNorth.svelte';

    let sectionData = null;
    let sectionType = null;
    let component = null;

    onMount(async () => {
        const slug = $page.params.slug;

        // Rutas específicas
        if (slug === 'info') {
            component = Info;
            return; // No cargar datos del JSON
        }

        // Cambiar la ruta del fetch al nuevo archivo buildings.json
        const res = await fetch('/src/lib/data/buildings.json');
        const data = await res.json();

        let found = false;

        for (const key of ['buildings', 'systems', 'manuals']) {
            const item = data[key].find(item => item.slug === slug);
            if (item) {
                sectionData = item;
                sectionType = key;
                found = true;
                break;
            }
        }

        if (!found) {
            component = ErrorComponent;
        } else if (sectionType === 'buildings') {
            component = FortyNineNorth;
        }
    });
</script>

{#if component}
    <svelte:component this={component} />
{:else if sectionData}
    {#if sectionType === 'buildings'}
        <FortyNineNorth />
    {:else}
        <h1>{sectionData.h1}</h1>
        
        {#if sectionType === 'systems'}
            {#if sectionData.image}
                <img src={sectionData.image} alt={sectionData.h1} />
            {:else if sectionData.images}
                {#each sectionData.images as image}
                    <img src={image} alt={sectionData.h1} />
                {/each}
            {/if}
        {:else if sectionType === 'manuals'}
            {#if sectionData.image}
                <img src={sectionData.image} alt={sectionData.h1} />
            {/if}
        {/if}
    {/if}

    <p>Slug: {$page.params.slug}</p>
{:else}
    <p>Cargando...</p>
{/if}

<style>
    img {
        max-width: 300px;
        height: auto;
    }
</style>
