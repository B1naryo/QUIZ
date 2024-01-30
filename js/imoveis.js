// Declaração de variáveis
const questionElement = document.querySelector('#question');
const answerBox = document.querySelector('#answers-box');
const quizzContainer = document.querySelector('#quizz-container');
const scoreContainer = document.querySelector('#score-container');
const letters = ['a', 'b', 'c', 'd', 'e'];
let points = 0;
let actualQuestion = 0;

// Array de perguntas e respostas
   const questions = [
  {
    question: "O que é um 'imóvel' em inglês?",
    answers: [
      { answer: "Property", correct: true },
      { answer: "Building", correct: false },
    ],
  },
  {
    question: "Qual é o significado de 'casa' em inglês?",
    answers: [
      { answer: "House", correct: true },
      { answer: "Apartment", correct: false },
    ],
  },
  {
    question: "O que é um 'apartamento' em inglês?",
    answers: [
      { answer: "Apartment", correct: true },
      { answer: "House", correct: false },
    ],
  },
  {
    question: "Qual é o significado de 'condomínio' em inglês?",
    answers: [
      { answer: "Condominium", correct: true },
      { answer: "Complex", correct: false },
    ],
  },
  {
    question: "O que é uma 'sala de estar' em inglês?",
    answers: [
      { answer: "Living room", correct: true },
      { answer: "Bedroom", correct: false },
    ],
  },
  {
    question: "Qual é o significado de 'cozinha' em inglês?",
    answers: [
      { answer: "Kitchen", correct: true },
      { answer: "Bathroom", correct: false },
    ],
  },
  {
    question: "O que é um 'quarto' em inglês?",
    answers: [
      { answer: "Bedroom", correct: true },
      { answer: "Living room", correct: false },
    ],
  },
  {
    question: "Qual é o significado de 'banheiro' em inglês?",
    answers: [
      { answer: "Bathroom", correct: true },
      { answer: "Kitchen", correct: false },
    ],
  },
  {
    question: "O que é uma 'varanda' em inglês?",
    answers: [
      { answer: "Balcony", correct: true },
      { answer: "Garden", correct: false },
    ],
  },
  {
    question: "Qual é o significado de 'jardim' em inglês?",
    answers: [
      { answer: "Garden", correct: true },
      { answer: "Balcony", correct: false },
    ],
  },
  {
    question: "O que é um 'sótão' em inglês?",
    answers: [
      { answer: "Attic", correct: true },
      { answer: "Basement", correct: false },
    ],
  },
  {
    question: "Qual é o significado de 'porão' em inglês?",
    answers: [
      { answer: "Basement", correct: true },
      { answer: "Attic", correct: false },
    ],
  },
  {
    question: "O que é um 'escritório' em inglês?",
    answers: [
      { answer: "Office", correct: true },
      { answer: "Garage", correct: false },
    ],
  },
  {
    question: "Qual é o significado de 'garagem' em inglês?",
    answers: [
      { answer: "Garage", correct: true },
      { answer: "Office", correct: false },
    ],
  },
  {
    question: "O que é um 'elevador' em inglês?",
    answers: [
      { answer: "Elevator", correct: true },
      { answer: "Stairs", correct: false },
    ],
  },
  {
    question: "Qual é o significado de 'escadas' em inglês?",
    answers: [
      { answer: "Stairs", correct: true },
      { answer: "Elevator", correct: false },
    ],
  },
  {
    question: "O que é uma 'área de lazer' em inglês?",
    answers: [
      { answer: "Recreational area", correct: true },
      { answer: "Laundry room", correct: false },
    ],
  },
  {
    question: "Qual é o significado de 'lavanderia' em inglês?",
    answers: [
      { answer: "Laundry room", correct: true },
      { answer: "Recreational area", correct: false },
    ],
  },
  // Adicione mais perguntas aqui
];


// Inicialização do quizz
function init() {
  createQuestion(actualQuestion);
}

// Criação de pergunta
function createQuestion(index) {
  clearPreviousQuestion();
  const question = questions[index];
  const questionText = questionElement.querySelector('#question-text');
  const questionNumber = questionElement.querySelector('#question-number');

  questionText.textContent = question.question;
  questionNumber.textContent = index + 1;

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

