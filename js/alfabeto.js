// Declaração de variáveis
const questionElement = document.querySelector('#question');
const answerBox = document.querySelector('#answers-box');
const quizzContainer = document.querySelector('#quizz-container');
const scoreContainer = document.querySelector('#score-container');
const letters = ['a', 'b', 'c', 'd', 'e'];
let points = 0;
let actualQuestion = 0;


// Perguntas
let questions = [
  {
    question: 'Qual é o significado da letra "A" em inglês?',
    answers: [
      { answer: 'Ei', correct: true },
      { answer: 'Bi', correct: false },
    ],
  },
  {
    question: 'Qual é o significado da letra "B" em inglês?',
    answers: [
      { answer: 'Si', correct: false },
      { answer: 'Bi', correct: true },
    ],
  },
  {
    question: 'Qual é o significado da letra "C" em inglês?',
    answers: [
      { answer: 'Si', correct: true },
      { answer: 'D', correct: false },
    ],
  },
  {
    question: 'Qual é o significado da letra "D" em inglês?',
    answers: [
      { answer: 'Di', correct: true },
      { answer: 'Ai', correct: false },
    ],
  },
  {
    question: 'Qual é o significado da letra "E" em inglês?',
    answers: [
      { answer: 'Pi', correct: false },
      { answer: 'I', correct: true },
    ],
  },
  {
    question: 'Qual é o significado da letra "F" em inglês?',
    answers: [
      { answer: 'Éf', correct: true },
      { answer: 'dji', correct: false },
    ],
  },
  {
    question: 'Qual é o significado da letra "G" em inglês?',
    answers: [
      { answer: 'Dji', correct: true },
      { answer: 'Ái', correct: false },
    ],
  },
  {
    question: 'Qual é o significado da letra "H" em inglês?',
    answers: [
      { answer: 'Eit', correct: true },
      { answer: 'Kei', correct: false },
    ],
  },
  {
    question: 'Qual é o significado da letra "I" em inglês?',
    answers: [
      { answer: 'Ái', correct: true },
      { answer: 'Ár', correct: false },
    ],
  },
  {
    question: 'Qual é o significado da letra "J" em inglês?',
    answers: [
      { answer: 'Uai', correct: false },
      { answer: 'Djei', correct: true },
    ],
  },
  {
    question: 'Qual é o significado da letra "K" em inglês?',
    answers: [
      { answer: 'Kei', correct: true },
      { answer: 'Zed', correct: false },
    ],
  },
  {
    question: 'Qual é o significado da letra "L" em inglês?',
    answers: [
      { answer: 'Él', correct: true },
      { answer: 'Ti', correct: false },
    ],
  },
  {
    question: 'Qual é o significado da letra "M" em inglês?',
    answers: [
      { answer: 'Em', correct: true },
      { answer: 'En', correct: false },
    ],
  },
  {
    question: 'Qual é o significado da letra "N" em inglês?',
    answers: [
      { answer: 'Ên', correct: true },
      { answer: 'Dâbliu', correct: false },
    ],
  },
  {
    question: 'Qual é o significado da letra "O" em inglês?',
    answers: [
      { answer: 'Pi', correct: false },
      { answer: 'Ôu', correct: true },
    ],
  },
  {
    question: 'Qual é o significado da letra "P" em inglês?',
    answers: [
      { answer: 'Quiu', correct: false },
      { answer: 'Pi', correct: true },
    ],
  },
  {
    question: 'Qual é o significado da letra "Q" em inglês?',
    answers: [
      { answer: 'Quiu', correct: true },
      { answer: 'Uai', correct: false },
    ],
  },
  {
    question: 'Qual é o significado da letra "R" em inglês?',
    answers: [
      { answer: 'Ti', correct: false },
      { answer: 'Ár', correct: true },
    ],
  },
  {
    question: 'Qual é o significado da letra "S" em inglês?',
    answers: [
      { answer: 'És', correct: true },
      { answer: 'Iu', correct: false },
    ],
  },
  {
    question: 'Qual é o significado da letra "T" em inglês?',
    answers: [
      { answer: 'Ti', correct: true },
      { answer: 'Iu', correct: false },
    ],
  },
  {
    question: 'Qual é o significado da letra "U" em inglês?',
    answers: [
      { answer: 'Ti', correct: false },
      { answer: 'Iu', correct: true },
    ],
  },
  {
    question: 'Qual é o significado da letra "V" em inglês?',
    answers: [
      { answer: 'Ei', correct: false },
      { answer: 'Vi', correct: true },
    ],
  },
  {
    question: 'Qual é o significado da letra "X" em inglês?',
    answers: [
      { answer: 'Éks', correct: true },
      { answer: 'Zi', correct: false },
    ],
  },
  {
    question: 'Qual é o significado da letra "Y" em inglês?',
    answers: [
      { answer: 'Uai', correct: true },
      { answer: 'Bi', correct: false },
    ],
  },
  {
    question: 'Qual é o significado da letra "Z" em inglês?',
    answers: [
      { answer: 'Ei', correct: false },
      { answer: 'Zi', correct: true },
    ],
  },
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
