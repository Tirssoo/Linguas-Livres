export function Dropzone() {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className="border-border flex items-center justify-center rounded-lg border-2 border-dashed p-4">
        <p className="text-muted-foreground text-sm">Arraste e solte o documento aqui</p>
        <input type="file" className="hidden" />
      </div>
      <button className="bg-active text-primary hover:bg-active/80 w-full rounded-lg px-4 py-2 font-semibold uppercase">
        Converter
      </button>
    </div>
  );
}
