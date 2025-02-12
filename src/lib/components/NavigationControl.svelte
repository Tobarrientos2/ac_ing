<script lang="ts">
    export let previousSlide: () => void;
    export let nextSlide: () => void;
    export let disablePrev: boolean;
    export let disableNext: boolean;
</script>

<div class="flex gap-1.5 items-end self-stretch my-auto text-xs font-medium tracking-wide leading-relaxed text-center">
    <div class="flex gap-1.5 items-center whitespace-nowrap">
        <button
            class="gap-2.5 self-stretch px-3.5 py-2 my-auto rounded border border-black border-solid"
            on:click={previousSlide}
            aria-label="Previous slide"
            disabled={disablePrev}
            class:opacity-50={disablePrev}
        >
            ←
        </button>
        <button
            class="gap-2.5 self-stretch px-3.5 py-2 my-auto rounded border border-black border-solid"
            on:click={nextSlide}
            aria-label="Next slide"
            disabled={disableNext}
            class:opacity-50={disableNext}
        >
            →
        </button>
    </div>
    <a
      href="/news"
      class="flex flex-col justify-center px-3.5 py-2 bg-white rounded border border-white border-solid w-[94px]"
    >
      <div class="flex gap-3 items-center w-full">
        <span class="self-stretch my-auto w-2.5">↳</span>
        <span class="self-stretch my-auto w-[46px]">View all</span>
      </div>
    </a>
  </div>