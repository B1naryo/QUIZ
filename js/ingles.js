// declaração de variáveis
const question = document.querySelector('#question');
const answerBox = document.querySelector('#answers-box');
const quizzContainer = document.querySelector('#quizz-container');
const scoreContainer = document.querySelector('#score-container');
const letters = ['a', 'b', 'c', 'd', 'e'];
let points = 0;
let actualQuestion = 0;

// Perguntas
const questions = [
  {
    question: 'Qual é a tradução correta do verbo? "Fazer"',
    answers: [
      { answer: 'Do', correct: true },
      { answer: 'Make', correct: false },
      { answer: 'Create', correct: false },
      { answer: 'Start', correct: false },
    ],
  },
  
  {
    question: 'Qual é a tradução correta do verbo? "Esquecer"',
    answers: [
      { answer: 'Forget', correct: true },
      { answer: 'Remember', correct: false },
      { answer: 'Leave', correct: false },
      { answer: 'Do', correct: false },
    ],
  },
  // Adicione mais perguntas conforme necessário
  {
    question: 'Traduza o verbo: "Correr"',
    answers: [
      { answer: 'Run', correct: true },
      { answer: 'Walk', correct: false },
      { answer: 'Jump', correct: false },
      { answer: 'Swim', correct: false },
    ],
  },
  {
    question: 'Qual é a tradução correta do verbo? "Comer"',
    answers: [
      { answer: 'Eat', correct: true },
      { answer: 'Cook', correct: false },
      { answer: 'Drink', correct: false },
      { answer: 'Sleep', correct: false },
    ],
  },
  {
    question: 'Traduza o verbo: "Aprender"',
    answers: [
      { answer: 'Learn', correct: true },
      { answer: 'Teach', correct: false },
      { answer: 'Read', correct: false },
      { answer: 'Write', correct: false },
    ],
  },
  {
    question: 'Qual é a tradução correta do verbo? "Ouvir"',
    answers: [
      { answer: 'Listen', correct: true },
      { answer: 'Speak', correct: false },
      { answer: 'Watch', correct: false },
      { answer: 'Sing', correct: false },
    ],
  },
  {
    question: 'Traduza o verbo: "Trabalhar"',
    answers: [
      { answer: 'Work', correct: true },
      { answer: 'Play', correct: false },
      { answer: 'Study', correct: false },
      { answer: 'Relax', correct: false },
    ],
  },
  {
    question: 'Qual é a tradução correta do verbo? "Viajar"',
    answers: [
      { answer: 'Travel', correct: true },
      { answer: 'Drive', correct: false },
      { answer: 'Fly', correct: false },
      { answer: 'Walk', correct: false },
    ],
  },
  {
    question: 'Traduza o verbo: "Entender"',
    answers: [
      { answer: 'Understand', correct: true },
      { answer: 'Confuse', correct: false },
      { answer: 'Explain', correct: false },
      { answer: 'Forget', correct: false },
    ],
  },
  {
    question: 'Qual é a tradução correta do verbo? "Nadar"',
    answers: [
      { answer: 'Swim', correct: true },
      { answer: 'Dance', correct: false },
      { answer: 'Climb', correct: false },
      { answer: 'Run', correct: false },
    ],
  },
  {
    question: 'Traduza o verbo: "Ler"',
    answers: [
      { answer: 'Read', correct: true },
      { answer: 'Write', correct: false },
      { answer: 'Study', correct: false },
      { answer: 'Listen', correct: false },
    ],
  },
  {
    question: 'Qual é a tradução correta do verbo? "Falar"',
    answers: [
      { answer: 'Speak', correct: true },
      { answer: 'Listen', correct: false },
      { answer: 'Read', correct: false },
      { answer: 'Write', correct: false },
    ],
  },
  {
    question: 'Traduza o verbo: "Pular"',
    answers: [
      { answer: 'Jump', correct: true },
      { answer: 'Run', correct: false },
      { answer: 'Climb', correct: false },
      { answer: 'Dance', correct: false },
    ],
  },
  {
    question: 'Qual é a tradução correta do verbo? "Dormir"',
    answers: [
      { answer: 'Sleep', correct: true },
      { answer: 'Eat', correct: false },
      { answer: 'Wake up', correct: false },
      { answer: 'Dream', correct: false },
    ],
  },
  {
    question: 'Traduza o verbo: "Escrever"',
    answers: [
      { answer: 'Write', correct: true },
      { answer: 'Read', correct: false },
      { answer: 'Draw', correct: false },
      { answer: 'Type', correct: false },
    ],
  },
  {
    question: 'Qual é a tradução correta do verbo? "Beber"',
    answers: [
      { answer: 'Drink', correct: true },
      { answer: 'Eat', correct: false },
      { answer: 'Cook', correct: false },
      { answer: 'Smell', correct: false },
    ],
  },
  {
    question: 'Traduza o verbo: "Cantar"',
    answers: [
      { answer: 'Sing', correct: true },
      { answer: 'Dance', correct: false },
      { answer: 'Listen', correct: false },
      { answer: 'Play', correct: false },
    ],
  },
  {
    question: 'Qual é a tradução correta do verbo? "Caminhar"',
    answers: [
      { answer: 'Walk', correct: true },
      { answer: 'Run', correct: false },
      { answer: 'Jump', correct: false },
      { answer: 'Climb', correct: false },
    ],
  },
  {
    question: 'Traduza o verbo: "Jogar"',
    answers: [
      { answer: 'Play', correct: true },
      { answer: 'Work', correct: false },
      { answer: 'Study', correct: false },
      { answer: 'Read', correct: false },
    ],
  },
  {
    question: 'Qual é a tradução correta do verbo? "Estudar"',
    answers: [
      { answer: 'Study', correct: true },
      { answer: 'Read', correct: false },
      { answer: 'Write', correct: false },
      { answer: 'Learn', correct: false },
    ],
  },
  {
    question: 'Traduza o verbo: "Voar"',
    answers: [
      { answer: 'Fly', correct: true },
      { answer: 'Drive', correct: false },
      { answer: 'Travel', correct: false },
      { answer: 'Walk', correct: false },
    ],
  },
  {
    question: 'Qual é a tradução correta do verbo? "Assistir"',
    answers: [
      { answer: 'Watch', correct: true },
      { answer: 'Listen', correct: false },
      { answer: 'Read', correct: false },
      { answer: 'Speak', correct: false },
    ],
  },
  {
    question: 'Traduza o verbo: "Cantar"',
    answers: [
      { answer: 'Sing', correct: true },
      { answer: 'Dance', correct: false },
      { answer: 'Listen', correct: false },
      { answer: 'Play', correct: false },
    ],
  },
  {
    question: 'Qual é a tradução correta do verbo? "Cozinhar"',
    answers: [
      { answer: 'Cook', correct: true },
      { answer: 'Eat', correct: false },
      { answer: 'Drink', correct: false },
      { answer: 'Smell', correct: false },
    ],
  },
  {
    question: 'Traduza o verbo: "Cheirar"',
    answers: [
      { answer: 'Smell', correct: true },
      { answer: 'Taste', correct: false },
      { answer: 'Touch', correct: false },
      { answer: 'See', correct: false },
    ],
  },
  {
    question: 'Qual é a tradução correta do verbo? "Tocar"',
    answers: [
      { answer: 'Touch', correct: true },
      { answer: 'See', correct: false },
      { answer: 'Hear', correct: false },
      { answer: 'Smell', correct: false },
    ],
  },
  {
    question: 'Traduza o verbo: "Gostar"',
    answers: [
      { answer: 'Like', correct: true },
      { answer: 'Love', correct: false },
      { answer: 'Hate', correct: false },
      { answer: 'Dislike', correct: false },
    ],
  },
  {
    question: 'Qual é a tradução correta do verbo? "Amar"',
    answers: [
      { answer: 'Love', correct: true },
      { answer: 'Like', correct: false },
      { answer: 'Hate', correct: false },
      { answer: 'Dislike', correct: false },
    ],
  },
  {
    question: 'Traduza o verbo: "Odiar"',
    answers: [
      { answer: 'Hate', correct: true },
      { answer: 'Love', correct: false },
      { answer: 'Like', correct: false },
      { answer: 'Dislike', correct: false },
    ],
  },
  {
    question: 'Qual é a tradução correta do verbo? "Desgostar"',
    answers: [
      { answer: 'Dislike', correct: true },
      { answer: 'Love', correct: false },
      { answer: 'Like', correct: false },
      { answer: 'Hate', correct: false },
    ],
  },
  {
    question: 'Traduza o verbo: "Correr"',
    answers: [
      { answer: 'Run', correct: true },
      { answer: 'Walk', correct: false },
      { answer: 'Jump', correct: false },
      { answer: 'Swim', correct: false },
    ],
  },
  {
    question: 'Qual é a tradução correta do verbo? "Nadar"',
    answers: [
      { answer: 'Swim', correct: true },
      { answer: 'Dive', correct: false },
      { answer: 'Float', correct: false },
      { answer: 'Run', correct: false },
    ],
  },
  {
    question: 'Traduza o verbo: "Mergulhar"',
    answers: [
      { answer: 'Dive', correct: true },
      { answer: 'Swim', correct: false },
      { answer: 'Float', correct: false },
      { answer: 'Run', correct: false },
    ],
  },
  {
    question: 'Qual é a tradução correta do verbo? "Flutuar"',
    answers: [
      { answer: 'Float', correct: true },
      { answer: 'Dive', correct: false },
      { answer: 'Swim', correct: false },
      { answer: 'Run', correct: false },
    ],
  },
  {
    question: 'Traduza o verbo: "Pular"',
    answers: [
      { answer: 'Jump', correct: true },
      { answer: 'Run', correct: false },
      { answer: 'Climb', correct: false },
      { answer: 'Dance', correct: false },
    ],
  },
  {
    question: 'Qual é a tradução correta do verbo? "Dançar"',
    answers: [
      { answer: 'Dance', correct: true },
      { answer: 'Jump', correct: false },
      { answer: 'Run', correct: false },
      { answer: 'Climb', correct: false },
    ],
  },
 

];

