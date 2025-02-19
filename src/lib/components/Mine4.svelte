<script>
  // Mantenemos las fuentes por si se necesitan en otro lugar
  // pero removemos todas las props que ya no usaremos
</script>

<style>
  @font-face {
    font-family: 'Calibri';
    src: url('/fonts/calibri-regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Calibri';
    src: url('/fonts/calibri-bold.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: 'Calibri';
    src: url('/fonts/calibri-italic.ttf') format('truetype');
    font-weight: normal;
    font-style: italic;
  }

  @font-face {
    font-family: 'Calibri';
    src: url('/fonts/calibri-bold-italic.ttf') format('truetype');
    font-weight: bold;
    font-style: italic;
  }

  :global(body) {
    font-family: 'Calibri', sans-serif;
  }
</style>

<div class="z-[1] bg-white relative">
  <div class="px-[22px]">
    <div class="relative flex flex-col z-[1]">
      <div class="w-full h-[1px] bg-[#BFBFBF]"></div>
      <section class="max-w-[1200px] mx-auto px-4 py-20">
        <div class="grid place-items-center">
          <svg class="w-10 h-10 transform -rotate-90" viewBox="0 0 40 40">
            <!-- Círculo base (gris) -->
            <circle 
              cx="20" 
              cy="20" 
              r="19" 
              fill="white"
              stroke="#E5E5E5"
              stroke-width="2"
            />
            <!-- Círculo animado (negro) -->
            <circle 
              cx="20" 
              cy="20" 
              r="19"
              fill="none"
              stroke="black"
              stroke-width="2"
              class="transition-all duration-800 ease-out"
            />
            <!-- Símbolo + -->
            <g class="transform translate-[-50%,-50%]" style="transform-origin: center;">
              <line 
                x1="15" 
                y1="20" 
                x2="25" 
                y2="20" 
                stroke="black" 
                stroke-width="2"
                class="transition-all duration-500"
              />
              <line 
                x1="20" 
                y1="15" 
                x2="20" 
                y2="25" 
                stroke="black" 
                stroke-width="2"
                class="transition-all duration-500"
              />
            </g>
          </svg>
        </div>
      </section>
    </div>
  </div>
</div>