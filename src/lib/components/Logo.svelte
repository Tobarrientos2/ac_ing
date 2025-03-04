<script>
    export let inverted = false; // Para controlar cuando queremos el logo en blanco
  </script>
  
  <img 
    src="/logo_ac_ing.svg" 
    alt="AC Proyectos y Asesorías" 
    class="w-full transition-all duration-300 {inverted ? 'logo-inverted' : ''}"
  />
  
  <style>
    .logo-inverted {
      filter: brightness(0) invert(1);
    }
  </style>