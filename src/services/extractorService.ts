import * as pdfjs from 'pdfjs-dist';

// Cargar el worker localmente
pdfjs.GlobalWorkerOptions.workerSrc = '/public/pdf.worker.min.mjs';

export const extractorService = {
  async extraerTexto(file: File): Promise<string> {
    const arrayBuffer = await file.arrayBuffer();
    const pdf = await pdfjs.getDocument(arrayBuffer).promise;
    let text = '';
    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const content = await page.getTextContent();
      text += content.items.map((item: any) => item.str).join(' ') + '\n';
    }
    return text;
  }
};
