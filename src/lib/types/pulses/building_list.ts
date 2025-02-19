export const PULSE_NAME = 'BuildingList' as const;

export interface Building {
  h1: string;
  images?: string[];
  image?: string;
  slug: string;
}

export interface BuildingListPayload {
  type?: 'buildings' | 'systems' | 'manuals';
}

export interface BuildingListResponse {
  buildings: Building[];
  systems: Building[];
  manuals: Building[];
}

export function validateBuildingList(payload: any): {
  isValid: boolean;
  expectedType: string;
  example: string;
} {
  return {
    isValid: typeof payload === 'object' && 
            payload !== null &&
            (!payload.type || ['buildings', 'systems', 'manuals'].includes(payload.type)),
    expectedType: 'BuildingListPayload',
    example: `{
      type: "buildings" // opcional, si no se especifica retorna todas las listas
    }`
  };
}

export const BuildingList = {
  type: PULSE_NAME,
  handler: async (payload: BuildingListPayload) => {
    // Importar los datos del JSON
    const buildingData = await import('$lib/data/buildings.json');
    const response: BuildingListResponse = buildingData;

    if (payload.type) {
      return {
        success: true,
        data: response[payload.type],
        timestamp: new Date().toISOString()
      };
    }

    return {
      success: true,
      data: response,
      timestamp: new Date().toISOString()
    };
  },
  validate: validateBuildingList
}; 