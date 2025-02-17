import { writable } from 'svelte/store';
import { config } from './config/config';

type ApiMode = keyof typeof config.apiBaseUrl;

export const pulseStore = writable({});
export const pulseUpdates = writable<Array<{ message: string; type: 'info' | 'error'; details?: any }>>([]);
export const clientPulseStore = writable<Record<string, { 
  status: 'transit' | 'completed' | 'interrupted'; 
  data?: any; 
  input?: any;
  error?: string;
  isClientPulse: true;
  source?: {
    fileName: string;
    fullPath: string;
    line: string;
    column: string;
  };
}>>({});

function getCallerInfo() {
  try {
    throw new Error();
  } catch (e: unknown) {
    if (e instanceof Error) {
      const stack = e.stack?.split('\n');
      if (stack) {
        const callerLine = stack.find((line: string) => 
          (line.includes('.svelte') || line.includes('.ts') || line.includes('.js')) && 
          !line.includes('clientPulses.ts') && 
          !line.includes('node_modules')
        );

        if (callerLine) {
          const match = callerLine.match(/(?:at\s+)?(?:\w+\s+)?\(?([^()]+):(\d+):(\d+)\)?/);
          if (match) {
            const fullPath = match[1];
            const fileName = fullPath.split('/').pop() || 'unknown';
            return {
              fileName,
              fullPath,
              line: match[2],
              column: match[3]
            };
          }
        }
      }
    }
    return { 
      fileName: 'unknown', 
      fullPath: 'unknown', 
      line: '0', 
      column: '0' 
    };
  }
}

function getPulseFileName(pulseName: string): string {
  // Convierte de PascalCase a snake_case
  // Ejemplo: ImageDelete -> image_delete
  return pulseName
    .replace(/([A-Z])/g, (match, letter, offset) => 
      offset > 0 ? '_' + letter.toLowerCase() : letter.toLowerCase()
    );
}

export const Pulse = new Proxy({}, {
  get: (target, prop: string) => {
    return async (payload: any = {}) => {
      try {
        const callerInfo = getCallerInfo();
        const pulseFileName = getPulseFileName(prop);
        
        clientPulseStore.update(store => ({
          ...store,
          [prop]: { 
            status: 'transit',
            input: payload,
            isClientPulse: true,
            source: callerInfo,
            data: {
              source: callerInfo
            }
          }
        }));

        // Importa dinámicamente el pulse usando la sintaxis de SvelteKit para importaciones
        const pulseModule = await import(`/src/lib/types/pulses/${pulseFileName}.ts`);
        
        if (!pulseModule[prop]) {
          throw new Error(`Pulse ${prop} no encontrado en ${pulseFileName}.ts`);
        }

        const pulse = pulseModule[prop];
        
        // Valida el payload si el pulse tiene función de validación
        if (pulse.validate) {
          const validation = pulse.validate(payload);
          if (!validation.isValid) {
            throw new Error(`Payload inválido para ${prop}. Esperado: ${validation.expectedType}. Ejemplo: ${validation.example}`);
          }
        }

        // Ejecuta el handler del pulse
        const result = await pulse.handler(payload);
        
        clientPulseStore.update(store => ({
          ...store,
          [prop]: { 
            status: 'completed', 
            data: {
              ...result,
              source: callerInfo
            },
            input: payload,
            isClientPulse: true,
            source: callerInfo
          }
        }));
        
        return result;
      } catch (error: unknown) {
        if (config.debugMode) {
          console.error('Error en ClientPulse:', error);
        }
        
        const callerInfo = getCallerInfo();
        const errorMessage = error instanceof Error ? error.message : 'Error desconocido';
        
        clientPulseStore.update(store => ({
          ...store,
          [prop]: { 
            status: 'interrupted', 
            error: errorMessage,
            data: {
              source: callerInfo
            },
            input: payload,
            isClientPulse: true,
            source: callerInfo
          }
        }));
        
        return { success: false, error: errorMessage };
      }
    };
  }
<<<<<<< HEAD
}); 
=======
});
>>>>>>> 18d591754fd2f768b27986d0d3d566b73edc10a1
