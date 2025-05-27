def ler_arquivo_txt(caminho):
    with open(caminho, "r", encoding="utf-8") as f:
        return f.read()

def salvar_arquivo_txt(caminho, conteudo):
    with open(caminho, "w", encoding="utf-8") as f:
        f.write(conteudo)
