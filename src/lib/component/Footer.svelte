<script>
  import Logo from './Logo.svelte';

  const links = [
    { name: 'Portafolio', url: '#' },
    { name: 'Servicios', url: '#' }
  ];

  const contactInfo = [
    {
      group: 'Dirección',
      icon: 'fas fa-location-dot',
      items: [
        'Encomenderos 231, Oficina 402',
        'Las Condes, Santiago, Chile',
        'Código Postal 7550166'
      ]
    },
    {
      group: 'Contacto',
      icon: 'fas fa-envelope',
      items: [
        'contacto@ac-ing.cl',
        '+569 9818 1332'
      ]
    }
  ];
</script>

<footer class="bg-black text-white py-20 px-4">
  <div class="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
    <!-- Sección de marca -->
    <div class="space-y-6">
      <div class="w-[60px] opacity-90 hover:opacity-100 transition-opacity duration-300">
        <Logo inverted={true} />
      </div>
      <p class="text-gray-300 max-w-sm">
        Comprometidos con la excelencia en cada proyecto, brindando soluciones de ingeniería innovadoras y sostenibles.
      </p>
    </div>

    <!-- Sección de contacto -->
    <div class="space-y-8">
      {#each contactInfo as info}
        <div class="space-y-4">
          <div class="flex items-center gap-2">
            <i class="{info.icon} text-[#FF4400]"></i>
            <h3 class="text-xl">{info.group}</h3>
          </div>
          <div class="space-y-2 pl-7">
            {#each info.items as item}
              <p class="text-gray-300">{item}</p>
            {/each}
          </div>
        </div>
      {/each}
    </div>

    <!-- Sección de enlaces -->
    <div class="space-y-6">
      <h3 class="text-xl">Enlaces</h3>
      <ul class="space-y-4">
        {#each links as link}
          <li>
            <a href={link.url} class="hover:text-gray-300 transition-colors">
              {link.name}
            </a>
          </li>
        {/each}
      </ul>
    </div>
  </div>

  <!-- Copyright -->
  <div class="max-w-[1200px] mx-auto mt-20 pt-8 border-t border-gray-800 text-sm text-gray-400">
    <div class="flex justify-center">
      <p>© AC Ingeniería. Todos los derechos reservados.</p>
    </div>
  </div>
</footer>

<style>
  @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css');
</style> 