import tempfile
from .processors import extract_text_from_txt, extract_text_from_pdf, extract_text_from_docx
from .services import translate_text

def handle_translation_and_save(file, target_lang="en"):
    filename = file.name.lower()

    if filename.endswith(".txt"):
        text = extract_text_from_txt(file)
    elif filename.endswith(".pdf"):
        text = extract_text_from_pdf(file)
    elif filename.endswith(".docx"):
        text = extract_text_from_docx(file)
    else:
        raise ValueError("Formato de arquivo não suportado")

    translated = translate_text(text, target_lang)

    temp_file = tempfile.NamedTemporaryFile(delete=False, suffix=".txt", mode='w', encoding='utf-8')
    temp_file.write(translated)
    temp_file.close()

    return temp_file.name