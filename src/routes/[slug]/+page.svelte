<script>
    import { page } from '$app/stores';
    import { routes } from '$lib/config/routes';
    import SectionWrapper from "$lib/components/SectionWrapper.svelte";
    import EntrySection from '$lib/components/EntrySection.svelte';
    import First from '$lib/components/First.svelte';

    $: currentRoute = routes[$page.params.slug];
</script>

<SectionWrapper nonMovingComponent={First}>
    {#if currentRoute}
        <EntrySection contentComponent={currentRoute.component} />
    {:else}
        <EntrySection contentComponent={null} />
    {/if}
</SectionWrapper>