<script>
  import { onMount } from 'svelte';
  import { tweened } from 'svelte/motion';
  import { cubicOut } from 'svelte/easing';
  import First from './First.svelte';

  // Tweened store for overlay opacity
  const overlayOpacity = tweened(0, { duration: 400, easing: cubicOut });

  /** @type {IntersectionObserver|null} */
  let observer = null;

  onMount(() => {
    // Select the first element with data-scroll-section (EntrySection)
    const entrySection = document.querySelector('section[data-scroll-section]');
    if (entrySection) {
      observer = new IntersectionObserver((entries) => {
        const entry = entries[0];
        // As the entrySection becomes more visible, non-moving section darkens
        overlayOpacity.set(entry.intersectionRatio);
      }, {
        threshold: Array.from({ length: 101 }, (_, i) => i / 100)
      });
      observer.observe(entrySection);
    }
    return () => {
      if (observer) observer.disconnect();
    };
  });
</script>

<section class="fixed inset-0 w-full h-screen bg-purple-600 flex items-center justify-center text-white relative" style="z-index: -1;">
  <div class="w-full" style="position: relative; z-index: -2;">
    <First />
  </div>
  <div class="absolute inset-0 pointer-events-none bg-black" style="opacity: {$overlayOpacity}"></div>
</section>
