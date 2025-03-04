import { compile } from 'svelte/compiler';
import { readFile, writeFile } from 'fs/promises';
import * as svelteInternal from 'svelte/internal';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

async function compileSvelteToJS(componentPath, props = {}) {
    try {
        // Leer el contenido del archivo Svelte
        const source = await readFile(componentPath, 'utf-8');
        
        // Compilar el componente
        const result = compile(source, {
            generate: 'ssr',
            dev: false,
            css: 'injected',
            hydratable: true,
            name: 'DynamicComponent'
        });

        // Crear un archivo temporal para el componente compilado
        const tempFilePath = join(__dirname, 'temp-component.js');
        
        // Preparar el código
        let code = result.js.code;
        
        // Reemplazar las importaciones de svelte/internal
        code = code.replace(
            /import\s*{([^}]+)}\s*from\s*['"]svelte\/internal['"]/g,
            'const { $1 } = await import("svelte/internal")'
        );

        // Escribir el archivo temporal
        await writeFile(tempFilePath, code);

        // Importar y renderizar el componente
        const component = await import(tempFilePath + '?t=' + Date.now());
        const rendered = component.default.render(props);

        return {
            html: rendered.html || '',
            head: rendered.head || '',
            css: result.css?.code || ''
        };

    } catch (error) {
        console.error('Error compilando componente Svelte:', error);
        throw error;
    }
}

export { compileSvelteToJS };