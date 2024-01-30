// Declaração de variáveis
const questionElement = document.querySelector('#question');
const answerBox = document.querySelector('#answers-box');
const quizzContainer = document.querySelector('#quizz-container');
const scoreContainer = document.querySelector('#score-container');
const letters = ['a', 'b', 'c', 'd', 'e'];
let points = 0;
let actualQuestion = 0;
// Array de perguntas e respostas
    var perguntas = [
      {
    pergunta: "Qual é o significado de 'gato' em inglês?",
    opcoes: ["Cat", "Dog"],
    resposta: 0
  },
  {
    pergunta: "Qual é o significado de 'cachorro' em inglês?",
    opcoes: ["Cat", "Dog"],
    resposta: 1
  },
  {
    pergunta: "Qual é o significado de 'rato' em inglês?",
    opcoes: ["Mouse", "Bird"],
    resposta: 0
  },
  {
    pergunta: "Qual é o significado de 'pássaro' em inglês?",
    opcoes: ["Mouse", "Bird"],
    resposta: 1
  },
  {
    pergunta: "Qual é o significado de 'peixe' em inglês?",
    opcoes: ["Fish", "Snake"],
    resposta: 0
  },
  {
    pergunta: "Qual é o significado de 'cobra' em inglês?",
    opcoes: ["Fish", "Snake"],
    resposta: 1
  },
  {
    pergunta: "Qual é o significado de 'elefante' em inglês?",
    opcoes: ["Elephant", "Lion"],
    resposta: 0
  },
  {
    pergunta: "Qual é o significado de 'leão' em inglês?",
    opcoes: ["Elephant", "Lion"],
    resposta: 1
  },
  {
    pergunta: "Qual é o significado de 'coelho' em inglês?",
    opcoes: ["Rabbit", "Tiger"],
    resposta: 0
  },
  {
    pergunta: "Qual é o significado de 'tigre' em inglês?",
    opcoes: ["Rabbit", "Tiger"],
    resposta: 1
  },
  {
    pergunta: "Qual é o significado de 'cavalo' em inglês?",
    opcoes: ["Horse", "Cow"],
    resposta: 0
  },
  {
    pergunta: "Qual é o significado de 'vaca' em inglês?",
    opcoes: ["Horse", "Cow"],
    resposta: 1
  },
  {
    pergunta: "Qual é o significado de 'porco' em inglês?",
    opcoes: ["Pig", "Sheep"],
    resposta: 0
  },
  {
    pergunta: "Qual é o significado de 'ovelha' em inglês?",
    opcoes: ["Pig", "Sheep"],
    resposta: 1
  },
  {
    pergunta: "Qual é o significado de 'macaco' em inglês?",
    opcoes: ["Monkey", "Bear"],
    resposta: 0
  },
  {
    pergunta: "Qual é o significado de 'urso' em inglês?",
    opcoes: ["Monkey", "Bear"],
    resposta: 1
  },
  {
    pergunta: "Qual é o significado de 'galinha' em inglês?",
    opcoes: ["Chicken", "Duck"],
    resposta: 0
  },
  {
    pergunta: "Qual é o significado de 'pato' em inglês?",
    opcoes: ["Chicken", "Duck"],
    resposta: 1
  },
{
    pergunta: "Qual é o significado de 'zebra' em inglês?",
    opcoes: ["Zebra", "Lion"],
    resposta: 0
  },
  {
    pergunta: "Qual é o significado de 'lontra' em inglês?",
    opcoes: ["Otter", "Elephant"],
    resposta: 0
  },
  {
    pergunta: "Qual é o significado de 'rinoceronte' em inglês?",
    opcoes: ["Rhinoceros", "Giraffe"],
    resposta: 0
  },
  {
    pergunta: "Qual é o significado de 'girafa' em inglês?",
    opcoes: ["Rhinoceros", "Giraffe"],
    resposta: 1
  },
  {
    pergunta: "Qual é o significado de 'coruja' em inglês?",
    opcoes: ["Owl", "Eagle"],
    resposta: 0
  },
  {
    pergunta: "Qual é o significado de 'águia' em inglês?",
    opcoes: ["Owl", "Eagle"],
    resposta: 1
  },
  {
    pergunta: "Qual é o significado de 'crocodilo' em inglês?",
    opcoes: ["Crocodile", "Shark"],
    resposta: 0
  },
  {
    pergunta: "Qual é o significado de 'tubarão' em inglês?",
    opcoes: ["Crocodile", "Shark"],
    resposta: 1
  },
  {
    pergunta: "Qual é o significado de 'abelha' em inglês?",
    opcoes: ["Bee", "Ant"],
    resposta: 0
  },
  {
    pergunta: "Qual é o significado de 'formiga' em inglês?",
    opcoes: ["Bee", "Ant"],
    resposta: 1
  },
  {
    pergunta: "Qual é o significado de 'lontra' em inglês?",
    opcoes: ["Otter", "Elephant"],
    resposta: 0
  },
  {
    pergunta: "Qual é o significado de 'esquilo' em inglês?",
    opcoes: ["Squirrel", "Hedgehog"],
    resposta: 0
  },
  {
    pergunta: "Qual é o significado de 'ouriço' em inglês?",
    opcoes: ["Squirrel", "Hedgehog"],
    resposta: 1
  },
  {
    pergunta: "Qual é o significado de 'lobo' em inglês?",
    opcoes: ["Wolf", "Fox"],
    resposta: 0
  },
  {
    pergunta: "Qual é o significado de 'raposa' em inglês?",
    opcoes: ["Wolf", "Fox"],
    resposta: 1
  },
  {
    pergunta: "Qual é o significado de 'pinguim' em inglês?",
    opcoes: ["Penguin", "Seal"],
    resposta: 0
  },
  {
    pergunta: "Qual é o significado de 'foca' em inglês?",
    opcoes: ["Penguin", "Seal"],
    resposta: 1
  }
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


