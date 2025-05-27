from django.shortcuts import render
from django.http import FileResponse
from django.views.decorators.csrf import csrf_exempt
from django.core.files.storage import default_storage


def home(request):
    return render(request, 'LinguasLivres/home.html')

@csrf_exempt
def traduzir_view(request):
    if request.method == "POST" and request.FILES.get("arquivo"):
        uploaded_file = request.FILES["arquivo"]
        caminho = default_storage.save(f"uploads/{uploaded_file.name}", uploaded_file)
        caminho_traduzido = "processar_e_traduzir_txt"(caminho)
        return FileResponse(open(caminho_traduzido, "rb"), as_attachment=True)
    
    return render(request, "upload.html")