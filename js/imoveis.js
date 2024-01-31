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
    question: "O que é um 'imóvel' em inglês?",
    answers: [
      { answer: "Property", correct: true },
      { answer: "Building", correct: false },
      { answer: "Real estate", correct: false },
      { answer: "House", correct: false },
      { answer: "Apartment", correct: false },
    ],
  },
  {
    question: "Qual é o significado de 'casa' em inglês?",
    answers: [
      { answer: "House", correct: true },
      { answer: "Apartment", correct: false },
      { answer: "Home", correct: false },
      { answer: "Residence", correct: false },
      { answer: "Dwelling", correct: false },
    ],
  },
  {
    question: "O que é um 'apartamento' em inglês?",
    answers: [
      { answer: "Apartment", correct: true },
      { answer: "Flat", correct: false },
      { answer: "Condo", correct: false },
      { answer: "Unit", correct: false },
      { answer: "Suite", correct: false },
    ],
  },
  {
    question: "Qual é o significado de 'condomínio' em inglês?",
    answers: [
      { answer: "Condominium", correct: true },
      { answer: "Complex", correct: false },
      { answer: "Housing association", correct: false },
      { answer: "Community", correct: false },
      { answer: "Residential area", correct: false },
    ],
  },
  {
    question: "O que é uma 'sala de estar' em inglês?",
    answers: [
      { answer: "Living room", correct: true },
      { answer: "Lounge", correct: false },
      { answer: "Den", correct: false },
      { answer: "Parlor", correct: false },
      { answer: "Sitting room", correct: false },
    ],
  },
  {
    question: "Qual é o significado de 'cozinha' em inglês?",
    answers: [
      { answer: "Kitchen", correct: true },
      { answer: "Cookroom", correct: false },
      { answer: "Culinary space", correct: false },
      { answer: "Galley", correct: false },
      { answer: "Cookhouse", correct: false },
    ],
  },
  {
    question: "O que é um 'quarto' em inglês?",
    answers: [
      { answer: "Bedroom", correct: true },
      { answer: "Chamber", correct: false },
      { answer: "Sleeping room", correct: false },
      { answer: "Master bedroom", correct: false },
      { answer: "Guest room", correct: false },
    ],
  },
  {
    question: "Qual é o significado de 'banheiro' em inglês?",
    answers: [
      { answer: "Bathroom", correct: true },
      { answer: "Restroom", correct: false },
      { answer: "Lavatory", correct: false },
      { answer: "Powder room", correct: false },
      { answer: "Washroom", correct: false },
    ],
  },
  {
    question: "O que é uma 'varanda' em inglês?",
    answers: [
      { answer: "Balcony", correct: true },
      { answer: "Terrace", correct: false },
      { answer: "Veranda", correct: false },
      { answer: "Porch", correct: false },
      { answer: "Deck", correct: false },
    ],
  },
  {
    question: "Qual é o significado de 'jardim' em inglês?",
    answers: [
      { answer: "Garden", correct: true },
      { answer: "Yard", correct: false },
      { answer: "Lawn", correct: false },
      { answer: "Botanical space", correct: false },
      { answer: "Green space", correct: false },
    ],
  },
  {
    question: "O que é um 'sótão' em inglês?",
    answers: [
      { answer: "Attic", correct: true },
      { answer: "Loft", correct: false },
      { answer: "Upper room", correct: false },
      { answer: "Roof space", correct: false },
      { answer: "Garret", correct: false },
    ],
  },
  {
    question: "Qual é o significado de 'porão' em inglês?",
    answers: [
      { answer: "Basement", correct: true },
      { answer: "Cellar", correct: false },
      { answer: "Underground room", correct: false },
      { answer: "Sublevel", correct: false },
      { answer: "Undercroft", correct: false },
    ],
  },
  {
    question: "O que é um 'escritório' em inglês?",
    answers: [
      { answer: "Office", correct: true },
      { answer: "Workspace", correct: false },
      { answer: "Study", correct: false },
      { answer: "Workplace", correct: false },
      { answer: "Business room", correct: false },
    ],
  },
  {
    question: "Qual é o significado de 'garagem' em inglês?",
    answers: [
      { answer: "Garage", correct: true },
      { answer: "Carport", correct: false },
      { answer: "Auto bay", correct: false },
      { answer: "Parking space", correct: false },
      { answer: "Vehicle shelter", correct: false },
    ],
  },
  {
    question: "O que é um 'elevador' em inglês?",
    answers: [
      { answer: "Elevator", correct: true },
      { answer: "Lift", correct: false },
      { answer: "Rise device", correct: false },
      { answer: "Hoist", correct: false },
      { answer: "Ascending apparatus", correct: false },
    ],
  },
  {
    question: "Qual é o significado de 'escadas' em inglês?",
    answers: [
      { answer: "Stairs", correct: true },
      { answer: "Steps", correct: false },
      { answer: "Staircase", correct: false },
      { answer: "Flight of stairs", correct: false },
      { answer: "Clambering structure", correct: false },
    ],
  },
  {
    question: "O que é uma 'área de lazer' em inglês?",
    answers: [
      { answer: "Recreational area", correct: true },
      { answer: "Play zone", correct: false },
      { answer: "Amusement space", correct: false },
      { answer: "Leisure zone", correct: false },
      { answer: "Entertainment area", correct: false },
    ],
  },
  {
    question: "Qual é o significado de 'lavanderia' em inglês?",
    answers: [
      { answer: "Laundry room", correct: true },
      { answer: "Washroom", correct: false },
      { answer: "Laundromat", correct: false },
      { answer: "Cleaning space", correct: false },
      { answer: "Washing facility", correct: false },
    ],
  },
  // Adicione mais perguntas aqui
];


// Inicialização do quizz
function init() {
  createQuestion(actualQuestion);
}

// Criação de pergunta
// Função para embaralhar um array usando o algoritmo de Fisher-Yates
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Criação de pergunta
function createQuestion(index) {
  clearPreviousQuestion();
  const question = questions[index];
  const questionText = questionElement.querySelector('#question-text');
  const questionNumber = questionElement.querySelector('#question-number');

  questionText.textContent = question.question;
  questionNumber.textContent = index + 1;

  // Embaralha as respostas antes de exibi-las
  shuffle(question.answers);

  question.answers.forEach((answer, i) => {
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

// Restante do seu código...

// Função para inicializar o quizz
function init() {
  createQuestion(actualQuestion);
}

// Inicialização do quizz
init();
