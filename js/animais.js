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
    question: "Qual é o significado de 'gato' em inglês?",
    answers: [
      { answer: "Cat", correct: true },
      { answer: "Dog", correct: false },
      { answer: "Rat", correct: false },
      { answer: "Mouse", correct: false },
      { answer: "Kitten", correct: false },
    ],
  },
  {
    question: "Qual é o significado de 'cachorro' em inglês?",
    answers: [
      { answer: "Cat", correct: false },
      { answer: "Dog", correct: true },
      { answer: "Puppy", correct: false },
      { answer: "Hound", correct: false },
      { answer: "Canine", correct: false },
    ],
  },
  {
    question: "Qual é o significado de 'rato' em inglês?",
    answers: [
      { answer: "Mouse", correct: true },
      { answer: "Bird", correct: false },
      { answer: "Rat", correct: false },
      { answer: "Rodent", correct: false },
      { answer: "Squeaker", correct: false },
    ],
  },
  {
    question: "Qual é o significado de 'pássaro' em inglês?",
    answers: [
      { answer: "Mouse", correct: false },
      { answer: "Bird", correct: true },
      { answer: "Feathered friend", correct: false },
      { answer: "Winged creature", correct: false },
      { answer: "Avian", correct: false },
    ],
  },
  {
    question: "Qual é o significado de 'peixe' em inglês?",
    answers: [
      { answer: "Fish", correct: true },
      { answer: "Snake", correct: false },
      { answer: "Aquatic creature", correct: false },
      { answer: "Seafood", correct: false },
      { answer: "Swimmer", correct: false },
    ],
  },
  {
    question: "Qual é o significado de 'cobra' em inglês?",
    answers: [
      { answer: "Fish", correct: false },
      { answer: "Snake", correct: true },
      { answer: "Serpent", correct: false },
      { answer: "Reptile", correct: false },
      { answer: "Slitherer", correct: false },
    ],
  },
  {
    question: "Qual é o significado de 'elefante' em inglês?",
    answers: [
      { answer: "Elephant", correct: true },
      { answer: "Lion", correct: false },
      { answer: "Giant", correct: false },
      { answer: "Mammal", correct: false },
      { answer: "Trunked creature", correct: false },
    ],
  },
  {
    question: "Qual é o significado de 'leão' em inglês?",
    answers: [
      { answer: "Elephant", correct: false },
      { answer: "Lion", correct: true },
      { answer: "Big cat", correct: false },
      { answer: "Predator", correct: false },
      { answer: "Mane bearer", correct: false },
    ],
  },
  {
    question: "Qual é o significado de 'coelho' em inglês?",
    answers: [
      { answer: "Rabbit", correct: true },
      { answer: "Tiger", correct: false },
      { answer: "Hare", correct: false },
      { answer: "Bunny", correct: false },
      { answer: "Rodent", correct: false },
    ],
  },
  {
    question: "Qual é o significado de 'tigre' em inglês?",
    answers: [
      { answer: "Rabbit", correct: false },
      { answer: "Tiger", correct: true },
      { answer: "Big cat", correct: false },
      { answer: "Striped predator", correct: false },
      { answer: "Feline", correct: false },
    ],
  },
  {
    question: "Qual é o significado de 'cavalo' em inglês?",
    answers: [
      { answer: "Horse", correct: true },
      { answer: "Cow", correct: false },
      { answer: "Stallion", correct: false },
      { answer: "Pony", correct: false },
      { answer: "Equine", correct: false },
    ],
  },
  {
    question: "Qual é o significado de 'vaca' em inglês?",
    answers: [
      { answer: "Horse", correct: false },
      { answer: "Cow", correct: true },
      { answer: "Bovine", correct: false },
      { answer: "Mooer", correct: false },
      { answer: "Milk producer", correct: false },
    ],
  },
  {
    question: "Qual é o significado de 'porco' em inglês?",
    answers: [
      { answer: "Pig", correct: true },
      { answer: "Sheep", correct: false },
      { answer: "Swine", correct: false },
      { answer: "Hog", correct: false },
      { answer: "Bacon provider", correct: false },
    ],
  },
  {
    question: "Qual é o significado de 'ovelha' em inglês?",
    answers: [
      { answer: "Pig", correct: false },
      { answer: "Sheep", correct: true },
      { answer: "Fleece bearer", correct: false },
      { answer: "Woolly creature", correct: false },
      { answer: "Mutton maker", correct: false },
    ],
  },
  {
    question: "Qual é o significado de 'macaco' em inglês?",
    answers: [
      { answer: "Monkey", correct: true },
      { answer: "Bear", correct: false },
      { answer: "Ape", correct: false },
      { answer: "Primate", correct: false },
      { answer: "Chatterer", correct: false },
    ],
  },
  {
    question: "Qual é o significado de 'urso' em inglês?",
    answers: [
      { answer: "Monkey", correct: false },
      { answer: "Bear", correct: true },
      { answer: "Bruin", correct: false },
      { answer: "Teddy", correct: false },
      { answer: "Hibernator", correct: false },
    ],
  },
  {
    question: "Qual é o significado de 'galinha' em inglês?",
    answers: [
      { answer: "Chicken", correct: true },
      { answer: "Duck", correct: false },
      { answer: "Hen", correct: false },
      { answer: "Rooster", correct: false },
      { answer: "Poultry", correct: false },
    ],
  },
  {
    question: "Qual é o significado de 'pato' em inglês?",
    answers: [
      { answer: "Chicken", correct: false },
      { answer: "Duck", correct: true },
      { answer: "Quacker", correct: false },
      { answer: "Waterfowl", correct: false },
      { answer: "Pond dweller", correct: false },
    ],
  },
  {
    question: "Qual é o significado de 'zebra' em inglês?",
    answers: [
      { answer: "Zebra", correct: true },
      { answer: "Lion", correct: false },
      { answer: "Striped horse", correct: false },
      { answer: "Safari steed", correct: false },
      { answer: "Equid", correct: false },
    ],
  },
  {
    question: "Qual é o significado de 'lontra' em inglês?",
    answers: [
      { answer: "Otter", correct: true },
      { answer: "Elephant", correct: false },
      { answer: "Water weasel", correct: false },
      { answer: "Stream swimmer", correct: false },
      { answer: "Aquatic otter", correct: false },
    ],
  },
  {
    question: "Qual é o significado de 'rinoceronte' em inglês?",
    answers: [
      { answer: "Rhinoceros", correct: true },
      { answer: "Giraffe", correct: false },
      { answer: "Horned beast", correct: false },
      { answer: "Thick-skinned grazer", correct: false },
      { answer: "Pachyderm", correct: false },
    ],
  },
  {
    question: "Qual é o significado de 'girafa' em inglês?",
    answers: [
      { answer: "Rhinoceros", correct: false },
      { answer: "Giraffe", correct: true },
      { answer: "Long-necked creature", correct: false },
      { answer: "Savannah stilt", correct: false },
      { answer: "Spotted tower", correct: false },
    ],
  },
  {
    question: "Qual é o significado de 'coruja' em inglês?",
    answers: [
      { answer: "Owl", correct: true },
      { answer: "Eagle", correct: false },
      { answer: "Night bird", correct: false },
      { answer: "Feathered scholar", correct: false },
      { answer: "Hooter", correct: false },
    ],
  },
  {
    question: "Qual é o significado de 'águia' em inglês?",
    answers: [
      { answer: "Owl", correct: false },
      { answer: "Eagle", correct: true },
      { answer: "Sky sovereign", correct: false },
      { answer: "Raptor", correct: false },
      { answer: "Winged hunter", correct: false },
    ],
  },
  {
    question: "Qual é o significado de 'crocodilo' em inglês?",
    answers: [
      { answer: "Crocodile", correct: true },
      { answer: "Shark", correct: false },
      { answer: "Reptilian menace", correct: false },
      { answer: "Swamp lurker", correct: false },
      { answer: "Jaws of the river", correct: false },
    ],
  },
  {
    question: "Qual é o significado de 'tubarão' em inglês?",
    answers: [
      { answer: "Crocodile", correct: false },
      { answer: "Shark", correct: true },
      { answer: "Ocean predator", correct: false },
      { answer: "Finned terror", correct: false },
      { answer: "Deep-sea menace", correct: false },
    ],
  },
  {
    question: "Qual é o significado de 'abelha' em inglês?",
    answers: [
      { answer: "Bee", correct: true },
      { answer: "Ant", correct: false },
      { answer: "Honey maker", correct: false },
      { answer: "Floral visitor", correct: false },
      { answer: "Buzzing worker", correct: false },
    ],
  },
  {
    question: "Qual é o significado de 'formiga' em inglês?",
    answers: [
      { answer: "Bee", correct: false },
      { answer: "Ant", correct: true },
      { answer: "Tiny laborer", correct: false },
      { answer: "Six-legged worker", correct: false },
      { answer: "Colonial crawler", correct: false },
    ],
  },
  {
    question: "Qual é o significado de 'lontra' em inglês?",
    answers: [
      { answer: "Otter", correct: true },
      { answer: "Elephant", correct: false },
      { answer: "Water weasel", correct: false },
      { answer: "Stream swimmer", correct: false },
      { answer: "Aquatic otter", correct: false },
    ],
  },
  {
    question: "Qual é o significado de 'esquilo' em inglês?",
    answers: [
      { answer: "Squirrel", correct: true },
      { answer: "Hedgehog", correct: false },
      { answer: "Nut nibbler", correct: false },
      { answer: "Tree acrobat", correct: false },
      { answer: "Bushy-tailed critter", correct: false },
    ],
  },
  {
    question: "Qual é o significado de 'ouriço' em inglês?",
    answers: [
      { answer: "Squirrel", correct: false },
      { answer: "Hedgehog", correct: true },
      { answer: "Spiky ball", correct: false },
      { answer: "Prickly pincushion", correct: false },
      { answer: "Quill-covered creature", correct: false },
    ],
  },
  {
    question: "Qual é o significado de 'lobo' em inglês?",
    answers: [
      { answer: "Wolf", correct: true },
      { answer: "Fox", correct: false },
      { answer: "Howler", correct: false },
      { answer: "Wild canine", correct: false },
      { answer: "Moon singer", correct: false },
    ],
  },
  {
    question: "Qual é o significado de 'raposa' em inglês?",
    answers: [
      { answer: "Wolf", correct: false },
      { answer: "Fox", correct: true },
      { answer: "Sly one", correct: false },
      { answer: "Cunning creature", correct: false },
      { answer: "Red furball", correct: false },
    ],
  },
  {
    question: "Qual é o significado de 'pinguim' em inglês?",
    answers: [
      { answer: "Penguin", correct: true },
      { answer: "Seal", correct: false },
      { answer: "Tuxedoed bird", correct: false },
      { answer: "Antarctic waddler", correct: false },
      { answer: "Iceberg dweller", correct: false },
    ],
  },
  {
    question: "Qual é o significado de 'foca' em inglês?",
    answers: [
      { answer: "Penguin", correct: false },
      { answer: "Seal", correct: true },
      { answer: "Ocean flopper", correct: false },
      { answer: "Blubber buddy", correct: false },
      { answer: "Fish-eating mammal", correct: false },
    ],
  },
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
  const { questionText, questionNumber } = updateQuestionElements(question, index);

  // Embaralha as respostas antes de exibi-las
  shuffle(question.answers);

  question.answers.forEach((answer, i) => {
    const answerTemplate = createAnswerTemplate(letters[i], answer);
    answerBox.appendChild(answerTemplate);

    answerTemplate.addEventListener('click', function () {
      checkAnswer(this);
    });
  });
}

