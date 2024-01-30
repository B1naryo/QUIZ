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
    pergunta: "Qual é o significado da letra 'A' em inglês?",
    opcoes: ["Ei", "Bi"],
    resposta: 0
  },
  {
    pergunta: "Qual é o significado da letra 'B' em inglês?",
    opcoes: ["Si", "bi"],
    resposta: 1
  },
  {
    pergunta: "Qual é o significado da letra 'C' em inglês?",
    opcoes: ["si", "D"],
    resposta: 0
  },
  {
    pergunta: "Qual é o significado da letra 'D' em inglês?",
    opcoes: ["Di", "Ai"],
    resposta: 0
  },
  {
    pergunta: "Qual é o significado da letra 'E' em inglês?",
    opcoes: ["Pi", "I"],
    resposta: 1
  },
  {
    pergunta: "Qual é o significado da letra 'F' em inglês?",
    opcoes: ["Éf", "dji"],
    resposta: 0
  },
  {
    pergunta: "Qual é o significado da letra 'G' em inglês?",
    opcoes: ["Dji", "Ái"],
    resposta: 0
  },
  {
    pergunta: "Qual é o significado da letra 'H' em inglês?",
    opcoes: ["Eit", "Kei"],
    resposta: 0
  },
  {
    pergunta: "Qual é o significado da letra 'I' em inglês?",
    opcoes: ["Ái", "Ár"],
    resposta: 0
  },
  {
    pergunta: "Qual é o significado da letra 'J' em inglês?",
    opcoes: ["Uai", "Djei"],
    resposta: 1
  },
  {
    pergunta: "Qual é o significado da letra 'K' em inglês?",
    opcoes: ["Kei", "Zed"],
    resposta: 0
  },
  {
    pergunta: "Qual é o significado da letra 'L' em inglês?",
    opcoes: ["Él", "Ti"],
    resposta: 0
  },
  {
    pergunta: "Qual é o significado da letra 'M' em inglês?",
    opcoes: ["Em", "En"],
    resposta: 0
  },
  {
    pergunta: "Qual é o significado da letra 'N' em inglês?",
    opcoes: ["Ên", "Dâbliu"],
    resposta: 0
  },
  {
    pergunta: "Qual é o significado da letra 'O' em inglês?",
    opcoes: ["Pi", "Ôu"],
    resposta: 1
  },
  {
    pergunta: "Qual é o significado da letra 'P' em inglês?",
    opcoes: ["Quiu", "Pi"],
    resposta: 1
  },
  {
    pergunta: "Qual é o significado da letra 'Q' em inglês?",
    opcoes: ["Quiu", "Uai"],
    resposta: 0
  },
  {
    pergunta: "Qual é o significado da letra 'R' em inglês?",
    opcoes: ["Ti", "Ár"],
    resposta: 1
  },
  {
    pergunta: "Qual é o significado da letra 'S' em inglês?",
    opcoes: ["És", "Iu"],
    resposta: 0
  },
  {
    pergunta: "Qual é o significado da letra 'T' em inglês?",
    opcoes: ["Ti", "Iu"],
    resposta: 0
  },
  {
    pergunta: "Qual é o significado da letra 'U' em inglês?",
    opcoes: ["Ti", "Iu"],
    resposta: 1
  },
  {
    pergunta: "Qual é o significado da letra 'V' em inglês?",
    opcoes: ["Ei", "Vi"],
    resposta: 1
  },
  {
    pergunta: "Qual é o significado da letra 'X' em inglês?",
    opcoes: ["Éks", "Zi"],
    resposta: 0
  },
  {
    pergunta: "Qual é o significado da letra 'Y' em inglês?",
    opcoes: ["Uai", "Bi"],
    resposta: 0
  },
  {
    pergunta: "Qual é o significado da letra 'Z' em inglês?",
    opcoes: ["Ei", "Zi"],
    resposta: 1
  }
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

