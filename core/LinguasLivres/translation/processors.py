import os
from .utils import ler_arquivo_txt, salvar_arquivo_txt
from .services import traduzir_texto

def processar_e_traduzir_txt(caminho_arquivo, idioma_destino="EN"):
    texto = ler_arquivo_txt(caminho_arquivo)
    traduzido = traduzir_texto(texto, idioma_destino)
    nome_base = os.path.basename(caminho_arquivo)
    novo_nome = f"traduzido_{nome_base}"
    caminho_traduzido = os.path.join("media", novo_nome)
    salvar_arquivo_txt(caminho_traduzido, traduzido)
    return caminho_traduzido