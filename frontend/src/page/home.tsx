/** Página inicial
 *
 * Apresentação do site e uma breve descrição do que ele faz.
 * Google Maps apresentando as localizações dos locais que emitem documentos.
 */

import { getMaps } from "@/lib/api";
import { useEffect, useState } from "react";

const documentTips: { [key: string]: string } = {
  RNM: "Registro Nacional Migratório — documento de identificação para estrangeiros no Brasil.",
  CPF: "Cadastro de Pessoa Física — necessário para abrir contas, trabalhar, etc.",
  "Protocolo de Refúgio":
    "Documento provisório enquanto o pedido de refúgio é analisado.",
  "Carteira de Trabalho":
    "Documento que registra a vida profissional no Brasil.",
  SUS: "Sistema Único de Saúde — acesso gratuito à saúde pública.",
  PoupaTempo:
    "Serviço que oferece diversos atendimentos públicos em um só lugar.",
  "Receita Federal":
    "Órgão responsável pela administração tributária e previdenciária.",
  "Ministério da Justiça":
    "Órgão responsável por assuntos de imigração e refúgio.",
  CRAS: "Centro de Referência de Assistência Social — apoio e orientação social.",
  "Prefeitura Municipal":
    "Órgão local que oferece serviços públicos e assistência social.",
  Visto: "Autorização para permanecer no Brasil por um período determinado.",
  "Registro de Estrangeiro":
    "Registro obrigatório para estrangeiros que residem no Brasil.",
};

