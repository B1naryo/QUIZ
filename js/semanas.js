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
    question: "Como se escreve 'Domingo' em inglês?",
    answers: [
      { answer: "Sunday", correct: true },
      { answer: "Monday", correct: false },
      { answer: "Wednesday", correct: false },
      { answer: "Saturday", correct: false },
    ],
  },
  {
    question: "Qual é o dia que sucede a 'Segunda-feira' em inglês?",
    answers: [
      { answer: "Tuesday", correct: true },
      { answer: "Friday", correct: false },
      { answer: "Thursday", correct: false },
      { answer: "Sunday", correct: false },
    ],
  },
  {
    question: "O que 'Quarta-feira' significa em inglês?",
    answers: [
      { answer: "Wednesday", correct: true },
      { answer: "Thursday", correct: false },
      { answer: "Monday", correct: false },
      { answer: "Saturday", correct: false },
    ],
  },
  {
    question: "Como se escreve 'Quinta-feira' em inglês?",
    answers: [
      { answer: "Thursday", correct: true },
      { answer: "Tuesday", correct: false },
      { answer: "Friday", correct: false },
      { answer: "Sunday", correct: false },
    ],
  },
  {
    question: "Qual é o dia que antecede o 'Sexta-feira' em inglês?",
    answers: [
      { answer: "Thursday", correct: true },
      { answer: "Tuesday", correct: false },
      { answer: "Saturday", correct: false },
      { answer: "Wednesday", correct: false },
    ],
  },
  {
    question: "O que 'Sábado' significa em inglês?",
    answers: [
      { answer: "Saturday", correct: true },
      { answer: "Friday", correct: false },
      { answer: "Sunday", correct: false },
      { answer: "Monday", correct: false },
    ],
  },
  {
    question: "Como se escreve 'Segunda-feira' em inglês?",
    answers: [
      { answer: "Monday", correct: true },
      { answer: "Wednesday", correct: false },
      { answer: "Friday", correct: false },
      { answer: "Sunday", correct: false },
    ],
  },
  
  {
    question: "Como se escreve 'Janeiro' em inglês?",
    answers: [
      { answer: "January", correct: true },
      { answer: "June", correct: false },
      { answer: "July", correct: false },
      { answer: "February", correct: false },
    ],
  },
  {
    question: "Como se escreve 'Fevereiro' em inglês?",
    answers: [
      { answer: "February", correct: true },
      { answer: "June", correct: false },
      { answer: "July", correct: false },
      { answer: "January", correct: false },
    ],
  },
  {
    question: "Como se escreve 'Março' em inglês?",
    answers: [
      { answer: "March", correct: true },
      { answer: "May", correct: false },
      { answer: "June", correct: false },
      { answer: "April", correct: false },
    ],
  },
  {
    question: "Como se escreve 'Abril' em inglês?",
    answers: [
      { answer: "April", correct: true },
      { answer: "March", correct: false },
      { answer: "June", correct: false },
      { answer: "May", correct: false },
    ],
  },
  {
    question: "Como se escreve 'Maio' em inglês?",
    answers: [
      { answer: "May", correct: true },
      { answer: "March", correct: false },
      { answer: "June", correct: false },
      { answer: "April", correct: false },
    ],
  },
  {
    question: "Como se escreve 'Junho' em inglês?",
    answers: [
      { answer: "June", correct: true },
      { answer: "May", correct: false },
      { answer: "July", correct: false },
      { answer: "January", correct: false },
    ],
  },
  {
    question: "Como se escreve 'Julho' em inglês?",
    answers: [
      { answer: "July", correct: true },
      { answer: "June", correct: false },
      { answer: "August", correct: false },
      { answer: "January", correct: false },
    ],
  },
  {
    question: "Como se escreve 'Agosto' em inglês?",
    answers: [
      { answer: "August", correct: true },
      { answer: "July", correct: false },
      { answer: "September", correct: false },
      { answer: "October", correct: false },
    ],
  },
  {
    question: "Como se escreve 'Setembro' em inglês?",
    answers: [
      { answer: "September", correct: true },
      { answer: "November", correct: false },
      { answer: "October", correct: false },
      { answer: "August", correct: false },
    ],
  },
  {
    question: "Como se escreve 'Outubro' em inglês?",
    answers: [
      { answer: "October", correct: true },
      { answer: "November", correct: false },
      { answer: "September", correct: false },
      { answer: "August", correct: false },
    ],
  },
  {
    question: "Como se escreve 'Novembro' em inglês?",
    answers: [
      { answer: "November", correct: true },
      { answer: "December", correct: false },
      { answer: "October", correct: false },
      { answer: "August", correct: false },
    ],
  },
  {
    question: "Como se escreve 'Dezembro' em inglês?",
    answers: [
      { answer: "December", correct: true },
      { answer: "November", correct: false },
      { answer: "October", correct: false },
      { answer: "August", correct: false },
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
