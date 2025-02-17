import type { 
  PulseResponse, 
  ImageListResponse, 
  ImageRenamePayload, 
  ImageDeletePayload,
  ImageRenameResponse,
  ImageDeleteResponse 
} from '../types';

// Pulse para listar imágenes
export const LIST_IMAGES_PULSE = 'ListImages' as const;

export function validateListImages(payload: any) {
  return {
    isValid: true, // No requiere payload
    expectedType: 'void',
    example: '{}'
  };
}

export const ListImages = {
  type: LIST_IMAGES_PULSE,
  handler: async () => {
    try {
      const response = await fetch('/api/images');
      const data = await response.json();
      return {
        success: true,
        data: data as ImageListResponse,
        timestamp: new Date().toISOString()
      };
    } catch (error) {
      return {
        success: false,
        error: 'Error al obtener la lista de imágenes',
        timestamp: new Date().toISOString()
      };
    }
  },
  validate: validateListImages
};

// Pulse para renombrar imágenes
export const RENAME_IMAGE_PULSE = 'RenameImage' as const;

export function validateRenameImage(payload: any) {
  return {
    isValid: typeof payload === 'object' && 
            payload !== null &&
            'oldName' in payload &&
            'newName' in payload &&
            typeof payload.oldName === 'string' &&
            typeof payload.newName === 'string',
    expectedType: 'ImageRenamePayload',
    example: `{
      oldName: "old_image.jpg",
      newName: "new_image.jpg"
    }`
  };
}

export const RenameImage = {
  type: RENAME_IMAGE_PULSE,
  handler: async (payload: ImageRenamePayload) => {
    try {
      const response = await fetch('/api/rename', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      });

      const data = await response.json();

      if (response.ok) {
        return {
          success: true,
          data: data as ImageRenameResponse,
          timestamp: new Date().toISOString()
        };
      } else {
        return {
          success: false,
          error: data.error || 'Error al renombrar la imagen',
          timestamp: new Date().toISOString()
        };
      }
    } catch (error) {
      return {
        success: false,
        error: 'Error al renombrar la imagen',
        timestamp: new Date().toISOString()
      };
    }
  },
  validate: validateRenameImage
};

// Pulse para eliminar imágenes
export const DELETE_IMAGE_PULSE = 'DeleteImage' as const;

export function validateDeleteImage(payload: any) {
  return {
    isValid: typeof payload === 'object' && 
            payload !== null &&
            'filename' in payload &&
            typeof payload.filename === 'string',
    expectedType: 'ImageDeletePayload',
    example: `{
      filename: "image_to_delete.jpg"
    }`
  };
}

export const DeleteImage = {
  type: DELETE_IMAGE_PULSE,
  handler: async (payload: ImageDeletePayload) => {
    try {
      const response = await fetch('/api/delete', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      });

      const data = await response.json();

      if (response.ok) {
        return {
          success: true,
          data: data as ImageDeleteResponse,
          timestamp: new Date().toISOString()
        };
      } else {
        return {
          success: false,
          error: data.error || 'Error al eliminar la imagen',
          timestamp: new Date().toISOString()
        };
      }
    } catch (error) {
      return {
        success: false,
        error: 'Error al eliminar la imagen',
        timestamp: new Date().toISOString()
      };
    }
  },
  validate: validateDeleteImage
};