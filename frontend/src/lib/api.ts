import { tryCatch } from "./try-catch";

const apiUrl = import.meta.env.VITE_API_URL;

export const api = {
  translate: async (file?: File, text?: string) => {
    if (file) {
      const filename = file.name.replace(" ", "_");
      const formData = new FormData();
      formData.append("arquivo", file, filename);

      const { data, error } = await tryCatch(
        fetch(`${apiUrl}/traduzir/`, {
          method: "POST",
          body: formData,
        }),
      );

      return { data, error };
    }

    if (text) {
      const { data, error } = await tryCatch(
        fetch(`${apiUrl}/traduzir/`, {
          method: "POST",
          body: JSON.stringify({ texto: text }),
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