// substituição do quizz para a primeira pergunta
function init() {
  // criar primeira pergunta
  createQuestion(0);
}

// cria uma pergunta
function createQuestion(i) {
  // limpar questão anterior
  const oldButtons = answerBox.querySelectorAll('button');
  oldButtons.forEach((btn) => {
    btn.remove();
  });

  // alterar texto da pergunta
  const questionText = question.querySelector('#question-text');
  const questionNumber = question.querySelector('#question-number');

  questionText.textContent = questions[i].question;
  questionNumber.textContent = i + 1;

  // inserir alternativas
  questions[i].answers.forEach((answer, i) => {
    // cria template botão quizz
    const answerTemplate = document.querySelector('.answer-template').cloneNode(true);

    const letterBtn = answerTemplate.querySelector('.btn-letter');
    const answerText = answerTemplate.querySelector('.question-answer');

    letterBtn.textContent = letters[i];
    answerText.textContent = answer['answer'];

    answerTemplate.setAttribute('correct-answer', answer['correct']);

    // remover hide e template class
    answerTemplate.classList.remove('hide');
    answerTemplate.classList.remove('answer-template');

    // inserir alternativa na tela
    answerBox.appendChild(answerTemplate);

    // inserir evento click no botão
    answerTemplate.addEventListener('click', function () {
      checkAnswer(this);
    });
  });

  // incrementar o número da questão
  actualQuestion++;
}

