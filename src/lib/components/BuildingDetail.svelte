<script lang="ts">
  import { page } from '$app/stores';
  import { onMount } from 'svelte';
  import { buildings } from '$lib/config/buildings';

  $: building = buildings.find(b => b.slug === $page.params.buildingSlug);
</script>

{#if building}
<div class="w-full min-h-screen bg-white py-24 px-8">
  <div class="max-w-6xl mx-auto">
    <h1 class="text-5xl font-light mb-8">{building.title}</h1>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div class="aspect-video relative overflow-hidden rounded-lg">
        <img 
          src={building.image} 
          alt={building.title}
          class="w-full h-full object-cover"
        />
      </div>
      
      <div class="space-y-6">
        <div class="text-xl">
          <h2 class="text-2xl font-medium mb-4">Detalles del Proyecto</h2>
          <p class="text-gray-600">{building.description || 'Información detallada del proyecto próximamente.'}</p>
        </div>

        {#if building.details}
          <div class="border-t pt-6">
            <h3 class="text-xl font-medium mb-4">Especificaciones</h3>
            <ul class="space-y-2">
              {#each Object.entries(building.details) as [key, value]}
                <li><span class="font-medium">{key}:</span> {value}</li>
              {/each}
            </ul>
          </div>
        {/if}
      </div>
    </div>
  </div>
</div>
{:else}
<div class="w-full min-h-screen flex items-center justify-center">
  <p class="text-2xl text-gray-600">Edificio no encontrado</p>
</div>
{/if}