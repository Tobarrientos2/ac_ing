<script>
  import { onMount, onDestroy } from 'svelte';
  let container;

  onMount(async () => {
    // Importar dinámicamente locomotive-scroll
    const LocomotiveScroll = (await import('locomotive-scroll')).default;
    
    const scroll = new LocomotiveScroll({
      el: container,
      smooth: true,
      multiplier: 0.7, // Ajusta la velocidad del scroll
      lerp: 0.9, // Factor de interpolación lineal
      smartphone: {
        smooth: true
      },
      tablet: {
        smooth: true
      }
    });

    // Actualizar Locomotive Scroll cuando cambie el contenido
    const resizeObserver = new ResizeObserver(() => {
      scroll.update();
    });

    resizeObserver.observe(container);

    return () => {
      scroll.destroy();
      resizeObserver.disconnect();
    };
  });
</script>

<style>
  /* Estilos necesarios para Locomotive Scroll */
  :global(html.has-scroll-smooth) {
    overflow: hidden;
  }

  :global(.has-scroll-smooth body) {
    overflow: hidden;
  }

  .scroll-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    will-change: transform;
  }
</style>

<div bind:this={container} data-scroll-container class="scroll-container">
  <slot />
</div>