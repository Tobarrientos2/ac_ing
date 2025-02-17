import { json } from '@sveltejs/kit';
import fs from 'fs';
import path from 'path';

export async function POST({ request }) {
    try {
        const { filename } = await request.json();
        const staticDir = 'static';
        const filePath = path.join(staticDir, filename);

        // Verificar que el archivo existe
        if (!fs.existsSync(filePath)) {
            return json({ error: 'El archivo no existe' }, { status: 404 });
        }

        // Eliminar el archivo
        fs.unlinkSync(filePath);

        return json({ success: true, message: 'Archivo eliminado correctamente' });
    } catch (error) {
        return json({ error: 'Error al eliminar el archivo' }, { status: 500 });
    }
} 