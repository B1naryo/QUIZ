// Declaração de variáveis
const questionElement = document.querySelector('#question');
const answerBox = document.querySelector('#answers-box');
const quizzContainer = document.querySelector('#quizz-container');
const scoreContainer = document.querySelector('#score-container');
const letters = ['a', 'b', 'c', 'd', 'e'];
let points = 0;
let actualQuestion = 0;

// Array de perguntas e respostas
  let questions = [
  {
    question: "O que significa 'I'm' em inglês?",
    answers: [
      { answer: "Eu sou", correct: false },
      { answer: "Eu estou", correct: true },
      { answer: "Eu era", correct: false },
      { answer: "Eu irei", correct: false },
      { answer: "Eu tinha", correct: false },
    ],
  },
  {
    question: "O que significa 'relatively' em inglês?",
    answers: [
      { answer: "Relativamente", correct: true },
      { answer: "Realmente", correct: false },
      { answer: "Rapidamente", correct: false },
      { answer: "Repetidamente", correct: false },
      { answer: "Relevante", correct: false },
    ],
  },
  {
    question: "Como se traduz 'new' para o inglês?",
    answers: [
      { answer: "Novo", correct: true },
      { answer: "Velho", correct: false },
      { answer: "Nunca", correct: false },
      { answer: "Agora", correct: false },
      { answer: "Antigo", correct: false },
    ],
  },
  {
    question: "O que significa 'to' em inglês?",
    answers: [
      { answer: "Para", correct: true },
      { answer: "De", correct: false },
      { answer: "Por", correct: false },
      { answer: "Em", correct: false },
      { answer: "Com", correct: false },
    ],
  },
  {
    question: "Como se diz 'security' em português?",
    answers: [
      { answer: "Segurança", correct: true },
      { answer: "Proteção", correct: false },
      { answer: "Privacidade", correct: false },
      { answer: "Confidencialidade", correct: false },
      { answer: "Garantia", correct: false },
    ],
  },
  {
    question: "Como se traduz 'community' para o inglês?",
    answers: [
      { answer: "Comunidade", correct: true },
      { answer: "Associação", correct: false },
      { answer: "Sociedade", correct: false },
      { answer: "Grupo", correct: false },
      { answer: "Povo", correct: false },
    ],
  },
  {
    question: "O que significa 'and' em inglês?",
    answers: [
      { answer: "E", correct: true },
      { answer: "Ou", correct: false },
      { answer: "Mas", correct: false },
      { answer: "Então", correct: false },
      { answer: "Também", correct: false },
    ],
  },
  {
    question: "Qual é a tradução de 'like' para o inglês?",
    answers: [
      { answer: "Gostar", correct: true },
      { answer: "Desgostar", correct: false },
      { answer: "Amar", correct: false },
      { answer: "Odiar", correct: false },
      { answer: "Preferir", correct: false },
    ],
  },
  {
    question: "O que significa 'many' em português?",
    answers: [
      { answer: "Muitos", correct: true },
      { answer: "Poucos", correct: false },
      { answer: "Alguns", correct: false },
      { answer: "Todos", correct: false },
      { answer: "Nenhum", correct: false },
    ],
  },
  {
    question: "Como se diz 'beginners' em português?",
    answers: [
      { answer: "Iniciantes", correct: true },
      { answer: "Veteranos", correct: false },
      { answer: "Profissionais", correct: false },
      { answer: "Experientes", correct: false },
      { answer: "Avançados", correct: false },
    ],
  },
  {
    question: "O que significa 'I' em português?",
    answers: [
      { answer: "Eu", correct: true },
      { answer: "Ele", correct: false },
      { answer: "Nós", correct: false },
      { answer: "Vós", correct: false },
      { answer: "Ela", correct: false },
    ],
  },
  {
    question: "Como se traduz 'dedicate' para o inglês?",
    answers: [
      { answer: "Dedicar", correct: true },
      { answer: "Esperar", correct: false },
      { answer: "Desistir", correct: false },
      { answer: "Decepcionar", correct: false },
      { answer: "Desprezar", correct: false },
    ],
  },
  {
    question: "O que significa 'a' em inglês?",
    answers: [
      { answer: "Um", correct: true },
      { answer: "O", correct: false },
      { answer: "A", correct: false },
      { answer: "Para", correct: false },
      { answer: "De", correct: false },
    ],
  },
  {
    question: "Qual é a tradução de 'portion' para o inglês?",
    answers: [
      { answer: "Porção", correct: true },
      { answer: "Parte", correct: false },
      { answer: "Pedação", correct: false },
      { answer: "Pedaço", correct: false },
      { answer: "Porção", correct: false },
    ],
  },
  {
    question: "O que significa 'of' em inglês?",
    answers: [
      { answer: "De", correct: true },
      { answer: "Para", correct: false },
      { answer: "Por", correct: false },
      { answer: "Em", correct: false },
      { answer: "Com", correct: false },
    ],
  },
  {
    question: "Como se traduz 'my' para o inglês?",
    answers: [
      { answer: "Meu", correct: true },
      { answer: "Minha", correct: false },
      { answer: "Seu", correct: false },
      { answer: "Nossa", correct: false },
      { answer: "Vosso", correct: false },
    ],
  },
  {
    question: "Qual é a tradução de 'time' para o inglês?",
    answers: [
      { answer: "Tempo", correct: true },
      { answer: "Hora", correct: false },
      { answer: "Vez", correct: false },
      { answer: "Período", correct: false },
      { answer: "Data", correct: false },
    ],
  },
  {
    question: "O que significa 'to' em inglês?",
    answers: [
      { answer: "Para", correct: true },
      { answer: "De", correct: false },
      { answer: "Por", correct: false },
      { answer: "Em", correct: false },
      { answer: "Com", correct: false },
    ],
  },
  {
    question: "Como se diz 'platforms' em português?",
    answers: [
      { answer: "Plataformas", correct: true },
      { answer: "Fundamentos", correct: false },
      { answer: "Estruturas", correct: false },
      { answer: "Superfícies", correct: false },
      { answer: "Dispositivos", correct: false },
    ],
  },
  {
    question: "Qual é a tradução de 'such' para o inglês?",
    answers: [
      { answer: "Tal", correct: true },
      { answer: "Assim", correct: false },
      { answer: "Deste", correct: false },
      { answer: "Tais", correct: false },
      { answer: "Aquele", correct: false },
    ],
  },
  {
    question: "O que significa 'as' em inglês?",
    answers: [
      { answer: "Como", correct: true },
      { answer: "E", correct: false },
      { answer: "Porque", correct: false },
      { answer: "Quando", correct: false },
      { answer: "Que", correct: false },
    ],
  },
  {
    question: "Como se traduz 'HackTheBox' para o inglês?",
    answers: [
      { answer: "HackTheBox", correct: true },
      { answer: "HackearAcaixa", correct: false },
      { answer: "QuebrarAcaixa", correct: false },
      { answer: "HackearAbox", correct: false },
      { answer: "HackearACaixa", correct: false },
    ],
  },
  {
    question: "O que significa 'TryHackMe' em inglês?",
    answers: [
      { answer: "TentarHackearMe", correct: true },
      { answer: "TestarHackearMe", correct: false },
      { answer: "ProvarHackearMe", correct: false },
      { answer: "TentarHackearEu", correct: false },
      { answer: "TestarHackearEu", correct: false },
    ],
  },
  {
    question: "Qual é a tradução de 'Recently' para o inglês?",
    answers: [
      { answer: "Recentemente", correct: true },
      { answer: "Antigamente", correct: false },
      { answer: "Atualmente", correct: false },
      { answer: "Frequentemente", correct: false },
      { answer: "Rapidamente", correct: false },
    ],
  },
  {
    question: "Como se diz 'was' em inglês?",
    answers: [
      { answer: "Era", correct: true },
      { answer: "Fui", correct: false },
      { answer: "Estava", correct: false },
      { answer: "Será", correct: false },
      { answer: "Esteve", correct: false },
    ],
  },
  {
    question: "O que significa 'working' em inglês?",
    answers: [
      { answer: "Trabalhando", correct: true },
      { answer: "Trabalho", correct: false },
      { answer: "Trabalhador", correct: false },
      { answer: "Trabalhou", correct: false },
      { answer: "Operacional", correct: false },
    ],
  },
  {
    question: "Qual é a tradução de 'on' para o inglês?",
    answers: [
      { answer: "Em", correct: true },
      { answer: "No", correct: false },
      { answer: "Sobre", correct: false },
      { answer: "A", correct: false },
      { answer: "Com", correct: false },
    ],
  },
  {
    question: "O que significa 'room' em inglês?",
    answers: [
      { answer: "Sala", correct: true },
      { answer: "Quarto", correct: false },
      { answer: "Casa", correct: false },
      { answer: "Espaço", correct: false },
      { answer: "Ambiente", correct: false },
    ],
  },
  {
    question: "Como se traduz 'called' para o inglês?",
    answers: [
      { answer: "Chamado", correct: true },
      { answer: "Causado", correct: false },
      { answer: "Convocado", correct: false },
      { answer: "Ligado", correct: false },
      { answer: "Indicado", correct: false },
    ],
  },
  {
    question: "O que significa 'Brainpan' em inglês?",
    answers: [
      { answer: "Brainpan", correct: true },
      { answer: "Cérebro", correct: false },
      { answer: "PoteCerebral", correct: false },
      { answer: "Cabeça", correct: false },
      { answer: "Intelecto", correct: false },
    ],
  },
  {
    question: "Qual é a tradução de 'intriguing' para o inglês?",
    answers: [
      { answer: "Intrigante", correct: true },
      { answer: "Interessante", correct: false },
      { answer: "Envolvente", correct: false },
      { answer: "Surpreendente", correct: false },
      { answer: "Empolgante", correct: false },
    ],
  },
  {
    question: "O que significa 'as' em inglês?",
    answers: [
      { answer: "Como", correct: true },
      { answer: "E", correct: false },
      { answer: "Porque", correct: false },
      { answer: "Quando", correct: false },
      { answer: "Que", correct: false },
    ],
  },
  {
    question: "Como se traduz 'it' para o inglês?",
    answers: [
      { answer: "Isso", correct: true },
      { answer: "Ele", correct: false },
      { answer: "Ela", correct: false },
      { answer: "Isso", correct: false },
      { answer: "Aquilo", correct: false },
    ],
  },
  {
    question: "O que significa 'involves' em inglês?",
    answers: [
      { answer: "Envolve", correct: true },
      { answer: "Envolvimento", correct: false },
      { answer: "Envolver", correct: false },
      { answer: "Involuindo", correct: false },
      { answer: "Involvido", correct: false },
    ],
  },
  {
    question: "Qual é a tradução de 'reverse' para o inglês?",
    answers: [
      { answer: "Reverso", correct: true },
      { answer: "Inverter", correct: false },
      { answer: "Reservado", correct: false },
      { answer: "Retorno", correct: false },
      { answer: "Reverter", correct: false },
    ],
  },
  {
    question: "O que significa 'engineering' em inglês?",
    answers: [
      { answer: "Engenharia", correct: true },
      { answer: "Engenheiro", correct: false },
      { answer: "Engenheira", correct: false },
      { answer: "Engenheiros", correct: false },
      { answer: "Engenharia", correct: false },
    ],
  },
  {
    question: "Como se traduz 'Windows' para o inglês?",
    answers: [
      { answer: "Windows", correct: true },
      { answer: "Portas", correct: false },
      { answer: "Janelas", correct: false },
      { answer: "Vidros", correct: false },
      { answer: "Cortinas", correct: false },
    ],
  },
  {
    question: "O que significa 'executables' em inglês?",
    answers: [
      { answer: "Executáveis", correct: true },
      { answer: "Executáveis", correct: false },
      { answer: "Executivos", correct: false },
      { answer: "Executador", correct: false },
      { answer: "Excludente", correct: false },
    ],
  },
  {
    question: "Qual é a tradução de 'developing' para o inglês?",
    answers: [
      { answer: "Desenvolvendo", correct: true },
      { answer: "Desenvolvimento", correct: false },
      { answer: "Desenvolvedor", correct: false },
      { answer: "Desenvolvido", correct: false },
      { answer: "Desenvolveu", correct: false },
    ],
  },
  {
    question: "O que significa 'buffer' em inglês?",
    answers: [
      { answer: "Buffer", correct: true },
      { answer: "Tamponar", correct: false },
      { answer: "Armazenar", correct: false },
      { answer: "Filtrar", correct: false },
      { answer: "Esperar", correct: false },
    ],
  },
  {
    question: "Como se traduz 'overflow' para o inglês?",
    answers: [
      { answer: "Overflow", correct: true },
      { answer: "Sobrefluxo", correct: false },
      { answer: "Sobrecarga", correct: false },
      { answer: "Transbordamento", correct: false },
      { answer: "Excedente", correct: false },
    ],
  },
  {
    question: "O que significa 'exploits' em inglês?",
    answers: [
      { answer: "Exploits", correct: true },
      { answer: "Explota", correct: false },
      { answer: "Explorar", correct: false },
      { answer: "Explorador", correct: false },
      { answer: "Exploradores", correct: false },
    ],
  },
  {
    question: "Como se traduz 'As' para o inglês?",
    answers: [
      { answer: "Como", correct: true },
      { answer: "E", correct: false },
      { answer: "Porque", correct: false },
      { answer: "Quando", correct: false },
      { answer: "Que", correct: false },
    ],
  },
  {
    question: "O que significa 'saying' em inglês?",
    answers: [
      { answer: "Ditado", correct: true },
      { answer: "Fala", correct: false },
      { answer: "Discurso", correct: false },
      { answer: "Dizer", correct: false },
      { answer: "Palavra", correct: false },
    ],
  },
  {
    question: "Qual é a tradução de 'goes' para o inglês?",
    answers: [
      { answer: "Vai", correct: true },
      { answer: "Vem", correct: false },
      { answer: "Fica", correct: false },
      { answer: "Segue", correct: false },
      { answer: "Anda", correct: false },
    ],
  },
  {
    question: "O que significa 'The' em inglês?",
    answers: [
      { answer: "O", correct: true },
      { answer: "A", correct: false },
      { answer: "Os", correct: false },
      { answer: "As", correct: false },
      { answer: "Um", correct: false },
    ],
  },
  {
    question: "Como se traduz 'best' para o inglês?",
    answers: [
      { answer: "Melhor", correct: true },
      { answer: "Bom", correct: false },
      { answer: "Pior", correct: false },
      { answer: "Maior", correct: false },
      { answer: "Menor", correct: false },
    ],
  },
  {
    question: "O que significa 'way' em inglês?",
    answers: [
      { answer: "Caminho", correct: true },
      { answer: "Dia", correct: false },
      { answer: "Hora", correct: false },
      { answer: "Modo", correct: false },
      { answer: "Rota", correct: false },
    ],
  },
  {
    question: "Como se traduz 'learn' para o inglês?",
    answers: [
      { answer: "Aprender", correct: true },
      { answer: "Ensinar", correct: false },
      { answer: "Compreender", correct: false },
      { answer: "Saber", correct: false },
      { answer: "Estudar", correct: false },
    ],
  },
  {
    question: "O que significa 'is' em inglês?",
    answers: [
      { answer: "É", correct: true },
      { answer: "Está", correct: false },
      { answer: "Ser", correct: false },
      { answer: "Foi", correct: false },
      { answer: "Estava", correct: false },
    ],
  },
  {
    question: "Como se diz 'teach' em português?",
    answers: [
      { answer: "Ensinar", correct: true },
      { answer: "Aprender", correct: false },
      { answer: "Treinar", correct: false },
      { answer: "Instruir", correct: false },
      { answer: "Educar", correct: false },
    ],
  },
  {
    question: "O que significa 'so' em inglês?",
    answers: [
      { answer: "Então", correct: true },
      { answer: "Tão", correct: false },
      { answer: "Assim", correct: false },
      { answer: "Por isso", correct: false },
      { answer: "Isso", correct: false },
    ],
  },
  {
    question: "Como se traduz 'I've' para o inglês?",
    answers: [
      { answer: "Eu tenho", correct: true },
      { answer: "Eu tive", correct: false },
      { answer: "Eu tinha", correct: false },
      { answer: "Eu terei", correct: false },
      { answer: "Eu estive", correct: false },
    ],
  },
  {
    question: "O que significa 'put' em inglês?",
    answers: [
      { answer: "Colocar", correct: true },
      { answer: "Pôr", correct: false },
      { answer: "Por", correct: false },
      { answer: "Puser", correct: false },
      { answer: "Puseram", correct: false },
    ],
  },
  {
    question: "Qual é a tradução de 'together' para o inglês?",
    answers: [
      { answer: "Junto", correct: true },
      { answer: "Separado", correct: false },
      { answer: "Unido", correct: false },
      { answer: "Conjunto", correct: false },
      { answer: "Agregado", correct: false },
    ],
  },
  {
    question: "Como se diz 'this' em português?",
    answers: [
      { answer: "Este", correct: true },
      { answer: "Esse", correct: false },
      { answer: "Aquele", correct: false },
      { answer: "Isso", correct: false },
      { answer: "Aquilo", correct: false },
    ],
  },
  {
    question: "O que significa 'documentation' em inglês?",
    answers: [
      { answer: "Documentação", correct: true },
      { answer: "Documento", correct: false },
      { answer: "Documentário", correct: false },
      { answer: "Documentado", correct: false },
      { answer: "Documentar", correct: false },
    ],
  },
  {
    question: "Qual é a tradução de 'for' para o inglês?",
    answers: [
      { answer: "Para", correct: true },
      { answer: "Por", correct: false },
      { answer: "De", correct: false },
      { answer: "Com", correct: false },
      { answer: "Em", correct: false },
    ],
  },
  {
    question: "O que significa 'fellow' em inglês?",
    answers: [
      { answer: "Companheiro", correct: true },
      { answer: "Amigo", correct: false },
      { answer: "Colega", correct: false },
      { answer: "Parceiro", correct: false },
      { answer: "Associado", correct: false },
    ],
  },
  {
    question: "Como se traduz 'interested' para o inglês?",
    answers: [
      { answer: "Interessado", correct: true },
      { answer: "Desinteressado", correct: false },
      { answer: "Entediado", correct: false },
      { answer: "Curioso", correct: false },
      { answer: "Empolgado", correct: false },
    ],
  },
  {
    question: "O que significa 'in' em inglês?",
    answers: [
      { answer: "Em", correct: true },
      { answer: "Dentro", correct: false },
      { answer: "Para", correct: false },
      { answer: "Por", correct: false },
      { answer: "Com", correct: false },
    ],
  },
  {
    question: "Como se diz 'exploit' em português?",
    answers: [
      { answer: "Exploração", correct: true },
      { answer: "Explotação", correct: false },
      { answer: "Explorar", correct: false },
      { answer: "Explotar", correct: false },
      { answer: "Exemplo", correct: false },
    ],
  },
  {
    question: "O que significa 'development' em inglês?",
    answers: [
      { answer: "Desenvolvimento", correct: true },
      { answer: "Desenvolvendo", correct: false },
      { answer: "Desenvolvedor", correct: false },
      { answer: "Desenvolvido", correct: false },
      { answer: "Evolução", correct: false },
    ],
  },
  {
    question: "Qual é a tradução de 'Let's' para o inglês?",
    answers: [
      { answer: "Vamos", correct: true },
      { answer: "Deixe", correct: false },
      { answer: "Permita", correct: false },
      { answer: "Deixemos", correct: false },
      { answer: "Deixar", correct: false },
    ],
  },
  {
    question: "O que significa 'have' em inglês?",
    answers: [
      { answer: "Ter", correct: true },
      { answer: "Haver", correct: false },
      { answer: "Possuir", correct: false },
      { answer: "Fazer", correct: false },
      { answer: "Obter", correct: false },
    ],
  },
  {
    question: "Como se traduz 'some' para o inglês?",
    answers: [
      { answer: "Algum", correct: true },
      { answer: "Alguns", correct: false },
      { answer: "Alguma", correct: false },
      { answer: "Algumas", correct: false },
      { answer: "Um pouco", correct: false },
    ],
  },
  {
    question: "O que significa 'fun' em inglês?",
    answers: [
      { answer: "Diversão", correct: true },
      { answer: "Engraçado", correct: false },
      { answer: "Legal", correct: false },
      { answer: "Interessante", correct: false },
      { answer: "Divertido", correct: false },
    ],
  },
  {
    question: "Como se diz 'can' em português?",
    answers: [
      { answer: "Poder", correct: true },
      { answer: "Dever", correct: false },
      { answer: "Capaz", correct: false },
      { answer: "Conseguir", correct: false },
      { answer: "Permitir", correct: false },
    ],
  },
  {
    question: "Qual é a tradução de 'locate' para o inglês?",
    answers: [
      { answer: "Localizar", correct: true },
      { answer: "Localização", correct: false },
      { answer: "Local", correct: false },
      { answer: "Localizado", correct: false },
      { answer: "Localizou", correct: false },
    ],
  },
  {
    question: "O que significa 'all' em inglês?",
    answers: [
      { answer: "Tudo", correct: true },
      { answer: "Todo", correct: false },
      { answer: "Todos", correct: false },
      { answer: "Todas", correct: false },
      { answer: "Todavia", correct: false },
    ],
  },
  {
    question: "Como se traduz 'source' para o inglês?",
    answers: [
      { answer: "Fonte", correct: true },
      { answer: "Origem", correct: false },
      { answer: "Fonte", correct: false },
      { answer: "Abastecimento", correct: false },
      { answer: "Fornecimento", correct: false },
    ],
  },
  {
    question: "O que significa 'code' em inglês?",
    answers: [
      { answer: "Código", correct: true },
      { answer: "Códigos", correct: false },
      { answer: "Codificar", correct: false },
      { answer: "Codificação", correct: false },
      { answer: "Coda", correct: false },
    ],
  },
  {
    question: "Qual é a tradução de 'used' para o inglês?",
    answers: [
      { answer: "Usado", correct: true },
      { answer: "Usado", correct: false },
      { answer: "Utilizado", correct: false },
      { answer: "Utilizado", correct: false },
      { answer: "Utilizou", correct: false },
    ],
  },
  {
    question: "O que significa 'documentation' em inglês?",
    answers: [
      { answer: "Documentação", correct: true },
      { answer: "Documento", correct: false },
      { answer: "Documentário", correct: false },
      { answer: "Documentado", correct: false },
      { answer: "Documentar", correct: false },
    ],
  },
  {
    question: "Qual é a tradução de 'within' para o inglês?",
    answers: [
      { answer: "Dentro", correct: true },
      { answer: "Fora", correct: false },
      { answer: "Entre", correct: false },
      { answer: "Com", correct: false },
      { answer: "Para", correct: false },
    ],
  },
  {
    question: "Como se diz 'resources' em português?",
    answers: [
      { answer: "Recursos", correct: true },
      { answer: "Recursivo", correct: false },
      { answer: "Recursividade", correct: false },
      { answer: "Reservas", correct: false },
      { answer: "Resíduos", correct: false },
    ],
  },
  {
    question: "O que significa 'folder' em inglês?",
    answers: [
      { answer: "Pasta", correct: true },
      { answer: "Arquivo", correct: false },
      { answer: "Diretório", correct: false },
      { answer: "Ficheiro", correct: false },
      { answer: "Caixa", correct: false },
    ],
  },
  {
    question: "Qual é a tradução de 'including' para o inglês?",
    answers: [
      { answer: "Incluindo", correct: true },
      { answer: "Excluindo", correct: false },
      { answer: "Inclusivo", correct: false },
      { answer: "Incluído", correct: false },
      { answer: "Incluir", correct: false },
    ],
  },
  {
    question: "O que significa 'executable' em inglês?",
    answers: [
      { answer: "Executável", correct: true },
      { answer: "Executivo", correct: false },
      { answer: "Execução", correct: false },
      { answer: "Executor", correct: false },
      { answer: "Executado", correct: false },
    ],
  },
];


