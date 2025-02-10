<script>
  import { onMount } from 'svelte';
  let mounted = false;
  let initialLoad = true;
  let mousePosition = { x: 0, y: 0 };
  let container;

  // Array de esquinas con contenidos variados
  const corners = [
    { pos: 'top-4 left-4', type: 'default' },
    { pos: 'top-4 right-4', type: 'alternative' },
    { pos: 'bottom-4 left-4', type: 'alternative' },
    { pos: 'bottom-4 right-4', type: 'minimal' }
  ];

  onMount(() => {
    mounted = true;
    // Elimina el blur en 1 segundo para una transición más rápida y suave
    setTimeout(() => {
      initialLoad = false;
    }, 1000);
    
    window.addEventListener('mousemove', (e) => {
      if (container) {
        const rect = container.getBoundingClientRect();
        mousePosition.x = ((e.clientX - rect.left) / rect.width) * 100;
        mousePosition.y = ((e.clientY - rect.top) / rect.height) * 100;
      }
    });
  });
</script>

<!--
  El contenedor principal usa Tailwind para ocupar toda la pantalla y crear un marco fijo.
  Dentro se dispone un contenedor relativo con borde (24px) que oculta cualquier contenido que se salga del área.
-->
<div
  class="fixed inset-0 pointer-events-none z-50 overflow-hidden"
  bind:this={container}
  style="--mouse-x: {mousePosition.x}%; --mouse-y: {mousePosition.y}%"
>
  <!-- Contenedor del marco con borde y clipping interno -->
  <div class="relative h-full w-full border-[24px] border-zinc-900/90 overflow-hidden">
  
    <!-- Fondo decorativo: capa de blur y grid dinámico -->
    <div class="absolute inset-0">
      <div
        class="absolute inset-0 transition-opacity duration-500 ease-in-out"
        style="opacity: {initialLoad ? '1' : '0'}; backdrop-filter: blur(8px);"
      ></div>
      <div
        class="absolute inset-0 opacity-20 transition-opacity duration-500 hover:opacity-40"
        style="background-image: radial-gradient(circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.3) 1px, transparent 1px), radial-gradient(circle at 1px 1px, rgba(255,255,255,0.2) 1px, transparent 0); background-size: 24px 24px, 12px 12px;"
      ></div>
    </div>
    
    <!-- Área interna para el contenido: solo se mostrará lo que se coloque en el slot y quedará recortado por el borde -->
    <div class="relative z-10 h-full w-full overflow-auto p-6">
      <slot />
    </div>
    
    <!-- Capas decorativas técnicas sobre el contenido -->
    <div class="absolute inset-0 pointer-events-none">
      {#each corners as corner, i}
        <div
          class="absolute w-40 h-40 opacity-0 transition-all duration-1000 technical-corner {corner.pos}"
          class:opacity-100={mounted}
          style="transition-delay: {i * 150}ms;"
        >
          {#if corner.type === 'default'}
            <!-- Esquina con contenido técnico original -->
            <div class="absolute inset-0">
              {#each Array(8) as _, j}
                <div
                  class="absolute left-0 w-2 h-[1px] bg-white/40"
                  style="top: {j * 8}px; animation-delay: {j * 50}ms; animation: drawMark 0.5s forwards;"
                ></div>
                <div
                  class="absolute top-0 h-2 w-[1px] bg-white/40"
                  style="left: {j * 8}px; animation-delay: {j * 50}ms; animation: drawMark 0.5s forwards;"
                ></div>
              {/each}
            </div>
            <div class="absolute inset-1/4">
              <div class="w-full h-full rounded-full border border-white/30 animate-[rotate_20s_linear_infinite]">
                <div class="absolute inset-0 flex items-center justify-center">
                  <div class="w-1 h-1 bg-yellow-500/50 rounded-full animate-[pulse_2s_linear_infinite]"></div>
                </div>
                <div class="absolute w-full h-[1px] bg-white/20"></div>
                <div class="absolute w-[1px] h-full bg-white/20"></div>
              </div>
            </div>
            <div class="absolute top-2 left-1/4 text-[10px] text-white/40 font-mono">
              {180 + i * 45}°
            </div>
          
          {:else if corner.type === 'alternative'}
            <!-- Esquina con contenido alternativo: blueprint simplificado -->
            <div class="flex items-center justify-center h-full">
              <svg viewBox="0 0 24 24" class="w-12 h-12 text-white/50">
                <rect x="2" y="2" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"/>
                <line x1="2" y1="2" x2="22" y2="22" stroke="currentColor" stroke-width="1" stroke-dasharray="2"/>
              </svg>
            </div>
            <div class="absolute top-2 left-1/4 text-[10px] text-white/40 font-mono">
              Estructura
            </div>
          
          {:else if corner.type === 'minimal'}
            <!-- Esquina minimal: solo se muestra un punto -->
            <div class="absolute inset-0 flex items-center justify-center">
              <div class="w-2 h-2 bg-white/30 rounded-full"></div>
            </div>
          {/if}
        </div>
      {/each}
      
      <!-- Fórmulas matemáticas animadas -->
      <div class="absolute inset-x-0 bottom-0 flex justify-between px-4 py-2">
        {#each ['E = 210 GPa', 'σ = M/W', 'F = m·a', 'P = F/A'] as formula, i}
          <div
            class="text-[10px] font-mono text-white/30"
            style="animation-delay: {1000 + i * 200}ms; animation: fadeInUp 0.5s forwards;"
          >
            {formula}
          </div>
        {/each}
      </div>
      
      <!-- Líneas de construcción dinámicas -->
      <div class="absolute inset-0">
        {#each Array(4) as _, i}
          <div
            class="absolute bg-gradient-to-b from-white/30 via-white/10 to-transparent"
            style="width: 1px; height: 12px; left: {25 + i * 16.66}%; animation-delay: {i * 100}ms; animation: extendLine 1s infinite;"
          ></div>
        {/each}
      </div>
    </div>
  </div>
</div>

<style>
  @keyframes drawMark {
    from {
      transform: scaleX(0);
      opacity: 0;
    }
    to {
      transform: scaleX(1);
      opacity: 1;
    }
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @keyframes fadeInUp {
    from {
      transform: translateY(10px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes extendLine {
    0% {
      transform: scaleY(0);
      opacity: 0;
    }
    50% {
      transform: scaleY(1);
      opacity: 1;
    }
    100% {
      transform: scaleY(0);
      opacity: 0;
    }
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    50% {
      transform: scale(2);
      opacity: 0.5;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
</style> 