<script>
  const services = [
    {
      number: '01',
      title: 'Ingeniería Estructural',
      description: 'Especialistas en edificios habitacionales, de oficinas e industriales.',
      subItems: [
        'Edificios Habitacionales y de Oficinas',
        'Edificios Industriales',
        'Edificios Especiales'
      ],
      projects: [
        { name: 'LATAM', image: '/images/latam.jpg' },
        { name: 'Fontecilla 115', image: '/images/fontecilla.jpg' },
        { name: 'Estoril II', image: '/images/estoril-2.jpg' },
        { name: 'Estoril I', image: '/images/estoril-1.jpg' }
      ]
    },
    {
      number: '02',
      title: 'Revisión de Proyectos',
      description: 'Primera categoría otorgado por el Ministerio de Urbanismo y Vivienda de acuerdo a la Ley 19.748: Alberto Maccioni Quezada',
      image: '/images/revision.jpg'
    },
    {
      number: '03',
      title: 'Desarrollo de Sistemas Innovativos',
      description: 'Pioneros en el desarrollo de sistemas estructurales innovadores',
      innovations: [
        {
          title: 'Sistema de Protección de Taludes',
          description: 'Invención del sistema de protección de taludes de subterráneos mediante tensores a terreno. Primera implementación en el proyecto de ampliación del Hotel Sheraton San Cristóbal en 1995.',
          image: '/images/sheraton.jpg'
        },
        {
          title: 'Sistema COPROCELL',
          description: 'Desarrollo del sistema COPROCELL, de vigas laminadas expandidas de acero.',
          image: '/images/nave.jpg'
        },
        {
          title: 'Sistema Steel Joist',
          description: 'Desarrollo del sistema de vigas Steel Joist de AZA, JOISTEC',
          image: '/images/bodenor.jpg'
        },
        {
          title: 'Sistema Mega Costaneras',
          description: 'Desarrollo del sistema de mega costaneras continuas, COPROMET',
          image: '/images/costaneras.jpg'
        }
      ]
    },
    {
      number: '04',
      title: 'Asesorías',
      description: 'Desarrollo y revisión de manuales técnicos',
      projects: [
        {
          title: 'Manual ICHA',
          description: 'Desarrollo Manual ICHA de diseño de estructuras de acero, 2006',
          image: '/images/manual-icha.jpg'
        },
        {
          title: 'Manual ZETA-TUBEST',
          description: 'Desarrollo Manual Sistema ZETA-TUBEST de CINTAC',
          image: '/images/manual-zeta.jpg'
        },
        {
          title: 'Manual CINTAC',
          description: 'Revisión Manual de Diseño Estructural de Productos CINTAC',
          image: '/images/manual-cintac.jpg'
        }
      ]
    }
  ];
</script>

<section class="py-20 px-4">
  <div class="max-w-[1200px] mx-auto">
    <!-- Encabezado -->
    <div class="mb-12 space-y-6">
      <h2 class="text-5xl font-normal">Servicios</h2>
      <p class="text-gray-600 max-w-2xl">
        Soluciones integrales en ingeniería estructural, innovación y asesoría técnica.
      </p>
    </div>

    <!-- Grid de servicios -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {#each services as service, index}
        <div 
          class="group relative overflow-hidden border border-gray-200 transition-all duration-500
                 bg-white hover:bg-black hover:text-white hover:-translate-y-2"
        >
          <!-- Imagen de fondo -->
          {#if service.image}
            <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
              <div class="absolute inset-0 bg-black/70 z-10"></div>
              <img 
                src={service.image} 
                alt={service.title}
                class="w-full h-full object-cover"
              />
            </div>
          {/if}

          <!-- Número -->
          <div class="absolute top-6 right-6 text-8xl font-light opacity-20 select-none z-20
                      text-gray-900 group-hover:text-[#FF4400]">
            {service.number}
          </div>

          <!-- Contenido -->
          <div class="relative p-8 h-full flex flex-col min-h-[400px] z-20">
            <div class="mt-auto">
              <h3 class="text-2xl font-normal mb-4 transition-colors">
                {service.title}
              </h3>
              <p class="text-gray-600 group-hover:text-gray-300 transition-colors">
                {service.description}
              </p>
              
              <!-- Lista de subitems si existen -->
              {#if service.subItems}
                <ul class="mt-4 space-y-2">
                  {#each service.subItems as item}
                    <li class="text-gray-600 group-hover:text-gray-300">• {item}</li>
                  {/each}
                </ul>
              {/if}
              
              <!-- Línea decorativa -->
              <div class="mt-8 w-12 h-[2px] transition-colors
                          bg-gray-200 group-hover:bg-[#FF4400]">
              </div>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  * {
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  img {
    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  .group:hover img {
    transform: scale(1.05);
  }
</style>