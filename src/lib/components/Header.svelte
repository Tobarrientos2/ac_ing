<script>
  import { onMount } from 'svelte';

  const goToServices = () => {
    window.location.href = '#servicios';
  };

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
</script>

<svelte:head>
<link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap" rel="stylesheet"/>
</svelte:head>

<header class="fixed top-4 right-4 z-[999] md:top-8 md:right-8 w-fit font-lato">
<nav class="glass-effect rounded-full px-5 py-2.5 flex items-center gap-6 relative z-[1000]">
  <!-- Logo SVG en lugar de texto -->
  <a href="/" class="text-white flex items-center">
    <img src="https://pymecheck.s3.us-east-1.amazonaws.com/webpages/ac-ing/logo_isotipo.svg" alt="AC Logo" class="h-8 w-auto">
  </a>

  <!-- Hamburger Icon -->
  <button
    class="w-8 h-8 flex flex-col justify-center items-center relative cursor-pointer"
    on:click={goToServices}
  >
    <div class="flex flex-col justify-center items-center w-8 h-8 relative">
      <span class="w-6 h-[2px] bg-white absolute transform transition-all duration-300 -translate-y-2"></span>
      <span class="w-6 h-[2px] bg-white absolute"></span>
      <span class="w-6 h-[2px] bg-white absolute transform transition-all duration-300 translate-y-2"></span>
    </div>
  </button>
</nav>
</header>

<style>
:global(.font-lato) {
  font-family: 'Lato', sans-serif;
}

.glass-effect {
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* Estilos para las líneas del menú hamburguesa */
button span {
  border-radius: 1px;
  top: 50%;
  transform-origin: center;
}

header {
  background: transparent;
}

:global(header.scrolled) {
  background: transparent;
  backdrop-filter: none;
}

a::after {
  background-color: #ffffff;
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