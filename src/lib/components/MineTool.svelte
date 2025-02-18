<script>
  import { onMount } from 'svelte';

  let numCols = 0;
  let numRows = 0;
  let grid = [];
  const cellSize = 4; // Tamaño en rem

  onMount(() => {
    numCols = Math.floor(window.innerWidth / parseFloat(getComputedStyle(document.documentElement).fontSize) / cellSize);
    numRows = Math.floor(window.innerHeight / parseFloat(getComputedStyle(document.documentElement).fontSize) / cellSize);

    grid = [];
    for (let i = 0; i < numRows; i++) {
      let row = [];
      for (let j = 0; j < numCols; j++) {
        row.push({
          rowLabel: i + 1, // 1, 2, 3...
          colLabel: String.fromCharCode(65 + j), // A, B, C...
        });
      }
      grid.push(row);
    }
  });
</script>

<div class="absolute z-[31] flex flex-col w-full h-full top-0 left-0">
  {#each grid as row, rowIndex}
    <div class="flex">
      {#each row as cell, colIndex}
        <div class="w-[4rem] h-[4rem] border border-black text-[8px] text-center text-black flex items-center justify-center">
          {cell.colLabel}{cell.rowLabel}
        </div>
      {/each}
    </div>
  {/each}
</div>

<style>
  .grid-container {
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 0; /* Asegura que la grilla esté detrás de otros elementos */
  }

  .grid-row {
    display: flex;
  }

  .grid-cell {
    width: 16px;
    height: 16px;
    border: 1px solid black;
    font-size: 8px;
    text-align: center;
    color: rgba(0, 0, 0, 0); /* Fondo transparente */
  }
</style>