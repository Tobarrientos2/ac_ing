<script lang="ts">
  import { onMount } from 'svelte';
  
  // Función para inicializar el GeoChart utilizando (window as any).google
  function initGeoChart() {
    (window as any).google.charts.load('current', { packages: ['geochart'] });
    (window as any).google.charts.setOnLoadCallback(drawChart);
  }

  // Función para dibujar el gráfico
  function drawChart() {
    // Creamos la tabla de datos con algunas comunas de Santiago
    const data = new (window as any).google.visualization.DataTable();
    data.addColumn('string', 'Comuna');
    data.addColumn('number', 'Indice');
    data.addRows([
      ['Santiago', 1],
      ['Providencia', 2],
      ['Las Condes', 3],
      ['Ñuñoa', 4],
      ['La Reina', 5]
      // Puedes agregar más comunas según tu necesidad
    ]);

    // Configuramos las opciones del mapa
    const options = {
      region: 'CL',  // Código de Chile
      resolution: 'provinces', // Puede que no muestre nivel comuna, pero sirve para ver provincias.
      colorAxis: { colors: ['#e0f7fa', '#006064'] },
      legend: 'none'
    };

    // Dibujamos el gráfico en el div con id 'chart_div'
    const chart = new (window as any).google.visualization.GeoChart(document.getElementById('chart_div'));

    // Evento de selección
    (window as any).google.visualization.events.addListener(chart, 'select', function () {
      const selection = chart.getSelection();
      if (selection.length > 0) {
        const comuna = data.getValue(selection[0].row, 0);
        console.log('Se seleccionó la comuna: ', comuna);
        // Aquí podrías ejecutar más acciones, ej: navegar o mostrar detalles de la comuna
      }
    });

    chart.draw(data, options);
  }

  onMount(() => {
    // Cargamos la librería de Google Charts si no está cargada
    if (!(window as any).google || !(window as any).google.charts) {
      const script = document.createElement('script');
      script.src = 'https://www.gstatic.com/charts/loader.js';
      script.onload = initGeoChart;
      document.head.appendChild(script);
    } else {
      initGeoChart();
    }
  });
</script>

<style>
  /* Estilos para el contenedor del mapa */
  #chart_div {
    width: 100%;
    height: 500px;
  }
</style>

<div id="chart_div"></div>

<!--
  Este componente utiliza Google Charts para renderizar un GeoChart. 
  Nota: La visualización para Chile utiliza 'resolution: provinces', lo que puede
  no dar el nivel detalle a nivel de comuna. Para mayor detalle se podría
  considerar utilizar alternativas como Leaflet con GeoJSON.
-->
