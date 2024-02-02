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
    question: "O que significa 'I am the danger' em português na série Breaking Bad?",
    answers: [
      { answer: "Eu sou o perigo", correct: true },
      { answer: "Diga meu nome", correct: false },
      { answer: "Eu sou aquele que bate na porta", correct: false },
      { answer: "Eu fiz por mim", correct: false },
    ],
  },
  {
    question: "O que significa 'Yeah, science!' em português na série Breaking Bad?",
    answers: [
      { answer: "Sim, ciência!", correct: true },
      { answer: "Vamos nessa!", correct: false },
      { answer: "Isso aí, ciência!", correct: false },
      { answer: "Eu sabia disso!", correct: false },
    ],
  },
  {
    question: "O que significa 'Say my name' em português na série Breaking Bad?",
    answers: [
      { answer: "Diga meu nome", correct: true },
      { answer: "Diga o que fizemos", correct: false },
      { answer: "Diga a verdade", correct: false },
      { answer: "Diga quem somos", correct: false },
    ],
  },
  {
    question: "O que significa 'I am the one who knocks' em português na série Breaking Bad?",
    answers: [
      { answer: "Eu sou aquele que bate na porta", correct: true },
      { answer: "Eu sou o perigo", correct: false },
      { answer: "Eu sou aquele que decide", correct: false },
      { answer: "Eu sou o que está batendo", correct: false },
    ],
  },
  {
    question: "O que significa 'I did it for me' em português na série Breaking Bad?",
    answers: [
      { answer: "Eu fiz por mim", correct: true },
      { answer: "Eu fiz por você", correct: false },
      { answer: "Eu fiz por todos", correct: false },
      { answer: "Eu fiz por eles", correct: false },
    ],
  },
  {
    question: "O que significa 'Bitch!' em português na série Breaking Bad?",
    answers: [
      { answer: "Vadia!", correct: true },
      { answer: "Bruxa!", correct: false },
      { answer: "Ridícula!", correct: false },
      { answer: "Idiota!", correct: false },
    ],
  },
  {
    question: "O que significa 'Yo, Mr. White!' em português na série Breaking Bad?",
    answers: [
      { answer: "Ei, Sr. White!", correct: true },
      { answer: "Olá, Sr. White!", correct: false },
      { answer: "Oi, Sr. White!", correct: false },
      { answer: "Hey, Sr. White!", correct: false },
    ],
  },
  {
    question: "O que significa 'No half measures' em português na série Breaking Bad?",
    answers: [
      { answer: "Sem meias medidas", correct: true },
      { answer: "Nenhuma meia solução", correct: false },
      { answer: "Sem meio termo", correct: false },
      { answer: "Sem meias palavras", correct: false },
    ],
  },
  {
    question: "O que significa 'Tread lightly' em português na série Breaking Bad?",
    answers: [
      { answer: "Pise leve", correct: true },
      { answer: "Cuidado", correct: false },
      { answer: "Ande com cuidado", correct: false },
      { answer: "Pise com firmeza", correct: false },
    ],
  },
  {
    question: "O que significa 'I am not in danger, Skyler. I am the danger.' em português na série Breaking Bad?",
    answers: [
      { answer: "Eu não estou em perigo, Skyler. Eu sou o perigo.", correct: true },
      { answer: "Eu não sou perigoso, Skyler. Eu sou o perigo.", correct: false },
      { answer: "Eu não estou perigoso, Skyler. Eu sou perigoso.", correct: false },
      { answer: "Eu não sou o perigo, Skyler. Eu sou perigoso.", correct: false },
    ],
  },
  {
    question: "O que significa 'I chose a half measure when I should have gone all the way.' em português na série Breaking Bad?",
    answers: [
      { answer: "Eu escolhi uma meia medida quando deveria ter ido até o fim.", correct: true },
      { answer: "Eu escolhi uma solução parcial quando deveria ter ido até o fim.", correct: false },
      { answer: "Eu escolhi meio termo quando deveria ter ido até o fim.", correct: false },
      { answer: "Eu escolhi uma meia ação quando deveria ter ido até o fim.", correct: false },
    ],
  },
  {
    question: "O que significa 'I am the one who drives' em português na série Breaking Bad?",
    answers: [
      { answer: "Eu sou aquele que dirige", correct: true },
      { answer: "Eu sou quem dirige", correct: false },
      { answer: "Eu sou o motorista", correct: false },
      { answer: "Eu sou o único que dirige", correct: false },
    ],
  },
  {
    question: "O que significa 'Yeah, Mr. White! Yeah, science!' em português na série Breaking Bad?",
    answers: [
      { answer: "Sim, Sr. White! Sim, ciência!", correct: true },
      { answer: "Sim, Sr. White! Vamos nessa, ciência!", correct: false },
      { answer: "Yeah, Sr. White! Yeah, ciência!", correct: false },
      { answer: "Sim, Sr. White! Isso aí, ciência!", correct: false },
    ],
  },
  {
    question: "O que significa 'I am the danger. A guy opens his door and gets shot, and you think that of me? No. I am the one who knocks!' em português na série Breaking Bad?",
    answers: [
      { answer: "Eu sou o perigo. Um cara abre a porta e é baleado, e você pensa isso de mim? Não. Eu sou aquele que bate na porta!", correct: true },
      { answer: "Eu sou o perigo. Um cara abre a porta e é baleado, e você acha isso de mim? Não. Eu sou quem bate na porta!", correct: false },
      { answer: "Eu sou o perigo. Um cara abre a porta e é baleado, e você imagina isso de mim? Não. Eu sou aquele que toca a porta!", correct: false },
      { answer: "Eu sou o perigo. Um cara abre a porta e é baleado, e você supõe isso de mim? Não. Eu sou quem bate na porta!", correct: false },
    ],
  },
  {
    question: "O que significa 'No, Jesse, we have to cook.' em português na série Breaking Bad?",
    answers: [
      { answer: "Não, Jesse, nós temos que cozinhar.", correct: true },
      { answer: "Não, Jesse, precisamos cozinhar.", correct: false },
      { answer: "Não, Jesse, devemos cozinhar.", correct: false },
      { answer: "Não, Jesse, é preciso cozinhar.", correct: false },
    ],
  },
  {
    question: "O que significa 'I'm not in the meth business. I'm in the empire business.' em português na série Breaking Bad?",
    answers: [
      { answer: "Eu não estou no negócio de metanfetamina. Estou no negócio de império.", correct: true },
      { answer: "Eu não estou no negócio de metanfetamina. Estou no negócio do império.", correct: false },
      { answer: "Eu não sou do negócio de metanfetamina. Estou no negócio do império.", correct: false },
      { answer: "Eu não estou no negócio de metanfetamina. Estou no negócio da império.", correct: false },
    ],
  },
  {
    question: "O que significa 'I am not in danger, Skyler. I am the danger.' em português na série Breaking Bad?",
    answers: [
      { answer: "Eu não estou em perigo, Skyler. Eu sou o perigo.", correct: true },
      { answer: "Eu não sou perigoso, Skyler. Eu sou o perigo.", correct: false },
      { answer: "Eu não estou perigoso, Skyler. Eu sou perigoso.", correct: false },
      { answer: "Eu não sou o perigo, Skyler. Eu sou perigoso.", correct: false },
    ],
  },
  {
    question: "O que significa 'I am the one who knocks!' em português na série Breaking Bad?",
    answers: [
      { answer: "Eu sou aquele que bate na porta!", correct: true },
      { answer: "Eu sou quem bate na porta!", correct: false },
      { answer: "Eu sou o que toca a porta!", correct: false },
      { answer: "Eu sou o único que bate na porta!", correct: false },
    ],
  },
  {
    question: "O que significa 'I did it for me. I liked it. I was good at it. And I was really... I was alive.' em português na série Breaking Bad?",
    answers: [
      { answer: "Eu fiz por mim. Eu gostei. Eu era bom nisso. E eu estava realmente... Eu estava vivo.", correct: true },
      { answer: "Eu fiz por mim. Eu apreciei. Eu era bom nisso. E eu estava realmente... Eu estava vivo.", correct: false },
      { answer: "Eu fiz por mim. Eu gostei. Eu era habilidoso nisso. E eu estava realmente... Eu estava vivo.", correct: false },
      { answer: "Eu fiz por mim. Eu gostava disso. Eu era bom nisso. E eu estava realmente... Eu estava vivo.", correct: false },
    ],
  },
  {
    question: "O que significa 'I am not in the meth business. I'm in the empire business.' em português na série Breaking Bad?",
    answers: [
      { answer: "Eu não estou no negócio de metanfetamina. Estou no negócio de império.", correct: true },
      { answer: "Eu não estou no negócio de metanfetamina. Estou no negócio do império.", correct: false },
      { answer: "Eu não sou do negócio de metanfetamina. Estou no negócio do império.", correct: false },
      { answer: "Eu não estou no negócio de metanfetamina. Estou no negócio da império.", correct: false },
    ],
  },
  {
    question: "O que significa 'I'm not in the meth business. I'm in the empire business.' em português na série Breaking Bad?",
    answers: [
      { answer: "Eu não estou no negócio de metanfetamina. Estou no negócio de império.", correct: true },
      { answer: "Eu não estou no negócio de metanfetamina. Estou no negócio do império.", correct: false },
      { answer: "Eu não sou do negócio de metanfetamina. Estou no negócio do império.", correct: false },
      { answer: "Eu não estou no negócio de metanfetamina. Estou no negócio da império.", correct: false },
    ],
  },
  {
    question: "O que significa 'I am not in danger, Skyler. I am the danger.' em português na série Breaking Bad?",
    answers: [
      { answer: "Eu não estou em perigo, Skyler. Eu sou o perigo.", correct: true },
      { answer: "Eu não sou perigoso, Skyler. Eu sou o perigo.", correct: false },
      { answer: "Eu não estou perigoso, Skyler. Eu sou perigoso.", correct: false },
      { answer: "Eu não sou o perigo, Skyler. Eu sou perigoso.", correct: false },
    ],
  },
  {
    question: "O que significa 'I am the one who knocks!' em português na série Breaking Bad?",
    answers: [
      { answer: "Eu sou aquele que bate na porta!", correct: true },
      { answer: "Eu sou quem bate na porta!", correct: false },
      { answer: "Eu sou o que toca a porta!", correct: false },
      { answer: "Eu sou o único que bate na porta!", correct: false },
    ],
  },
  {
    question: "O que significa 'I did it for me. I liked it. I was good at it. And I was really... I was alive.' em português na série Breaking Bad?",
    answers: [
      { answer: "Eu fiz por mim. Eu gostei. Eu era bom nisso. E eu estava realmente... Eu estava vivo.", correct: true },
      { answer: "Eu fiz por mim. Eu apreciei. Eu era bom nisso. E eu estava realmente... Eu estava vivo.", correct: false },
      { answer: "Eu fiz por mim. Eu gostava disso. Eu era habilidoso nisso. E eu estava realmente... Eu estava vivo.", correct: false },
      { answer: "Eu fiz por mim. Eu gostei disso. Eu era bom nisso. E eu estava realmente... Eu estava vivo.", correct: false },
    ],
  },
  {
    question: "O que significa 'I am not in danger, Skyler. I am the danger.' em português na série Breaking Bad?",
    answers: [
      { answer: "Eu não estou em perigo, Skyler. Eu sou o perigo.", correct: true },
      { answer: "Eu não sou perigoso, Skyler. Eu sou o perigo.", correct: false },
      { answer: "Eu não estou perigoso, Skyler. Eu sou perigoso.", correct: false },
      { answer: "Eu não sou o perigo, Skyler. Eu sou perigoso.", correct: false },
    ],
  },
  {
    question: "O que significa 'I am the one who knocks!' em português na série Breaking Bad?",
    answers: [
      { answer: "Eu sou aquele que bate na porta!", correct: true },
      { answer: "Eu sou quem bate na porta!", correct: false },
      { answer: "Eu sou o que toca a porta!", correct: false },
      { answer: "Eu sou o único que bate na porta!", correct: false },
    ],
  },
  {
    question: "O que significa 'I did it for me. I liked it. I was good at it. And I was really... I was alive.' em português na série Breaking Bad?",
    answers: [
      { answer: "Eu fiz por mim. Eu gostei. Eu era bom nisso. E eu estava realmente... Eu estava vivo.", correct: true },
      { answer: "Eu fiz por mim. Eu apreciei. Eu era bom nisso. E eu estava realmente... Eu estava vivo.", correct: false },
      { answer: "Eu fiz por mim. Eu gostava disso. Eu era habilidoso nisso. E eu estava realmente... Eu estava vivo.", correct: false },
      { answer: "Eu fiz por mim. Eu gostei disso. Eu era bom nisso. E eu estava realmente... Eu estava vivo.", correct: false },
    ],
  },
  {
    question: "O que significa 'No, Jesse, we have to cook.' em português na série Breaking Bad?",
    answers: [
      { answer: "Não, Jesse, nós temos que cozinhar.", correct: true },
      { answer: "Não, Jesse, precisamos cozinhar.", correct: false },
      { answer: "Não, Jesse, devemos cozinhar.", correct: false },
      { answer: "Não, Jesse, é preciso cozinhar.", correct: false },
    ],
  },
  {
    question: "O que significa 'I'm not in the meth business. I'm in the empire business.' em português na série Breaking Bad?",
    answers: [
      { answer: "Eu não estou no negócio de metanfetamina. Estou no negócio de império.", correct: true },
      { answer: "Eu não estou no negócio de metanfetamina. Estou no negócio do império.", correct: false },
      { answer: "Eu não sou do negócio de metanfetamina. Estou no negócio do império.", correct: false },
      { answer: "Eu não estou no negócio de metanfetamina. Estou no negócio da império.", correct: false },
    ],
  },
  {
    question: "O que significa 'I am not in danger, Skyler. I am the danger.' em português na série Breaking Bad?",
    answers: [
      { answer: "Eu não estou em perigo, Skyler. Eu sou o perigo.", correct: true },
      { answer: "Eu não sou perigoso, Skyler. Eu sou o perigo.", correct: false },
      { answer: "Eu não estou perigoso, Skyler. Eu sou perigoso.", correct: false },
      { answer: "Eu não sou o perigo, Skyler. Eu sou perigoso.", correct: false },
    ],
  },
  {
    question: "O que significa 'I am the one who knocks!' em português na série Breaking Bad?",
    answers: [
      { answer: "Eu sou aquele que bate na porta!", correct: true },
      { answer: "Eu sou quem bate na porta!", correct: false },
      { answer: "Eu sou o que toca a porta!", correct: false },
      { answer: "Eu sou o único que bate na porta!", correct: false },
    ],
  },
  {
    question: "O que significa 'I did it for me. I liked it. I was good at it. And I was really... I was alive.' em português na série Breaking Bad?",
    answers: [
      { answer: "Eu fiz por mim. Eu gostei. Eu era bom nisso. E eu estava realmente... Eu estava vivo.", correct: true },
      { answer: "Eu fiz por mim. Eu apreciei. Eu era bom nisso. E eu estava realmente... Eu estava vivo.", correct: false },
      { answer: "Eu fiz por mim. Eu gostava disso. Eu era habilidoso nisso. E eu estava realmente... Eu estava vivo.", correct: false },
      { answer: "Eu fiz por mim. Eu gostei disso. Eu era bom nisso. E eu estava realmente... Eu estava vivo.", correct: false },
    ],
  },
  {
    question: "O que significa 'Bitch!' em português na série Breaking Bad?",
    answers: [
      { answer: "Vadia!", correct: true },
      { answer: "Bruxa!", correct: false },
      { answer: "Ridícula!", correct: false },
      { answer: "Idiota!", correct: false },
    ],
  },
  {
    question: "O que significa 'Yo, Mr. White!' em português na série Breaking Bad?",
    answers: [
      { answer: "Ei, Sr. White!", correct: true },
      { answer: "Olá, Sr. White!", correct: false },
      { answer: "Oi, Sr. White!", correct: false },
      { answer: "Hey, Sr. White!", correct: false },
    ],
  },
  {
    question: "O que significa 'No half measures' em português na série Breaking Bad?",
    answers: [
      { answer: "Sem meias medidas", correct: true },
      { answer: "Nenhuma meia solução", correct: false },
      { answer: "Sem meio termo", correct: false },
      { answer: "Sem meias palavras", correct: false },
    ],
  },
  {
    question: "O que significa 'Tread lightly' em português na série Breaking Bad?",
    answers: [
      { answer: "Pise leve", correct: true },
      { answer: "Cuidado", correct: false },
      { answer: "Ande com cuidado", correct: false },
      { answer: "Pise com firmeza", correct: false },
    ],
  },
  {
    question: "O que significa 'I am not in danger, Skyler. I am the danger.' em português na série Breaking Bad?",
    answers: [
      { answer: "Eu não estou em perigo, Skyler. Eu sou o perigo.", correct: true },
      { answer: "Eu não sou perigoso, Skyler. Eu sou o perigo.", correct: false },
      { answer: "Eu não estou perigoso, Skyler. Eu sou perigoso.", correct: false },
      { answer: "Eu não sou o perigo, Skyler. Eu sou perigoso.", correct: false },
    ],
  },
  {
    question: "O que significa 'I chose a half measure when I should have gone all the way.' em português na série Breaking Bad?",
    answers: [
      { answer: "Eu escolhi uma meia medida quando deveria ter ido até o fim.", correct: true },
      { answer: "Eu escolhi uma solução parcial quando deveria ter ido até o fim.", correct: false },
      { answer: "Eu escolhi meio termo quando deveria ter ido até o fim.", correct: false },
      { answer: "Eu escolhi uma meia ação quando deveria ter ido até o fim.", correct: false },
    ],
  },
  {
    question: "O que significa 'I am the one who drives' em português na série Breaking Bad?",
    answers: [
      { answer: "Eu sou aquele que dirige", correct: true },
      { answer: "Eu sou quem dirige", correct: false },
      { answer: "Eu sou o motorista", correct: false },
      { answer: "Eu sou o único que dirige", correct: false },
    ],
  },
  {
    question: "O que significa 'Yeah, Mr. White! Yeah, science!' em português na série Breaking Bad?",
    answers: [
      { answer: "Sim, Sr. White! Sim, ciência!", correct: true },
      { answer: "Sim, Sr. White! Vamos nessa, ciência!", correct: false },
      { answer: "Yeah, Sr. White! Yeah, ciência!", correct: false },
      { answer: "Sim, Sr. White! Isso aí, ciência!", correct: false },
    ],
  },
  {
    question: "O que significa 'I am the danger. A guy opens his door and gets shot, and you think that of me? No. I am the one who knocks!' em português na série Breaking Bad?",
    answers: [
      { answer: "Eu sou o perigo. Um cara abre a porta e é baleado, e você pensa isso de mim? Não. Eu sou aquele que bate na porta!", correct: true },
      { answer: "Eu sou o perigo. Um cara abre a porta e é baleado, e você acha isso de mim? Não. Eu sou quem bate na porta!", correct: false },
      { answer: "Eu sou o perigo. Um cara abre a porta e é baleado, e você imagina isso de mim? Não. Eu sou aquele que toca a porta!", correct: false },
      { answer: "Eu sou o perigo. Um cara abre a porta e é baleado, e você supõe isso de mim? Não. Eu sou quem bate na porta!", correct: false },
    ],
  },
  {
    question: "O que significa 'No, Jesse, we have to cook.' em português na série Breaking Bad?",
    answers: [
      { answer: "Não, Jesse, nós temos que cozinhar.", correct: true },
      { answer: "Não, Jesse, precisamos cozinhar.", correct: false },
      { answer: "Não, Jesse, devemos cozinhar.", correct: false },
      { answer: "Não, Jesse, é preciso cozinhar.", correct: false },
    ],
  },
  {
    question: "O que significa 'I'm not in the meth business. I'm in the empire business.' em português na série Breaking Bad?",
    answers: [
      { answer: "Eu não estou no negócio de metanfetamina. Estou no negócio de império.", correct: true },
      { answer: "Eu não estou no negócio de metanfetamina. Estou no negócio do império.", correct: false },
      { answer: "Eu não sou do negócio de metanfetamina. Estou no negócio do império.", correct: false },
      { answer: "Eu não estou no negócio de metanfetamina. Estou no negócio da império.", correct: false },
    ],
  },
  {
    question: "O que significa 'I am not in danger, Skyler. I am the danger.' em português na série Breaking Bad?",
    answers: [
      { answer: "Eu não estou em perigo, Skyler. Eu sou o perigo.", correct: true },
      { answer: "Eu não sou perigoso, Skyler. Eu sou o perigo.", correct: false },
      { answer: "Eu não estou perigoso, Skyler. Eu sou perigoso.", correct: false },
      { answer: "Eu não sou o perigo, Skyler. Eu sou perigoso.", correct: false },
    ],
  },
  {
    question: "O que significa 'I am the one who knocks!' em português na série Breaking Bad?",
    answers: [
      { answer: "Eu sou aquele que bate na porta!", correct: true },
      { answer: "Eu sou quem bate na porta!", correct: false },
      { answer: "Eu sou o que toca a porta!", correct: false },
      { answer: "Eu sou o único que bate na porta!", correct: false },
    ],
  },
  {
    question: "O que significa 'I did it for me. I liked it. I was good at it. And I was really... I was alive.' em português na série Breaking Bad?",
    answers: [
      { answer: "Eu fiz por mim. Eu gostei. Eu era bom nisso. E eu estava realmente... Eu estava vivo.", correct: true },
      { answer: "Eu fiz por mim. Eu apreciei. Eu era bom nisso. E eu estava realmente... Eu estava vivo.", correct: false },
      { answer: "Eu fiz por mim. Eu gostava disso. Eu era habilidoso nisso. E eu estava realmente... Eu estava vivo.", correct: false },
      { answer: "Eu fiz por mim. Eu gostei disso. Eu era bom nisso. E eu estava realmente... Eu estava vivo.", correct: false },
    ],
  },

];
// ... (Código anterior)

function removePerguntasRepetidas(questions) {
  const perguntasFiltradas = [];
  const perguntasTexto = new Set();

  for (const pergunta of questions) {
    const texto = pergunta.question.toLowerCase();

    if (!perguntasTexto.has(texto)) {
      perguntasTexto.add(texto);
      perguntasFiltradas.push(pergunta);
    }
  }

  return perguntasFiltradas;
}

// Inicialização do quizz
function init() {
  // Remove perguntas repetidas
  let perguntasSemRepeticao = removePerguntasRepetidas(questions);
  console.log(perguntasSemRepeticao);

  createQuestion(actualQuestion);
}

// ... (Restante do código)

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
    const answerTemplate = document.createElement('div');
    answerTemplate.classList.add('answer-template');

    const letterBtn = document.createElement('button');
    letterBtn.classList.add('btn-letter');
    letterBtn.textContent = letters[i];

    const answerText = document.createElement('div');
    answerText.classList.add('question-answer');
    answerText.textContent = answer.answer;

    answerTemplate.setAttribute('correct-answer', answer.correct);

    answerTemplate.appendChild(letterBtn);
    answerTemplate.appendChild(answerText);

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
