/** Página de tradução
 *
 * Página onde o usuário pode traduzir um documento.
 */

import { Dropzone } from "@/components/dropzone";

export default function TranslatePage() {
  return (
    <main className="flex h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-primary bg-active rounded-sm px-4 py-1 text-4xl font-bold">Insira o documento</h1>
      <Dropzone />
    </main>
  );
}
