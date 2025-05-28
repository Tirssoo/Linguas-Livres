from django.test import TestCase

# Create your tests here.
from django.http import FileResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .translation.utils import handle_translation_and_save

@csrf_exempt
def traduzir_documento(request):
    if request.method == "POST" and request.FILES.get("file"):
        target_lang = request.GET.get("lang", "en")
        file = request.FILES["file"]

        try:
            output_path = handle_translation_and_save(file, target_lang)
            filename = f"traduzido_{file.name.split('.')[0]}.txt"
            return FileResponse(open(output_path, 'rb'), as_attachment=True, filename=filename)
        except Exception as e:
            return JsonResponse({"erro": str(e)}, status=400)

    return JsonResponse({"erro": "Envie um arquivo para traduzir"}, status=400)