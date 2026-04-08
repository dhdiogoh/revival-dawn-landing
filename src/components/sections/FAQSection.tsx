import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'O que é a Revival Conference?',
    answer: `REVIVAL CONFERENCE é a conferência cristã, interdenominacional, que busca gerar avivamento para a cidade de Belém. Cremos que nossa nação está num tempo de ativação do Reino dos céus. E nós, como igreja de Cristo, estamos nos posicionando para viver e ativar esse movimento no norte do Brasil.
Dentro da conferência teremos sala profética, workshops, diversos stands e muita coisa incrível para você viver uma experiência completa e ter sua vida impactada nesses dias.
Em todas as edições recebemos testemunhos de pessoas que foram avivadas, transformadas e curadas durante a Revival Conference. Cremos que prodígios, milagres e maravilhas vão seguir acontecendo sobre nós e sobre Belém e que muitas pessoas ainda irão receber palavras de destinos, para serem usados nas esferas da sociedade, nos 4 cantos do Brasil e em todo o mundo.`,
  },
  {
    question: 'Quando e onde acontecerá a Revival Conference 26?',
    answer: 'A RVL26 acontecerá nos dias 08 e 09 de maio no Hangar - Centro de convenções da Amazônia - Av. Dr. Freitas, s/n - Marco, Belém - PA',
  },
  {
    question: 'Os ingressos dão direito a todas as sessões da Revival Conference 26?',
    answer: 'Sim. Com seu ingresso você acessa aos dois dias de RVL.',
  },
  {
    question: 'Para quem é a Revival Conference 26?',
    answer: `Nós cremos que o norte do Brasil está passando por um avivamento e nós, como igreja, estamos nos posicionando para ativar cristãos saudáveis a viverem um avivamento pessoal e assim alcançarem as esferas da sociedade e trazer o reino dos céus para Belém. São dois dias onde você viverá uma experiência única de avivamento dentro de atmosferas cheias da presença de Deus e carregadas de intensos momentos de adoração, louvor e revelação da Palavra.
E também para aqueles que:
* Querem ser avivados de forma pessoal;
* Creem que podemos mudar a realidade social da cidade de Belém;
* Buscam viver um estilo de vida naturalmente sobrenatural;
* Querem fazer história com Deus;
* Querem levar o evangelho todas as nações e esferas da sociedade;
* Buscam investir em coisas eternas.`,
  },
  {
    question: 'Os ingressos dão direito à hospedagem e alimentação?',
    answer: `Não. A hospedagem e alimentação não estão inclusos no valor do ingresso. Esses são de responsabilidade de cada participante. O ingresso dá somente acesso ao evento. Teremos espaço para alimentação dentro do Hangar.
E também temos opções de restaurantes nas proximidades.`,
  },
  {
    question: 'Quais documentos eu apresento na hora do Check-in?',
    answer: 'Você precisa levar somente o ingresso impresso ou apresentar o QR Code em seu smartphone.',
  },
  {
    question: 'Como garanto meu ingresso?',
    answer: 'Os ingressos da RVL estão sendo vendidos unicamente pela plataforma TICKETO.\nhttps://www.tiketo.com.br/evento/4610',
  },
  {
    question: 'Quais as formas de pagamento?',
    answer: 'Os ingressos podem ser adquiridos através do site Revival Conference (https://www.revivalconference.com.br/), com opção de pagamento através de cartão crédito, com opção de parcelamento com e sem juros (a quantidade de parcelas influencia o valor do juros), através de PIX ou de Boleto Bancário.',
  },
  {
    question: 'Posso alterar as informações do meu ingresso?',
    answer: 'Sim, caso você preciso alterar, é só acessar a plataforma do https://www.tiketo.com.br',
  },
  {
    question: 'Posso comprar mais de um ingresso com o mesmo CPF?',
    answer: 'Sim, é possível garantir mais de um ingresso com seu acesso. Não fazemos pedido do CPF.',
  },
  {
    question: 'Meu ingresso é transferível?',
    answer: 'Sim, você pode fazer esse processo pela plataforma do tiketo. https://www.tiketo.com.br',
  },
  {
    question: 'Sobre reembolso?',
    answer: 'É possível realizar pela plataforma do tiketo.',
  },
  {
    question: 'Qual a classificação etária?',
    answer: 'Nós não recomendamos a participação de crianças de 0-12 anos, pois não temos estrutura disponível para acomodá-las, e nem uma programação específica para o público infantil. Lembrando que, caso haja a participação, deverão estar acompanhadas de seus pais e crianças a partir de 12 anos pagam ingresso integral.',
  },
  {
    question: 'Sobre meia entrada',
    answer: `Não existe meia entrada para este evento*
*A REVIVAL CONFERENCE ESCLARECE QUE NÃO SE ENQUADRA NA LEI 12933/2013, MAIS CONHECIDA COMO A LEI FEDERAL DA MEIA ENTRADA, PELO FATO DE PROMOVER CULTOS DE MINISTRAÇÃO RELIGIOSA E CONFERÊNCIAS DE CUNHO RELIGIOSO. ESCLARECE AINDA QUE O ARTIGO 1″ DA REFERIDA LEI PREVÊ A MEIA ENTRADA A ESTUDANTES SOMENTE EM CINEMAS, TEATROS, ESPETÁCULOS MUSICAIS, ESPORTIVOS, DE LAZER E ENTRETENIMENTO EM TODO O TERRITÓRIO NACIONAL, CONFORME REDAÇÃO ABAIXO TRANSCRITA :
ART. 1O É ASSEGURADO AOS ESTUDANTES O ACESSO A SALAS DE CINEMA, CINECLUBES, TEATROS, ESPETÁCULOS MUSICAIS E CIRCENSES E EVENTOS EDUCATIVOS, ESPORTIVOS, DE LAZER E DE ENTRETENIMENTO, EM TODO O TERRITÓRIO NACIONAL, PROMOVIDOS POR QUAISQUER ENTIDADES E REALIZADOS EM ESTABELECIMENTOS PÚBLICOS OU PARTICULARES, MEDIANTE PAGAMENTO DA METADE DO PREÇO DO INGRESSO EFETIVAMENTE COBRADO DO PÚBLICO EM GERAL.`,
  },
  {
    question: "I'm not from Brazil. How can I participate?",
    answer: 'International buyers can get information about Revival Conference tickets through our e-mail: rvlconference@gmail.com',
  },
  {
    question: 'Estacionamento',
    answer: 'O evento será realizado no Hangar - Centro de convenções da Amazônia - que possui estacionamento privativo.',
  },
  {
    question: 'Onde almoçar ou fazer um lanche durante intervalos?',
    answer: 'O próprio Hangar - Centro de convenções da Amazônia - conta com um restaurante no local (sujeito à disponibilidade de lugares).',
  },
];

