<style>
    @font-face {
        font-family: 'Calibri Light';
        src: url('/fonts/calibri-light.ttf') format('truetype');
        font-weight: normal;
        font-style: normal;
    }

    .image-wrapper img {
        border-radius: 16px;
        height: 100%;
        object-fit: cover;
    }

    /* Estilos para desktop */
    .content-section {
        width: 40% !important; /* Ancho fijo para la sección de contenido */
        margin-right: 5%; /* Espacio entre el contenido y la imagen */
    }

    .image-wrapper {
        width: 55% !important; /* Ancho fijo para todas las imágenes */
        min-width: 55% !important; /* Aseguramos que el min-width coincida */
    }

    .image-wrapper img {
        width: 100%; /* Aseguramos que la imagen ocupe todo el wrapper */
    }

    @media (max-width: 768px) {
        .experience-item {
            display: flex !important;
            flex-direction: column !important;
            height: auto !important;
            gap: 2rem !important;
        }

        .content-section {
            width: 100% !important;
            margin-right: 0 !important;
        }

        .content-section > div:first-child {
            display: none !important;
        }

        .content-wrapper {
            width: 100% !important;
            max-width: 100% !important;
            padding: 0 1rem !important;
        }

        .image-wrapper {
            width: 100% !important;
            height: 300px !important;
        }

        .image-wrapper img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
</style>

<div class="z-[1] bg-white relative">
    <div class="px-2 md:px-4 lg:px-6 max-w-[1920px] mx-auto pt-24">
        <div class="z-[1] flex flex-col relative">
            <div class="w-0 bg-[#bfbfbf] h-[1px]"></div>
            <div class="gap-4 flex-col pt-1 flex overflow-hidden">
                <div class="transform -translate-y-[110%] scale-100 rotate-0 skew-0 preserve-3d tracking-[0.14px] text-sm text-[#666]">
                    SOBRE NOSOTROS
                </div>
             
            </div>
        </div>
        <div class="w-full pt-16"></div>
        <div class="flex-col grid-rows-auto grid-cols-1 flex">
            <div class="experience-item min-h-[320px] border-t border-[#e5e4e4] py-8 flex flex-row items-start">
                <div class="content-section gap-12 flex-row flex">
                    <div class="w-[15%]">
                        <div class="text-[#bfbfbf] pb-1 text-xl">01</div>
                    </div>
                    <div class="content-wrapper gap-8 flex-col w-[40rem] max-w-[320px] flex">
                        <h2 class="text-black text-[1.5rem] lg:text-[30px] tracking-[-0.6px] font-normal leading-[1.2] lg:leading-9 my-0" style="font-family: 'Calibri Light';">Experiencia</h2>
                        <p class="opacity-100 text-sm lg:text-base leading-[1.4] lg:leading-[20.8px] my-0" style="font-family: 'Calibri Light';">
                            Más de 30 años de experiencia en el desarrollo de proyectos y cálculo estructural. Contamos con un equipo profesional de ingenieros civiles estructurales, arquitectos y proyectistas.
                        </p>
                    </div>
                </div>
                <div class="image-wrapper h-[280px] gap-4 justify-start flex">
                    <img src="/santarita18.jpg" loading="lazy" alt="Santa Rita 18">
                </div>
            </div>
            <div class="experience-item min-h-[320px] border-t border-[#e5e4e4] py-8 flex flex-row items-start">
                <div class="content-section gap-12 flex-row flex">
                    <div class="w-[15%]">
                        <div class="text-[#bfbfbf] pb-1 text-xl">02</div>
                    </div>
                    <div class="content-wrapper gap-8 flex-col w-[40rem] max-w-[320px] flex">
                        <h2 class="text-black text-[1.5rem] lg:text-[30px] tracking-[-0.6px] font-normal leading-[1.2] lg:leading-9 my-0" style="font-family: 'Calibri Light';">Liderazgo</h2>
                        <p class="text-sm lg:text-base leading-[1.4] lg:leading-[20.8px] my-0" style="font-family: 'Calibri Light';">
                            A la cabeza de esta empresa se encuentra Alberto Maccioni, ingeniero civil estructural de la Universidad de Chile, con amplia experiencia en sistemas estructurales.
                        </p>
                    </div>
                </div>
                <div class="image-wrapper h-[280px] gap-4 justify-start flex">
                    <img src="/santarita8.jpg" loading="lazy" alt="Liderazgo">
                </div>
            </div>
            <div class="experience-item min-h-[320px] border-t border-[#e5e4e4] py-8 flex flex-row items-start">
                <div class="content-section gap-12 flex-row flex">
                    <div class="w-[15%]">
                        <div class="text-[#bfbfbf] pb-1 text-xl">03</div>
                    </div>
                    <div class="content-wrapper gap-8 flex-col w-[40rem] max-w-[320px] flex">
                        <h2 class="text-black text-[1.5rem] lg:text-[30px] tracking-[-0.6px] font-normal leading-[1.2] lg:leading-9 my-0" style="font-family: 'Calibri Light';">Proyectos</h2>
                        <p class="text-sm lg:text-base leading-[1.4] lg:leading-[20.8px] my-0" style="font-family: 'Calibri Light';">
                            Más de 300 proyectos de edificios, incluyendo Hotel Sheraton, Edificio LAN, Hotel Renaissance Santiago y muchos más, con estructuras entre 10 y 35 niveles.
                        </p>
                    </div>
                </div>
                <div class="image-wrapper h-[280px] gap-4 justify-start flex">
                    <img src="/fontecilla_115_antes.jpg" loading="lazy">
                </div>
            </div>
        </div>
        <div class="w-full pt-8"></div>
    </div>
</div>