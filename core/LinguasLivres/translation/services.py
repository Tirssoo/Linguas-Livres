from google.cloud import translate_v2 as translate

client = translate.Client()

def translate_text(text, target_language="en"):
    result = client.translate(text, target_language=target_language)
    return result["translatedText"]