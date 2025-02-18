<section class="relative bg-white overflow-hidden min-h-screen">
    <!-- Fondo dinámico con patrones hexagonales -->
    <div class="absolute inset-0">
      <div class="absolute w-full h-full opacity-5">
        <div class="absolute top-0 left-0 w-40 h-40 border-[1px] border-red-500 rotate-45 transform -translate-x-1/2 -translate-y-1/2"></div>
        <div class="absolute bottom-0 right-0 w-60 h-60 border-[1px] border-orange-400 rotate-45 transform translate-x-1/2 translate-y-1/2"></div>
      </div>
      
      <!-- Líneas conectoras dinámicas -->
      <svg class="absolute inset-0 w-full h-full" style="pointer-events: none;">
        <path 
          d="M0,50 Q400,300 800,50" 
          class="stroke-red-500/10 stroke-[1px] fill-none"
        />
        <path 
          d="M800,600 Q400,350 0,600" 
          class="stroke-orange-400/10 stroke-[1px] fill-none"
        />
      </svg>
    </div>
  
    <!-- Contenedor principal con diseño asimétrico -->
    <div class="relative container mx-auto px-8 py-20">
      <!-- Sección superior con figuras flotantes -->
      <div class="relative mb-32">
        <!-- Figura 1 con órbita -->
        <div class="relative group">
          <div class="absolute -inset-8 rounded-full border border-red-500/20 animate-[spin_20s_linear_infinite]"></div>
          <div class="absolute -inset-16 rounded-full border border-orange-400/10 animate-[spin_30s_linear_infinite_reverse]"></div>
          <img 
            src="/figura1.svg" 
            alt="Figura 1"
            class="relative max-w-[150px] max-h-[150px] transform group-hover:scale-110 group-hover:rotate-45 transition-all duration-700"
          />
        </div>
  
        <!-- Línea conectora dinámica -->
        <div class="relative h-40 my-12">
          <div class="absolute left-1/2 h-full w-[2px] bg-gradient-to-b from-red-500/20 via-orange-400/20 to-red-500/20"></div>
          <div class="absolute left-1/2 w-4 h-4 bg-white border border-orange-400/30 rounded-full -translate-x-1/2 animate-bounce"></div>
        </div>
  
        <!-- Figura 2 con efecto espejo -->
        <div class="relative group flex justify-end">
          <div class="absolute inset-0 bg-gradient-to-r from-transparent via-orange-400/5 to-red-500/5 blur-xl"></div>
          <img 
            src="/figura2.svg" 
            alt="Figura 2"
            class="relative max-w-[150px] max-h-[150px] transform group-hover:scale-110 group-hover:-rotate-45 transition-all duration-700 mirror-effect"
          />
        </div>
      </div>
  
      <!-- Sección de contenido principal con diseño innovador -->
      <div class="relative flex flex-wrap items-center gap-12">
        <!-- Imagen principal con marco dinámico -->
        <div class="relative w-3/5 group perspective-1000">
          <div class="absolute -inset-4 bg-gradient-to-tr from-red-500/10 via-orange-400/10 to-transparent rounded-3xl blur-lg group-hover:blur-xl transition-all duration-700"></div>
          <div class="absolute inset-0 border border-gradient-to-r from-red-500/20 to-orange-400/20 rounded-3xl transform group-hover:rotate-y-12 transition-transform duration-700"></div>
          <img 
            src="https://cdn.prod.website-files.com/661cc99e607517f54bde59ef/661cc99e607517f54bde5a92_06_s4_Breevast%20-%20Grasweg_cam001.webp"
            alt=""
            class="relative w-full rounded-2xl transform group-hover:scale-[1.02] group-hover:rotate-y-6 transition-all duration-700 shadow-2xl"
          />
        </div>
  
        <!-- Panel de texto con diseño orgánico -->
        <div class="relative w-2/5 -ml-20 group">
          <div class="sticky top-40">
            <!-- Marco decorativo animado -->
            <div class="absolute -inset-2 bg-gradient-to-br from-red-500/20 via-black to-orange-400/20 rounded-[30px_0_30px_30px] blur-lg opacity-80 group-hover:opacity-100 transition-all duration-700"></div>
            
            <!-- Contenedor de contenido -->
            <div class="relative bg-black rounded-[20px_0_20px_20px] overflow-hidden">
              <!-- Patrones de fondo -->
              <div class="absolute inset-0">
                <div class="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-red-500/5 via-orange-400/5 to-transparent transform group-hover:scale-110 transition-transform duration-700"></div>
                <div class="absolute -bottom-1/2 -left-1/2 w-full h-full rotate-45 bg-gradient-to-tr from-orange-400/5 via-red-500/5 to-transparent transform group-hover:translate-y-10 transition-transform duration-700"></div>
              </div>
  
              <!-- Contenido con animaciones -->
              <div class="relative z-10 p-16 space-y-8">
                <h3 class="font-['Calibri'] text-3xl text-white transform group-hover:translate-x-2 transition-transform duration-500">
                  Innovación y Excelencia
                </h3>
                <p class="font-['Calibri'] text-lg text-gray-200 leading-relaxed transform group-hover:translate-x-4 transition-all duration-700 delay-100">
                  Con un enfoque constante en la innovación, economía y seguridad estructural, nos destacamos por la capacidad de ofrecer diseños eficientes y de alta calidad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  <style>
    .mirror-effect {
      transform-style: preserve-3d;
      backface-visibility: hidden;
    }
  
    @keyframes rotate-y {
      from { transform: rotateY(0deg); }
      to { transform: rotateY(360deg); }
    }
  
    .perspective-1000 {
      perspective: 1000px;
    }
  </style>