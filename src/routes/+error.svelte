<script lang="ts">
    import { page } from '$app/stores';
</script>

<div class="error-container">
    <h1>404 - Página no encontrada</h1>
    <p>Lo sentimos, la página "{$page.url.pathname}" no existe.</p>
    <a href="/">Volver al inicio</a>
</div>

<style>
    .error-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        text-align: center;
        padding: 1rem;
    }

    h1 {
        color: #e74c3c;
        margin-bottom: 1rem;
    }

    a {
        color: #3498db;
        text-decoration: none;
        margin-top: 1rem;
        padding: 0.5rem 1rem;
        border: 2px solid #3498db;
        border-radius: 4px;
        transition: all 0.3s ease;
    }

    a:hover {
        background-color: #3498db;
        color: white;
    }
</style> 