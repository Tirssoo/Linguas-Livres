import { useCallback, useEffect } from "react";

export function useClipboardPaste({
  onPaste,
  acceptedFileTypes,
}: {
  onPaste: (file: File) => void;
  acceptedFileTypes: string[];
}) {
  const handlePaste = useCallback(
    async (e: ClipboardEvent) => {
      const items = e.clipboardData?.items;

      if (!items) return;

      for (const item of Array.from(items)) {
        if (
          item.type.startsWith("text/") ||
          item.type.startsWith("application/")
        ) {
          const file = item.getAsFile();

          if (!file) continue;

          const isAcceptedType = acceptedFileTypes.some(
            (type) =>
              type == "text/plain" ||
              type == "application/pdf" ||
              type === file.type,
          );

          if (isAcceptedType) {
            e.preventDefault();
            onPaste(file);
            break;
          }
        }
      }
    },
    [onPaste, acceptedFileTypes],
  );

  useEffect(() => {
    const handler = (e: ClipboardEvent) => {
      void handlePaste(e);
    };

    document.addEventListener("paste", handler);

    return () => {
      document.removeEventListener("paste", handler);
    };
  }, [handlePaste]);
}
