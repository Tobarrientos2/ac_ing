import { json } from '@sveltejs/kit';
import fs from 'fs';
import path from 'path';

export async function POST({ request }) {
    try {
        const formData = await request.formData();
        const file = formData.get('file');
        
        if (!file) {
            return json({ error: 'No se proporcionó ningún archivo' }, { status: 400 });
        }

        const staticDir = 'static';
        const filename = file.name;
        const filePath = path.join(staticDir, filename);

        // Verificar si el archivo ya existe
        if (fs.existsSync(filePath)) {
            return json({ error: 'Ya existe un archivo con ese nombre' }, { status: 400 });
        }

        // Convertir el archivo a un buffer y guardarlo
        const arrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        fs.writeFileSync(filePath, buffer);

        return json({ 
            success: true, 
            filename: filename,
            message: 'Archivo subido correctamente' 
        });
    } catch (error) {
        console.error('Error uploading file:', error);
        return json({ error: 'Error al subir el archivo' }, { status: 500 });
    }
}