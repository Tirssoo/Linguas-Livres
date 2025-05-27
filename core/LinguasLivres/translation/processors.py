import os
import fitz  
import docx 
from .utils import ler_arquivo_txt, salvar_arquivo_txt
from .services import traduzir_texto

# PyMuPDF


def extract_text_from_txt(file):
    return file.read().decode("utf-8")

def extract_text_from_pdf(file):
    doc = fitz.open(stream=file.read(), filetype="pdf")
    text = ""
    for page in doc:
        text += page.get_text()
    return text

def extract_text_from_docx(file):
    doc = docx.Document(file)
    return "\n".join([p.text for p in doc.paragraphs])


def processar_e_traduzir_txt(caminho_arquivo, idioma_destino="EN"):
    texto = ler_arquivo_txt(caminho_arquivo)
    traduzido = traduzir_texto(texto, idioma_destino)
    nome_base = os.path.basename(caminho_arquivo)
    novo_nome = f"traduzido_{nome_base}"
    caminho_traduzido = os.path.join("media", novo_nome)
    salvar_arquivo_txt(caminho_traduzido, traduzido)
    return caminho_traduzido