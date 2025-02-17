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
        let filename = file.name;

        if (formData.get('isFavicon')) {
            // Guardar como favicon.ico
            filename = 'favicon.svg';
            // Si ya existe un favicon anterior, eliminarlo
            const faviconPath = path.join(staticDir, filename);
            if (fs.existsSync(faviconPath)) {
                fs.unlinkSync(faviconPath);
            }
        } else if (formData.get('isLogo')) {
            // Obtener la extensión del archivo original
            const extension = file.name.split('.').pop();
            // Guardar como logo.extension
            filename = `logo.${extension}`;
            // Si ya existe un logo anterior con otra extensión, eliminarlo
            const possibleExtensions = ['jpg', 'jpeg', 'png', 'gif', 'svg'];
            possibleExtensions.forEach(ext => {
                const oldLogoPath = path.join(staticDir, `logo.${ext}`);
                if (fs.existsSync(oldLogoPath)) {
                    fs.unlinkSync(oldLogoPath);
                }
            });
        }

        const filePath = path.join(staticDir, filename);
        
        // Si el archivo existe, simplemente lo sobrescribiremos
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