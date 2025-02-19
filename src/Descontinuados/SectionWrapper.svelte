<script>
  import NonMovingSection from './NonMovingSection.svelte';
  export let nonMovingComponent = undefined;
</script>

<div class="relative" data-scroll-container>
  <NonMovingSection>
    {#if nonMovingComponent}
      <svelte:component this={nonMovingComponent} />
    {:else}
      <slot/>
    {/if}
  </NonMovingSection>
  <div class="relative min-h-[200vh] z-[5]">
    <slot />
  </div>
</div>
