<section class="relative bg-white overflow-hidden min-h-screen">
  <!-- Fondo dinámico -->
  <div class="absolute inset-0 overflow-hidden">
    <!-- Líneas diagonales grandes -->
    <div class="absolute w-[150vw] h-[2px] bg-gradient-to-r from-transparent via-red-500/10 to-transparent -rotate-45 -left-[25vw] top-1/4"></div>
    <div class="absolute w-[150vw] h-[2px] bg-gradient-to-r from-transparent via-orange-400/10 to-transparent -rotate-45 -left-[25vw] top-3/4"></div>
    
    <!-- Círculos decorativos -->
    <div class="absolute w-[500px] h-[500px] rounded-full border border-red-500/5 -left-[250px] -top-[250px]"></div>
    <div class="absolute w-[300px] h-[300px] rounded-full border border-orange-400/5 -right-[150px] -bottom-[150px]"></div>
  </div>

  <div class="relative w-full px-11 py-20">
    <!-- Sección superior con las figuras -->
    <div class="flex flex-col items-center mb-32">
      <div class="relative w-full max-w-6xl mx-auto">
        <!-- Primera figura con efectos -->
        <div class="relative group">
          <div class="absolute -inset-1 bg-gradient-to-r from-red-500/20 to-orange-400/20 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
          <img 
            src="/figura1.svg" 
            alt="Figura 1"
            class="relative max-w-[150px] max-h-[150px] h-auto transform group-hover:scale-110 transition-all duration-500"
          />
        </div>

        <!-- Línea conectora animada -->
        <div class="w-full h-[2px] my-20 bg-gradient-to-r from-red-500/20 via-orange-400/20 to-red-500/20 animate-gradient-x"></div>

        <!-- Segunda figura con efectos -->
        <div class="relative group flex justify-end">
          <div class="absolute -inset-1 bg-gradient-to-r from-orange-400/20 to-red-500/20 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
          <img 
            src="/figura2.svg" 
            alt="Figura 2"
            class="relative max-w-[150px] max-h-[150px] h-auto transform group-hover:scale-110 transition-all duration-500"
          />
        </div>
      </div>
    </div>

    <!-- Sección de contenido principal -->
    <div class="relative max-w-[1400px] mx-auto flex gap-10">
      <!-- Imagen principal con efecto de profundidad -->
      <div class="relative w-3/5 group">
        <div class="absolute -inset-2 bg-gradient-to-r from-red-500/10 to-orange-400/10 rounded-2xl blur-lg opacity-25 group-hover:opacity-40 transition duration-1000"></div>
        <img 
          src="https://cdn.prod.website-files.com/661cc99e607517f54bde59ef/661cc99e607517f54bde5a92_06_s4_Breevast%20-%20Grasweg_cam001.webp"
          alt=""
          class="relative w-full h-[824.25px] object-cover rounded-2xl transform group-hover:scale-[1.02] transition-transform duration-700"
        />
      </div>

      <!-- Panel de texto con diseño mejorado -->
      <div class="relative w-2/5 -ml-20">
        <div class="sticky top-40 bg-black rounded-l-2xl overflow-hidden group">
          <!-- Efectos de fondo -->
          <div class="absolute inset-0">
            <div class="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-red-500/5 via-orange-400/5 to-transparent"></div>
            <div class="absolute bottom-0 left-0 w-full h-full bg-gradient-to-tr from-orange-400/5 via-red-500/5 to-transparent"></div>
          </div>

          <!-- Contenido -->
          <div class="relative z-10 p-16 space-y-8">
            <h3 class="font-['Calibri'] text-3xl text-white group-hover:text-orange-50 transition-colors duration-300">
              Innovación y Excelencia
            </h3>
            <p class="font-['Calibri'] text-lg text-gray-200 leading-relaxed group-hover:text-white transition-colors duration-300">
              Con un enfoque constante en la innovación, economía y seguridad estructural, nos destacamos por la capacidad de ofrecer diseños eficientes y de alta calidad.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  @keyframes gradient-x {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  .animate-gradient-x {
    background-size: 200% 100%;
    animation: gradient-x 15s ease infinite;
  }
</style>