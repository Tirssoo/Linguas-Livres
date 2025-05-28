from django.shortcuts import render
from django.http import FileResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.core.files.storage import default_storage
from .translation.processors import extract_text_from_pdf, extract_text_from_txt, extract_text_from_docx
from .translation.services import traduzir_texto
import os

@csrf_exempt
def traduzir_view(request, *args, **kwargs):
    if request.method == "POST" and request.FILES.get("arquivo"):
        arquivo = request.FILES["arquivo"]
        nome_arquivo = arquivo.name.lower()
        if nome_arquivo.endswith(".txt"):
            texto = extract_text_from_txt(arquivo)
            traduzido = traduzir_texto(texto)
            return JsonResponse({"traduzido": traduzido})
        elif nome_arquivo.endswith(".pdf"):
            texto = extract_text_from_pdf(arquivo)
            traduzido = traduzir_texto(texto)
            return JsonResponse({"traduzido": traduzido})
        elif nome_arquivo.endswith(".docx"):
            texto = extract_text_from_docx(arquivo)
            traduzido = traduzir_texto(texto)
            return JsonResponse({"traduzido": traduzido})
        else:
            return JsonResponse({"erro": "Tipo de arquivo não suportado. Apenas .txt e .pdf são aceitos."}, status=400)
    return JsonResponse({"erro": "Método não suportado"}, status=405)