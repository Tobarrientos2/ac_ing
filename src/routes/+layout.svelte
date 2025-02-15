<script>
	import '../styles.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
    import LocomotiveScroll from '$lib/LocomotiveScroll.svelte';
    import Mapa from '$lib/components/Mapa.svelte';
</script>

<div class="container">
    <Mapa />
   
</div>

<style>
    .container {
        min-height: 300vh; /* Esto asegura que haya espacio para scroll */
    }

    .content {
        position: relative;
        z-index: 1;
        padding-top: 100vh; /* Esto empuja el contenido debajo del Mapa */
    }

    /* Estilo global para el texto seleccionado */
    :global(::selection) {
        background-color: #FF4D00;
        color: white;
    }
    
    :global(::-moz-selection) {
        background-color: #FF4D00;
        color: white;
    }
</style>
