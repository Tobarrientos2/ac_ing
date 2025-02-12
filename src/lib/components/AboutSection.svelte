<script>
  import { onMount } from 'svelte';
  import { fade, fly } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';

  let isVisible = false;

  onMount(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          isVisible = true;
        }
      });
    }, {
      threshold: 0.1
    });

    const section = document.querySelector('.about-section');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  });
</script>

<section class="about-section bg-white py-24 px-8">
  <div class="max-w-[1400px] mx-auto">
    {#if isVisible}
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
        <!-- Primera columna con el texto principal -->
        <div 
          in:fly="{{ y: 50, duration: 1000, delay: 200, easing: quintOut }}"
          class="space-y-6"
        >
          <p class="text-xl leading-relaxed text-gray-800">
            The buildings that Populous designs are formidable in both scale and complexity, and our experience in bringing tens of thousands of people together in one space is unrivaled. We offer a unique approach to the design of our projects, marrying unsurpassed technical expertise with internationally recognized design capability.
          </p>
          <p class="text-xl leading-relaxed text-gray-800">
            Complex projects require a truly integrated design strategy, with the synthesis of multiple design disciplines into a singular bold, beautiful and intelligent design. Our culturally diverse team of architects and designers work from offices across the world to bring a unique combination of international and local expertise to their work — ensuring ever more unique, innovative and thoughtful outcomes for every project.
          </p>
        </div>

        <!-- Segunda columna con el texto secundario -->
        <div 
          in:fly="{{ y: 50, duration: 1000, delay: 400, easing: quintOut }}"
          class="space-y-6"
        >
          <p class="text-xl leading-relaxed text-gray-800">
            Our designers consistently challenge expectations, whether it's the John Smith's Stadium in Huddersfield, which created a new model for stadium design back in 1994, or TQL Stadium and Tottenham Hotspur Stadium setting new standards in MLS and the Premier League, or beyond to Sphere — an entertainment venue that defies belief inside and out — and Qiddiya Stadium in Saudi Arabia, where digital evolution will result in a fan experience unlike any seen before. The way we watch sport and entertainment is constantly changing, and we must change with it, pushing past the boundaries of what was previously thought possible.
          </p>
        </div>
      </div>
    {/if}
  </div>
</section>

<style>
  .about-section {
    opacity: 0;
    animation: fadeIn 0.5s ease-out forwards;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  p {
    opacity: 0;
    transform: translateY(20px);
    animation: slideUp 0.8s ease-out forwards;
  }

  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>
