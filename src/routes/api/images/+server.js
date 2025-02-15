import { json } from '@sveltejs/kit';
import fs from 'fs';
import path from 'path';

export async function GET() {
    try {
        const staticDir = 'static';
        const files = fs.readdirSync(staticDir);
        
        // Filtrar solo archivos de imagen
        const imageFiles = files.filter(file => {
            const extension = file.toLowerCase().split('.').pop();
            return ['jpg', 'jpeg', 'png', 'gif', 'svg', 'webp'].includes(extension);
        });

        return json({ images: imageFiles });
    } catch (error) {
        console.error('Error reading images:', error);
        return json({ error: 'Error al leer las imágenes' }, { status: 500 });
    }
} 