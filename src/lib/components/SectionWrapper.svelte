<script>
    import NonMovingSection from '$lib/components/NonMovingSection.svelte';
    import EntrySection from '$lib/components/EntrySection.svelte';
    import First from '$lib/components/First.svelte';
    import Card from '$lib/components/Card.svelte';
    import Disciplines from './Disciplines.svelte';
    import Carrusel from './Carrusel.svelte';
</script>

<div class="relative w-full">
    <NonMovingSection>
        <First />
    </NonMovingSection>
  <EntrySection>
    <Carrusel></Carrusel>
  </EntrySection>
</div>