// Atualiza os elementos da pergunta
function updateQuestionElements(question, index) {
  const questionText = questionElement.querySelector('#question-text');
  const questionNumber = questionElement.querySelector('#question-number');

  questionText.textContent = question.question;
  questionNumber.textContent = index + 1;

  return { questionText, questionNumber };
}

// Cria um template para a resposta
function createAnswerTemplate(letter, answer) {
  const answerTemplate = document.querySelector('.answer-template').cloneNode(true);
  const letterBtn = answerTemplate.querySelector('.btn-letter');
  const answerText = answerTemplate.querySelector('.question-answer');

  letterBtn.textContent = letter;
  answerText.textContent = answer.answer;

  answerTemplate.setAttribute('correct-answer', answer.correct);

  answerTemplate.classList.remove('hide');
  answerTemplate.classList.remove('answer-template');

  return answerTemplate;
}

// Limpar pergunta anterior
function clearPreviousQuestion() {
  answerBox.innerHTML = '';
}

// Verificar resposta do usuário
function checkAnswer(btn) {
  const correctAnswer = btn.getAttribute('correct-answer') === 'true';
  btn.classList.add(correctAnswer ? 'correct-answer' : 'wrong-answer');

  if (correctAnswer) {
    points++;
    actualQuestion++;
    if (actualQuestion < questions.length) {
      setTimeout(() => createQuestion(actualQuestion), 1200);
    } else {
      showSuccessMessage();
    }
  } else {
    setTimeout(() => createQuestion(actualQuestion), 1200);
  }
}

// Função para exibir mensagem de sucesso (você precisa implementar esta função)
function showSuccessMessage() {
  // Implemente esta função conforme necessário
}

// Inicialização do quizz
init();
