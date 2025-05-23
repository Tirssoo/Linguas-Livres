import { useCallback, useRef, useState } from "react";

export function Dropzone({
  children,
  acceptedFileTypes,
  dropText,
  setCurrentFile,
}: {
  children: React.ReactNode;
  acceptedFileTypes: string[];
  dropText: string;
  setCurrentFile: (file: File) => void;
}) {
  const [isDragging, setIsDragging] = useState(false);
  const dragCounter = useRef(0);

  const handleDrag = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDragIn = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    dragCounter.current++;

    if (e.dataTransfer?.items && e.dataTransfer.items.length > 0)
      setIsDragging(true);
  }, []);

  const handleDragOut = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    dragCounter.current--;

    if (dragCounter.current === 0) setIsDragging(false);
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragging(false);
      dragCounter.current = 0;

      const files = e.dataTransfer?.files;
      if (files && files.length > 0) {
        const droppedFile = files[0];

        if (!droppedFile) {
          alert("How did you do a drop with no files???");
          throw new Error("No files dropped.");
        }

        if (
          !acceptedFileTypes.includes(droppedFile.type) &&
          !acceptedFileTypes.some((type) =>
            droppedFile.name.toLowerCase().endsWith(type.replace("*", "")),
          )
        ) {
          alert("Tipo de arquivo não suportado.");
          throw new Error("Invalid file type.");
        }

        setCurrentFile(droppedFile);
      }
    },
    [acceptedFileTypes, setCurrentFile],
  );
  return (
    <div
      onDragEnter={handleDragIn}
      onDragLeave={handleDragOut}
      onDragOver={handleDrag}
      onDrop={handleDrop}
      className="h-full w-full"
    >
      {isDragging && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="bg-primary/50 absolute inset-0 backdrop-blur-sm" />
          <div className="animate-in fade-in zoom-in border-primary relative flex h-[90%] w-[90%] transform items-center justify-center rounded-xl border-2 border-dashed transition-all duration-200 ease-out">
            <p className="text-primary text-2xl font-semibold">{dropText}</p>
          </div>
        </div>
      )}
      {children}
    </div>
  );
}
