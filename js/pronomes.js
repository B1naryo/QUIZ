// Declaração de variáveis
const questionElement = document.querySelector('#question');
const answerBox = document.querySelector('#answers-box');
const quizzContainer = document.querySelector('#quizz-container');
const scoreContainer = document.querySelector('#score-container');
const letters = ['a', 'b', 'c', 'd', 'e'];
let points = 0;
let actualQuestion = 0;


// Perguntas
const questions = [
  {
    question: 'Qual é o pronome pessoal correspondente? "I"',
    answers: [
      { answer: 'Eu', correct: true },
      { answer: 'Você', correct: false },
      { answer: 'Ele', correct: false },
      { answer: 'Nós', correct: false },
    ],
  },
  
  {
    question: 'Qual é o pronome pessoal correspondente? "You"',
    answers: [
      { answer: 'Eu', correct: false },
      { answer: 'Você', correct: true },
      { answer: 'Ele', correct: false },
      { answer: 'Nós', correct: false },
    ],
  },

  {
    question: 'Qual é o pronome pessoal correspondente? "She"',
    answers: [
      { answer: 'Eu', correct: false },
      { answer: 'Você', correct: false },
      { answer: 'Ele', correct: false },
      { answer: 'Ela', correct: true },
    ],
  },

  {
    question: 'Qual é o pronome pessoal correspondente? "We"',
    answers: [
      { answer: 'Eu', correct: false },
      { answer: 'Você', correct: false },
      { answer: 'Ele', correct: false },
      { answer: 'Nós', correct: true },
    ],
  },

  {
    question: 'Qual é o pronome pessoal correspondente? "They"',
    answers: [
      { answer: 'Eu', correct: false },
      { answer: 'Você', correct: false },
      { answer: 'Ele', correct: false },
      { answer: 'Eles/Elas', correct: true },
    ],
  },

  // Novas perguntas
  {
    question: 'Qual é o pronome pessoal correspondente? "It"',
    answers: [
      { answer: 'Eu', correct: false },
      { answer: 'Você', correct: false },
      { answer: 'Ele', correct: false },
      { answer: 'Ele/Ela (para objetos, animais ou conceitos)', correct: true },
    ],
  },

  {
    question: 'Qual é o pronome pessoal correspondente? "You all"',
    answers: [
      { answer: 'Tu', correct: false },
      { answer: 'Vocês', correct: true },
      { answer: 'Ele', correct: false },
      { answer: 'Nós', correct: false },
    ],
  },

  {
    question: 'Qual é o pronome pessoal correspondente? "He"',
    answers: [
      { answer: 'Eu', correct: false },
      { answer: 'Você', correct: false },
      { answer: 'Ele', correct: true },
      { answer: 'Nós', correct: false },
    ],
  },

  {
    question: 'Qual é o pronome pessoal correspondente? "She"',
    answers: [
      { answer: 'Eu', correct: false },
      { answer: 'Você', correct: false },
      { answer: 'Ele', correct: false },
      { answer: 'Ela', correct: true },
    ],
  },

  {
    question: 'Qual é o pronome pessoal correspondente? "Us"',
    answers: [
      { answer: 'Eu', correct: false },
      { answer: 'Você', correct: false },
      { answer: 'Ele', correct: false },
      { answer: 'Nós', correct: true },
    ],
  },

  {
    question: 'Qual é o pronome pessoal correspondente? "Them"',
    answers: [
      { answer: 'Eu', correct: false },
      { answer: 'Você', correct: false },
      { answer: 'Ele', correct: false },
      { answer: 'Eles/Elas', correct: true },
    ],
  },

  {
    question: 'Qual é o pronome pessoal correspondente? "Me"',
    answers: [
      { answer: 'Eu', correct: true },
      { answer: 'Você', correct: false },
      { answer: 'Ele', correct: false },
      { answer: 'Nós', correct: false },
    ],
  },

  {
    question: 'Qual é o pronome pessoal correspondente? "Him"',
    answers: [
      { answer: 'Eu', correct: false },
      { answer: 'Você', correct: false },
      { answer: 'Ele', correct: true },
      { answer: 'Nós', correct: false },
    ],
  },

  {
    question: 'Qual é o pronome pessoal correspondente? "Her"',
    answers: [
      { answer: 'Eu', correct: false },
      { answer: 'Você', correct: false },
      { answer: 'Ele', correct: false },
      { answer: 'Ela', correct: true },
    ],
  },

  {
    question: 'Qual é o pronome pessoal correspondente? "They"',
    answers: [
      { answer: 'Eu', correct: false },
      { answer: 'Você', correct: false },
      { answer: 'Ele', correct: false },
      { answer: 'Eles/Elas', correct: true },
    ],
  },

  {
    question: 'Qual é o pronome pessoal correspondente? "You"',
    answers: [
      { answer: 'Eu', correct: false },
      { answer: 'Você', correct: true },
      { answer: 'Ele', correct: false },
      { answer: 'Nós', correct: false },
    ],
  },

  {
    question: 'Qual é o pronome pessoal correspondente? "We"',
    answers: [
      { answer: 'Eu', correct: false },
      { answer: 'Você', correct: false },
      { answer: 'Ele', correct: false },
      { answer: 'Nós', correct: true },
    ],
  },

  {
    question: 'Qual é o pronome pessoal correspondente? "She"',
    answers: [
      { answer: 'Eu', correct: false },
      { answer: 'Você', correct: false },
      { answer: 'Ele', correct: false },
      { answer: 'Ela', correct: true },
    ],
  },

  {
    question: 'Qual é o pronome pessoal correspondente? "He"',
    answers: [
      { answer: 'Eu', correct: false },
      { answer: 'Você', correct: false },
      { answer: 'Ele', correct: true },
      { answer: 'Nós', correct: false },
    ],
  },

  {
    question: 'Qual é o pronome possessivo correspondente? "My"',
    answers: [
      { answer: 'Meu/Minha', correct: true },
      { answer: 'Seu/Sua', correct: false },
      { answer: 'Dele', correct: false },
      { answer: 'Dela', correct: false },
    ],
  },

  {
    question: 'Qual é o pronome possessivo correspondente? "Your"',
    answers: [
      { answer: 'Meu/Minha', correct: false },
      { answer: 'Seu/Sua', correct: true },
      { answer: 'Dele', correct: false },
      { answer: 'Dela', correct: false },
    ],
  },

  {
    question: 'Qual é o pronome possessivo correspondente? "His"',
    answers: [
      { answer: 'Meu/Minha', correct: false },
      { answer: 'Seu/Sua', correct: false },
      { answer: 'Dele', correct: true },
      { answer: 'Dela', correct: false },
    ],
  },

  {
    question: 'Qual é o pronome possessivo correspondente? "Her"',
    answers: [
      { answer: 'Meu/Minha', correct: false },
      { answer: 'Seu/Sua', correct: false },
      { answer: 'Dele', correct: false },
      { answer: 'Dela', correct: true },
    ],
  },

  {
    question: 'Qual é o pronome possessivo correspondente? "Its"',
    answers: [
      { answer: 'Meu/Minha', correct: false },
      { answer: 'Seu/Sua', correct: true },
      { answer: 'Dele', correct: false },
      { answer: 'Dela', correct: false },
    ],
  },

  {
    question: 'Qual é o pronome possessivo correspondente? "Our"',
    answers: [
      { answer: 'Meu/Minha', correct: false },
      { answer: 'Seu/Sua', correct: false },
      { answer: 'Dele', correct: false },
      { answer: 'Nós', correct: true },
    ],
  },

  {
    question: 'Qual é o pronome possessivo correspondente? "Their"',
    answers: [
      { answer: 'Meu/Minha', correct: false },
      { answer: 'Seu/Sua', correct: false },
      { answer: 'Dele', correct: false },
      { answer: 'Deles/Delas', correct: true },
    ],
  },

  {
    question: 'Qual é o pronome reflexivo correspondente? "Myself"',
    answers: [
      { answer: 'Eu mesmo/a', correct: true },
      { answer: 'Você mesmo/a', correct: false },
      { answer: 'Ele mesmo', correct: false },
      { answer: 'Ela mesma', correct: false },
    ],
  },

  {
    question: 'Qual é o pronome reflexivo correspondente? "Yourself"',
    answers: [
      { answer: 'Eu mesmo/a', correct: false },
      { answer: 'Você mesmo/a', correct: true },
      { answer: 'Ele mesmo', correct: false },
      { answer: 'Ela mesma', correct: false },
    ],
  },

  {
    question: 'Qual é o pronome reflexivo correspondente? "Himself"',
    answers: [
      { answer: 'Eu mesmo/a', correct: false },
      { answer: 'Você mesmo/a', correct: false },
      { answer: 'Ele mesmo', correct: true },
      { answer: 'Ela mesma', correct: false },
    ],
  },

  {
    question: 'Qual é o pronome reflexivo correspondente? "Herself"',
    answers: [
      { answer: 'Eu mesmo/a', correct: false },
      { answer: 'Você mesmo/a', correct: false },
      { answer: 'Ele mesmo', correct: false },
      { answer: 'Ela mesma', correct: true },
    ],
  },

  {
    question: 'Qual é o pronome reflexivo correspondente? "Itself"',
    answers: [
      { answer: 'Eu mesmo/a', correct: false },
      { answer: 'Você mesmo/a', correct: false },
      { answer: 'Ele mesmo', correct: false },
      { answer: 'Ele/a mesma (para objetos, animais ou conceitos)', correct: true },
    ],
  },

  {
    question: 'Qual é o pronome reflexivo correspondente? "Ourselves"',
    answers: [
      { answer: 'Nós mesmos/as', correct: true },
      { answer: 'Vocês mesmos/as', correct: false },
      { answer: 'Eles/as mesmos/as', correct: false },
      { answer: 'Eu mesmo/a', correct: false },
    ],
  },

  {
    question: 'Qual é o pronome reflexivo correspondente? "Yourselves"',
    answers: [
      { answer: 'Nós mesmos/as', correct: false },
      { answer: 'Vocês mesmos/as', correct: true },
      { answer: 'Eles/as mesmos/as', correct: false },
      { answer: 'Eu mesmo/a', correct: false },
    ],
  },

  {
    question: 'Qual é o pronome reflexivo correspondente? "Themselves"',
    answers: [
      { answer: 'Nós mesmos/as', correct: false },
      { answer: 'Vocês mesmos/as', correct: false },
      { answer: 'Eles/as mesmos/as', correct: true },
      { answer: 'Eu mesmo/a', correct: false },
    ],
  },

  {
    question: 'Qual é o pronome demonstrativo correspondente? "This"',
    answers: [
      { answer: 'Este/Esta', correct: true },
      { answer: 'Esses/Essas', correct: false },
      { answer: 'Aquele/Aquela', correct: false },
      { answer: 'Aqueles/Aquelas', correct: false },
    ],
  },

  {
    question: 'Qual é o pronome demonstrativo correspondente? "That"',
    answers: [
      { answer: 'Este/Esta', correct: false },
      { answer: 'Esses/Essas', correct: false },
      { answer: 'Aquele/Aquela', correct: true },
      { answer: 'Aqueles/Aquelas', correct: false },
    ],
  },

  {
    question: 'Qual é o pronome demonstrativo correspondente? "These"',
    answers: [
      { answer: 'Este/Esta', correct: false },
      { answer: 'Esses/Essas', correct: false },
      { answer: 'Aquele/Aquela', correct: false },
      { answer: 'Aqueles/Aquelas', correct: true },
    ],
  },

  {
    question: 'Qual é o pronome demonstrativo correspondente? "Those"',
    answers: [
      { answer: 'Este/Esta', correct: false },
      { answer: 'Esses/Essas', correct: true },
      { answer: 'Aquele/Aquela', correct: false },
      { answer: 'Aqueles/Aquelas', correct: false },
    ],
  },

  {
    question: 'Qual é o pronome interrogativo correspondente? "Who"',
    answers: [
      { answer: 'Quem', correct: true },
      { answer: 'A quem', correct: false },
      { answer: 'De quem', correct: false },
      { answer: 'O que', correct: false },
    ],
  },

  {
    question: 'Qual é o pronome interrogativo correspondente? "Whom"',
    answers: [
      { answer: 'Quem', correct: false },
      { answer: 'A quem', correct: true },
      { answer: 'De quem', correct: false },
      { answer: 'O que', correct: false },
    ],
  },

  {
    question: 'Qual é o pronome interrogativo correspondente? "Whose"',
    answers: [
      { answer: 'Quem', correct: false },
      { answer: 'A quem', correct: false },
      { answer: 'De quem', correct: true },
      { answer: 'O que', correct: false },
    ],
  },

  {
    question: 'Qual é o pronome interrogativo correspondente? "What"',
    answers: [
      { answer: 'Quem', correct: false },
      { answer: 'A quem', correct: false },
      { answer: 'De quem', correct: false },
      { answer: 'O que', correct: true },
    ],
  },

  {
    question: 'Qual é o pronome interrogativo correspondente? "Which"',
    answers: [
      { answer: 'Quem', correct: false },
      { answer: 'A quem', correct: false },
      { answer: 'De quem', correct: false },
      { answer: 'Qual', correct: true },
    ],
  },

  {
    question: 'Qual é o pronome indefinido correspondente? "Anyone"',
    answers: [
      { answer: 'Qualquer pessoa', correct: true },
      { answer: 'Alguém', correct: false },
      { answer: 'Ninguém', correct: false },
      { answer: 'Todo mundo', correct: false },
    ],
  },

  {
    question: 'Qual é o pronome indefinido correspondente? "Someone"',
    answers: [
      { answer: 'Qualquer pessoa', correct: false },
      { answer: 'Alguém', correct: true },
      { answer: 'Ninguém', correct: false },
      { answer: 'Todo mundo', correct: false },
    ],
  },

  {
    question: 'Qual é o pronome indefinido correspondente? "No one"',
    answers: [
      { answer: 'Qualquer pessoa', correct: false },
      { answer: 'Alguém', correct: false },
      { answer: 'Ninguém', correct: true },
      { answer: 'Todo mundo', correct: false },
    ],
  },

  {
    question: 'Qual é o pronome indefinido correspondente? "Everybody"',
    answers: [
      { answer: 'Qualquer pessoa', correct: false },
      { answer: 'Alguém', correct: false },
      { answer: 'Ninguém', correct: false },
      { answer: 'Todo mundo', correct: true },
    ],
  },

  {
    question: 'Qual é o pronome indefinido correspondente? "Nobody"',
    answers: [
      { answer: 'Qualquer pessoa', correct: false },
      { answer: 'Alguém', correct: false },
      { answer: 'Ninguém', correct: true },
      { answer: 'Todo mundo', correct: false },
    ],
  },

  {
    question: 'Qual é o pronome indefinido correspondente? "Somebody"',
    answers: [
      { answer: 'Qualquer pessoa', correct: false },
      { answer: 'Alguém', correct: true },
      { answer: 'Ninguém', correct: false },
      { answer: 'Todo mundo', correct: false },
    ],
  },

  {
    question: 'Qual é o pronome indefinido correspondente? "Each"',
    answers: [
      { answer: 'Qualquer pessoa', correct: false },
      { answer: 'Alguém', correct: false },
      { answer: 'Ninguém', correct: false },
      { answer: 'Cada um', correct: true },
    ],
  },

  {
    question: 'Qual é o pronome indefinido correspondente? "Either"',
    answers: [
      { answer: 'Qualquer pessoa', correct: false },
      { answer: 'Alguém', correct: false },
      { answer: 'Ninguém', correct: false },
      { answer: 'Qualquer um (de dois)', correct: true },
    ],
  },

  {
    question: 'Qual é o pronome indefinido correspondente? "Neither"',
    answers: [
      { answer: 'Qualquer pessoa', correct: false },
      { answer: 'Alguém', correct: false },
      { answer: 'Ninguém', correct: false },
      { answer: 'Nenhum (de dois)', correct: true },
    ],
  },

  {
    question: 'Qual é o pronome indefinido correspondente? "Both"',
    answers: [
      { answer: 'Qualquer pessoa', correct: false },
      { answer: 'Alguém', correct: false },
      { answer: 'Ninguém', correct: false },
      { answer: 'Ambos/Todos', correct: true },
    ],
  },

  {
    question: 'Qual é o pronome indefinido correspondente? "All"',
    answers: [
      { answer: 'Qualquer pessoa', correct: false },
      { answer: 'Alguém', correct: false },
      { answer: 'Ninguém', correct: false },
      { answer: 'Todos', correct: true },
    ],
  },

  {
    question: 'Qual é o pronome indefinido correspondente? "Any"',
    answers: [
      { answer: 'Qualquer pessoa', correct: false },
      { answer: 'Alguém', correct: false },
      { answer: 'Ninguém', correct: false },
      { answer: 'Qualquer um', correct: true },
    ],
  },

  {
    question: 'Qual é o pronome indefinido correspondente? "Some"',
    answers: [
      { answer: 'Qualquer pessoa', correct: false },
      { answer: 'Alguém', correct: true },
      { answer: 'Ninguém', correct: false },
      { answer: 'Todos', correct: false },
    ],
  },

  {
    question: 'Qual é o pronome indefinido correspondente? "None"',
    answers: [
      { answer: 'Qualquer pessoa', correct: false },
      { answer: 'Alguém', correct: false },
      { answer: 'Ninguém', correct: true },
      { answer: 'Todos', correct: false },
    ],
  },

  {
    question: 'Qual é o pronome indefinido correspondente? "Few"',
    answers: [
      { answer: 'Qualquer pessoa', correct: false },
      { answer: 'Alguém', correct: false },
      { answer: 'Ninguém', correct: false },
      { answer: 'Poucos', correct: true },
    ],
  },

  {
    question: 'Qual é o pronome indefinido correspondente? "Several"',
    answers: [
      { answer: 'Qualquer pessoa', correct: false },
      { answer: 'Alguém', correct: false },
      { answer: 'Ninguém', correct: false },
      { answer: 'Vários', correct: true },
    ],
  },

  {
    question: 'Qual é o pronome indefinido correspondente? "Many"',
    answers: [
      { answer: 'Qualquer pessoa', correct: false },
      { answer: 'Alguém', correct: false },
      { answer: 'Ninguém', correct: false },
      { answer: 'Muitos', correct: true },
    ],
  },

  {
    question: 'Qual é o pronome indefinido correspondente? "One"',
    answers: [
      { answer: 'Qualquer pessoa', correct: false },
      { answer: 'Alguém', correct: false },
      { answer: 'Ninguém', correct: false },
      { answer: 'Um', correct: true },
    ],
  },

  {
    question: 'Qual é o pronome indefinido correspondente? "Another"',
    answers: [
      { answer: 'Qualquer pessoa', correct: false },
      { answer: 'Alguém', correct: false },
      { answer: 'Ninguém', correct: false },
      { answer: 'Outro', correct: true },
    ],
  },

  {
    question: 'Qual é o pronome indefinido correspondente? "Others"',
    answers: [
      { answer: 'Qualquer pessoa', correct: false },
      { answer: 'Alguém', correct: false },
      { answer: 'Ninguém', correct: false },
      { answer: 'Outros', correct: true },
    ],
  },

  {
    question: 'Qual é o pronome indefinido ou quantificador correspondente? "Some"',
    answers: [
      { answer: 'Algum', correct: true },
      { answer: 'Qualquer', correct: false },
      { answer: 'Muito', correct: false },
      { answer: 'Vários', correct: false },
    ],
  },

  {
    question: 'Qual é o pronome indefinido ou quantificador correspondente? "Any"',
    answers: [
      { answer: 'Algum', correct: false },
      { answer: 'Qualquer', correct: true },
      { answer: 'Muito', correct: false },
      { answer: 'Vários', correct: false },
    ],
  },

  {
    question: 'Qual é o pronome indefinido ou quantificador correspondente? "Much"',
    answers: [
      { answer: 'Algum', correct: false },
      { answer: 'Qualquer', correct: false },
      { answer: 'Muito', correct: true },
      { answer: 'Vários', correct: false },
    ],
  },

  {
    question: 'Qual é o pronome indefinido ou quantificador correspondente? "Many"',
    answers: [
      { answer: 'Algum', correct: false },
      { answer: 'Qualquer', correct: false },
      { answer: 'Muito', correct: false },
      { answer: 'Muitos', correct: true },
    ],
  },

  {
    question: 'Qual é o pronome indefinido ou quantificador correspondente? "More"',
    answers: [
      { answer: 'Algum', correct: false },
      { answer: 'Qualquer', correct: false },
      { answer: 'Muito', correct: false },
      { answer: 'Mais', correct: true },
    ],
  },

  {
    question: 'Qual é o pronome indefinido ou quantificador correspondente? "Most"',
    answers: [
      { answer: 'Algum', correct: false },
      { answer: 'Qualquer', correct: false },
      { answer: 'Muito', correct: false },
      { answer: 'A maioria', correct: true },
    ],
  },

  {
    question: 'Qual é o pronome indefinido ou quantificador correspondente? "A lot"',
    answers: [
      { answer: 'Algum', correct: false },
      { answer: 'Qualquer', correct: false },
      { answer: 'Muito', correct: true },
      { answer: 'Vários', correct: false },
    ],
  },

  {
    question: 'Qual é o pronome indefinido ou quantificador correspondente? "A few"',
    answers: [
      { answer: 'Algum', correct: false },
      { answer: 'Qualquer', correct: false },
      { answer: 'Muito', correct: false },
      { answer: 'Alguns', correct: true },
    ],
  },

  {
    question: 'Qual é o pronome indefinido ou quantificador correspondente? "A little"',
    answers: [
      { answer: 'Algum', correct: false },
      { answer: 'Qualquer', correct: false },
      { answer: 'Muito', correct: false },
      { answer: 'Um pouco', correct: true },
    ],
  },

  {
    question: 'Qual é o pronome indefinido ou quantificador correspondente? "Several"',
    answers: [
      { answer: 'Algum', correct: false },
      { answer: 'Qualquer', correct: false },
      { answer: 'Muito', correct: false },
      { answer: 'Vários', correct: true },
    ],
  },

  {
    question: 'Qual é o pronome indefinido ou quantificador correspondente? "Few"',
    answers: [
      { answer: 'Algum', correct: false },
      { answer: 'Qualquer', correct: false },
      { answer: 'Muito', correct: false },
      { answer: 'Poucos', correct: true },
    ],
  },

  {
    question: 'Qual é o pronome indefinido ou quantificador correspondente? "Little"',
    answers: [
      { answer: 'Algum', correct: false },
      { answer: 'Qualquer', correct: false },
      { answer: 'Muito', correct: false },
      { answer: 'Pouco', correct: true },
    ],
  },


];
// Inicialização do quizz

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
