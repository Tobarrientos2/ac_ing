<script lang="ts">
    export let category: string;
    export let date: string;
    export let title: string;
    export let image: string;
</script>

<article class="group cursor-pointer transform transition-all duration-300 hover:scale-[1.02]">
    <div class="relative mb-4 overflow-hidden">
        <img
            src={image}
            alt={title}
            class="w-full aspect-[16/9] object-cover transform transition-transform duration-700 group-hover:scale-105"
        />
        <div class="absolute top-4 left-4">
            <span class="bg-white px-3 py-1.5 text-sm rounded-sm 
                       shadow-sm transition-transform duration-300 
                       group-hover:translate-y-[-2px]">
                {category}
            </span>
        </div>
    </div>
    
    <div class="space-y-2">
        <time class="block text-sm transition-colors duration-300">
            {date}
        </time>
        
        <h3 class="text-2xl leading-tight transition-all duration-300 
                   group-hover:underline decoration-1 underline-offset-4">
            {title}
        </h3>
    </div>
</article>

<style>
    article {
        backface-visibility: hidden;
        -webkit-font-smoothing: subpixel-antialiased;
    }
</style>