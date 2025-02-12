<script>
	import '../styles.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
    import LocomotiveScroll from '$lib/LocomotiveScroll.svelte';
	
</script>
<LocomotiveScroll>
    <slot></slot>
</LocomotiveScroll>
<style>
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
