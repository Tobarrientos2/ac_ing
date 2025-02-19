import { test, expect } from '@playwright/test';
import { BuildingList, BuildingListPayload } from '../../src/lib/types/pulses/building_list';

// Mock del Pulse para tests
const MockBuildingList = {
  BuildingList: async (payload: BuildingListPayload) => {
    const result = await BuildingList.handler(payload);
    return result;
  }
};

test.describe('BuildingList Pulse Tests', () => {
  test('should return all lists when no type is specified', async () => {
    const payload = {};
    const result = await MockBuildingList.BuildingList(payload);
    
    expect(result.success).toBe(true);
    expect(result.data).toBeDefined();
    expect(result.data.buildings).toBeInstanceOf(Array);
    expect(result.data.systems).toBeInstanceOf(Array);
    expect(result.data.manuals).toBeInstanceOf(Array);
    expect(result.timestamp).toBeDefined();
  });

  test('should return only buildings when type is buildings', async () => {
    const payload = { type: 'buildings' as const };
    const result = await MockBuildingList.BuildingList(payload);
    
    expect(result.success).toBe(true);
    expect(result.data).toBeInstanceOf(Array);
    expect(result.data[0]).toHaveProperty('h1');
    expect(result.timestamp).toBeDefined();
  });

  test('should return only systems when type is systems', async () => {
    const payload = { type: 'systems' as const };
    const result = await MockBuildingList.BuildingList(payload);
    
    expect(result.success).toBe(true);
    expect(result.data).toBeInstanceOf(Array);
    expect(result.data[0]).toHaveProperty('h1');
    expect(result.timestamp).toBeDefined();
  });

  test('should return only manuals when type is manuals', async () => {
    const payload = { type: 'manuals' as const };
    const result = await MockBuildingList.BuildingList(payload);
    
    expect(result.success).toBe(true);
    expect(result.data).toBeInstanceOf(Array);
    expect(result.data[0]).toHaveProperty('h1');
    expect(result.timestamp).toBeDefined();
  });

  test('should validate payload correctly', () => {
    const validPayload = {};
    const validResult = BuildingList.validate(validPayload);
    expect(validResult.isValid).toBe(true);

    const validPayloadWithType = { type: 'buildings' };
    const validResultWithType = BuildingList.validate(validPayloadWithType);
    expect(validResultWithType.isValid).toBe(true);

    const invalidPayload = { type: 'invalid' };
    const invalidResult = BuildingList.validate(invalidPayload);
    expect(invalidResult.isValid).toBe(false);
  });
}); 