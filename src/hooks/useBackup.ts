import { useCallback } from 'react';
import { backupService } from '../services/backupService';

export function useBackup() {
  const exportar = useCallback(async () => {
    await backupService.exportarTodo();
  }, []);

  const importar = useCallback(async (file: File) => {
    await backupService.importarTodo(file);
  }, []);

  return { exportar, importar };
}
