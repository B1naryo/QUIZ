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
    question: "O que significa 'sofá' em inglês?",
    answers: [
      { answer: "Couch", correct: true },
      { answer: "Chair", correct: false },
      { answer: "Table", correct: false },
      { answer: "Bed", correct: false },
      { answer: "Lamp", correct: false },
    ],
  },
  {
    question: "O que significa 'geladeira' em inglês?",
    answers: [
      { answer: "Fridge", correct: true },
      { answer: "Oven", correct: false },
      { answer: "Microwave", correct: false },
      { answer: "Sink", correct: false },
      { answer: "Cabinet", correct: false },
    ],
  },
  {
    question: "O que significa 'cama' em inglês?",
    answers: [
      { answer: "Bed", correct: true },
      { answer: "Couch", correct: false },
      { answer: "Dresser", correct: false },
      { answer: "Table", correct: false },
      { answer: "Chair", correct: false },
    ],
  },
  {
    question: "O que significa 'mesa' em inglês?",
    answers: [
      { answer: "Table", correct: true },
      { answer: "Desk", correct: false },
      { answer: "Chair", correct: false },
      { answer: "Shelf", correct: false },
      { answer: "Cabinet", correct: false },
    ],
  },
  {
    question: "O que significa 'banheiro' em inglês?",
    answers: [
      { answer: "Bathroom", correct: true },
      { answer: "Bedroom", correct: false },
      { answer: "Kitchen", correct: false },
      { answer: "Living Room", correct: false },
      { answer: "Closet", correct: false },
    ],
  },
  {
    question: "O que significa 'janela' em inglês?",
    answers: [
      { answer: "Window", correct: true },
      { answer: "Door", correct: false },
      { answer: "Wall", correct: false },
      { answer: "Roof", correct: false },
      { answer: "Floor", correct: false },
    ],
  },
  {
    question: "O que significa 'geladeira' em inglês?",
    answers: [
      { answer: "Fridge", correct: true },
      { answer: "Oven", correct: false },
      { answer: "Microwave", correct: false },
      { answer: "Sink", correct: false },
      { answer: "Cabinet", correct: false },
    ],
  },
  {
    question: "O que significa 'cozinha' em inglês?",
    answers: [
      { answer: "Kitchen", correct: true },
      { answer: "Living Room", correct: false },
      { answer: "Bathroom", correct: false },
      { answer: "Bedroom", correct: false },
      { answer: "Dining Room", correct: false },
    ],
  },
  {
    question: "O que significa 'espelho' em inglês?",
    answers: [
      { answer: "Mirror", correct: true },
      { answer: "Shelf", correct: false },
      { answer: "Painting", correct: false },
      { answer: "Lamp", correct: false },
      { answer: "Clock", correct: false },
    ],
  },
  {
    question: "O que significa 'escrivaninha' em inglês?",
    answers: [
      { answer: "Desk", correct: true },
      { answer: "Chair", correct: false },
      { answer: "Bookshelf", correct: false },
      { answer: "Bed", correct: false },
      { answer: "Table", correct: false },
    ],
  },

  {
    question: "O que significa 'cadeira' em inglês?",
    answers: [
      { answer: "Chair", correct: true },
      { answer: "Table", correct: false },
      { answer: "Sofa", correct: false },
      { answer: "Bed", correct: false },
      { answer: "Cabinet", correct: false },
    ],
  },
  {
    question: "O que significa 'televisão' em inglês?",
    answers: [
      { answer: "TV", correct: true },
      { answer: "Radio", correct: false },
      { answer: "Computer", correct: false },
      { answer: "Phone", correct: false },
      { answer: "Lamp", correct: false },
    ],
  },
  {
    question: "O que significa 'porta' em inglês?",
    answers: [
      { answer: "Door", correct: true },
      { answer: "Window", correct: false },
      { answer: "Wall", correct: false },
      { answer: "Roof", correct: false },
      { answer: "Floor", correct: false },
    ],
  },
  {
    question: "O que significa 'lâmpada' em inglês?",
    answers: [
      { answer: "Lamp", correct: true },
      { answer: "Candle", correct: false },
      { answer: "Ceiling Fan", correct: false },
      { answer: "Clock", correct: false },
      { answer: "Mirror", correct: false },
    ],
  },
  {
    question: "O que significa 'armário' em inglês?",
    answers: [
      { answer: "Cabinet", correct: true },
      { answer: "Closet", correct: false },
      { answer: "Shelf", correct: false },
      { answer: "Dresser", correct: false },
      { answer: "Table", correct: false },
    ],
  },
  {
    question: "O que significa 'micro-ondas' em inglês?",
    answers: [
      { answer: "Microwave", correct: true },
      { answer: "Fridge", correct: false },
      { answer: "Oven", correct: false },
      { answer: "Sink", correct: false },
      { answer: "Dishwasher", correct: false },
    ],
  },
  {
    question: "O que significa 'escada' em inglês?",
    answers: [
      { answer: "Stairs", correct: true },
      { answer: "Elevator", correct: false },
      { answer: "Ramp", correct: false },
      { answer: "Bridge", correct: false },
      { answer: "Pathway", correct: false },
    ],
  },
  {
    question: "O que significa 'ventilador' em inglês?",
    answers: [
      { answer: "Fan", correct: true },
      { answer: "Air Conditioner", correct: false },
      { answer: "Heater", correct: false },
      { answer: "Window AC", correct: false },
      { answer: "Ceiling Fan", correct: false },
    ],
  },
  {
    question: "O que significa 'banheiro' em inglês?",
    answers: [
      { answer: "Bathroom", correct: true },
      { answer: "Toilet", correct: false },
      { answer: "Shower", correct: false },
      { answer: "Sink", correct: false },
      { answer: "Mirror", correct: false },
    ],
  },
  {
    question: "O que significa 'cofre' em inglês?",
    answers: [
      { answer: "Safe", correct: true },
      { answer: "Lockbox", correct: false },
      { answer: "Vault", correct: false },
      { answer: "Drawer", correct: false },
      { answer: "Cabinet", correct: false },
    ],
  },
  {
    question: "O que significa 'tapete' em inglês?",
    answers: [
      { answer: "Rug", correct: true },
      { answer: "Carpet", correct: false },
      { answer: "Flooring", correct: false },
      { answer: "Mat", correct: false },
      { answer: "Blanket", correct: false },
    ],
  },
  {
    question: "O que significa 'espelho' em inglês?",
    answers: [
      { answer: "Mirror", correct: true },
      { answer: "Window", correct: false },
      { answer: "Painting", correct: false },
      { answer: "Photograph", correct: false },
      { answer: "Clock", correct: false },
    ],
  },
  {
    question: "O que significa 'cortina' em inglês?",
    answers: [
      { answer: "Curtain", correct: true },
      { answer: "Blind", correct: false },
      { answer: "Shade", correct: false },
      { answer: "Drapery", correct: false },
      { answer: "Screen", correct: false },
    ],
  },
  {
    question: "O que significa 'pia' em inglês?",
    answers: [
      { answer: "Sink", correct: true },
      { answer: "Faucet", correct: false },
      { answer: "Basin", correct: false },
      { answer: "Bowl", correct: false },
      { answer: "Drain", correct: false },
    ],
  },
  {
    question: "O que significa 'armário de cozinha' em inglês?",
    answers: [
      { answer: "Kitchen Cabinet", correct: true },
      { answer: "Cupboard", correct: false },
      { answer: "Pantry", correct: false },
      { answer: "Shelf", correct: false },
      { answer: "Drawer", correct: false },
    ],
  },
  {
    question: "O que significa 'computador' em inglês?",
    answers: [
      { answer: "Computer", correct: true },
      { answer: "Laptop", correct: false },
      { answer: "Tablet", correct: false },
      { answer: "Printer", correct: false },
      { answer: "Monitor", correct: false },
    ],
  },
  {
    question: "O que significa 'relógio' em inglês?",
    answers: [
      { answer: "Clock", correct: true },
      { answer: "Watch", correct: false },
      { answer: "Timer", correct: false },
      { answer: "Alarm", correct: false },
      { answer: "Hourglass", correct: false },
    ],
  },
  {
    question: "O que significa 'mesa de jantar' em inglês?",
    answers: [
      { answer: "Dining Table", correct: true },
      { answer: "Coffee Table", correct: false },
      { answer: "End Table", correct: false },
      { answer: "Desk", correct: false },
      { answer: "Nightstand", correct: false },
    ],
  },
  {
    question: "O que significa 'varanda' em inglês?",
    answers: [
      { answer: "Balcony", correct: true },
      { answer: "Patio", correct: false },
      { answer: "Deck", correct: false },
      { answer: "Terrace", correct: false },
      { answer: "Veranda", correct: false },
    ],
  },
  {
    question: "O que significa 'abajur' em inglês?",
    answers: [
      { answer: "Lamp", correct: true },
      { answer: "Chandelier", correct: false },
      { answer: "Ceiling Light", correct: false },
      { answer: "Floor Lamp", correct: false },
      { answer: "Sconce", correct: false },
    ],
  },
  {
    question: "O que significa 'calendário' em inglês?",
    answers: [
      { answer: "Calendar", correct: true },
      { answer: "Clock", correct: false },
      { answer: "Diary", correct: false },
      { answer: "Planner", correct: false },
      { answer: "Reminder", correct: false },
    ],
  },
  {
    question: "O que significa 'aspirador de pó' em inglês?",
    answers: [
      { answer: "Vacuum Cleaner", correct: true },
      { answer: "Broom", correct: false },
      { answer: "Mop", correct: false },
      { answer: "Duster", correct: false },
      { answer: "Brush", correct: false },
    ],
  },
  {
    question: "O que significa 'portão' em inglês?",
    answers: [
      { answer: "Gate", correct: true },
      { answer: "Fence", correct: false },
      { answer: "Door", correct: false },
      { answer: "Window", correct: false },
      { answer: "Wall", correct: false },
    ],
  },
  {
    question: "O que significa 'telefone' em inglês?",
    answers: [
      { answer: "Phone", correct: true },
      { answer: "Cellphone", correct: false },
      { answer: "Smartphone", correct: false },
      { answer: "Landline", correct: false },
      { answer: "Tablet", correct: false },
    ],
  },
  {
    question: "O que significa 'cômoda' em inglês?",
    answers: [
      { answer: "Dresser", correct: true },
      { answer: "Wardrobe", correct: false },
      { answer: "Nightstand", correct: false },
      { answer: "Closet", correct: false },
      { answer: "Shelf", correct: false },
    ],
  },
  {
    question: "O que significa 'tapete de banheiro' em inglês?",
    answers: [
      { answer: "Bath Mat", correct: true },
      { answer: "Rug", correct: false },
      { answer: "Carpet", correct: false },
      { answer: "Towel", correct: false },
      { answer: "Shower Curtain", correct: false },
    ],
  },
  {
    question: "O que significa 'armário de remédios' em inglês?",
    answers: [
      { answer: "Medicine Cabinet", correct: true },
      { answer: "Shelf", correct: false },
      { answer: "Cupboard", correct: false },
      { answer: "Drawer", correct: false },
      { answer: "Closet", correct: false },
    ],
  },
  {
    question: "O que significa 'abridor de garrafas' em inglês?",
    answers: [
      { answer: "Bottle Opener", correct: true },
      { answer: "Can Opener", correct: false },
      { answer: "Corkscrew", correct: false },
      { answer: "Knife", correct: false },
      { answer: "Scissors", correct: false },
    ],
  },
  {
    question: "O que significa 'candelabro' em inglês?",
    answers: [
      { answer: "Chandelier", correct: true },
      { answer: "Lamp", correct: false },
      { answer: "Sconce", correct: false },
      { answer: "Ceiling Light", correct: false },
      { answer: "Candle Holder", correct: false },
    ],
  },
  {
    question: "O que significa 'abajur de leitura' em inglês?",
    answers: [
      { answer: "Reading Lamp", correct: true },
      { answer: "Floor Lamp", correct: false },
      { answer: "Table Lamp", correct: false },
      { answer: "Ceiling Light", correct: false },
      { answer: "Desk Lamp", correct: false },
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
