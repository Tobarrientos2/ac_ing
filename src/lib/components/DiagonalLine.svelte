<script lang="ts">
    import { onMount } from 'svelte';
    import { tweened } from 'svelte/motion';
    import { cubicOut } from 'svelte/easing';
    let mouseX = 0;
    let mouseY = 0;
    let absoluteY = 0;
    let documentHeight = 0;
    
    type Checkpoint = {
        id: number;
        x: number;
        absoluteY: number;
        timestamp: string;
    };

    type LineSegment = {
        id: number;
        startPoint: Checkpoint;
        endPoint: Checkpoint;
        angle: number;
        distance: number;
    };

    let checkpoints: Checkpoint[] = [];
    let lineSegments: LineSegment[] = [];
    let nextId = 1;

    // Para animar el progreso de la línea
    const progress = tweened(0, {
        duration: 1000,
        easing: cubicOut
    });

    const formatTime = () => {
        const now = new Date();
        return `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
    };

    // Función para calcular el ángulo entre dos puntos
    const calculateAngle = (x1: number, y1: number, x2: number, y2: number) => {
        return Math.atan2(y2 - y1, x2 - x1) * (180 / Math.PI);
    };

    // Función para calcular la distancia entre dos puntos
    const calculateDistance = (x1: number, y1: number, x2: number, y2: number) => {
        return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    };

    // Función para crear un nuevo segmento de línea
    const createLineSegment = (start: Checkpoint, end: Checkpoint) => {
        const angle = calculateAngle(start.x, start.absoluteY, end.x, end.absoluteY);
        const distance = calculateDistance(start.x, start.absoluteY, end.x, end.absoluteY);
        
        return {
            id: lineSegments.length + 1,
            startPoint: start,
            endPoint: end,
            angle,
            distance
        };
    };

    // Modificar handleClick para crear nuevos segmentos de línea
    const handleClick = () => {
        const clickY = mouseY + window.scrollY; // Capturar la posición absoluta en el momento del click
        const newCheckpoint: Checkpoint = {
            id: nextId,
            x: mouseX,
            absoluteY: clickY,
            timestamp: formatTime()
        };
        checkpoints = [...checkpoints, newCheckpoint];
        
        // Crear nuevo segmento de línea si hay al menos dos checkpoints
        if (checkpoints.length >= 2) {
            const start = checkpoints[checkpoints.length - 2];
            const end = newCheckpoint;
            const newSegment = createLineSegment(start, end);
            lineSegments = [...lineSegments, newSegment];
        }
        
        nextId++;
    };

    onMount(() => {
        const updateDocumentHeight = () => {
            documentHeight = Math.max(
                document.body.scrollHeight,
                document.documentElement.scrollHeight
            );
        };

        const handleScroll = () => {
            // Solo actualizamos absoluteY para el cursor, no para los checkpoints
            absoluteY = mouseY + window.scrollY;
            updateDocumentHeight();
        };

        const handleMouseMove = (event: MouseEvent) => {
            mouseX = event.clientX;
            mouseY = event.clientY;
            absoluteY = mouseY + window.scrollY;
        };

        updateDocumentHeight();
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('click', handleClick);
        window.addEventListener('resize', updateDocumentHeight);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('click', handleClick);
            window.removeEventListener('resize', updateDocumentHeight);
        };
    });

    // Generar el path con animación usando posiciones absolutas
    $: pathData = checkpoints.length > 1 
        ? checkpoints.slice(0, Math.ceil(checkpoints.length * $progress))
            .map((point, index) => 
                `${index === 0 ? 'M' : 'L'} ${point.x} ${point.absoluteY}`
            ).join(' ')
        : '';
</script>

<style>
    .wrapper {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        pointer-events: none;
    }

    .diagonal-line-container {
        position: absolute;
        top: 0;
        right: 0;
        width: 100%;
        pointer-events: none;
        z-index: 50;
    }

    .connection-lines {
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        pointer-events: none;
        z-index: 50;
    }

    .diagonal-line {
        position: absolute;
        height: 20px;
        background-color: black;
        transform-origin: 0 50%;
    }

    .diagonal-line::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(
            to bottom,
            rgba(255, 255, 255, 0.1) 0%,
            rgba(255, 255, 255, 0.2) 50%,
            rgba(0, 0, 0, 0.1) 100%
        );
    }

    @media (max-width: 768px) {
        .diagonal-line {
            width: 170%;
            height: 15px;
        }
    }

    .coordinates {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: rgba(0, 0, 0, 0.7);
        color: white;
        padding: 10px;
        border-radius: 5px;
        font-family: monospace;
        pointer-events: none;
        z-index: 51;
    }

    .checkpoint-list {
        position: fixed;
        top: 20px;
        left: 20px;
        background-color: rgba(0, 0, 0, 0.8);
        color: white;
        padding: 15px;
        border-radius: 8px;
        font-family: monospace;
        max-height: 80vh;
        overflow-y: auto;
        z-index: 51;
    }

    .checkpoint-marker {
        position: absolute;
        width: 20px;
        height: 20px;
        transform: translate(-50%, -50%);
        border-radius: 50%;
        background-color: rgba(255, 0, 0, 0.6);
        border: 2px solid rgba(255, 0, 0, 0.8);
        pointer-events: none;
        animation: pulse 2s infinite;
        box-shadow: 0 0 15px rgba(255, 0, 0, 0.5);
    }

    .checkpoint-label {
        position: absolute;
        transform: translate(15px, -50%);
        background-color: rgba(0, 0, 0, 0.7);
        color: white;
        padding: 2px 6px;
        border-radius: 3px;
        font-size: 12px;
        white-space: nowrap;
    }

    .checkpoint-number {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;
        font-weight: bold;
        font-size: 10px;
    }

    @keyframes pulse {
        0% {
            box-shadow: 0 0 0 0 rgba(255, 0, 0, 0.4);
        }
        70% {
            box-shadow: 0 0 0 10px rgba(255, 0, 0, 0);
        }
        100% {
            box-shadow: 0 0 0 0 rgba(255, 0, 0, 0);
        }
    }

    .checkpoint-item {
        margin-bottom: 8px;
        padding: 5px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    }

    .delete-button {
        background-color: rgba(255, 0, 0, 0.6);
        border: none;
        color: white;
        padding: 2px 6px;
        border-radius: 3px;
        cursor: pointer;
        margin-left: 8px;
    }

    .path {
        fill: none;
        stroke: #ff0000;
        stroke-width: 3;
        stroke-dasharray: 10;
        animation: dash 1s linear infinite;
        filter: drop-shadow(0 0 3px rgba(255, 0, 0, 0.5));
    }

    .path-background {
        fill: none;
        stroke: rgba(255, 255, 255, 0.3);
        stroke-width: 5;
    }

    @keyframes dash {
        to {
            stroke-dashoffset: -20;
        }
    }
</style>

<div class="wrapper" style="height: {documentHeight}px">
    <svg class="connection-lines" style="height: {documentHeight}px" preserveAspectRatio="none">
        {#if pathData}
            <path 
                class="path-background" 
                d={pathData}
            />
            <path 
                class="path" 
                d={pathData}
            />
        {/if}
    </svg>

    <div class="diagonal-line-container">
        {#each lineSegments as segment (segment.id)}
            <div 
                class="diagonal-line"
                style="
                    width: {segment.distance}px;
                    transform: translate({segment.startPoint.x}px, {segment.startPoint.absoluteY}px) rotate({segment.angle}deg);
                "
            ></div>
        {/each}
    </div>

    {#each checkpoints as checkpoint}
        <div 
            class="checkpoint-marker"
            style="top: {checkpoint.absoluteY}px; left: {checkpoint.x}px;"
        >
            <div class="checkpoint-number">{checkpoint.id}</div>
            <div class="checkpoint-label">#{checkpoint.id}</div>
        </div>
    {/each}
</div>

<div class="coordinates">
    X: {mouseX}px<br>
    Y: {absoluteY}px<br>
    Viewport Y: {mouseY}px
</div>

<div class="checkpoint-list">
    <h3>Checkpoints</h3>
    {#each checkpoints as checkpoint}
        <div class="checkpoint-item">
            #{checkpoint.id} - {checkpoint.timestamp}
            <br>
            X: {checkpoint.x}px, Y: {checkpoint.absoluteY}px
            <button 
                class="delete-button"
                on:click|stopPropagation={() => {
                    checkpoints = checkpoints.filter(c => c.id !== checkpoint.id);
                    // También eliminar los segmentos de línea conectados a este checkpoint
                    lineSegments = lineSegments.filter(
                        segment => segment.startPoint.id !== checkpoint.id && segment.endPoint.id !== checkpoint.id
                    );
                }}
            >
                ×
            </button>
        </div>
    {/each}
</div> 