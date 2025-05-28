/** Página de tradução
 *
 * Página onde o usuário pode traduzir um documento.
 */

import { Dropzone } from "@/components/dropzone";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Textarea } from "@/components/ui/textarea";
import { UploadBox } from "@/components/upload-box";
import { useFileUploader } from "@/hooks/use-file-uploader";
import { api } from "@/lib/api";
import { formatFileSize } from "@/lib/utils";
import { FileTextIcon } from "lucide-react";
import { useState } from "react";

export default function TranslatePage() {
  const fileUploaderProps = useFileUploader();

  const [file, setFile] = useState<File | null>(null);
  const [translatedText, setTranslatedText] = useState<string | null>(null);

  const handleTranslation = async () => {
    if (!file) return;
    const { data, error } = await api.translate(file);
    if (error) {
      console.error(error);
    }
    setFile(null);
    const { traduzido } = await data?.json();
    setTranslatedText(traduzido);
  };

  const uploadBox = (
    <UploadBox
      title="Insira o documento"
      subtitle="Documentos suportados: PDF, DOCX, DOC, TXT"
      description="Clique para selecionar"
      accept="application/pdf, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document, text/plain"
      onChange={fileUploaderProps.handleFileChangeEvent}
    />
  );

  return (
    <main className="flex h-full flex-1 flex-col items-center justify-center gap-4">
      <h1 className="text-primary bg-active rounded-sm px-4 py-1 text-4xl font-bold">
        Insira o documento
      </h1>
      <div className="flex flex-col items-center justify-center gap-4">
        {!file ? (
          <Dropzone
            acceptedFileTypes={[
              "application/pdf",
              "application/msword",
              "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
              "text/plain",
            ]}
            dropText="Arraste e solte o documento aqui"
            setCurrentFile={setFile}
          >
            {uploadBox}
          </Dropzone>
        ) : (
          <Dropzone
            acceptedFileTypes={[
              "application/pdf",
              "application/msword",
              "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
              "text/plain",
            ]}
            dropText="Arraste e solte o documento aqui"
            setCurrentFile={setFile}
          >
            <div className="mx-auto flex max-w-2xl flex-col items-center justify-center gap-6 p-6">
              <div className="flex w-full flex-col items-center gap-4 rounded-xl p-6">
                <FileTextIcon className="text-muted-foreground size-12" />
                <p className="text-muted-foreground text-lg font-medium">
                  {file.name}
                </p>
              </div>

              <div className="flex gap-6 text-base">
                <div className="bg-primary/10 flex flex-col items-center rounded-lg p-3">
                  <span className="text-muted-foreground text-sm">
                    Tipo do arquivo:
                  </span>
                  <span className="text-foreground/60 font-medium">
                    {file.type}
                  </span>
                </div>
              </div>
              <div className="flex gap-6 text-base">
                <div className="bg-primary/10 flex items-center rounded-lg p-3">
                  <span className="text-muted-foreground text-sm">
                    Tamanho do arquivo:
                  </span>
                  <span className="text-foreground/60 font-medium">
                    {formatFileSize(file.size)}
                  </span>
                </div>
              </div>
            </div>
          </Dropzone>
        )}
        {file && (
          <button
            type="button"
            className="bg-active text-primary hover:bg-active/80 w-full rounded-lg px-4 py-2 font-semibold uppercase"
            onClick={handleTranslation}
          >
            Traduzir
          </button>
        )}
      </div>
      {translatedText && (
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="text-primary bg-active rounded-sm px-4 py-1 text-4xl font-bold">
            Resultado
          </h1>
          <ScrollArea className="h-[calc(100vh-20rem)] w-full">
            <Textarea
              className="text-muted-foreground w-full text-lg font-medium"
              defaultValue={translatedText}
            />
          </ScrollArea>
        </div>
      )}
    </main>
  );
}
