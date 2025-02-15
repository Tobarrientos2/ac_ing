import { json } from '@sveltejs/kit';
import fs from 'fs';
import path from 'path';

export async function GET() {
    try {
        const staticDir = 'static';
        const files = fs.readdirSync(staticDir);
        
        // Filtra solo archivos de imagen
        const imageFiles = files.filter(file => {
            const ext = path.extname(file).toLowerCase();
            return ['.jpg', '.jpeg', '.png', '.gif', '.webp'].includes(ext);
        });

        return json({ images: imageFiles });
    } catch (error) {
        return json({ error: 'Error reading directory' }, { status: 500 });
    }
} 