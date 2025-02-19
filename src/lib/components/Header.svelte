<script>
  import { onMount } from 'svelte';
  import { fly } from 'svelte/transition';
  import Logo from './Logo.svelte';
  import { activeTheme } from '../config/themes';

  let isMenuOpen = false;

  const toggleMenu = () => {
    isMenuOpen = !isMenuOpen;
  };

  const menuItems = [
    { title: 'Home', href: '/' },
    { title: 'Servicios', href: '/servicios' },
    { title: 'Portafolio', href: '/portafolio' }
  ];

  $: {
    if (typeof document !== 'undefined') {
      document.body.classList.toggle('no-scroll', isMenuOpen);
    }
  }

  onMount(() => {
    const header = document.querySelector('header');
    if (header) {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      });
    }
  });

  onMount(() => {
    const updateHeaderStyles = () => {
      const header = document.querySelector('header');
      if (header) {
        header.style.setProperty('--header-background', $activeTheme.colors.header.background);
        header.style.setProperty('--header-blur', $activeTheme.colors.header.blur);
      }
    };

    const unsubscribe = activeTheme.subscribe(updateHeaderStyles);
    return () => unsubscribe();
  });
</script>

<header class="fixed top-4 right-4 z-50 md:top-8 md:right-8 w-fit">
  <nav class="bg-black rounded-full px-5 py-2.5 flex items-center gap-6 relative z-[60]">
    <!-- AC Logo text -->
    <a href="/" class="text-white text-xl tracking-wide font-light" style="font-family: 'Calibri Light';">
      AC
    </a>

    <!-- Hamburger Menu -->
    <button
      class="w-8 h-8 flex flex-col justify-center items-center relative cursor-pointer"
      on:click={toggleMenu}
      aria-label="Toggle menu"
    >
      <div class="flex flex-col justify-center items-center w-8 h-8 relative">
        <span 
          class="w-6 h-[2px] bg-white absolute transform transition-all duration-300"
          style={isMenuOpen ? 'transform: translateY(0) rotate(45deg)' : 'transform: translateY(-8px)'}
        ></span>
        <span 
          class="w-6 h-[2px] bg-white absolute transition-all duration-300"
          style={isMenuOpen ? 'opacity: 0' : ''}
        ></span>
        <span 
          class="w-6 h-[2px] bg-white absolute transform transition-all duration-300"
          style={isMenuOpen ? 'transform: translateY(0) rotate(-45deg)' : 'transform: translateY(8px)'}
        ></span>
      </div>
    </button>
  </nav>

  {#if isMenuOpen}
    <div
      class="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black z-[55]"
      style="height: 100vh;"
      transition:fly={{ y: -20, duration: 500 }}
    >
      <ul class="flex flex-col items-center -space-y-4">
        <li><a href="/" class="menu-link">Inicio</a></li>
        <li><a href="/servicios" class="menu-link">Servicios</a></li>
        <li><a href="/portafolio" class="menu-link">Portafolio</a></li>
      </ul>
    </div>
  {/if}
</header>

<style>
  @font-face {
    font-family: 'Calibri Light';
    src: url('/fonts/calibri-light.ttf') format('truetype');
    font-weight: 300;
    font-style: normal;
  }

  .menu-link {
    font-family: 'Calibri Light';
    color: white;
    font-size: 3rem;
    text-decoration: none;
    transition: opacity 0.3s ease;
  }

  .menu-link:hover {
    opacity: 0.7;
  }

  /* Estilos para las líneas del menú hamburguesa */
  button span {
    border-radius: 1px;
    top: 50%;
    transform-origin: center;
  }

  button span:nth-child(1) {
    transform: translateY(-6px);
  }

  button span:nth-child(3) {
    transform: translateY(6px);
  }

  header {
    background: transparent;
  }
  :global(header.scrolled) {
    background: transparent;
    backdrop-filter: none;
  }
  a::after {
    background-color: var(--accent-color);
  }

  @media (max-width: 768px) {
    header {
      right: 1rem;
    }
    nav {
      padding-left: 1rem;
      padding-right: 1rem;
    }
  }
</style>