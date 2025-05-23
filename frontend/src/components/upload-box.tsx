import { UploadIcon } from "lucide-react";

export function UploadBox({
  title,
  subtitle,
  description,
  accept,
  onChange,
}: {
  title: string;
  subtitle?: string;
  description?: string;
  accept: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 p-4">
      <div className="flex flex-col items-center gap-2">
        <p className="text-foreground text-center">{title}</p>
        {subtitle && <p className="inline-block">{subtitle}</p>}
      </div>
      <div className="border-primary/50 bg-primary/10 flex w-72 flex-col items-center justify-center gap-4 rounded-xl border-2 border-dashed p-6 backdrop-blur-sm">
        <UploadIcon className="text-muted-foreground size-8" />
        <p className="text-muted-foreground text-sm">Arraste e solte</p>
        <p className="text-muted-foreground text-sm">ou</p>
        <label className="bg-primary text-primary-foreground hover:bg-primary/90 focus:ring-primary/50 focus:ring-opacity-75 inline-flex cursor-pointer items-center gap-2 rounded-lg px-4 py-2 font-semibold shadow-md transition-colors duration-200 focus:ring-2 focus:outline-none">
          <span>{description}</span>
          <input
            type="file"
            accept={accept}
            onChange={onChange}
            className="hidden"
          />
        </label>
      </div>
    </div>
  );
}
