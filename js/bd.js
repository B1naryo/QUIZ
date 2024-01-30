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
    question: 'Como realizar a conexão com um banco de dados MySQL usando PHP?',
    answers: [
      { 
        answer: 'mysqli_connect("localhost", "usuario", "senha", "nome_do_banco")', 
        correct: true,
        code: ''
      },
      {
        answer: 'connect_database("localhost", "usuario", "senha", "nome_do_banco")',
        correct: false,
        code: ''
      },
      { 
        answer: 'mysql_open("localhost", "usuario", "senha", "nome_do_banco")',
        correct: false,
        code: ''
      },
      { 
        answer: 'pdo_connect("localhost", "usuario", "senha", "nome_do_banco")',
        correct: false,
        code: ''
      },
    ],
  },
  {
    question: 'Qual função PHP é comumente usada para executar consultas SQL em um banco de dados?',
    answers: [
      { 
        answer: 'mysql_query()', 
        correct: false,
        code: ''
      },
      {
        answer: 'mysqli_query()',
        correct: true,
        code: ''
      },
      { 
        answer: 'pdo_execute()',
        correct: false,
        code: ''
      },
      { 
        answer: 'execute_sql()',
        correct: false,
        code: ''
      },
    ],
  },
  {
    question: 'Como evitar ataques de SQL Injection ao executar consultas SQL em PHP?',
    answers: [
      { 
        answer: 'Validar os dados de entrada apenas no lado do cliente',
        correct: false,
        code: ''
      },
      {
        answer: 'Utilizar consultas preparadas (prepared statements) com parâmetros',
        correct: true,
        code: ''
      },
      { 
        answer: 'Escapar manualmente os caracteres especiais nos dados de entrada',
        correct: false,
        code: ''
      },
      { 
        answer: 'Desativar completamente a execução de consultas SQL no PHP',
        correct: false,
        code: ''
      },
    ],
  },
  {
    question: 'Como realizar a remoção de registros de uma tabela no MySQL usando PHP?',
    answers: [
      { 
        answer: 'DELETE FROM tabela WHERE condição', 
        correct: true,
        code: ''
      },
      {
        answer: 'REMOVE FROM tabela WHERE condição',
        correct: false,
        code: ''
      },
      { 
        answer: 'REMOVE registro FROM tabela WHERE condição',
        correct: false,
        code: ''
      },
      { 
        answer: 'DELETE registro FROM tabela WHERE condição',
        correct: false,
        code: ''
      },
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

  actualQuestion++;
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

  nextQuestion();
}

// Exibe próxima pergunta no quizz
function nextQuestion() {
  setTimeout(function () {
    if (actualQuestion >= questions.length) {
      showSuccessMessage();
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
  toggleQuizzVisibility();
  init();
});

// Inicialização do quizz
init();

