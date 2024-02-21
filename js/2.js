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
    question: "O que significa 'Hi' em inglês?",
    answers: [
      { answer: "Olá", correct: true },
      { answer: "Adeus", correct: false },
      { answer: "Sim", correct: false },
      { answer: "Não", correct: false },
      { answer: "Oi", correct: false },
    ],
  },
  {
    question: "O que significa 'hackers' em inglês?",
    answers: [
      { answer: "Cozinheiros", correct: false },
      { answer: "Programadores", correct: false },
      { answer: "Hackers", correct: true },
      { answer: "Jogadores", correct: false },
      { answer: "Artistas", correct: false },
    ],
  },
  {
    question: "Qual é a tradução de '!' em inglês?",
    answers: [
      { answer: "Ponto de exclamação", correct: true },
      { answer: "Ponto final", correct: false },
      { answer: "Ponto e vírgula", correct: false },
      { answer: "Vírgula", correct: false },
      { answer: "Dois pontos", correct: false },
    ],
  },
  {
    question: "Qual é o significado de 'We' em inglês?",
    answers: [
      { answer: "Nós", correct: true },
      { answer: "Ele", correct: false },
      { answer: "Ela", correct: false },
      { answer: "Eles", correct: false },
      { answer: "Isso", correct: false },
    ],
  },
  {
    question: "Qual é o significado de 'launching' em inglês?",
    answers: [
      { answer: "Voar", correct: false },
      { answer: "Aterrissar", correct: false },
      { answer: "Lançando", correct: true },
      { answer: "Dirigir", correct: false },
      { answer: "Pousar", correct: false },
    ],
  },
  {
    question: "Qual é o significado de 'our' em inglês?",
    answers: [
      { answer: "Nosso", correct: true },
      { answer: "Seu", correct: false },
      { answer: "Dele", correct: false },
      { answer: "Deles", correct: false },
      { answer: "Meu", correct: false },
    ],
  },
  {
    question: "O que significa 'campaign' em inglês?",
    answers: [
      { answer: "Campanha", correct: true },
      { answer: "Canção", correct: false },
      { answer: "Cena", correct: false },
      { answer: "Cinema", correct: false },
      { answer: "Campo", correct: false },
    ],
  },
  {
    question: "Qual é o significado de 'from' em inglês?",
    answers: [
      { answer: "De", correct: true },
      { answer: "Para", correct: false },
      { answer: "Em", correct: false },
      { answer: "Com", correct: false },
      { answer: "A", correct: false },
    ],
  },
  {
    question: "Qual é a tradução de '17th' em inglês?",
    answers: [
      { answer: "17º", correct: true },
      { answer: "17", correct: false },
      { answer: "7º", correct: false },
      { answer: "7", correct: false },
      { answer: "Sete", correct: false },
    ],
  },
  {
    question: "Qual é o significado de 'February' em inglês?",
    answers: [
      { answer: "Fevereiro", correct: true },
      { answer: "Janeiro", correct: false },
      { answer: "Março", correct: false },
      { answer: "Abril", correct: false },
      { answer: "Maio", correct: false },
    ],
  },
  {
    question: "O que significa 'All' em inglês?",
    answers: [
      { answer: "Tudo", correct: true },
      { answer: "Além", correct: false },
      { answer: "Todas", correct: false },
      { answer: "Nada", correct: false },
      { answer: "Algo", correct: false },
    ],
  },
  {
    question: "Qual é o significado de 'the' em inglês?",
    answers: [
      { answer: "O", correct: true },
      { answer: "A", correct: false },
      { answer: "Os", correct: false },
      { answer: "As", correct: false },
      { answer: "Um", correct: false },
    ],
  },
  {
    question: "Qual é a tradução de 'details' em inglês?",
    answers: [
      { answer: "Detalhes", correct: true },
      { answer: "Descrições", correct: false },
      { answer: "Documentos", correct: false },
      { answer: "Dados", correct: false },
      { answer: "Diários", correct: false },
    ],
  },
  {
    question: "O que significa 'can' em inglês?",
    answers: [
      { answer: "Pode", correct: true },
      { answer: "Poderia", correct: false },
      { answer: "Deve", correct: false },
      { answer: "Fazer", correct: false },
      { answer: "Foi", correct: false },
    ],
  },
  {
    question: "Qual é o significado de 'be' em inglês?",
    answers: [
      { answer: "Ser", correct: true },
      { answer: "Estar", correct: false },
      { answer: "Dever", correct: false },
      { answer: "Ficar", correct: false },
      { answer: "Foi", correct: false },
    ],
  },
  {
    question: "O que significa 'found' em inglês?",
    answers: [
      { answer: "Encontrado", correct: true },
      { answer: "Perdido", correct: false },
      { answer: "Achado", correct: false },
      { answer: "Achar", correct: false },
      { answer: "Descoberto", correct: false },
    ],
  },
  {
    question: "Qual é o significado de 'on' em inglês?",
    answers: [
      { answer: "Em", correct: true },
      { answer: "No", correct: false },
      { answer: "Sobre", correct: false },
      { answer: "Para", correct: false },
      { answer: "A", correct: false },
    ],
  },
  {
    question: "O que significa 'our' em inglês?",
    answers: [
      { answer: "Nosso", correct: true },
      { answer: "Seu", correct: false },
      { answer: "Dele", correct: false },
      { answer: "Deles", correct: false },
      { answer: "Meu", correct: false },
    ],
  },
  {
    question: "Qual é o significado de 'policy' em inglês?",
    answers: [
      { answer: "Política", correct: true },
      { answer: "Policial", correct: false },
      { answer: "Público", correct: false },
      { answer: "Pobreza", correct: false },
      { answer: "Paisagem", correct: false },
    ],
  },
  {
    question: "O que significa 'page' em inglês?",
    answers: [
      { answer: "Página", correct: true },
      { answer: "Palavra", correct: false },
      { answer: "Parágrafo", correct: false },
      { answer: "Plano", correct: false },
      { answer: "Projeto", correct: false },
    ],
  },
  {
    question: "Qual é o significado de 'We' em inglês?",
    answers: [
      { answer: "Nós", correct: true },
      { answer: "Ele", correct: false },
      { answer: "Ela", correct: false },
      { answer: "Eles", correct: false },
      { answer: "Isso", correct: false },
    ],
  },
  {
    question: "O que significa 'look' em inglês?",
    answers: [
      { answer: "Olhar", correct: true },
      { answer: "Escutar", correct: false },
      { answer: "Ler", correct: false },
      { answer: "Falar", correct: false },
      { answer: "Escrever", correct: false },
    ],
  },
  {
    question: "Qual é o significado de 'forward' em inglês?",
    answers: [
      { answer: "Para frente", correct: true },
      { answer: "Para trás", correct: false },
      { answer: "Para cima", correct: false },
      { answer: "Para baixo", correct: false },
      { answer: "Para dentro", correct: false },
    ],
  },
  {
    question: "O que significa 'to' em inglês?",
    answers: [
      { answer: "Para", correct: true },
      { answer: "De", correct: false },
      { answer: "Com", correct: false },
      { answer: "Em", correct: false },
      { answer: "Até", correct: false },
    ],
  },
  {
    question: "Qual é o significado de 'your' em inglês?",
    answers: [
      { answer: "Seu", correct: true },
      { answer: "Meu", correct: false },
      { answer: "Dele", correct: false },
      { answer: "Deles", correct: false },
      { answer: "Nosso", correct: false },
    ],
  },
  {
    question: "O que significa 'reports' em inglês?",
    answers: [
      { answer: "Relatórios", correct: true },
      { answer: "Receitas", correct: false },
      { answer: "Reservas", correct: false },
      { answer: "Repórteres", correct: false },
      { answer: "Regras", correct: false },
    ],
  },
  {
    question: "O que significa 'and' em inglês?",
    answers: [
      { answer: "E", correct: true },
      { answer: "Ou", correct: false },
      { answer: "Mas", correct: false },
      { answer: "Com", correct: false },
      { answer: "De", correct: false },
    ],
  },
  {
    question: "O que significa 'making' em inglês?",
    answers: [
      { answer: "Fazendo", correct: true },
      { answer: "Comendo", correct: false },
      { answer: "Trabalhando", correct: false },
      { answer: "Andando", correct: false },
      { answer: "Dormindo", correct: false },
    ],
  },
  {
    question: "Qual é o significado de 'us' em inglês?",
    answers: [
      { answer: "Nós", correct: true },
      { answer: "Ele", correct: false },
      { answer: "Ela", correct: false },
      { answer: "Eles", correct: false },
      { answer: "Isso", correct: false },
    ],
  },
  {
    question: "Qual é o significado de 'safer' em inglês?",
    answers: [
      { answer: "Mais seguro", correct: true },
      { answer: "Menos seguro", correct: false },
      { answer: "Seguro", correct: false },
      { answer: "Segurança", correct: false },
      { answer: "Protegido", correct: false },
    ],
  },
  {
    question: "Qual é o significado de 'for' em inglês?",
    answers: [
      { answer: "Para", correct: true },
      { answer: "De", correct: false },
      { answer: "Por", correct: false },
      { answer: "Com", correct: false },
      { answer: "Em", correct: false },
    ],
  },
  {
    question: "O que significa 'customers' em inglês?",
    answers: [
      { answer: "Clientes", correct: true },
      { answer: "Compras", correct: false },
      { answer: "Consumidores", correct: false },
      { answer: "Produtos", correct: false },
      { answer: "Empregados", correct: false },
    ],
  },
  {
    question: "O que significa 'Moreover' em inglês?",
    answers: [
      { answer: "Além disso", correct: true },
      { answer: "Portanto", correct: false },
      { answer: "Entretanto", correct: false },
      { answer: "No entanto", correct: false },
      { answer: "Assim", correct: false },
    ],
  },
  {
    question: "O que significa 'extra' em inglês?",
    answers: [
      { answer: "Extra", correct: true },
      { answer: "Normal", correct: false },
      { answer: "Adicional", correct: false },
      { answer: "Mínimo", correct: false },
      { answer: "Máximo", correct: false },
    ],
  },
  {
    question: "O que significa 'bonuses' em inglês?",
    answers: [
      { answer: "Bônus", correct: true },
      { answer: "Bolsa", correct: false },
      { answer: "Banco", correct: false },
      { answer: "Boas-vindas", correct: false },
      { answer: "Bolo", correct: false },
    ],
  },
  {
    question: "O que significa 'for' em inglês?",
    answers: [
      { answer: "Para", correct: true },
      { answer: "De", correct: false },
      { answer: "Por", correct: false },
      { answer: "Com", correct: false },
      { answer: "Em", correct: false },
    ],
  },
  {
    question: "Qual é o significado de 'vulnerabilities' em inglês?",
    answers: [
      { answer: "Vulnerabilidades", correct: true },
      { answer: "Virtudes", correct: false },
      { answer: "Vírus", correct: false },
      { answer: "Vendas", correct: false },
      { answer: "Violência", correct: false },
    ],
  },
  {
    question: "O que significa 'found' em inglês?",
    answers: [
      { answer: "Encontrado", correct: true },
      { answer: "Perdido", correct: false },
      { answer: "Achado", correct: false },
      { answer: "Achar", correct: false },
      { answer: "Descoberto", correct: false },
    ],
  },
  {
    question: "Qual é o significado de 'for' em inglês?",
    answers: [
      { answer: "Para", correct: true },
      { answer: "De", correct: false },
      { answer: "Por", correct: false },
      { answer: "Com", correct: false },
      { answer: "Em", correct: false },
    ],
  },
  {
    question: "O que significa 'Penny' em inglês?",
    answers: [
      { answer: "Penalti", correct: false },
      { answer: "Centavo", correct: true },
      { answer: "Dólar", correct: false },
      { answer: "Moeda", correct: false },
      { answer: "Euro", correct: false },
    ],
  },
  {
    question: "Qual é o significado de 'our' em inglês?",
    answers: [
      { answer: "Nosso", correct: true },
      { answer: "Seu", correct: false },
      { answer: "Dele", correct: false },
      { answer: "Deles", correct: false },
      { answer: "Meu", correct: false },
    ],
  },
  {
    question: "O que significa 'AI' em inglês?",
    answers: [
      { answer: "Inteligência Artificial", correct: true },
      { answer: "Alto Investimento", correct: false },
      { answer: "Análise de Informações", correct: false },
      { answer: "Análise de Inventário", correct: false },
      { answer: "Aprendizagem Interativa", correct: false },
    ],
  },
  {
    question: "O que significa 'bot' em inglês?",
    answers: [
      { answer: "Amigos", correct: false },
      { answer: "Robô", correct: true },
      { answer: "Rato", correct: false },
      { answer: "Gato", correct: false },
      { answer: "Cachorro", correct: false },
    ],
  },
  {
    question: "Qual é o significado de 'Happy' em inglês?",
    answers: [
      { answer: "Feliz", correct: true },
      { answer: "Triste", correct: false },
      { answer: "Cansado", correct: false },
      { answer: "Irritado", correct: false },
      { answer: "Assustado", correct: false },
    ],
  },
  {
    question: "O que significa 'hacking' em inglês?",
    answers: [
      { answer: "Hacking", correct: true },
      { answer: "Cortando", correct: false },
      { answer: "Hackeamento", correct: false },
      { answer: "Quebrando", correct: false },
      { answer: "Ataque", correct: false },
    ],
  },
  {
    question: "O que significa 'Priceline' em inglês?",
    answers: [
      { answer: "Priceline", correct: true },
      { answer: "Preço", correct: false },
      { answer: "Linha de Preço", correct: false },
      { answer: "Preço Justo", correct: false },
      { answer: "Preço de Venda", correct: false },
    ],
  },
  {
    question: "O que significa 'Team' em inglês?",
    answers: [
      { answer: "Loja", correct: false },
      { answer: "Equipe", correct: true },
      { answer: "Grupo", correct: false },
      { answer: "Pessoa", correct: false },
      { answer: "Conjunto", correct: false },
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
