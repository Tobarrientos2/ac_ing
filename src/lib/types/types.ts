// Tipos base para la aplicación

// Tipos para respuestas de Pulses
export interface PulseResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  timestamp: string;
}

// Tipos para la gestión de imágenes
export interface ImageInfo {
  name: string;
  path: string;
}

export interface ImageListResponse {
  images: string[];
}

export interface ImageRenamePayload {
  oldName: string;
  newName: string;
}

export interface ImageDeletePayload {
  filename: string;
}

export interface ImageRenameResponse {
  newName: string;
  success: boolean;
}

export interface ImageDeleteResponse {
  success: boolean;
  filename: string;
}