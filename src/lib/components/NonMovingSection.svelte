<script>
  import { onMount } from 'svelte';
  let darkness = 0;

  // La función calcula cuánto se oscurece la sección según el scroll.
  function handleScroll() {
    // Calcula un factor entre 0 y 1 (0 cuando no hay scroll, 1 cuando se ha hecho scroll de 1 viewport de altura o más)
    darkness = Math.min(window.scrollY / window.innerHeight, 1);
  }

  onMount(() => {
    window.addEventListener('scroll', handleScroll);
    // Se remueve el event listener cuando el componente se destruye.
    return () => window.removeEventListener('scroll', handleScroll);
  });
</script>

<!-- 
  Se utiliza Tailwind para posicionar y centrar el contenido.
  El slot permite insertar cualquier componente (por ejemplo, First.svelte).
  La propiedad 'transition-colors' junto con duración y easing asegura una transición suave.
  El estilo inline calcula el color de fondo: 
  - Con darkness=0, la fórmula genera rgb(128,0,128) (morado).
  - Con darkness=1, la fórmula genera rgb(0,0,0) (negro).
-->
<div class="fixed top-0 left-0 h-screen w-full text-white flex justify-center items-center z-10 transition-colors duration-300 ease-in-out"
  style="background-color: rgb({Math.round(128 * (1 - darkness))}, 0, {Math.round(128 * (1 - darkness))});">
  <slot />
</div>
