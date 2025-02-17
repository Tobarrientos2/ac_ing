import type { ImageRenamePayload, ImageRenameResponse } from '../types';

export const PULSE_NAME = 'ImageRename' as const;

export function validateImageRename(payload: any) {
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

export const ImageRename = {
  type: PULSE_NAME,
  handler: async (payload: ImageRenamePayload) => {
    try {
      const response = await fetch('/api/images/rename', {
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
  validate: validateImageRename
};