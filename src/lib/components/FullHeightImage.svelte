<script lang="ts">
  export let imageUrl: string;
  export let altText: string = '';
  export let minHeight: string = '750px';
  export let details: Record<string, string> | undefined = undefined;
  export let description: string | undefined = undefined;
</script>

<div class="flex flex-col min-h-screen">
  {#if description || details}
    <div class="bg-white h-[60vh] pt-24">
      <div class="max-w-6xl w-full mx-auto px-8">
        <h1 class="text-[4.5rem] font-light leading-tight mb-12">{altText}</h1>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-16">
          {#if description}
            <div>
              <p class="text-2xl text-gray-600 leading-relaxed">{description}</p>
            </div>
          {/if}

          {#if details}
            <div class="space-y-4">
              <ul class="space-y-3">
                {#each Object.entries(details) as [key, value]}
                  <li class="text-lg"><span class="font-medium">{key}:</span> {value}</li>
                {/each}
              </ul>
            </div>
          {/if}
        </div>
      </div>
    </div>
  {/if}

  <section class="relative w-full" style="height: 100vh;">
    <img
      src={imageUrl}
      alt={altText}
      class="w-full h-full object-cover"
    />
  </section>
</div>

<style>
  section {
    height: 100vh;
    height: 100dvh;
  }

  @media (max-width: 768px) {
    section {
      height: 100vh;
      height: 100dvh;
    }
  }
</style>