const FAQItem = ({ question, answer, isOpen, onToggle }: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) => (
  <div className="border-b border-rvl-escuro/10 last:border-b-0">
    <button
      onClick={onToggle}
      className="w-full flex items-center justify-between py-5 text-left group"
      aria-expanded={isOpen}
    >
      <span className="font-inter font-semibold text-rvl-escuro text-sm md:text-base pr-6 group-hover:text-rvl-laranja transition-colors">
        {question}
      </span>
      <ChevronDown
        className={`w-5 h-5 flex-shrink-0 text-rvl-laranja transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
      />
    </button>
    <div
      className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}
    >
      <div className="pb-5 font-inter text-rvl-escuro/70 text-sm md:text-base leading-relaxed whitespace-pre-line">
        {answer}
      </div>
    </div>
  </div>
);

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="bg-rvl-creme-bg py-20 md:py-28 px-6">
      <div className="max-w-3xl mx-auto">

        <div className="text-center mb-12">
          <p className="text-rvl-laranja font-medium mb-2 uppercase tracking-wider text-sm font-inter">
            Dúvidas frequentes
          </p>
          <h2 className="font-bebas text-rvl-escuro tracking-wide leading-none" style={{ fontSize: 'clamp(2rem, 7vw, 4rem)' }}>
            PERGUNTAS FREQUENTES
          </h2>
        </div>

        <div className="bg-white rounded-2xl shadow-sm px-6 md:px-10 py-2">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === i}
              onToggle={() => toggle(i)}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQSection;
