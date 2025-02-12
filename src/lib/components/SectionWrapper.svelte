<script>
  import NonMovingSection from './NonMovingSection.svelte';
</script>

<div class="relative" data-scroll-container>
  <NonMovingSection />
  <div class="relative min-h-[200vh]">
    <slot />
  </div>
</div>