// Inicialização do quizz
function init() {
  createQuestion(actualQuestion);
}

// Criação de pergunta
// Criação de pergunta
function createQuestion(index) {
  clearPreviousQuestion();
  const question = questions[index];
  const questionText = questionElement.querySelector('#question-text');
  const questionNumber = questionElement.querySelector('#question-number');

  questionText.textContent = question.question;
  questionNumber.textContent = index + 1;

  // Embaralhar as respostas
  const shuffledAnswers = shuffleArray(question.answers);

  shuffledAnswers.forEach((answer, i) => {
    const answerTemplate = document.querySelector('.answer-template').cloneNode(true);
    const letterBtn = answerTemplate.querySelector('.btn-letter');
    const answerText = answerTemplate.querySelector('.question-answer');

    letterBtn.textContent = letters[i];
    answerText.textContent = answer.answer;

    answerTemplate.setAttribute('correct-answer', answer.correct);

    answerTemplate.classList.remove('hide');
    answerTemplate.classList.remove('answer-template');

    answerBox.appendChild(answerTemplate);

    answerTemplate.addEventListener('click', function () {
      checkAnswer(this);
    });
  });
}

// Função para embaralhar array
function shuffleArray(array) {
  const shuffledArray = array.slice();
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}


// Limpar pergunta anterior
function clearPreviousQuestion() {
  const oldButtons = answerBox.querySelectorAll('button');
  oldButtons.forEach((btn) => {
    btn.remove();
  });
}

