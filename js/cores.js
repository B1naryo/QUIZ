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
    question: "O que significa 'azul' em inglês?",
    answers: [
      { answer: "Red", correct: false },
      { answer: "Blue", correct: true },
    ],
  },
  {
    question: "O que significa 'vermelho' em inglês?",
    answers: [
      { answer: "Red", correct: true },
      { answer: "Black", correct: false },
    ],
  },
  {
    question: "O que significa 'preto' em inglês?",
    answers: [
      { answer: "Black", correct: true },
      { answer: "White", correct: false },
    ],
  },
  {
    question: "O que significa 'amarelo' em inglês?",
    answers: [
      { answer: "Yellow", correct: true },
      { answer: "Green", correct: false },
    ],
  },
  {
    question: "O que significa 'marrom' em inglês?",
    answers: [
      { answer: "Red", correct: false },
      { answer: "Brown", correct: true },
    ],
  },
  {
    question: "O que significa 'roxo' em inglês?",
    answers: [
      { answer: "Purple", correct: true },
      { answer: "Yellow", correct: false },
    ],
  },
  {
    question: "O que significa 'cinza' em inglês?",
    answers: [
      { answer: "Purple", correct: false },
      { answer: "Gray", correct: true },
    ],
  },
  {
    question: "O que significa 'laranja' em inglês?",
    answers: [
      { answer: "Purple", correct: false },
      { answer: "Orange", correct: true },
    ],
  },
  {
    question: "O que significa 'rosa' em inglês?",
    answers: [
      { answer: "Pink", correct: true },
      { answer: "Yellow", correct: false },
    ],
  },
  {
    question: "O que significa 'verde' em inglês?",
    answers: [
      { answer: "Green", correct: true },
      { answer: "Purple", correct: false },
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

init();

