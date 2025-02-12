<script>
  export let contentComponent = undefined;
</script>

<section 
  class="absolute bottom-0 left-0 w-full h-screen flex items-center justify-center bg-white"
  data-scroll
  data-scroll-section
>
  {#if contentComponent}
    <svelte:component this={contentComponent} />
  
  {/if}
</section>

<style>
  section {
    transform: translateY(100%);
    background-color: transparent;
    z-index: 10;
  }

  section:global(.is-inview) {
    transform: translateY(0);
    transition: transform 1s cubic-bezier(0.23, 1, 0.32, 1);
  }
</style>