// verificar resposta do usuário
function checkAnswer(btn) {
  // seleciona todos os botões
  const buttons = answerBox.querySelectorAll('button');

  // verifica se resposta correta e add classe
  buttons.forEach((button) => {
    if (button.getAttribute('correct-answer') == 'true') {
      button.classList.add('correct-answer');

      // checa se usuário acertou a pergunta
      if (btn === button) {
        // incremento dos pontos
        points++;
      }
    } else {
      button.classList.add('wrong-answer');
    }
  });

  // exibir próxima pergunta
  nextQuestion();
}

// exibe a pŕoxima pergunta no quizz
function nextQuestion() {
  // timer para usuário ver as respostas
  setTimeout(function () {
    // verifica se ainda há perguntas
    if (actualQuestion >= questions.length) {
      // apresenta mensagem de sucesso
      showSuccessMessage();
      return;
    }

    createQuestion(actualQuestion);
  }, 1200);
}

// exibe a tela final
function showSuccessMessage() {
  hideOrShowQuizz();

  // trocar dados tela de sucesso
  // calcular score
  const score = ((points / questions.length) * 100).toFixed(2);

  const displayScore = document.querySelector('#display-score span');
  displayScore.textContent = score.toString();

  //alterar o número de perguntas corretas
  const correctAnswers = document.querySelector('#correct-answers');
  correctAnswers.textContent = points;

  // alterar o total de perguntas
  const totalQuestions = document.querySelector('#questions-qty');
  totalQuestions.textContent = questions.length;
}

// mostra ou esonde o score
function hideOrShowQuizz() {
  quizzContainer.classList.toggle('hide');
  scoreContainer.classList.toggle('hide');
}

// reiniciar quizz
const restartBtn = document.querySelector('#restart');
restartBtn.addEventListener('click', function () {
  //zerar jogo
  actualQuestion = 0;
  points = 0;
  hideOrShowQuizz();
  init();
});

// inicialização do quizz
init();
