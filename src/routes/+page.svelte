<script>
    import { onMount } from 'svelte';
    import SectionWrapper from '$lib/components/SectionWrapper.svelte';
    import EntrySection from '$lib/components/EntrySection.svelte';
    import First from '$lib/components/Mine.svelte';
</script>

<SectionWrapper nonMovingComponent={First}>
    <EntrySection contentComponent={First} />
</SectionWrapper>


