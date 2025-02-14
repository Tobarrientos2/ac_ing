<script lang="ts">
  import NewsHeader from '$lib/components/NewsHeader.svelte';
  import { page } from '$app/stores';
  import { buildings } from '$lib/config/buildings';
    import DetailNews from '$lib/components/DetailNews.svelte';

  $: building = buildings.find(b => b.slug === $page.params.buildingSlug);
  
  // Add this for debugging
  $: console.log('Building data:', building);
</script>

{#if building}
  <NewsHeader
    title={building.title}
    imageUrl={building.image}
    description={building.description}
    details={building.details}
    category="Buildings"
  />
  <DetailNews></DetailNews>
  {:else}

  <div class="w-full min-h-screen flex items-center justify-center">
    <p class="text-xl">Building not found</p>
  </div>
{/if}
