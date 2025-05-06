import { tryCatch } from "./try-catch";

export async function translateFile(file: File) {
  const formData = new FormData();
  formData.append("file", file);
  const { data, error } = await tryCatch(
    fetch("/api/translate", {
      method: "POST",
      body: formData,
    }),
  );

  return { data, error };
}
