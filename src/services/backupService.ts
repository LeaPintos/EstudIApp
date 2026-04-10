import JSZip from 'jszip';
import { db } from '../db/database';

export const backupService = {
  async exportarTodo() {
    const zip = new JSZip();
    const materias = await db.materias.toArray();
    zip.file('materias.json', JSON.stringify(materias));
    const blob = await zip.generateAsync({ type: 'blob' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'estudiapp_backup.zip';
    a.click();
  },
  async importarTodo(file: File) {
    const zip = await JSZip.loadAsync(file);
    const materiasJson = await zip.file('materias.json')?.async('string');
    if (materiasJson) {
      const materias = JSON.parse(materiasJson);
      await db.materias.bulkAdd(materias);
    }
  }
};
