<script>
  import { onMount, onDestroy } from 'svelte';

  let container;
  let current = 0; // posición actual interpolada
  let target = 0;  // posición deseada (valor de window.scrollY)
  const ease = 0.1;  // factor de suavizado; ajusta este valor para mayor o menor suavidad
  let rafId = 0;

  // Función de interpolación lineal
  function lerp(a, b, n) {
    return (1 - n) * a + n * b;
  }

  // Función de animación: actualiza la posición del contenedor
  function smoothScroll() {
    current = lerp(current, target, ease);
    container.style.transform = `translate3d(0, -${current}px, 0)`;
    rafId = requestAnimationFrame(smoothScroll);
  }

  onMount(() => {
    // Para permitir que el scroll nativo se mantenga, definimos la altura del body
    // igual a la altura total del contenido del contenedor
    document.body.style.height = `${container.getBoundingClientRect().height}px`;

    // Actualizamos el target en cada evento de scroll
    const updateScrollTarget = () => {
      target = window.scrollY;
    };
    window.addEventListener('scroll', updateScrollTarget);

    // Iniciamos la animación del smooth scroll
    rafId = requestAnimationFrame(smoothScroll);

    // Limpieza: remueve listener y cancela la animación al destruir el componente
    onDestroy(() => {
      window.removeEventListener('scroll', updateScrollTarget);
      cancelAnimationFrame(rafId);
    });
  });
</script>

<style>
  /* El contenedor se posiciona de forma fija para poder aplicar el transform */
  .scroll-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    will-change: transform;
  }
</style>

<!-- El contenedor que envuelve nuestro contenido y al que se aplicará la transformación -->
<div bind:this={container} class="scroll-container">
  <slot />
</div> 