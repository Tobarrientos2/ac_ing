<script>
    import SectionWrapper from "$lib/components/SectionWrapper.svelte";
    import Disciplines from "$lib/components/Disciplines.svelte";
    import EntrySection from '$lib/components/EntrySection.svelte';
    import Carrusel from '$lib/components/Carrusel.svelte';
    import First from '$lib/components/First.svelte';
    import NewsFullSection from "$lib/components/NewsFullSection.svelte";
</script>

<SectionWrapper nonMovingComponent={First}>
    <EntrySection contentComponent={NewsFullSection} />
    <NewsSection />
</SectionWrapper>