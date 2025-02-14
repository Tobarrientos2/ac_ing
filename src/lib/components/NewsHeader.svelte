<script lang="ts">
  export let title: string;
  export let imageUrl: string;
  export let description: string;
  export let details: Record<string, string>;
  
  const category = "Buildings";
  const date = new Date().toLocaleDateString();
</script>

<header class="w-full">
  <!-- Content container with max-width -->
  <div class="max-w-[1440px] mx-auto">
    <div class="min-h-[40vh] md:min-h-[50vh] flex items-end px-6">
      <div class="w-full">
        <!-- Category and Date -->
        <div class="flex items-center gap-4 mb-6">
          <span class="bg-[#E6E6E6] px-4 py-1 rounded text-[#010101] text-xs font-medium">
            {category}
          </span>
          <time class="text-[#010101] text-xs leading-[19px]">
            {date}
          </time>
        </div>

        <!-- Title Section -->
        <div class="max-w-[644px] mb-8">
          <h1 class="text-[42px] md:text-[60.88px] leading-[1.1] md:leading-[61px] tracking-[-3.05px] font-normal">
            {title}
          </h1>
        </div>
      </div>
    </div>
  </div>

  <!-- Full-width image container -->
  <div class="w-screen relative h-[50vh] md:h-[743px] overflow-hidden">
    <img 
      src={imageUrl} 
      alt={title} 
      class="w-full h-full object-cover"
    />
  </div>
</header>