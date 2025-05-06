import { translateFile } from "@/lib/api";
import { useState } from "react";

type DropzoneProps = {
  fileSizeLimit?: number;
};

export function Dropzone({ fileSizeLimit = 10 }: DropzoneProps) {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.size > fileSizeLimit * 1024 * 1024) {
      alert(`O arquivo deve ter menos de ${fileSizeLimit}MB`);
      return;
    }
  };

  const handleTranslation = async () => {
    if (!file) return;
    const { data, error } = await translateFile(file);
    if (error) {
      console.error(error);
    }
    setFile(null);
    console.log(data);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className="border-border flex items-center justify-center rounded-lg border-2 border-dashed p-4">
        <p className="text-muted-foreground text-sm">
          Arraste e solte o documento aqui
        </p>
        <input type="file" className="hidden" onChange={handleFileChange} />
      </div>
      <button
        className="bg-active text-primary hover:bg-active/80 w-full rounded-lg px-4 py-2 font-semibold uppercase"
        onClick={handleTranslation}
      >
        Converter
      </button>
    </div>
  );
}