// Verificar resposta do usuário
function checkAnswer(btn) {
  const buttons = answerBox.querySelectorAll('button');
  let answeredCorrectly = false;

  buttons.forEach((button) => {
    if (button.getAttribute('correct-answer') == 'true') {
      button.classList.add('correct-answer');
      if (btn === button) {
        points++;
        answeredCorrectly = true;
      }
    } else {
      button.classList.add('wrong-answer');
    }
  });

  if (!answeredCorrectly) {
    // Se a resposta estiver incorreta, não avançar para a próxima pergunta
    setTimeout(function () {
      clearPreviousQuestion();
      createQuestion(actualQuestion); // Apresenta a mesma pergunta novamente
    }, 1200);
  } else {
    // Se a resposta estiver correta, avançar para a próxima pergunta
    actualQuestion++;
    if (actualQuestion >= questions.length) {
      // Se todas as perguntas foram respondidas corretamente, exibir mensagem de sucesso
      showSuccessMessage();
    } else {
      // Caso contrário, apresentar a próxima pergunta
      setTimeout(function () {
        createQuestion(actualQuestion);
      }, 1200);
    }
  }
}

// Exibe a tela final
function showSuccessMessage() {
  toggleQuizzVisibility();

  const score = ((points / questions.length) * 100).toFixed(2);
  const displayScore = document.querySelector('#display-score span');
  displayScore.textContent = score.toString();

  const correctAnswers = document.querySelector('#correct-answers');
  correctAnswers.textContent = points;

  const totalQuestions = document.querySelector('#questions-qty');
  totalQuestions.textContent = questions.length;
}

// Mostra ou esconde o score
function toggleQuizzVisibility() {
  quizzContainer.classList.toggle('hide');
  scoreContainer.classList.toggle('hide');
}

// Reiniciar quizz
const restartBtn = document.querySelector('#restart');
restartBtn.addEventListener('click', function () {
  actualQuestion = 0;
  points = 0;
  toggleQuizzVisibility();
  init();
});

// Inicialização do quizz
init();
