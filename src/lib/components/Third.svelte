<script>
    import Thirdv2 from './Thirdv2.svelte';
    import Thirdv3 from './Thirdv3.svelte';
    import Thirdv4 from './Thirdv4.svelte';
    import Thirdv5 from './Thirdv5.svelte';
    import Thirdv6 from './Thirdv6.svelte';
</script>

<!-- Asegurarse de que el link de Google Fonts esté en el head del documento -->
<svelte:head>
    <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap" rel="stylesheet"/>
</svelte:head>

<div class="overflow-hidden antialiased bg-black font-lato pb-12 md:pb-16 lg:pb-24 z-40 relative">
    <!-- Header Section -->
    <div class="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-16 md:pt-24">
            <div class="lg:col-span-8">
                <div class="prose max-w-none">
                    <h1 id="servicios" class="text-4xl md:text-5xl font-light tracking-tight text-white mb-8 font-lato">
                        NUESTROS SERVICIOS
                    </h1>
                </div>
            </div>
        </div>
    </div>

    <!-- Componentes de Servicios -->
    <Thirdv2 />
    <Thirdv3 />
    <Thirdv4 />
    <Thirdv5 />
    <Thirdv6 />
</div>

<style>
    /* Estilos adicionales si son necesarios */
    :global(.prose) {
        max-width: none;
    }

    /* Configuración de la fuente Lato */
    :global(.font-lato) {
        font-family: 'Lato', sans-serif;
    }
</style> 