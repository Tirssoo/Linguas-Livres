/** Página inicial
 * 
 * Apresentação do site e uma breve descrição do que ele faz.
 * Google Maps apresentando as localizações dos locais que emitem documentos.
 */

import { useState } from 'react';

const documentTips: { [key: string]: string } = {
  RNM: 'Registro Nacional Migratório — documento de identificação para estrangeiros no Brasil.',
  CPF: 'Cadastro de Pessoa Física — necessário para abrir contas, trabalhar, etc.',
  'Protocolo de Refúgio': 'Documento provisório enquanto o pedido de refúgio é analisado.',
  'Carteira de Trabalho': 'Documento que registra a vida profissional no Brasil.',
  SUS: 'Sistema Único de Saúde — acesso gratuito à saúde pública.',
  PoupaTempo: 'Serviço que oferece diversos atendimentos públicos em um só lugar.',
  'Receita Federal': 'Órgão responsável pela administração tributária e previdenciária.',
  'Ministério da Justiça': 'Órgão responsável por assuntos de imigração e refúgio.',
  CRAS: 'Centro de Referência de Assistência Social — apoio e orientação social.',
  'Prefeitura Municipal': 'Órgão local que oferece serviços públicos e assistência social.',
  Visto: 'Autorização para permanecer no Brasil por um período determinado.',
  'Registro de Estrangeiro': 'Registro obrigatório para estrangeiros que residem no Brasil.',
};

