<script>
  export let category = "Atelier";
  export let dates = "DU 01 FÉVRIER AU 26 FÉVRIER 2025";
  export let location = "ABBAYE ROYALE";
  export let subLocation = "MUSÉE D'ART MODERNE";
  export let title = "VISITES ET ATELIERS";
  export let image = "https://images.unsplash.com/photo-1707168119612-49cc9296b4ad?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  export let darkBg = false; // Para alternar entre fondo oscuro y claro
</script>

<div class="relative h-[600px] w-full flex group">
  <!-- Panel lateral izquierdo con animación -->
  <div 
    class={`w-[300px] p-8 flex flex-col justify-between transition-all duration-300 ease-in-out group-hover:w-[360px] 
    ${darkBg ? 'bg-[#002654]' : 'bg-[#37383C]'}`}
  >
    <div>
      <p class="text-white text-sm mb-1">{category}</p>
    </div>
    
    <div class="space-y-1">
      <p class="text-gray-300 text-sm font-light">{dates}</p>
      <p class="text-gray-300 text-sm font-light">{location}</p>
      <p class="text-gray-300 text-sm font-light">{subLocation}</p>
    </div>
    
    <h2 class="text-white text-5xl font-light leading-tight">
      {title}
    </h2>
  </div>

  <!-- Contenedor de imagen -->
  <div class="flex-1 relative">
    <img
      src={image}
      alt={title}
      class="w-full h-full object-cover"
    />
  </div>
</div> 