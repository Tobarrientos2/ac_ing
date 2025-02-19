<div class="z-[1] sticky top-0 box-border">
    <style>
        @font-face {
            font-family: 'calibri-regular';
            src: url('/fonts/calibri-regular.ttf') format('truetype');
            font-weight: normal;
            font-style: normal;
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
            from { opacity: 0; }
            to { opacity: 1; }
        }

        @media (max-width: 768px) {
            .logo { width: 250px; height: 250px; }
        }

        @media (max-width: 480px) {
            .logo { width: 200px; height: 200px; }
        }

        @media (max-width: 320px) {
            .logo { width: 150px; height: 150px; }
        }
    </style>
    <div
        class="justify-between items-end w-full h-[788px] flex relative overflow-hidden box-border"
    >
        <!-- Video Background -->
        <div
            class="w-full h-[788px] absolute inset-0 text-white overflow-hidden box-border"
        >
            <video
                bind:this={video}
                autoplay
                loop
                muted
                playsinline
                on:timeupdate={handleTimeUpdate}
                class="object-cover w-full h-[788px] absolute inset-0 z-[-100]"
            >
                <source
                    src="/films/video.mp4"
                />
                <source
                    src="https://d1jlrzdr4yto1z.cloudfront.net/webpages/ac-ing/filmsstl.mp4"
                />
            </video>
            <!-- Gradient Overlay -->
            <div
                class="z-0 opacity-30 bg-gradient-to-b from-black via-transparent to-white h-[197px] hidden relative"
            ></div>
        </div>
    
        <div class="px-[22px] w-full absolute bottom-[400px]">
            <div
                data-w-id="ed4987fb-15e6-9d49-d688-4a2400dacff5"
                style="transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;transform-style:preserve-3d;opacity:0.25;transform-origin:0px 0.5px;background-color:rgb(191, 191, 191);width: 100%;height:1px;box-sizing:border-box;"
            ></div>
            <div
                data-w-id="d5f883b4-1834-dde6-4a90-b517ff48c0a9"
                style="transform: translate3d(0px, 0rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); opacity: 1; transform-style: preserve-3d;opacity:1;transform-style:preserve-3d;color:rgb(255, 255, 255);letter-spacing:0.16px;max-width:288px;margin-top:16px;font-family:Lora, sans-serif;font-size:15.2px;font-weight:400;line-height:20.52px;box-sizing:border-box;"
            >
          
            </div>
        </div>
       
        <div
            style="will-change: opacity; opacity: 0;opacity:0;z-index:2;pointer-events:none;background-color:rgb(0, 0, 0);width: 100%;height:788px;position:absolute;inset: 0% auto auto 0%;box-sizing:border-box;"
        ></div>

        <!-- Logo Container -->
        <div class="logo-container">
            <img src="/logo-completo.svg" alt="Logo" class="logo">
        </div>
    </div>
</div>

<script lang="ts">
    import { onMount } from 'svelte';
    
    let video: HTMLVideoElement;
    let isReversing = false;
    let reverseInterval: number;
    
    onMount(() => {
        return () => {
            if (reverseInterval) clearInterval(reverseInterval);
        };
    });

    function handleTimeUpdate() {
        if (!isReversing && video.currentTime >= video.duration - 0.1) {
            // Cuando llega al final, comienza a reproducir hacia atrás
            isReversing = true;
            video.pause();
            reverseInterval = setInterval(() => {
                video.currentTime -= 0.1;
                if (video.currentTime <= 0.1) {
                    clearInterval(reverseInterval);
                    isReversing = false;
                    video.play();
                }
            }, 50);
        }
    }
</script>
