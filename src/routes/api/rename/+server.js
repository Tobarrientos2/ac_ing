import { json } from '@sveltejs/kit';
import fs from 'fs';
import path from 'path';

export async function POST({ request }) {
    try {
        const { oldName, newName } = await request.json();
        const staticDir = 'static';
        
        // Verificar que el nuevo nombre tenga la misma extensión
        const oldExt = path.extname(oldName);
        const newExt = path.extname(newName);
        if (oldExt !== newExt) {
            return json({ error: 'La extensión del archivo debe mantenerse igual' }, { status: 400 });
        }

        // Verificar que el archivo existe
        if (!fs.existsSync(path.join(staticDir, oldName))) {
            return json({ error: 'El archivo original no existe' }, { status: 404 });
        }

        // Verificar que el nuevo nombre no existe
        if (fs.existsSync(path.join(staticDir, newName))) {
            return json({ error: 'Ya existe un archivo con ese nombre' }, { status: 400 });
        }

        // Renombrar el archivo
        fs.renameSync(
            path.join(staticDir, oldName),
            path.join(staticDir, newName)
        );

        return json({ success: true, newName });
    } catch (error) {
        return json({ error: 'Error al renombrar el archivo' }, { status: 500 });
    }
} 