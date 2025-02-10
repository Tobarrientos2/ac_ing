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

<header class="fixed top-0 left-0 right-0 z-50">
  <nav class="px-6 py-6 flex justify-between items-center relative">
    <a href="/" class="absolute left-1/2 -translate-x-1/2 z-50">
      <div class="w-[60px] opacity-90 hover:opacity-100 transition-opacity duration-300"> 
        <Logo inverted={$activeTheme.name !== 'Light Theme'} />
      </div>
    </a>
    <div class="ml-auto">
      <button
        class="z-50 w-12 h-12 flex flex-col justify-center items-center relative"
        on:click={toggleMenu}
        aria-label="Toggle menu"
      >
        <div class="w-8 h-8 relative">
          <span 
            class="w-8 h-[2px] absolute top-1/2 left-0 transition-all duration-300 ease-in-out"
            class:bg-white={$activeTheme.name !== 'Light Theme'}
            class:bg-zinc-900={$activeTheme.name === 'Light Theme'}
            style={isMenuOpen ? 'transform: translateY(-50%) rotate(45deg)' : 'transform: translateY(-10px)'}
          ></span>
          <span 
            class="w-8 h-[2px] absolute top-1/2 left-0 transition-all duration-300 ease-in-out"
            class:bg-white={$activeTheme.name !== 'Light Theme'}
            class:bg-zinc-900={$activeTheme.name === 'Light Theme'}
            class:opacity-0={isMenuOpen}
            style="transform: translateY(-50%)"
          ></span>
          <span 
            class="w-8 h-[2px] absolute top-1/2 left-0 transition-all duration-300 ease-in-out"
            class:bg-white={$activeTheme.name !== 'Light Theme'}
            class:bg-zinc-900={$activeTheme.name === 'Light Theme'}
            style={isMenuOpen ? 'transform: translateY(-50%) rotate(-45deg)' : 'transform: translateY(8px)'}
          ></span>
        </div>
      </button>
    </div>
  </nav>
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
</header>

<style>
  header {
    background: transparent;
    transition: background-color 0.5s ease;
  }
  :global(header.scrolled) {
    background-color: var(--header-background);
    backdrop-filter: blur(var(--header-blur));
  }
  a::after {
    background-color: var(--accent-color);
  }
</style>