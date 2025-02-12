<script lang="ts">
  const newsItems = [
    {
      category: "News",
      date: "February 3, 2025",
      title: "Wrexham AFC Unveils Design of New Kop Stand",
      image: "https://cdn.builder.io/api/v1/image/assets/977c02a3973945c59e373714de9fcff6/28781617064881bce14a1a9785dbb488ed35cb2f1fe692150b6609865ef9488e",
    },
    {
      category: "News", 
      date: "November 22, 2024",
      title: "Populous-Designed Cleveland Clinic Global Peak Performance Center Wins Top Honors in International Design Awards",
      image: "https://cdn.builder.io/api/v1/image/assets/977c02a3973945c59e373714de9fcff6/ce05f141b4639c416e76fd0f0d9c6badce7dbc26aaef56a4244d581b2e08b034",
    },
    {
      category: "News",
      date: "November 18, 2024", 
      title: "Populous-Designed King Salman Stadium Set to Become Global Sporting Icon",
      image: "https://cdn.builder.io/api/v1/image/assets/977c02a3973945c59e373714de9fcff6/b6e6266da033e530a5b71fb1b7fe707d80f70d117bff0b9aa91748f653c1a13d",
    },
  ];

  let scrollContainer: HTMLElement;

  function previousSlide() {
    if (scrollContainer) {
      scrollContainer.scrollBy({ left: -400, behavior: 'smooth' });
    }
  }

  function nextSlide() {
    if (scrollContainer) {
      scrollContainer.scrollBy({ left: 400, behavior: 'smooth' });
    }
  }
</script>

<section class="max-w-[1440px] mx-auto px-6 md:px-12">
  <div class="flex justify-between items-center mb-8">
    <h2 class="text-4xl font-normal">News</h2>
    
    <div class="flex items-center gap-3">
      <div class="flex gap-2">
        <button
          class="w-10 h-10 flex items-center justify-center rounded-full border border-black hover:bg-black hover:text-white transition-colors"
          on:click={previousSlide}
          aria-label="Previous slide"
        >
          ←
        </button>
        <button
          class="w-10 h-10 flex items-center justify-center rounded-full border border-black hover:bg-black hover:text-white transition-colors"
          on:click={nextSlide}
          aria-label="Next slide"
        >
          →
        </button>
      </div>
      <a
        href="/news"
        class="flex items-center gap-2 hover:underline"
      >
        View all
      </a>
    </div>
  </div>

  <div 
    bind:this={scrollContainer}
    class="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
  >
    {#each newsItems as item}
      <article class="min-w-[600px] snap-start">
        <div class="relative aspect-[16/9] mb-4 overflow-hidden">
          <img
            src={item.image || "/placeholder.svg"}
            alt=""
            class="w-full h-full object-cover"
          />
          <span class="absolute top-4 left-4 px-3 py-1.5 bg-white text-sm font-medium rounded">
            {item.category}
          </span>
        </div>
        <time class="text-sm text-gray-600 mb-2 block">
          {item.date}
        </time>
        <h3 class="text-xl font-normal leading-tight">
          {item.title}
        </h3>
      </article>
    {/each}
  </div>
</section>

<style>
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
</style>