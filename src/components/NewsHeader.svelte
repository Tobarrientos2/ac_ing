<script lang="ts">
  export let title: string;
  export let subtitle: string = "";
  export let date: string = new Date().toLocaleDateString();
  export let category: string = "News";
  export let imageUrl: string;
  export let description?: string;
  export let details?: Record<string, string>;
</script>

<header class="w-full max-w-[1440px] mx-auto">
  <div class="px-6 py-8">
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
      <h1 class="text-[60.88px] leading-[61px] tracking-[-3.05px] font-normal">
        {title}
      </h1>
      {#if subtitle}
        <h2 class="text-[60.64px] leading-[61px] tracking-[-3.05px] font-normal">
          {subtitle}
        </h2>
      {/if}
    </div>

    <!-- Description and Details -->
    {#if description}
      <div class="max-w-[644px] mb-8 text-lg">
        {description}
      </div>
    {/if}
    
    {#if details}
      <div class="grid grid-cols-2 gap-4 max-w-[644px] mb-8">
        {#each Object.entries(details) as [key, value]}
          <div>
            <span class="font-medium">{key}:</span> {value}
          </div>
        {/each}
      </div>
    {/if}
  </div>

  <!-- Hero Image -->
  <div class="w-full h-[743px] overflow-hidden">
    <img 
      src={imageUrl} 
      alt={title} 
      class="w-full h-full object-cover"
    />
  </div>
</header>