export default function LinguasLivres() {
  const [showDocModal, setShowDocModal] = useState(false);
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [maps, setMaps] = useState<unknown>();

  useEffect(() => {
    const fetchMaps = async () => {
      const { data, error } = await getMaps();
      if (error) {
        console.error(error);
      } else {
        setMaps(data!);
      }
    };

    fetchMaps();
  }, []);

  console.log(maps);

  const openModal = (type: string) => setActiveModal(type);
  const closeModal = () => setActiveModal(null);

  return (
    <div className="container mx-auto flex-1 bg-white px-14 py-8 text-gray-800">
      <header className="mb-10 text-center">
        <h1 className="text-lg font-bold text-red-600 uppercase">
          Bem-vindo(a) ao Línguas Livres
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-sm">
          Línguas Livres é uma plataforma gratuita e acessível que permite
          traduzir documentos escaneados com precisão, rapidez e simplicidade.
          Usando tecnologia de OCR (reconhecimento óptico de caracteres) e APIs
          de tradução avançadas, ajudamos pessoas de todas as origens a romper
          barreiras linguísticas e transformar informação em inclusão. Seja para
          estudos, trabalho ou acessibilidade, o Línguas Livres está aqui para
          facilitar a comunicação entre idiomas — de forma justa, livre e aberta
          a todos.
        </p>
      </header>

      <section className="mb-10 flex flex-col justify-between rounded-lg bg-gray-100 p-6 shadow-md lg:flex-row">
        <div className="mb-6 h-80 rounded-md bg-gray-300 lg:mb-0 lg:w-1/2">
          {/* Placeholder para o mapa */}
          <div className="flex h-full w-full items-center justify-center bg-gray-200 text-gray-500">
            Mapa (Google Maps aqui)
          </div>
        </div>

        <div className="px-4 lg:w-1/2">
          <h2 className="mb-4 text-lg font-bold text-red-600">
            Locais para tirar documento
          </h2>
          <div className="flex flex-wrap gap-3">
            {Object.keys(documentTips).map((item) => (
              <button
                key={item}
                title={documentTips[item]}
                className="rounded-md bg-red-500 px-4 py-2 text-sm text-white shadow hover:bg-red-600"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section>
        <h2 className="mb-6 text-center text-lg font-bold text-red-600">
          Informações úteis
        </h2>
        <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-2 lg:grid-cols-4">
          <button
            className="rounded-md bg-red-500 p-4 text-sm text-white shadow-md hover:bg-red-600"
            onClick={() => openModal("documentacao")}
          >
            <h3 className="mb-2 font-bold">DOCUMENTAÇÃO</h3>
            <p>Regularize sua situação e obtenha documentos essenciais</p>
          </button>
          <button
            className="rounded-md bg-red-500 p-4 text-sm text-white shadow-md hover:bg-red-600"
            onClick={() => openModal("saude")}
          >
            <h3 className="mb-2 font-bold">SAÚDE</h3>
            <p>Acesse atendimento médico e saúde pública</p>
          </button>
          <button
            className="rounded-md bg-red-500 p-4 text-sm text-white shadow-md hover:bg-red-600"
            onClick={() => openModal("trabalho")}
          >
            <h3 className="mb-2 font-bold">TRABALHO</h3>
            <p>Busque emprego e conheça seus direitos</p>
          </button>
          <button
            className="rounded-md bg-red-500 p-4 text-sm text-white shadow-md hover:bg-red-600"
            onClick={() => openModal("moradia")}
          >
            <h3 className="mb-2 font-bold">MORADIA</h3>
            <p>Encontre moradia e suporte com aluguel</p>
          </button>
        </div>
      </section>

      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm backdrop-brightness-50">
          <div className="w-full max-w-md rounded-lg bg-white p-6 text-left shadow-lg">
            {activeModal === "documentacao" && (
              <>
                <h3 className="mb-4 text-lg font-bold text-red-600">
                  Orientações sobre Documentação
                </h3>
                <p className="mb-4 text-sm">
                  Para obter documentos essenciais no Brasil, é importante
                  entender os requisitos para cada um: RNM, CPF, protocolo de
                  refúgio, carteira de trabalho, SUS e muito mais. Eles são
                  fundamentais para acesso a serviços, trabalho e integração
                  social.
                </p>
                <p className="mb-2 text-sm">Fontes:</p>
                <ul className="list-inside list-disc text-sm text-blue-600">
                  <li>
                    <a
                      href="https://www.gov.br/pt-br/servicos/registrar-se-como-estrangeiro-no-brasil"
                      target="_blank"
                    >
                      gov.br - Registro como estrangeiro
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.gov.br/receitafederal/pt-br/assuntos/cadastro-cpf"
                      target="_blank"
                    >
                      Receita Federal - CPF
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.gov.br/mds/pt-br/acoes-e-programas/carteira-de-trabalho"
                      target="_blank"
                    >
                      gov.br - Carteira de Trabalho
                    </a>
                  </li>
                </ul>
              </>
            )}

            {activeModal === "saude" && (
              <>
                <h3 className="mb-4 text-lg font-bold text-red-600">
                  Acesso à Saúde Pública
                </h3>
                <p className="mb-4 text-sm">
                  O Sistema Único de Saúde (SUS) garante atendimento gratuito
                  para todos os residentes no Brasil, inclusive estrangeiros.
                  Basta apresentar um documento de identidade e solicitar o
                  Cartão SUS na unidade de saúde mais próxima.
                </p>
                <p className="mb-2 text-sm">Fontes:</p>
                <ul className="list-inside list-disc text-sm text-blue-600">
                  <li>
                    <a
                      href="https://www.gov.br/saude/pt-br/assuntos/cartao-nacional-de-saude"
                      target="_blank"
                    >
                      gov.br - Cartão SUS
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.saude.gov.br/atencao-basica"
                      target="_blank"
                    >
                      Ministério da Saúde - Atenção Básica
                    </a>
                  </li>
                  <li>
                    <a href="https://www.gov.br/saude/pt-br" target="_blank">
                      Portal da Saúde
                    </a>
                  </li>
                </ul>
              </>
            )}

            {activeModal === "trabalho" && (
              <>
                <h3 className="mb-4 text-lg font-bold text-red-600">
                  Trabalho e Direitos Trabalhistas
                </h3>
                <p className="mb-4 text-sm">
                  Todo estrangeiro com documentação regular pode trabalhar no
                  Brasil. A Carteira de Trabalho é essencial para o registro
                  formal. Também é importante conhecer seus direitos
                  trabalhistas garantidos por lei.
                </p>
                <p className="mb-2 text-sm">Fontes:</p>
                <ul className="list-inside list-disc text-sm text-blue-600">
                  <li>
                    <a
                      href="https://www.gov.br/trabalho-e-emprego/pt-br"
                      target="_blank"
                    >
                      Ministério do Trabalho
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.gov.br/migracoes/pt-br"
                      target="_blank"
                    >
                      Secretaria Nacional de Migrações
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.gov.br/pt-br/temas/trabalho"
                      target="_blank"
                    >
                      gov.br - Trabalho
                    </a>
                  </li>
                </ul>
              </>
            )}

            {activeModal === "moradia" && (
              <>
                <h3 className="mb-4 text-lg font-bold text-red-600">
                  Moradia e Apoio com Aluguel
                </h3>
                <p className="mb-4 text-sm">
                  Existem programas municipais e organizações sociais que
                  auxiliam imigrantes a encontrarem moradia temporária ou
                  definitiva. O CRAS pode orientar sobre auxílio aluguel e
                  inscrição em programas habitacionais.
                </p>
                <p className="mb-2 text-sm">Fontes:</p>
                <ul className="list-inside list-disc text-sm text-blue-600">
                  <li>
                    <a
                      href="https://www.gov.br/mds/pt-br/acoes-e-programas/assistencia-social/cras"
                      target="_blank"
                    >
                      gov.br - CRAS
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.prefeitura.sp.gov.br/cidade/secretarias/direitos_humanos/assistencia_social/"
                      target="_blank"
                    >
                      Prefeitura SP - Assistência Social
                    </a>
                  </li>
                  <li>
                    <a href="https://www.acnur.org/portugues/" target="_blank">
                      ACNUR Brasil
                    </a>
                  </li>
                </ul>
              </>
            )}

            <button
              className="mt-6 rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600"
              onClick={closeModal}
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
