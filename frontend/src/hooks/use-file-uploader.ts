import { useCallback, useState } from "react";
import { useClipboardPaste } from "./use-clipboard-paste";

export function useFileUploader() {
  const [file, setFile] = useState<File | null>(null);
  const [rawContent, setRawContent] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const processFile = (file: File) => {
    const reader = new FileReader();

    reader.onload = async (e) => {
      const content = e.target?.result as string;
      setRawContent(content);

      
    };
  };

  const handleFileChangeEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFile(file);
      processFile(file);
    }
  };

  const handleFilePaste = useCallback((file: File) => {
    setFile(file);
    processFile(file);
  }, []);

  useClipboardPaste({
    onPaste: handleFilePaste,
    acceptedFileTypes: ["text/plain", "application/pdf"],
  });

  const cancel = () => {
    setFile(null);
    setRawContent(null);
    setIsProcessing(false);
  };

  return {
    file,
    rawContent,
    isProcessing,
    handleFileChange: processFile,
    handleFileChangeEvent,
    cancel,
  };
}
