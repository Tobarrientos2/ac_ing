<script>
  export let title = "LES TEMPS FORTS";
  export let linkText = "VOIR TOUTE LA PROGRAMMATION";
  export let linkHref = "#";
</script>

<div class="w-full py-8 px-6 md:px-8 flex justify-between items-center border-t border-b border-gray-200">
  <h2 class="text-2xl font-light text-gray-800">
    {title}
  </h2>
  
  <a 
    href={linkHref}
    class="text-sm text-gray-800 hover:underline underline-offset-4"
  >
    {linkText}
  </a>
</div> 