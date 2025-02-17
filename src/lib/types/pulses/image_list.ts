import type { ImageListResponse } from '../types';

export const PULSE_NAME = 'ImageList' as const;

// No necesita payload, pero definimos la interface por consistencia
export interface ImageListPayload {
  // Sin propiedades requeridas
}

export function validateImageList(payload: any) {
  return {
    isValid: true, // No requiere payload
    expectedType: 'ImageListPayload',
    example: '{}'
  };
}

export const ImageList = {
  type: PULSE_NAME,
  handler: async () => {
    try {
      const response = await fetch('/api/images/list');
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
  validate: validateImageList
};