// Declaração de variáveis
const questionElement = document.querySelector('#question');
const answerBox = document.querySelector('#answers-box');
const quizzContainer = document.querySelector('#quizz-container');
const scoreContainer = document.querySelector('#score-container');
const letters = ['a', 'b', 'c', 'd', 'e'];
let points = 0;
let actualQuestion = 0;
let questions = [
  {
    question: 'PHP foi desenvolvido para qual fim?',
    answers: [
      { answer: 'Back-End', correct: true },
      { answer: 'Front-End', correct: false },
      { answer: 'Sistema operacional', correct: false },
      { answer: 'Banco de dados', correct: false },
    ],
  },
  {
    question: 'Uma forma de declarar variável em JavaScript:',
    answers: [
      { answer: '$var', correct: false },
      { answer: 'var', correct: true },
      { answer: '@var', correct: false },
      { answer: '#let', correct: false },
    ],
  },
  {
    question: 'Qual o seletor de id no CSS?',
    answers: [
      { answer: '#', correct: true },
      { answer: '.', correct: false },
      { answer: '@', correct: false },
      { answer: '/', correct: false },
    ],
  },
];

// Lista para armazenar perguntas incorretas
let incorrectQuestions = [];

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
  buttons.forEach((button) => {
    if (button.getAttribute('correct-answer') == 'true') {
      button.classList.add('correct-answer');
      if (btn === button) {
        points++;
      }
    } else {
      button.classList.add('wrong-answer');
    }
  });

  if (btn.getAttribute('correct-answer') !== 'true') {
    // Adicionar pergunta incorreta à lista
    incorrectQuestions.push(questions[actualQuestion]);
  }

  nextQuestion();
}

// Exibe próxima pergunta no quizz
function nextQuestion() {
  setTimeout(function () {
    actualQuestion++;
    if (actualQuestion >= questions.length) {
      if (incorrectQuestions.length > 0) {
        // Se houver perguntas incorretas, refazer apenas essas
        actualQuestion = 0;
        points = 0;
        questions = incorrectQuestions;
        incorrectQuestions = [];
        createQuestion(actualQuestion);
      } else {
        showSuccessMessage();
      }
      return;
    }
    createQuestion(actualQuestion);
  }, 1200);
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
  questions = [...incorrectQuestions]; // Copia as perguntas incorretas para o array de perguntas
  incorrectQuestions = [];
  toggleQuizzVisibility();
  init();
});


// Inicialização do quizz
init();



