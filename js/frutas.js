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
    question: "Qual é o significado de 'maçã' em inglês?",
    answers: [
      { answer: "Apple", correct: true },
      { answer: "Banana", correct: false },
      { answer: "Orange", correct: false },
      { answer: "Grape", correct: false },
      { answer: "Strawberry", correct: false },
    ],
  },
  {
    question: "Qual é o significado de 'banana' em inglês?",
    answers: [
      { answer: "Apple", correct: false },
      { answer: "Banana", correct: true },
      { answer: "Orange", correct: false },
      { answer: "Grape", correct: false },
      { answer: "Strawberry", correct: false },
    ],
  },
  {
    question: "Qual é o significado de 'laranja' em inglês?",
    answers: [
      { answer: "Orange", correct: true },
      { answer: "Grape", correct: false },
      { answer: "Strawberry", correct: false },
      { answer: "Watermelon", correct: false },
      { answer: "Pineapple", correct: false },
    ],
  },
  {
    question: "Qual é o significado de 'uva' em inglês?",
    answers: [
      { answer: "Orange", correct: false },
      { answer: "Grape", correct: true },
      { answer: "Strawberry", correct: false },
      { answer: "Watermelon", correct: false },
      { answer: "Pineapple", correct: false },
    ],
  },
  {
    question: "Qual é o significado de 'morango' em inglês?",
    answers: [
      { answer: "Strawberry", correct: true },
      { answer: "Watermelon", correct: false },
      { answer: "Pineapple", correct: false },
      { answer: "Mango", correct: false },
      { answer: "Lemon", correct: false },
    ],
  },
  {
    question: "Qual é o significado de 'melancia' em inglês?",
    answers: [
      { answer: "Strawberry", correct: false },
      { answer: "Watermelon", correct: true },
      { answer: "Pineapple", correct: false },
      { answer: "Mango", correct: false },
      { answer: "Lemon", correct: false },
    ],
  },
  {
    question: "Qual é o significado de 'abacaxi' em inglês?",
    answers: [
      { answer: "Pineapple", correct: true },
      { answer: "Mango", correct: false },
      { answer: "Lemon", correct: false },
      { answer: "Cherry", correct: false },
      { answer: "Kiwi", correct: false },
    ],
  },
  {
    question: "Qual é o significado de 'manga' em inglês?",
    answers: [
      { answer: "Pineapple", correct: false },
      { answer: "Mango", correct: true },
      { answer: "Lemon", correct: false },
      { answer: "Cherry", correct: false },
      { answer: "Kiwi", correct: false },
    ],
  },
  {
    question: "Qual é o significado de 'limão' em inglês?",
    answers: [
      { answer: "Lemon", correct: true },
      { answer: "Cherry", correct: false },
      { answer: "Kiwi", correct: false },
      { answer: "Peach", correct: false },
      { answer: "Apple", correct: false },
    ],
  },
  {
    question: "Qual é o significado de 'cereja' em inglês?",
    answers: [
      { answer: "Lemon", correct: false },
      { answer: "Cherry", correct: true },
      { answer: "Kiwi", correct: false },
      { answer: "Peach", correct: false },
      { answer: "Apple", correct: false },
    ],
  },
  {
    question: "Qual é o significado de 'kiwi' em inglês?",
    answers: [
      { answer: "Kiwi", correct: true },
      { answer: "Peach", correct: false },
      { answer: "Apple", correct: false },
      { answer: "Banana", correct: false },
      { answer: "Orange", correct: false },
    ],
  },
  {
    question: "Qual é o significado de 'pêssego' em inglês?",
    answers: [
      { answer: "Kiwi", correct: false },
      { answer: "Peach", correct: true },
      { answer: "Apple", correct: false },
      { answer: "Banana", correct: false },
      { answer: "Orange", correct: false },
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