export default function LinguasLivres() {
  const [showDocModal, setShowDocModal] = useState(false);
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const openModal = (type: string) => setActiveModal(type);
  const closeModal = () => setActiveModal(null);

  return (
    <div className="min-h-screen bg-white px-14 md:px-100 py-8 text-gray-800">
      <header className="text-center mb-10">
        <h1 className="text-red-600 font-bold text-lg uppercase">Bem-vindo(a) ao Línguas Livres</h1>
        <p className="mt-4 max-w-3xl mx-auto text-sm">
          Línguas Livres é uma plataforma gratuita e acessível que permite traduzir documentos escaneados com precisão, rapidez e simplicidade. Usando tecnologia de OCR (reconhecimento óptico de caracteres) e APIs de tradução avançadas, ajudamos pessoas de todas as origens a romper barreiras linguísticas e transformar informação em inclusão. Seja para estudos, trabalho ou acessibilidade, o Línguas Livres está aqui para facilitar a comunicação entre idiomas — de forma justa, livre e aberta a todos.
        </p>
      </header>

      <section className="bg-gray-100 rounded-lg p-6 shadow-md flex flex-col lg:flex-row justify-between mb-10">
        <div className="lg:w-1/2 h-80 bg-gray-300 rounded-md mb-6 lg:mb-0">
          {/* Placeholder para o mapa */}
          <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500">
            Mapa (Google Maps aqui)
          </div>
        </div>

        <div className="lg:w-1/2 px-4">
          <h2 className="text-red-600 font-bold text-lg mb-4">Locais para tirar documento</h2>
          <div className="flex flex-wrap gap-3">
            {Object.keys(documentTips).map((item) => (
              <button
                key={item}
                title={documentTips[item]}
                className="bg-red-500 text-white px-4 py-2 rounded-md shadow hover:bg-red-600 text-sm"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-red-600 font-bold text-lg text-center mb-6">Informações úteis</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
          <button
            className="bg-red-500 text-white p-4 rounded-md shadow-md hover:bg-red-600 text-sm"
            onClick={() => openModal("documentacao")}
          >
            <h3 className="font-bold mb-2">DOCUMENTAÇÃO</h3>
            <p>Regularize sua situação e obtenha documentos essenciais</p>
          </button>
          <button
            className="bg-red-500 text-white p-4 rounded-md shadow-md hover:bg-red-600 text-sm"
            onClick={() => openModal("saude")}
          >
            <h3 className="font-bold mb-2">SAÚDE</h3>
            <p>Acesse atendimento médico e saúde pública</p>
          </button>
          <button
            className="bg-red-500 text-white p-4 rounded-md shadow-md hover:bg-red-600 text-sm"
            onClick={() => openModal("trabalho")}
          >
            <h3 className="font-bold mb-2">TRABALHO</h3>
            <p>Busque emprego e conheça seus direitos</p>
          </button>
          <button
            className="bg-red-500 text-white p-4 rounded-md shadow-md hover:bg-red-600 text-sm"
            onClick={() => openModal("moradia")}
          >
            <h3 className="font-bold mb-2">MORADIA</h3>
            <p>Encontre moradia e suporte com aluguel</p>
          </button>
        </div>
      </section>

      {activeModal && (
        <div className="fixed inset-0 backdrop-brightness-50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md text-left">
            {activeModal === "documentacao" && (
              <>
                <h3 className="text-lg font-bold mb-4 text-red-600">Orientações sobre Documentação</h3>
                <p className="mb-4 text-sm">
                  Para obter documentos essenciais no Brasil, é importante entender os requisitos para cada um:
                  RNM, CPF, protocolo de refúgio, carteira de trabalho, SUS e muito mais. Eles são fundamentais para acesso a serviços, trabalho e integração social.
                </p>
                <p className="mb-2 text-sm">Fontes:</p>
                <ul className="list-disc list-inside text-sm text-blue-600">
                  <li><a href="https://www.gov.br/pt-br/servicos/registrar-se-como-estrangeiro-no-brasil" target="_blank">gov.br - Registro como estrangeiro</a></li>
                  <li><a href="https://www.gov.br/receitafederal/pt-br/assuntos/cadastro-cpf" target="_blank">Receita Federal - CPF</a></li>
                  <li><a href="https://www.gov.br/mds/pt-br/acoes-e-programas/carteira-de-trabalho" target="_blank">gov.br - Carteira de Trabalho</a></li>
                </ul>
              </>
            )}

            {activeModal === "saude" && (
              <>
                <h3 className="text-lg font-bold mb-4 text-red-600">Acesso à Saúde Pública</h3>
                <p className="mb-4 text-sm">
                  O Sistema Único de Saúde (SUS) garante atendimento gratuito para todos os residentes no Brasil, inclusive estrangeiros. Basta apresentar um documento de identidade e solicitar o Cartão SUS na unidade de saúde mais próxima.
                </p>
                <p className="mb-2 text-sm">Fontes:</p>
                <ul className="list-disc list-inside text-sm text-blue-600">
                  <li><a href="https://www.gov.br/saude/pt-br/assuntos/cartao-nacional-de-saude" target="_blank">gov.br - Cartão SUS</a></li>
                  <li><a href="https://www.saude.gov.br/atencao-basica" target="_blank">Ministério da Saúde - Atenção Básica</a></li>
                  <li><a href="https://www.gov.br/saude/pt-br" target="_blank">Portal da Saúde</a></li>
                </ul>
              </>
            )}

            {activeModal === "trabalho" && (
              <>
                <h3 className="text-lg font-bold mb-4 text-red-600">Trabalho e Direitos Trabalhistas</h3>
                <p className="mb-4 text-sm">
                  Todo estrangeiro com documentação regular pode trabalhar no Brasil. A Carteira de Trabalho é essencial para o registro formal. Também é importante conhecer seus direitos trabalhistas garantidos por lei.
                </p>
                <p className="mb-2 text-sm">Fontes:</p>
                <ul className="list-disc list-inside text-sm text-blue-600">
                  <li><a href="https://www.gov.br/trabalho-e-emprego/pt-br" target="_blank">Ministério do Trabalho</a></li>
                  <li><a href="https://www.gov.br/migracoes/pt-br" target="_blank">Secretaria Nacional de Migrações</a></li>
                  <li><a href="https://www.gov.br/pt-br/temas/trabalho" target="_blank">gov.br - Trabalho</a></li>
                </ul>
              </>
            )}

            {activeModal === "moradia" && (
              <>
                <h3 className="text-lg font-bold mb-4 text-red-600">Moradia e Apoio com Aluguel</h3>
                <p className="mb-4 text-sm">
                  Existem programas municipais e organizações sociais que auxiliam imigrantes a encontrarem moradia temporária ou definitiva. O CRAS pode orientar sobre auxílio aluguel e inscrição em programas habitacionais.
                </p>
                <p className="mb-2 text-sm">Fontes:</p>
                <ul className="list-disc list-inside text-sm text-blue-600">
                  <li><a href="https://www.gov.br/mds/pt-br/acoes-e-programas/assistencia-social/cras" target="_blank">gov.br - CRAS</a></li>
                  <li><a href="https://www.prefeitura.sp.gov.br/cidade/secretarias/direitos_humanos/assistencia_social/" target="_blank">Prefeitura SP - Assistência Social</a></li>
                  <li><a href="https://www.acnur.org/portugues/" target="_blank">ACNUR Brasil</a></li>
                </ul>
              </>
            )}

            <button
              className="mt-6 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
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