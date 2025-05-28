import { tryCatch } from "./try-catch";

const apiUrl = import.meta.env.VITE_API_URL;

export const api = {
  translate: async (file?: string | File, language?: string) => {
    if (file && file instanceof File) {
      const filename = file.name.replace(" ", "_");
      const formData = new FormData();
      formData.append("arquivo", file, filename);
      formData.append("lingua", language ?? "en");

      const { data, error } = await tryCatch(
        fetch(`${apiUrl}/traduzir/`, {
          method: "POST",
          body: formData,
        }),
      );

      return { data, error };
    }

    if (file && typeof file === "string") {
      const { data, error } = await tryCatch(
        fetch(`${apiUrl}/traduzir/`, {
          method: "POST",
          body: JSON.stringify({ texto: file, lingua: language ?? "en" }),
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }),
      );

      return { data, error };
    }

    return { data: null, error: "Nenhum arquivo ou texto fornecido" };
  },
};
