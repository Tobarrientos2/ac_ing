import { compileSvelteToJS } from './compile.js';
import { writeFile } from 'fs/promises';

async function runTest() {
    try {
        const result = await compileSvelteToJS(
            './src/lib/components/FirstSectionHome.svelte',
            {} // No necesitamos props específicos para este componente
        );

        // Guardar el resultado en un archivo para mejor visualización
        await writeFile('output.html', result.html, 'utf-8');
        await writeFile('output.css', result.css, 'utf-8');

        console.log('Compilación completada. Revisa output.html y output.css');
    } catch (error) {
        console.error('Error en la prueba:', error);
    }
}

runTest();

