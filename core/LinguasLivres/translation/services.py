from google.cloud import translate_v2 as translate
import os
import requests

client = translate.Client()

def translate_text(text, target_language="en"):
    result = client.translate(text, target_language=target_language)
    return result["translatedText"]
s
DEEPL_API_KEY = os.getenv("DEEPL_API_KEY")

def traduzir_texto(texto, idioma_destino="EN"):
    url = "https://api-free.deepl.com/v2/translate"
    data = {
        "auth_key": DEEPL_API_KEY,
        "text": texto,
        "target_lang": idioma_destino
    }
    response = requests.post(url, data=data)
    response.raise_for_status()
    return response.json()["translations"][0]["text"]