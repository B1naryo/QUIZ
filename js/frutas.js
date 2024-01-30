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
    pergunta: "Qual é o significado de 'maçã' em inglês?",
    opcoes: ["Apple", "Banana"],
    resposta: 0
  },
  {
    pergunta: "Qual é o significado de 'banana' em inglês?",
    opcoes: ["Apple", "Banana"],
    resposta: 1
  },
  {
    pergunta: "Qual é o significado de 'laranja' em inglês?",
    opcoes: ["Orange", "Grape"],
    resposta: 0
  },
  {
    pergunta: "Qual é o significado de 'uva' em inglês?",
    opcoes: ["Orange", "Grape"],
    resposta: 1
  },
  {
    pergunta: "Qual é o significado de 'morango' em inglês?",
    opcoes: ["Strawberry", "Watermelon"],
    resposta: 0
  },
  {
    pergunta: "Qual é o significado de 'melancia' em inglês?",
    opcoes: ["Strawberry", "Watermelon"],
    resposta: 1
  },
  {
    pergunta: "Qual é o significado de 'abacaxi' em inglês?",
    opcoes: ["Pineapple", "Mango"],
    resposta: 0
  },
  {
    pergunta: "Qual é o significado de 'manga' em inglês?",
    opcoes: ["Pineapple", "Mango"],
    resposta: 1
  },
  {
    pergunta: "Qual é o significado de 'limão' em inglês?",
    opcoes: ["Lemon", "Cherry"],
    resposta: 0
  },
  {
    pergunta: "Qual é o significado de 'cereja' em inglês?",
    opcoes: ["Lemon", "Cherry"],
    resposta: 1
  },
  {
    pergunta: "Qual é o significado de 'kiwi' em inglês?",
    opcoes: ["Kiwi", "Peach"],
    resposta: 0
  },
  {
    pergunta: "Qual é o significado de 'pêssego' em inglês?",
    opcoes: ["Kiwi", "Peach"],
    resposta: 1
  },
  {
    pergunta: "Qual é o significado de 'pera' em inglês?",
    opcoes: ["Pear", "Pineapple"],
    resposta: 0
  },
  {
    pergunta: "Qual é o significado de 'amora' em inglês?",
    opcoes: ["Blackberry", "Raspberry"],
    resposta: 0
  },
  {
    pergunta: "Qual é o significado de 'framboesa' em inglês?",
    opcoes: ["Blackberry", "Raspberry"],
    resposta: 1
  },
  {
    pergunta: "Qual é o significado de 'amêndoa' em inglês?",
    opcoes: ["Almond", "Peanut"],
    resposta: 0
  },
  {
    pergunta: "Qual é o significado de 'castanha' em inglês?",
    opcoes: ["Almond", "Peanut"],
    resposta: 1
  },
  {
    pergunta: "Qual é o significado de 'figo' em inglês?",
    opcoes: ["Fig", "Papaya"],
    resposta: 0
  },
  {
    pergunta: "Qual é o significado de 'papaia' em inglês?",
    opcoes: ["Fig", "Papaya"],
    resposta: 1
  },
  {
    pergunta: "Qual é o significado de 'melão' em inglês?",
    opcoes: ["Melon", "Grapefruit"],
    resposta: 0
  },
  {
    pergunta: "Qual é o significado de 'toranja' em inglês?",
    opcoes: ["Melon", "Grapefruit"],
    resposta: 1
  },
  {
    pergunta: "Qual é o significado de 'coco' em inglês?",
    opcoes: ["Coconut", "Avocado"],
    resposta: 0
  },
  {
    pergunta: "Qual é o significado de 'abacate' em inglês?",
    opcoes: ["Coconut", "Avocado"],
    resposta: 1
  },
  {
    pergunta: "Qual é o significado de 'goiaba' em inglês?",
    opcoes: ["Guava", "Passionfruit"],
    resposta: 0
  },
  {
    pergunta: "Qual é o significado de 'maracujá' em inglês?",
    opcoes: ["Guava", "Passionfruit"],
    resposta: 1
  },
  {
    pergunta: "Qual é o significado de 'mirtilo' em inglês?",
    opcoes: ["Blueberry", "Raspberry"],
    resposta: 0
  },
  {
    pergunta: "Qual é o significado de 'amora-preta' em inglês?",
    opcoes: ["Blackberry", "Blueberry"],
    resposta: 0
  },
  {
    pergunta: "Qual é o significado de 'damasco' em inglês?",
    opcoes: ["Apricot", "Plum"],
    resposta: 0
  },
  {
    pergunta: "Qual é o significado de 'ameixa' em inglês?",
    opcoes: ["Apricot", "Plum"],
    resposta: 1
  },
  {
    pergunta: "Qual é o significado de 'tangerina' em inglês?",
    opcoes: ["Mandarin", "Lime"],
    resposta: 0
  },
  {
    pergunta: "Qual é o significado de 'lima' em inglês?",
    opcoes: ["Mandarin", "Lime"],
    resposta: 1
  },
  {
    pergunta: "Qual é o significado de 'nectarina' em inglês?",
    opcoes: ["Nectarine", "Cherry"],
    resposta: 0
  },
  {
    pergunta: "Qual é o significado de 'caqui' em inglês?",
    opcoes: ["Persimmon", "Peach"],
    resposta: 0
  },
  {
    pergunta: "Qual é o significado de 'ameixa seca' em inglês?",
    opcoes: ["Prune", "Date"],
    resposta: 0
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


