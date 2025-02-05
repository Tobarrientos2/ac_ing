<script>
  import { onMount } from 'svelte';
  import { activeTheme } from '../config/themes';

  const NUM_COLUMNS = 5;
  let columns = [];
  for (let i = 0; i < NUM_COLUMNS; i++) {
    columns.push({ multiplier: Math.random() * 0.4 + 0.8 });
  }

  let unsubscribe;

  onMount(() => {
    const updatePatternTheme = (theme) => {
      document.querySelectorAll('[data-pattern-column]').forEach((el) => {
        el.style.setProperty('--pattern-primary', theme.colors.structuralPattern.primary);
        el.style.setProperty('--pattern-secondary', theme.colors.structuralPattern.secondary);
        el.style.setProperty('--pattern-accent', theme.colors.structuralPattern.accent);
      });
    };

    unsubscribe = activeTheme.subscribe(updatePatternTheme);
    
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrolled = window.pageYOffset;
          const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
          const progress = Math.min(scrolled / totalScroll, 1);

          const columnEls = document.querySelectorAll('[data-pattern-column]');
          columnEls.forEach((el, index) => {
            const multiplier = columns[index].multiplier;
            const effectiveProgress = Math.min(progress * multiplier, 1);
            el.style.transform = `translateY(${scrolled * 0.005}px)`;
            el.style.clipPath = `inset(0 0 ${100 - effectiveProgress * 100}% 0)`;
          });
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      unsubscribe();
      window.removeEventListener('scroll', handleScroll);
    };
  });
</script>

<div class="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
  <div class="absolute w-full h-[300%] pointer-events-none overflow-hidden">
    {#each columns as col, i}
      <div
        data-pattern-column
        class="absolute top-0 h-full transition-[clip-path,transform] duration-[1.2s] ease-out opacity-50 [will-change:clip-path,transform,opacity] origin-top"
        style="
          width: calc(100% / 5);
          left: calc((100% / 5) * {i});
          background-image: 
            linear-gradient(to right, var(--pattern-primary) 1px, transparent 1px),
            linear-gradient(to bottom, var(--pattern-primary) 1px, transparent 1px),
            linear-gradient(to right, var(--pattern-secondary) 0.5px, transparent 0.5px),
            linear-gradient(to bottom, var(--pattern-secondary) 0.5px, transparent 0.5px),
            url('data:image/svg+xml,%3Csvg width=\'200\' height=\'200\' viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' stroke=\'%23FFFFFF\' stroke-opacity=\'0.15\'%3E%3Ccircle cx=\'100\' cy=\'100\' r=\'40\' stroke-width=\'0.5\'/%3E%3Cpath d=\'M60,100 L140,100 M100,60 L100,140\' stroke-width=\'0.3\'/%3E%3Cpath d=\'M30,30 L170,30 L170,170 L30,170 Z\' stroke-width=\'0.5\' stroke-dasharray=\'4,4\'/%3E%3Cpath d=\'M85,85 L115,85 L115,115 L85,115 Z\' stroke-width=\'0.5\'/%3E%3Cpath d=\'M0,0 L200,200 M200,0 L0,200\' stroke-width=\'0.2\' stroke-dasharray=\'2,2\'/%3E%3C/g%3E%3C/svg%3E');
          background-size: 50px 50px, 50px 50px, 10px 10px, 10px 10px, 400px 400px;
          background-position: center;
          clip-path: inset(0 0 100% 0);
        "
      ></div>
    {/each}
  </div>
</div>

