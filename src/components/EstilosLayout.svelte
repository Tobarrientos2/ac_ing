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
        background-color: #EE8035;
        color: white;
    }
    
    :global(::-moz-selection) {
        background-color: #EE8035;
        color: white;
    }
</style>
