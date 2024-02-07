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
   
  {
    question: "O que significa 'Como' em inglês?",
    answers: [
      { answer: "How", correct: true },
      { answer: "What", correct: false },
      { answer: "Where", correct: false },
      { answer: "When", correct: false },
    ],
  },
  {
    question: "O que significa 'você' em inglês?",
    answers: [
      { answer: "You", correct: true },
      { answer: "Your", correct: false },
      { answer: "Yours", correct: false },
      { answer: "You're", correct: false },
    ],
  },
  {
    question: "O que significa 'pode' em inglês?",
    answers: [
      { answer: "Can", correct: true },
      { answer: "May", correct: false },
      { answer: "Could", correct: false },
      { answer: "Might", correct: false },
    ],
  },
  {
    question: "O que significa 'ver' em inglês?",
    answers: [
      { answer: "See", correct: true },
      { answer: "Watch", correct: false },
      { answer: "Look", correct: false },
      { answer: "View", correct: false },
    ],
  },
  {
    question: "O que significa 'na' em inglês?",
    answers: [
      { answer: "In", correct: true },
      { answer: "On", correct: false },
      { answer: "At", correct: false },
      { answer: "Into", correct: false },
    ],
  },
  {
    question: "O que significa 'captura' em inglês?",
    answers: [
      { answer: "Capture", correct: true },
      { answer: "Catch", correct: false },
      { answer: "Seize", correct: false },
      { answer: "Snatch", correct: false },
    ],
  },
  {
    question: "O que significa 'de' em inglês?",
    answers: [
      { answer: "Of", correct: true },
      { answer: "From", correct: false },
      { answer: "About", correct: false },
      { answer: "By", correct: false },
    ],
  },
  {
    question: "O que significa 'tela' em inglês?",
    answers: [
      { answer: "Screen", correct: true },
      { answer: "Window", correct: false },
      { answer: "Display", correct: false },
      { answer: "Monitor", correct: false },
    ],
  },
  {
    question: "O que significa 'acima' em inglês?",
    answers: [
      { answer: "Above", correct: true },
      { answer: "Over", correct: false },
      { answer: "Up", correct: false },
      { answer: "High", correct: false },
    ],
  },
  {
    question: "O que significa 'uma' em inglês?",
    answers: [
      { answer: "A", correct: true },
      { answer: "An", correct: false },
      { answer: "One", correct: false },
      { answer: "Some", correct: false },
    ],
  },
  {
    question: "O que significa 'vez' em inglês?",
    answers: [
      { answer: "Time", correct: true },
      { answer: "Turn", correct: false },
      { answer: "Occasion", correct: false },
      { answer: "Instance", correct: false },
    ],
  },
  {
    question: "O que significa 'que' em inglês?",
    answers: [
      { answer: "That", correct: true },
      { answer: "Which", correct: false },
      { answer: "What", correct: false },
      { answer: "Who", correct: false },
    ],
  },
  {
    question: "O que significa 'o' em inglês?",
    answers: [
      { answer: "The", correct: true },
      { answer: "A", correct: false },
      { answer: "An", correct: false },
      { answer: "Some", correct: false },
    ],
  },
  {
    question: "O que significa 'script' em inglês?",
    answers: [
      { answer: "Script", correct: true },
      { answer: "Code", correct: false },
      { answer: "Program", correct: false },
      { answer: "Text", correct: false },
    ],
  },
  {
    question: "O que significa 'em' em inglês?",
    answers: [
      { answer: "In", correct: true },
      { answer: "On", correct: false },
      { answer: "At", correct: false },
      { answer: "Into", correct: false },
    ],
  },
  {
    question: "O que significa 'Python' em inglês?",
    answers: [
      { answer: "Python", correct: true },
      { answer: "Snake", correct: false },
      { answer: "Language", correct: false },
      { answer: "Code", correct: false },
    ],
  },
  {
    question: "O que significa 'é' em inglês?",
    answers: [
      { answer: "Is", correct: true },
      { answer: "Be", correct: false },
      { answer: "Am", correct: false },
      { answer: "Are", correct: false },
    ],
  },
  {
    question: "O que significa 'executado' em inglês?",
    answers: [
      { answer: "Executed", correct: true },
      { answer: "Running", correct: false },
      { answer: "Performed", correct: false },
      { answer: "Operating", correct: false },
    ],
  },
  {
    question: "O que significa 'receberá' em inglês?",
    answers: [
      { answer: "Will receive", correct: true },
      { answer: "Received", correct: false },
      { answer: "Receives", correct: false },
      { answer: "Receiving", correct: false },
    ],
  },
  {
    question: "O que significa 'conexão' em inglês?",
    answers: [
      { answer: "Connection", correct: true },
      { answer: "Link", correct: false },
      { answer: "Network", correct: false },
      { answer: "Communication", correct: false },
    ],
  },
  {
    question: "O que significa 'shell' em inglês?",
    answers: [
      { answer: "Shell", correct: true },
      { answer: "Turtle", correct: false },
      { answer: "Crust", correct: false },
      { answer: "Case", correct: false },
    ],
  },
  {
    question: "O que significa 'reverso' em inglês?",
    answers: [
      { answer: "Reverse", correct: true },
      { answer: "Opposite", correct: false },
      { answer: "Backward", correct: false },
      { answer: "Inverse", correct: false },
    ],
  },
  {
    question: "O que significa 'Agora' em inglês?",
    answers: [
      { answer: "Now", correct: true },
      { answer: "After", correct: false },
      { answer: "Before", correct: false },
      { answer: "Later", correct: false },
    ],
  },
  {
    question: "O que significa 'temos' em inglês?",
    answers: [
      { answer: "We have", correct: true },
      { answer: "You have", correct: false },
      { answer: "They have", correct: false },
      { answer: "It has", correct: false },
    ],
  },
  {
    question: "O que significa 'controle' em inglês?",
    answers: [
      { answer: "Control", correct: true },
      { answer: "Command", correct: false },
      { answer: "Authority", correct: false },
      { answer: "Rule", correct: false },
    ],
  },
  {
    question: "O que significa 'total' em inglês?",
    answers: [
      { answer: "Total", correct: true },
      { answer: "Complete", correct: false },
      { answer: "Whole", correct: false },
      { answer: "Entire", correct: false },
    ],
  },
  {
    question: "O que significa 'sobre' em inglês?",
    answers: [
      { answer: "About", correct: true },
      { answer: "Above", correct: false },
      { answer: "On", correct: false },
      { answer: "Over", correct: false },
    ],
  },
  {
    question: "O que significa 'máquina' em inglês?",
    answers: [
      { answer: "Machine", correct: true },
      { answer: "Engine", correct: false },
      { answer: "Device", correct: false },
      { answer: "Appliance", correct: false },
    ],
  },
  {
    question: "O que significa 'alvo' em inglês?",
    answers: [
      { answer: "Target", correct: true },
      { answer: "Goal", correct: false },
      { answer: "Objective", correct: false },
      { answer: "Aim", correct: false },
    ],
  },
  
  {
    question: "O que significa 'Colocando' em inglês?",
    answers: [
      { answer: "Putting", correct: true },
      { answer: "Placing", correct: false },
      { answer: "Inserting", correct: false },
      { answer: "Positioning", correct: false },
    ],
  },
  {
    question: "O que significa 'seu' em inglês?",
    answers: [
      { answer: "Your", correct: true },
      { answer: "His", correct: false },
      { answer: "Her", correct: false },
      { answer: "Their", correct: false },
    ],
  },
  {
    question: "O que significa 'Conhecimento' em inglês?",
    answers: [
      { answer: "Knowledge", correct: true },
      { answer: "Wisdom", correct: false },
      { answer: "Learning", correct: false },
      { answer: "Expertise", correct: false },
    ],
  },
  {
    question: "O que significa 'à' em inglês?",
    answers: [
      { answer: "To", correct: true },
      { answer: "At", correct: false },
      { answer: "In", correct: false },
      { answer: "On", correct: false },
    ],
  },
  {
    question: "O que significa 'Prova' em inglês?",
    answers: [
      { answer: "Test", correct: true },
      { answer: "Proof", correct: false },
      { answer: "Evidence", correct: false },
      { answer: "Trial", correct: false },
    ],
  },
  {
    question: "O que significa 'Após' em inglês?",
    answers: [
      { answer: "After", correct: true },
      { answer: "Before", correct: false },
      { answer: "During", correct: false },
      { answer: "Later", correct: false },
    ],
  },
  {
    question: "O que significa 'obter' em inglês?",
    answers: [
      { answer: "Get", correct: true },
      { answer: "Receive", correct: false },
      { answer: "Achieve", correct: false },
      { answer: "Attain", correct: false },
    ],
  },
  {
    question: "O que significa 'compreensão' em inglês?",
    answers: [
      { answer: "Understanding", correct: true },
      { answer: "Comprehension", correct: false },
      { answer: "Knowledge", correct: false },
      { answer: "Awareness", correct: false },
    ],
  },
  {
    question: "O que significa 'sólida' em inglês?",
    answers: [
      { answer: "Solid", correct: true },
      { answer: "Strong", correct: false },
      { answer: "Firm", correct: false },
      { answer: "Stable", correct: false },
    ],
  },
  {
    question: "O que significa 'do' em inglês?",
    answers: [
      { answer: "Of", correct: true },
      { answer: "To", correct: false },
      { answer: "From", correct: false },
      { answer: "In", correct: false },
    ],
  },
  {
    question: "O que significa 'desenvolvimento' em inglês?",
    answers: [
      { answer: "Development", correct: true },
      { answer: "Progress", correct: false },
      { answer: "Evolution", correct: false },
      { answer: "Growth", correct: false },
    ],
  },
  {
    question: "O que significa 'de' em inglês?",
    answers: [
      { answer: "For", correct: true },
      { answer: "From", correct: false },
      { answer: "Of", correct: false },
      { answer: "With", correct: false },
    ],
  },
  {
    question: "O que significa 'exploits' em inglês?",
    answers: [
      { answer: "Exploits", correct: true },
      { answer: "Explorations", correct: false },
      { answer: "Adventures", correct: false },
      { answer: "Missions", correct: false },
    ],
  },
  {
    question: "O que significa 'para' em inglês?",
    answers: [
      { answer: "For", correct: true },
      { answer: "To", correct: false },
      { answer: "From", correct: false },
      { answer: "In", correct: false },
    ],
  },
  {
    question: "O que significa 'vulnerabilidades' em inglês?",
    answers: [
      { answer: "Vulnerabilities", correct: true },
      { answer: "Weaknesses", correct: false },
      { answer: "Risks", correct: false },
      { answer: "Threats", correct: false },
    ],
  },
  {
    question: "O que significa 'estouro' em inglês?",
    answers: [
      { answer: "Overflow", correct: true },
      { answer: "Outburst", correct: false },
      { answer: "Burst", correct: false },
      { answer: "Excess", correct: false },
    ],
  },
  {
    question: "O que significa 'buffer' em inglês?",
    answers: [
      { answer: "Buffer", correct: true },
      { answer: "Cushion", correct: false },
      { answer: "Pillow", correct: false },
      { answer: "Barrier", correct: false },
    ],
  },
  {
    question: "O que significa 'é' em inglês?",
    answers: [
      { answer: "Is", correct: true },
      { answer: "Be", correct: false },
      { answer: "Am", correct: false },
      { answer: "Are", correct: false },
    ],
  },
  {
    question: "O que significa 'hora' em inglês?",
    answers: [
      { answer: "Time", correct: true },
      { answer: "Hour", correct: false },
      { answer: "Moment", correct: false },
      { answer: "Period", correct: false },
    ],
  },
  {
    question: "O que significa 'aplicar' em inglês?",
    answers: [
      { answer: "Apply", correct: true },
      { answer: "Use", correct: false },
      { answer: "Implement", correct: false },
      { answer: "Employ", correct: false },
    ],
  },
  {
    question: "O que significa 'seu' em inglês?",
    answers: [
      { answer: "Your", correct: true },
      { answer: "His", correct: false },
      { answer: "Her", correct: false },
      { answer: "Their", correct: false },
    ],
  },
  {
    question: "O que significa 'conhecimento' em inglês?",
    answers: [
      { answer: "Knowledge", correct: true },
      { answer: "Wisdom", correct: false },
      { answer: "Learning", correct: false },
      { answer: "Expertise", correct: false },
    ],
  },
  {
    question: "O que significa 'examinando' em inglês?",
    answers: [
      { answer: "Examining", correct: true },
      { answer: "Analyzing", correct: false },
      { answer: "Inspecting", correct: false },
      { answer: "Studying", correct: false },
    ],
  },
  {
    question: "O que significa 'testando' em inglês?",
    answers: [
      { answer: "Testing", correct: true },
      { answer: "Trying", correct: false },
      { answer: "Experimenting", correct: false },
      { answer: "Checking", correct: false },
    ],
  },
  {
    question: "O que significa 'dois' em inglês?",
    answers: [
      { answer: "Two", correct: true },
      { answer: "Twice", correct: false },
      { answer: "Second", correct: false },
      { answer: "Pair", correct: false },
    ],
  },
  {
    question: "O que significa 'executáveis' em inglês?",
    answers: [
      { answer: "Executables", correct: true },
      { answer: "Executions", correct: false },
      { answer: "Programs", correct: false },
      { answer: "Softwares", correct: false },
    ],
  },
  {
    question: "O que significa 'distintos' em inglês?",
    answers: [
      { answer: "Distinct", correct: true },
      { answer: "Different", correct: false },
      { answer: "Unique", correct: false },
      { answer: "Separate", correct: false },
    ],
  },
  {
    question: "O que significa 'oscp.exe' em inglês?",
    answers: [
      { answer: "oscp.exe", correct: true },
      { answer: "An executable", correct: false },
      { answer: "A program", correct: false },
      { answer: "A file", correct: false },
    ],
  },
  {
    question: "O que significa 'R-3.4.4-win.exe' em inglês?",
    answers: [
      { answer: "R-3.4.4-win.exe", correct: true },
      { answer: "An executable", correct: false },
      { answer: "A program", correct: false },
      { answer: "A file", correct: false },
    ],
  },
  {
    question: "O que significa 'Estes' em inglês?",
    answers: [
      { answer: "These", correct: true },
      { answer: "Those", correct: false },
      { answer: "This", correct: false },
      { answer: "That", correct: false },
    ],
  },
  {
    question: "O que significa 'exercícios' em inglês?",
    answers: [
      { answer: "Exercises", correct: true },
      { answer: "Workouts", correct: false },
      { answer: "Practice", correct: false },
      { answer: "Tasks", correct: false },
    ],
  },
  {
    question: "O que significa 'práticos' em inglês?",
    answers: [
      { answer: "Practical", correct: true },
      { answer: "Useful", correct: false },
      { answer: "Effective", correct: false },
      { answer: "Functional", correct: false },
    ],
  },
  {
    question: "O que significa 'fornecerão' em inglês?",
    answers: [
      { answer: "Will provide", correct: true },
      { answer: "Provided", correct: false },
      { answer: "Provide", correct: false },
      { answer: "Providing", correct: false },
    ],
  },
  {
    question: "O que significa 'experiência' em inglês?",
    answers: [
      { answer: "Experience", correct: true },
      { answer: "Experiment", correct: false },
      { answer: "Trial", correct: false },
      { answer: "Practice", correct: false },
    ],
  },
  {
    question: "O que significa 'prática' em inglês?",
    answers: [
      { answer: "Practice", correct: true },
      { answer: "Practical", correct: false },
      { answer: "Experience", correct: false },
      { answer: "Experiment", correct: false },
    ],
  },
  {
    question: "O que significa 'identificação' em inglês?",
    answers: [
      { answer: "Identification", correct: true },
      { answer: "Identity", correct: false },
      { answer: "Recognition", correct: false },
      { answer: "Detection", correct: false },
    ],
  },
  {
    question: "O que significa 'exploração' em inglês?",
    answers: [
      { answer: "Exploitation", correct: true },
      { answer: "Exploration", correct: false },
      { answer: "Examination", correct: false },
      { answer: "Investigation", correct: false },
    ],
  },
  {
    question: "O que significa 'vulnerabilidades' em inglês?",
    answers: [
      { answer: "Vulnerabilities", correct: true },
      { answer: "Weaknesses", correct: false },
      { answer: "Risks", correct: false },
      { answer: "Threats", correct: false },
    ],
  },
  {
    question: "O que significa 'Executável' em inglês?",
    answers: [
      { answer: "Executable", correct: true },
      { answer: "Execution", correct: false },
      { answer: "Program", correct: false },
      { answer: "File", correct: false },
    ],
  },
  {
    question: "O que significa '1' em inglês?",
    answers: [
      { answer: "1", correct: true },
      { answer: "One", correct: false },
      { answer: "First", correct: false },
      { answer: "Single", correct: false },
    ],
  },
  {
    question: "O que significa '2' em inglês?",
    answers: [
      { answer: "2", correct: true },
      { answer: "Two", correct: false },
      { answer: "Second", correct: false },
      { answer: "Double", correct: false },
    ],
  },
  {
    question: "O que significa 'Este' em inglês?",
    answers: [
      { answer: "This", correct: true },
      { answer: "That", correct: false },
      { answer: "These", correct: false },
      { answer: "Those", correct: false },
    ],
  },
  {
    question: "O que significa 'executável' em inglês?",
    answers: [
      { answer: "Executable", correct: true },
      { answer: "Execution", correct: false },
      { answer: "Program", correct: false },
      { answer: "File", correct: false },
    ],
  },
  {
    question: "O que significa 'sido' em inglês?",
    answers: [
      { answer: "Been", correct: true },
      { answer: "Being", correct: false },
      { answer: "Was", correct: false },
      { answer: "Were", correct: false },
    ],
  },
  {
    question: "O que significa 'intencionalmente' em inglês?",
    answers: [
      { answer: "Intentionally", correct: true },
      { answer: "Purposefully", correct: false },
      { answer: "Deliberately", correct: false },
      { answer: "Consciously", correct: false },
    ],
  },
  {
    question: "O que significa 'projetado' em inglês?",
    answers: [
      { answer: "Designed", correct: true },
      { answer: "Planned", correct: false },
      { answer: "Created", correct: false },
      { answer: "Developed", correct: false },
    ],
  },
  {
    question: "O que significa 'com' em inglês?",
    answers: [
      { answer: "With", correct: true },
      { answer: "For", correct: false },
      { answer: "By", correct: false },
      { answer: "Of", correct: false },
    ],
  },
  {
    question: "O que significa 'uma' em inglês?",
    answers: [
      { answer: "A", correct: true },
      { answer: "An", correct: false },
      { answer: "One", correct: false },
      { answer: "Some", correct: false },
    ],
  },
  {
    question: "O que significa 'específica' em inglês?",
    answers: [
      { answer: "Specific", correct: true },
      { answer: "Particular", correct: false },
      { answer: "Special", correct: false },
      { answer: "Detailed", correct: false },
    ],
  },
  {
    question: "O que significa 'Sua' em inglês?",
    answers: [
      { answer: "Your", correct: true },
      { answer: "His", correct: false },
      { answer: "Her", correct: false },
      { answer: "Their", correct: false },
    ],
  },
  {
    question: "O que significa 'tarefa' em inglês?",
    answers: [
      { answer: "Task", correct: true },
      { answer: "Job", correct: false },
      { answer: "Assignment", correct: false },
      { answer: "Duty", correct: false },
    ],
  },
  {
    question: "O que significa 'identificar' em inglês?",
    answers: [
      { answer: "Identify", correct: true },
      { answer: "Recognize", correct: false },
      { answer: "Detect", correct: false },
      { answer: "Determine", correct: false },
    ],
  },
  {
    question: "O que significa 'vulnerabilidade' em inglês?",
    answers: [
      { answer: "Vulnerability", correct: true },
      { answer: "Weakness", correct: false },
      { answer: "Flaw", correct: false },
      { answer: "Risk", correct: false },
    ],
  },
  {
    question: "O que significa 'desenvolver' em inglês?",
    answers: [
      { answer: "Develop", correct: true },
      { answer: "Design", correct: false },
      { answer: "Create", correct: false },
      { answer: "Produce", correct: false },
    ],
  },
  {
    question: "O que significa 'um' em inglês?",
    answers: [
      { answer: "One", correct: true },
      { answer: "A", correct: false },
      { answer: "An", correct: false },
      { answer: "Some", correct: false },
    ],
  },
  {
    question: "O que significa 'exploit' em inglês?",
    answers: [
      { answer: "Exploit", correct: true },
      { answer: "Use", correct: false },
      { answer: "Utilize", correct: false },
      { answer: "Take advantage", correct: false },
    ],
  },
  {
    question: "O que significa 'executá-lo' em inglês?",
    answers: [
      { answer: "Run it", correct: true },
      { answer: "Execute it", correct: false },
      { answer: "Perform it", correct: false },
      { answer: "Do it", correct: false },
    ],
  },
  {
    question: "O que significa 'Documente' em inglês?",
    answers: [
      { answer: "Document", correct: true },
      { answer: "Record", correct: false },
      { answer: "Write down", correct: false },
      { answer: "Note", correct: false },
    ],
  },
  {
    question: "O que significa 'minuciosamente' em inglês?",
    answers: [
      { answer: "Thoroughly", correct: true },
      { answer: "Carefully", correct: false },
      { answer: "Diligently", correct: false },
      { answer: "Painstakingly", correct: false },
    ],
  },
  {
    question: "O que significa 'suas' em inglês?",
    answers: [
      { answer: "Your", correct: true },
      { answer: "His", correct: false },
      { answer: "Her", correct: false },
      { answer: "Their", correct: false },
    ],
  },
  {
    question: "O que significa 'descobertas' em inglês?",
    answers: [
      { answer: "Discoveries", correct: true },
      { answer: "Findings", correct: false },
      { answer: "Revelations", correct: false },
      { answer: "Uncoveries", correct: false },
    ],
  },
  {
    question: "O que significa 'passos' em inglês?",
    answers: [
      { answer: "Steps", correct: true },
      { answer: "Walks", correct: false },
      { answer: "Moves", correct: false },
      { answer: "Strides", correct: false },
    ],
  },
  {
    question: "O que significa 'tomou' em inglês?",
    answers: [
      { answer: "Took", correct: true },
      { answer: "Take", correct: false },
      { answer: "Taking", correct: false },
      { answer: "Taken", correct: false },
    ],
  },
  {
    question: "O que significa 'impacto' em inglês?",
    answers: [
      { answer: "Impact", correct: true },
      { answer: "Effect", correct: false },
      { answer: "Influence", correct: false },
      { answer: "Consequence", correct: false },
    ],
  },
  {
    question: "O que significa 'do' em inglês?",
    answers: [
      { answer: "Of", correct: true },
      { answer: "To", correct: false },
      { answer: "From", correct: false },
      { answer: "In", correct: false },
    ],
  },
  {
    question: "O que significa 'exploit' em inglês?",
    answers: [
      { answer: "Exploit", correct: true },
      { answer: "Use", correct: false },
      { answer: "Utilize", correct: false },
      { answer: "Take advantage", correct: false },
    ],
  },
  {
    question: "O que significa 'Executável' em inglês?",
    answers: [
      { answer: "Executable", correct: true },
      { answer: "Execution", correct: false },
      { answer: "Program", correct: false },
      { answer: "File", correct: false },
    ],
  },
  {
    question: "O que significa 'R-3.4.4-win.exe' em inglês?",
    answers: [
      { answer: "R-3.4.4-win.exe", correct: true },
      { answer: "An executable", correct: false },
      { answer: "A program", correct: false },
      { answer: "A file", correct: false },
    ],
  },
  {
    question: "O que significa 'é' em inglês?",
    answers: [
      { answer: "Is", correct: true },
      { answer: "Be", correct: false },
      { answer: "Am", correct: false },
      { answer: "Are", correct: false },
    ],
  },
  {
    question: "O que significa 'um' em inglês?",
    answers: [
      { answer: "One", correct: true },
      { answer: "A", correct: false },
      { answer: "An", correct: false },
      { answer: "Some", correct: false },
    ],
  },
  {
    question: "O que significa 'programa' em inglês?",
    answers: [
      { answer: "Program", correct: true },
      { answer: "Software", correct: false },
      { answer: "Application", correct: false },
      { answer: "App", correct: false },
    ],
  },
  {
    question: "O que significa 'software' em inglês?",
    answers: [
      { answer: "Software", correct: true },
      { answer: "Program", correct: false },
      { answer: "Application", correct: false },
      { answer: "App", correct: false },
    ],
  },
  {
    question: "O que significa 'legítimo' em inglês?",
    answers: [
      { answer: "Legitimate", correct: true },
      { answer: "Legal", correct: false },
      { answer: "Genuine", correct: false },
      { answer: "Authentic", correct: false },
    ],
  },
  {
    question: "O que significa 'contém' em inglês?",
    answers: [
      { answer: "Contains", correct: true },
      { answer: "Include", correct: false },
      { answer: "Comprises", correct: false },
      { answer: "Consists", correct: false },
    ],
  },
  {
    question: "O que significa 'vulnerabilidade' em inglês?",
    answers: [
      { answer: "Vulnerability", correct: true },
      { answer: "Weakness", correct: false },
      { answer: "Flaw", correct: false },
      { answer: "Risk", correct: false },
    ],
  },
  {
    question: "O que significa 'estouro' em inglês?",
    answers: [
      { answer: "Overflow", correct: true },
      { answer: "Outburst", correct: false },
      { answer: "Burst", correct: false },
      { answer: "Excess", correct: false },
    ],
  },
  {
    question: "O que significa 'buffer' em inglês?",
    answers: [
      { answer: "Buffer", correct: true },
      { answer: "Cushion", correct: false },
      { answer: "Pillow", correct: false },
      { answer: "Barrier", correct: false },
    ],
  },
  {
    question: "O que significa 'que' em inglês?",
    answers: [
      { answer: "That", correct: true },
      { answer: "What", correct: false },
      { answer: "Which", correct: false },
      { answer: "Who", correct: false },
    ],
  },
  {
    question: "O que significa 'explorar' em inglês?",
    answers: [
      { answer: "Exploit", correct: true },
      { answer: "Explore", correct: false },
      { answer: "Examine", correct: false },
      { answer: "Discover", correct: false },
    ],
  },
  {
    question: "O que significa 'Assim' em inglês?",
    answers: [
      { answer: "Thus", correct: true },
      { answer: "So", correct: false },
      { answer: "Therefore", correct: false },
      { answer: "Hence", correct: false },
    ],
  },
  {
    question: "O que significa 'como' em inglês?",
    answers: [
      { answer: "How", correct: true },
      { answer: "As", correct: false },
      { answer: "Like", correct: false },
      { answer: "Which", correct: false },
    ],
  },
  {
    question: "O que significa 'segundo' em inglês?",
    answers: [
      { answer: "Second", correct: true },
      { answer: "Next", correct: false },
      { answer: "Following", correct: false },
      { answer: "Later", correct: false },
    ],
  },
  {
    question: "O que significa 'também' em inglês?",
    answers: [
      { answer: "Also", correct: true },
      { answer: "Too", correct: false },
      { answer: "As well", correct: false },
      { answer: "Likewise", correct: false },
    ],
  },
  {
    question: "O que significa 'apresenta' em inglês?",
    answers: [
      { answer: "Presents", correct: true },
      { answer: "Shows", correct: false },
      { answer: "Introduces", correct: false },
      { answer: "Exhibits", correct: false },
    ],
  },
  {
    question: "O que significa 'desafios' em inglês?",
    answers: [
      { answer: "Challenges", correct: true },
      { answer: "Obstacles", correct: false },
      { answer: "Difficulties", correct: false },
      { answer: "Struggles", correct: false },
    ],
  },
  {
    question: "O que significa 'características' em inglês?",
    answers: [
      { answer: "Features", correct: true },
      { answer: "Traits", correct: false },
      { answer: "Aspects", correct: false },
      { answer: "Attributes", correct: false },
    ],
  },
  {
    question: "O que significa 'diferentes' em inglês?",
    answers: [
      { answer: "Different", correct: true },
      { answer: "Distinct", correct: false },
      { answer: "Various", correct: false },
      { answer: "Diverse", correct: false },
    ],
  },
  {
    question: "O que significa 'Seu' em inglês?",
    answers: [
      { answer: "Your", correct: true },
      { answer: "His", correct: false },
      { answer: "Her", correct: false },
      { answer: "Their", correct: false },
    ],
  },
  {
    question: "O que significa 'objetivo' em inglês?",
    answers: [
      { answer: "Objective", correct: true },
      { answer: "Goal", correct: false },
      { answer: "Aim", correct: false },
      { answer: "Purpose", correct: false },
    ],
  },
  {
    question: "O que significa 'descobrir' em inglês?",
    answers: [
      { answer: "Discover", correct: true },
      { answer: "Find out", correct: false },
      { answer: "Uncover", correct: false },
      { answer: "Reveal", correct: false },
    ],
  },
  {
    question: "O que significa 'criar' em inglês?",
    answers: [
      { answer: "Create", correct: true },
      { answer: "Make", correct: false },
      { answer: "Build", correct: false },
      { answer: "Generate", correct: false },
    ],
  },
  {
    question: "O que significa 'Executar' em inglês?",
    answers: [
      { answer: "Run", correct: true },
      { answer: "Execute", correct: false },
      { answer: "Perform", correct: false },
      { answer: "Operate", correct: false },
    ],
  },
  {
    question: "O que significa 'Enquanto' em inglês?",
    answers: [
      { answer: "While", correct: true },
      { answer: "As", correct: false },
      { answer: "When", correct: false },
      { answer: "Until", correct: false },
    ],
  },
  {
    question: "O que significa 'primeiro' em inglês?",
    answers: [
      { answer: "First", correct: true },
      { answer: "Initial", correct: false },
      { answer: "Primary", correct: false },
      { answer: "Early", correct: false },
    ],
  },
  {
    question: "O que significa 'exercício' em inglês?",
    answers: [
      { answer: "Exercise", correct: true },
      { answer: "Workout", correct: false },
      { answer: "Practice", correct: false },
      { answer: "Task", correct: false },
    ],
  },
  {
    question: "O que significa 'certifique-se' em inglês?",
    answers: [
      { answer: "Make sure", correct: true },
      { answer: "Ensure", correct: false },
      { answer: "Verify", correct: false },
      { answer: "Confirm", correct: false },
    ],
  },
  {
    question: "O que significa 'documentar' em inglês?",
    answers: [
      { answer: "Document", correct: true },
      { answer: "Record", correct: false },
      { answer: "Write down", correct: false },
      { answer: "Note", correct: false },
    ],
  },
  {
    question: "O que significa 'processo' em inglês?",
    answers: [
      { answer: "Process", correct: true },
      { answer: "Procedure", correct: false },
      { answer: "Method", correct: false },
      { answer: "Technique", correct: false },
    ],
  },
  {
    question: "O que significa 'Antes' em inglês?",
    answers: [
      { answer: "Before", correct: true },
      { answer: "Prior", correct: false },
      { answer: "Preceding", correct: false },
      { answer: "Ahead", correct: false },
    ],
  },
  {
    question: "O que significa 'Começar' em inglês?",
    answers: [
      { answer: "Start", correct: true },
      { answer: "Begin", correct: false },
      { answer: "Commence", correct: false },
      { answer: "Initiate", correct: false },
    ],
  },
  {
    question: "O que significa 'Considerações' em inglês?",
    answers: [
      { answer: "Considerations", correct: true },
      { answer: "Thoughts", correct: false },
      { answer: "Reflections", correct: false },
      { answer: "Contemplations", correct: false },
    ],
  },
  {
    question: "O que significa 'Legais' em inglês?",
    answers: [
      { answer: "Legal", correct: true },
      { answer: "Lawful", correct: false },
      { answer: "Juridical", correct: false },
      { answer: "Official", correct: false },
    ],
  },
  {
    question: "O que significa 'Éticas' em inglês?",
    answers: [
      { answer: "Ethical", correct: true },
      { answer: "Morals", correct: false },
      { answer: "Moral", correct: false },
      { answer: "Ethics", correct: false },
    ],
  },
  {
    question: "O que significa 'Sempre' em inglês?",
    answers: [
      { answer: "Always", correct: true },
      { answer: "Forever", correct: false },
      { answer: "Constantly", correct: false },
      { answer: "Continuously", correct: false },
    ],
  },
  {
    question: "O que significa 'assegure-se' em inglês?",
    answers: [
      { answer: "Ensure", correct: true },
      { answer: "Make sure", correct: false },
      { answer: "Guarantee", correct: false },
      { answer: "Confirm", correct: false },
    ],
  },
  {
    question: "O que significa 'ter' em inglês?",
    answers: [
      { answer: "Have", correct: true },
      { answer: "Possess", correct: false },
      { answer: "Own", correct: false },
      { answer: "Obtain", correct: false },
    ],
  },
  {
    question: "O que significa 'autorização' em inglês?",
    answers: [
      { answer: "Authorization", correct: true },
      { answer: "Permission", correct: false },
      { answer: "Approval", correct: false },
      { answer: "Consent", correct: false },
    ],
  },
  {
    question: "O que significa 'adequada' em inglês?",
    answers: [
      { answer: "Adequate", correct: true },
      { answer: "Sufficient", correct: false },
      { answer: "Appropriate", correct: false },
      { answer: "Suitable", correct: false },
    ],
  },
  {
    question: "O que significa 'estar' em inglês?",
    answers: [
      { answer: "To be", correct: true },
      { answer: "Be", correct: false },
      { answer: "Being", correct: false },
      { answer: "Been", correct: false },
    ],
  },
  {
    question: "O que significa 'trabalhando' em inglês?",
    answers: [
      { answer: "Working", correct: true },
      { answer: "Work", correct: false },
      { answer: "Job", correct: false },
      { answer: "Laboring", correct: false },
    ],
  },
  {
    question: "O que significa 'controlado' em inglês?",
    answers: [
      { answer: "Controlled", correct: true },
      { answer: "Regulated", correct: false },
      { answer: "Managed", correct: false },
      { answer: "Supervised", correct: false },
    ],
  },
  {
    question: "O que significa 'ao' em inglês?",
    answers: [
      { answer: "To the", correct: true },
      { answer: "At the", correct: false },
      { answer: "In the", correct: false },
      { answer: "By the", correct: false },
    ],
  },
  {
    question: "O que significa 'testar' em inglês?",
    answers: [
      { answer: "Test", correct: true },
      { answer: "Try", correct: false },
      { answer: "Experiment", correct: false },
      { answer: "Assay", correct: false },
    ],
  },
  {
    question: "O que significa 'esses' em inglês?",
    answers: [
      { answer: "These", correct: true },
      { answer: "Those", correct: false },
      { answer: "This", correct: false },
      { answer: "That", correct: false },
    ],
  },
  {
    question: "O que significa 'exploração' em inglês?",
    answers: [
      { answer: "Exploitation", correct: true },
      { answer: "Exploration", correct: false },
      { answer: "Examination", correct: false },
      { answer: "Investigation", correct: false },
    ],
  },
  {
    question: "O que significa 'não' em inglês?",
    answers: [
      { answer: "Not", correct: true },
      { answer: "No", correct: false },
      { answer: "None", correct: false },
      { answer: "Nothing", correct: false },
    ],
  },
  {
    question: "O que significa 'autorizada' em inglês?",
    answers: [
      { answer: "Authorized", correct: true },
      { answer: "Allowed", correct: false },
      { answer: "Permitted", correct: false },
      { answer: "Sanctioned", correct: false },
    ],
  },
  {
    question: "O que significa 'tanto' em inglês?",
    answers: [
      { answer: "Both", correct: true },
      { answer: "As much", correct: false },
      { answer: "So much", correct: false },
      { answer: "Too much", correct: false },
    ],
  },
  {
    question: "O que significa 'antiética' em inglês?",
    answers: [
      { answer: "Unethical", correct: true },
      { answer: "Immoral", correct: false },
      { answer: "Unmoral", correct: false },
      { answer: "Amoral", correct: false },
    ],
  },
  {
    question: "O que significa 'ilegal' em inglês?",
    answers: [
      { answer: "Illegal", correct: true },
      { answer: "Unlawful", correct: false },
      { answer: "Prohibited", correct: false },
      { answer: "Banned", correct: false },
    ],
  },
  {
    question: "O que significa 'Medidas' em inglês?",
    answers: [
      { answer: "Measures", correct: true },
      { answer: "Steps", correct: false },
      { answer: "Actions", correct: false },
      { answer: "Precautions", correct: false },
    ],
  },
  {
    question: "O que significa 'Segurança' em inglês?",
    answers: [
      { answer: "Security", correct: true },
      { answer: "Safety", correct: false },
      { answer: "Protection", correct: false },
      { answer: "Defense", correct: false },
    ],
  },
  {
    question: "O que significa 'Conduza' em inglês?",
    answers: [
      { answer: "Conduct", correct: true },
      { answer: "Drive", correct: false },
      { answer: "Lead", correct: false },
      { answer: "Guide", correct: false },
    ],
  },
  {
    question: "O que significa 'testes' em inglês?",
    answers: [
      { answer: "Tests", correct: true },
      { answer: "Trials", correct: false },
      { answer: "Experiments", correct: false },
      { answer: "Assessments", correct: false },
    ],
  },
  {
    question: "O que significa 'ambientes' em inglês?",
    answers: [
      { answer: "Environments", correct: true },
      { answer: "Settings", correct: false },
      { answer: "Surroundings", correct: false },
      { answer: "Conditions", correct: false },
    ],
  },
  {
    question: "O que significa 'isolados' em inglês?",
    answers: [
      { answer: "Isolated", correct: true },
      { answer: "Secluded", correct: false },
      { answer: "Remote", correct: false },
      { answer: "Alone", correct: false },
    ],
  },
  {
    question: "O que significa 'evitar' em inglês?",
    answers: [
      { answer: "Avoid", correct: true },
      { answer: "Prevent", correct: false },
      { answer: "Escape", correct: false },
      { answer: "Shun", correct: false },
    ],
  },
  {
    question: "O que significa 'quaisquer' em inglês?",
    answers: [
      { answer: "Any", correct: true },
      { answer: "Some", correct: false },
      { answer: "Every", correct: false },
      { answer: "Each", correct: false },
    ],
  },
  {
    question: "O que significa 'consequências' em inglês?",
    answers: [
      { answer: "Consequences", correct: true },
      { answer: "Results", correct: false },
      { answer: "Outcomes", correct: false },
      { answer: "Effects", correct: false },
    ],
  },
  {
    question: "O que significa 'indesejadas' em inglês?",
    answers: [
      { answer: "Unwanted", correct: true },
      { answer: "Undesired", correct: false },
      { answer: "Unwelcome", correct: false },
      { answer: "Unfavorable", correct: false },
    ],
  },
  {
    question: "O que significa 'Documentação' em inglês?",
    answers: [
      { answer: "Documentation", correct: true },
      { answer: "Record", correct: false },
      { answer: "Writing", correct: false },
      { answer: "Notation", correct: false },
    ],
  },
  {
    question: "O que significa 'Mantenha' em inglês?",
    answers: [
      { answer: "Keep", correct: true },
      { answer: "Maintain", correct: false },
      { answer: "Hold", correct: false },
      { answer: "Sustain", correct: false },
    ],
  },
  {
    question: "O que significa 'registros' em inglês?",
    answers: [
      { answer: "Records", correct: true },
      { answer: "Logs", correct: false },
      { answer: "Entries", correct: false },
      { answer: "Files", correct: false },
    ],
  },
  {
    question: "O que significa 'detalhados' em inglês?",
    answers: [
      { answer: "Detailed", correct: true },
      { answer: "Thorough", correct: false },
      { answer: "Comprehensive", correct: false },
      { answer: "Elaborate", correct: false },
    ],
  },
  {
    question: "O que significa 'suas' em inglês?",
    answers: [
      { answer: "Your", correct: true },
      { answer: "His", correct: false },
      { answer: "Her", correct: false },
      { answer: "Their", correct: false },
    ],
  },
  {
    question: "O que significa 'descobertas' em inglês?",
    answers: [
      { answer: "Discoveries", correct: true },
      { answer: "Findings", correct: false },
      { answer: "Revelations", correct: false },
      { answer: "Uncoveries", correct: false },
    ],
  },
  {
    question: "O que significa 'incluindo' em inglês?",
    answers: [
      { answer: "Including", correct: true },
      { answer: "Incorporating", correct: false },
      { answer: "Encompassing", correct: false },
      { answer: "Containing", correct: false },
    ],
  },
  {
    question: "O que significa 'mitigadores' em inglês?",
    answers: [
      { answer: "Mitigators", correct: true },
      { answer: "Repressors", correct: false },
      { answer: "Reducers", correct: false },
      { answer: "Lesseners", correct: false },
    ],
  },
  {
    question: "O que significa 'correções' em inglês?",
    answers: [
      { answer: "Corrections", correct: true },
      { answer: "Fixes", correct: false },
      { answer: "Remedies", correct: false },
      { answer: "Adjustments", correct: false },
    ],
  },
  {
    question: "O que significa 'recomendados' em inglês?",
    answers: [
      { answer: "Recommended", correct: true },
      { answer: "Advised", correct: false },
      { answer: "Suggested", correct: false },
      { answer: "Urged", correct: false },
    ],
  },
  {
    question: "O que significa 'Experiência' em inglês?",
    answers: [
      { answer: "Experience", correct: true },
      { answer: "Expertise", correct: false },
      { answer: "Knowledge", correct: false },
      { answer: "Skill", correct: false },
    ],
  },
  {
    question: "O que significa 'Aprendizado' em inglês?",
    answers: [
      { answer: "Learning", correct: true },
      { answer: "Education", correct: false },
      { answer: "Study", correct: false },
      { answer: "Instruction", correct: false },
    ],
  },
  {
    question: "O que significa 'Use' em inglês?",
    answers: [
      { answer: "Use", correct: true },
      { answer: "Utilize", correct: false },
      { answer: "Apply", correct: false },
      { answer: "Employ", correct: false },
    ],
  },
  {
    question: "O que significa 'oportunidades' em inglês?",
    answers: [
      { answer: "Opportunities", correct: true },
      { answer: "Chances", correct: false },
      { answer: "Possibilities", correct: false },
      { answer: "Prospects", correct: false },
    ],
  },
  {
    question: "O que significa 'aplicar' em inglês?",
    answers: [
      { answer: "Apply", correct: true },
      { answer: "Use", correct: false },
      { answer: "Employ", correct: false },
      { answer: "Utilize", correct: false },
    ],
  },
  {
    question: "O que significa 'técnicas' em inglês?",
    answers: [
      { answer: "Techniques", correct: true },
      { answer: "Methods", correct: false },
      { answer: "Approaches", correct: false },
      { answer: "Strategies", correct: false },
    ],
  },
  {
    question: "O que significa 'aprendeu' em inglês?",
    answers: [
      { answer: "Learned", correct: true },
      { answer: "Taught", correct: false },
      { answer: "Studied", correct: false },
      { answer: "Educated", correct: false },
    ],
  },
  {
    question: "O que significa 'Aborde-os' em inglês?",
    answers: [
      { answer: "Address them", correct: true },
      { answer: "Approach them", correct: false },
      { answer: "Tackle them", correct: false },
      { answer: "Handle them", correct: false },
    ],
  },
  {
    question: "O que significa 'aprendizado' em inglês?",
    answers: [
      { answer: "Learning", correct: true },
      { answer: "Education", correct: false },
      { answer: "Study", correct: false },
      { answer: "Instruction", correct: false },
    ],
  },
  {
    question: "O que significa 'tome' em inglês?",
    answers: [
      { answer: "Take", correct: true },
      { answer: "Bring", correct: false },
      { answer: "Grab", correct: false },
      { answer: "Get", correct: false },
    ],
  },
  {
    question: "O que significa 'nota' em inglês?",
    answers: [
      { answer: "Note", correct: true },
      { answer: "Notice", correct: false },
      { answer: "Mark", correct: false },
      { answer: "Memo", correct: false },
    ],
  },
  {
    question: "O que significa 'quaisquer' em inglês?",
    answers: [
      { answer: "Any", correct: true },
      { answer: "Some", correct: false },
      { answer: "Every", correct: false },
      { answer: "Each", correct: false },
    ],
  },
  {
    question: "O que significa 'desafios' em inglês?",
    answers: [
      { answer: "Challenges", correct: true },
      { answer: "Obstacles", correct: false },
      { answer: "Difficulties", correct: false },
      { answer: "Struggles", correct: false },
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
