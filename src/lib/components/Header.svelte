<script>
  import { onMount } from 'svelte';
  // import { fly } from 'svelte/transition';  // Comentado temporalmente
  import Logo from './Logo.svelte';
  import { activeTheme } from '../config/themes';

  /* Comentado temporalmente
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
  */

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

<header class="fixed top-2 left-12 right-12 z-50">
  <nav class="px-6 py-2 flex justify-center items-center relative">
    <a href="/" class="z-50">
      <div class="w-[100px] opacity-90 hover:opacity-100 transition-opacity duration-300"> 
        <Logo />
      </div>
    </a>
    <!-- Comentado temporalmente
    <div class="ml-auto">
      <button
        class="z-50 w-12 h-12 flex flex-col justify-center items-center relative cursor-pointer"
        on:click={toggleMenu}
        aria-label="Toggle menu"
      >
        <div class="flex flex-col justify-center items-center w-12 h-12 relative">
          <div class="flex flex-col justify-start items-center">
            <span 
              class="w-6 h-[2px] bg-zinc-900 transform -translate-x-[5px] transition-all duration-300"
              style={isMenuOpen ? 'transform: translateX(-5px) rotate(45deg) translateY(6px)' : ''}
            ></span>
            <span 
              class="w-6 h-[2px] bg-zinc-900 my-[6px] flex justify-center items-center relative transition-all duration-300"
              class:opacity-0={isMenuOpen}
            ></span>
            <span 
              class="w-6 h-[2px] bg-zinc-900 transform -translate-x-[5px] transition-all duration-300"
              style={isMenuOpen ? 'transform: translateX(-5px) rotate(-45deg) translateY(-6px)' : ''}
            ></span>
          </div>
        </div>
      </button>
    </div>
    -->
  </nav>
  <!-- Comentado temporalmente
  {#if isMenuOpen}
    <div
      class="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center"
      style="height: 100vh; will-change: transform, opacity; background-color: {$activeTheme.colors.background};"
      transition:fly={{ y: -20, duration: 500 }}
    >
      <ul class="flex flex-col items-center gap-12">
        {#each menuItems as item}
          <li>
            <a
              href={item.href}
              class="text-4xl transition-colors duration-500 relative {$activeTheme.colors.text.primary} hover:{$activeTheme.colors.text.accent}
                     after:content-[''] after:absolute after:-bottom-2 after:left-0 
                     after:w-0 after:h-[2px] after:transition-all 
                     after:duration-500 hover:after:w-full"
              style="--accent-color: {$activeTheme.colors.primary}"
              on:click={toggleMenu}
            >
              {item.title}
            </a>
          </li>
        {/each}
      </ul>
    </div>
  {/if}
  -->
</header>

<style>
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
      left: 0;
      right: 0;
    }
    nav {
      padding-left: 0;
      padding-right: 0;
    }
  }
</style>