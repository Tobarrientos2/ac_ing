<script>
    const title = "Wrexham AFC Unveils";
    const subtitle = "Design of New Kop Stand";
    const date = "February 3, 2025";
    const category = "News";
    const imageUrl = "https://populous.com/uploads/2025/02/Wrexham-Stadium_Kop-Stand-Facade-2-©-Populous-1-1920x1440-c-center.jpg";
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
        <h2 class="text-[60.64px] leading-[61px] tracking-[-3.05px] font-normal">
          {subtitle}
        </h2>
      </div>
    </div>
  
    <!-- Hero Image -->
    <div class="w-full h-[743px] overflow-hidden">
      <img 
        src={imageUrl} 
        alt="Wrexham AFC New Kop Stand Design" 
        class="w-full h-full object-cover"
      />
    </div>
  </header>