<script>
    import { onMount } from 'svelte';
    import SectionWrapper from '$lib/components/SectionWrapper.svelte';
    import EntrySection from '$lib/components/EntrySection.svelte';
    import Disciplines from '$lib/components/Disciplines.svelte';
    import AboutSection from '$lib/components/AboutSection.svelte';
    import First from '$lib/components/First.svelte';
    import Carrusel from '$lib/components/Carrusel.svelte';
    import NewsFullSection from '$lib/components/NewsFullSection.svelte';
    import Mapa from '$lib/components/Mapa.svelte';
</script>

<SectionWrapper nonMovingComponent={First}>
    <EntrySection contentComponent={Mapa} />
    
</SectionWrapper>



