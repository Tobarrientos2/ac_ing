<script>
    import { onMount } from 'svelte';
    
    let showLogo = true;
    let videoElement;
    
    onMount(() => {
        if (videoElement) {
            videoElement.play()
                .then(() => {
                    console.log('Video started playing');
                })
                .catch(error => {
                    console.error('Error playing video:', error);
                });
        }
    });
</script>

<div class="viewer-container">
    <video 
        bind:this={videoElement}
        class="film" 
        autoplay 
        muted 
        playsinline
        loop
        preload="auto"
    >
        <source src="https://d1jlrzdr4yto1z.cloudfront.net/webpages/ac-ing/filmsstl.mp4" type="video/mp4">
        Tu navegador no soporta el elemento de video.
    </video>

    {#if showLogo}
        <div class="logo-container">
            <img src="/logo.svg" alt="Logo" class="logo">
        </div>
    {/if}
</div>

<style>
    .viewer-container {
        width: 100%;
        height: 100vh;
        position: relative;
        background: white;
    }

    .film {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .logo-container {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 10;
        pointer-events: none;
    }

    .logo {
        width: 400px;
        height: 400px;
        max-width: 600px;
        max-height: 600px;
        opacity: 0;
        animation: fadeIn 2s ease-in forwards;
        animation-delay: 1s;
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    @media (max-width: 768px) {
        .logo {
            width: 250px;
            height: 250px;
        }
    }

    @media (max-width: 480px) {
        .logo {
            width: 200px;
            height: 200px;
        }
    }

    @media (max-width: 320px) {
        .logo {
            width: 150px;
            height: 150px;
        }
    }
</style> 