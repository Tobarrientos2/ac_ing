import { test, expect } from '@playwright/test';
import { 
  ListImages, 
  RenameImage, 
  DeleteImage,
  LIST_IMAGES_PULSE,
  RENAME_IMAGE_PULSE,
  DELETE_IMAGE_PULSE
} from '../../src/lib/types/pulses/image_management';
import type { 
  ImageListResponse, 
  ImageRenameResponse, 
  ImageDeleteResponse 
} from '../../src/lib/types/types';

// Mock de fetch para tests
const mockFetch = async (url: string, options?: RequestInit) => {
  // Mock para listar imágenes
  if (url === '/api/images') {
    return {
      ok: true,
      json: async () => ({ 
        images: ['image1.jpg', 'image2.jpg'] 
      } as ImageListResponse)
    };
  }

  // Mock para renombrar imágenes
  if (url === '/api/rename') {
    const body = JSON.parse(options?.body as string);
    if (body.oldName === 'error.jpg') {
      return {
        ok: false,
        json: async () => ({ 
          error: 'Error al renombrar' 
        })
      };
    }
    return {
      ok: true,
      json: async () => ({ 
        newName: body.newName,
        success: true 
      } as ImageRenameResponse)
    };
  }

  // Mock para eliminar imágenes
  if (url === '/api/delete') {
    const body = JSON.parse(options?.body as string);
    if (body.filename === 'error.jpg') {
      return {
        ok: false,
        json: async () => ({ 
          error: 'Error al eliminar' 
        })
      };
    }
    return {
      ok: true,
      json: async () => ({ 
        success: true,
        filename: body.filename 
      } as ImageDeleteResponse)
    };
  }

  throw new Error('URL no soportada en el mock');
};

// Reemplazar fetch global con el mock
global.fetch = mockFetch as any;

test.describe('Image Management Pulses Tests', () => {
  // Tests para ListImages
  test.describe('ListImages Pulse', () => {
    test('should successfully list images', async () => {
      const result = await ListImages.handler();
      expect(result.success).toBe(true);
      expect(result.data?.images).toHaveLength(2);
      expect(result.data?.images).toContain('image1.jpg');
      expect(result.data?.images).toContain('image2.jpg');
    });

    test('should validate empty payload', () => {
      const validation = ListImages.validate({});
      expect(validation.isValid).toBe(true);
    });
  });

  // Tests para RenameImage
  test.describe('RenameImage Pulse', () => {
    test('should successfully rename image', async () => {
      const payload = {
        oldName: 'old.jpg',
        newName: 'new.jpg'
      };
      const result = await RenameImage.handler(payload);
      expect(result.success).toBe(true);
      expect(result.data?.newName).toBe('new.jpg');
    });

    test('should handle rename error', async () => {
      const payload = {
        oldName: 'error.jpg',
        newName: 'new.jpg'
      };
      const result = await RenameImage.handler(payload);
      expect(result.success).toBe(false);
      expect(result.error).toBeDefined();
    });

    test('should validate payload', () => {
      const validation = RenameImage.validate({
        oldName: 'old.jpg',
        newName: 'new.jpg'
      });
      expect(validation.isValid).toBe(true);
    });

    test('should reject invalid payload', () => {
      const validation = RenameImage.validate({
        oldName: 123,
        newName: 'new.jpg'
      });
      expect(validation.isValid).toBe(false);
    });
  });

  // Tests para DeleteImage
  test.describe('DeleteImage Pulse', () => {
    test('should successfully delete image', async () => {
      const payload = {
        filename: 'delete.jpg'
      };
      const result = await DeleteImage.handler(payload);
      expect(result.success).toBe(true);
      expect(result.data?.filename).toBe('delete.jpg');
    });

    test('should handle delete error', async () => {
      const payload = {
        filename: 'error.jpg'
      };
      const result = await DeleteImage.handler(payload);
      expect(result.success).toBe(false);
      expect(result.error).toBeDefined();
    });

    test('should validate payload', () => {
      const validation = DeleteImage.validate({
        filename: 'image.jpg'
      });
      expect(validation.isValid).toBe(true);
    });

    test('should reject invalid payload', () => {
      const validation = DeleteImage.validate({
        filename: 123
      });
      expect(validation.isValid).toBe(false);
    });
  });
}); 
