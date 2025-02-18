import type { ImageDeletePayload, ImageDeleteResponse } from '../types';

export const PULSE_NAME = 'ImageDelete' as const;

export function validateImageDelete(payload: any) {
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

export const ImageDelete = {
  type: PULSE_NAME,
  handler: async (payload: ImageDeletePayload) => {
    try {
      const response = await fetch('/api/images/delete', {
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
  validate: validateImageDelete
}; 
