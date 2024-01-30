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
 
// Adicione mais perguntas conforme necessário
{
  question: 'Traduza o verbo: "Escovar"',
  answers: [
    { answer: 'Brush', correct: true },
    { answer: 'Comb', correct: false },
    { answer: 'Wash', correct: false },
    { answer: 'Scratch', correct: false },
  ],
},
{
  question: 'Qual é a tradução correta do verbo? "Ajudar"',
  answers: [
    { answer: 'Help', correct: true },
    { answer: 'Hinder', correct: false },
    { answer: 'Obstruct', correct: false },
    { answer: 'Ignore', correct: false },
  ],
},
{
  question: 'Traduza o verbo: "Chorar"',
  answers: [
    { answer: 'Cry', correct: true },
    { answer: 'Laugh', correct: false },
    { answer: 'Smile', correct: false },
    { answer: 'Talk', correct: false },
  ],
},
{
  question: 'Qual é a tradução correta do verbo? "Conversar"',
  answers: [
    { answer: 'Talk', correct: true },
    { answer: 'Listen', correct: false },
    { answer: 'Chat', correct: false },
    { answer: 'Read', correct: false },
  ],
},
{
  question: 'Traduza o verbo: "Corrigir"',
  answers: [
    { answer: 'Correct', correct: true },
    { answer: 'Fix', correct: false },
    { answer: 'Break', correct: false },
    { answer: 'Destroy', correct: false },
  ],
},
{
  question: 'Qual é a tradução correta do verbo? "Decidir"',
  answers: [
    { answer: 'Decide', correct: true },
    { answer: 'Consider', correct: false },
    { answer: 'Delay', correct: false },
    { answer: 'Deny', correct: false },
  ],
},
{
  question: 'Traduza o verbo: "Desistir"',
  answers: [
    { answer: 'Give up', correct: true },
    { answer: 'Continue', correct: false },
    { answer: 'Start', correct: false },
    { answer: 'Finish', correct: false },
  ],
},
{
  question: 'Qual é a tradução correta do verbo? "Discutir"',
  answers: [
    { answer: 'Discuss', correct: true },
    { answer: 'Argue', correct: false },
    { answer: 'Agree', correct: false },
    { answer: 'Ignore', correct: false },
  ],
},
{
  question: 'Traduza o verbo: "Empurrar"',
  answers: [
    { answer: 'Push', correct: true },
    { answer: 'Pull', correct: false },
    { answer: 'Lift', correct: false },
    { answer: 'Drop', correct: false },
  ],
},
{
  question: 'Qual é a tradução correta do verbo? "Enganar"',
  answers: [
    { answer: 'Deceive', correct: true },
    { answer: 'Honest', correct: false },
    { answer: 'Trust', correct: false },
    { answer: 'Reveal', correct: false },
  ],
},
{
  question: 'Traduza o verbo: "Esperar"',
  answers: [
    { answer: 'Wait', correct: true },
    { answer: 'Hurry', correct: false },
    { answer: 'Skip', correct: false },
    { answer: 'Sleep', correct: false },
  ],
},
{
  question: 'Qual é a tradução correta do verbo? "Exercitar"',
  answers: [
    { answer: 'Exercise', correct: true },
    { answer: 'Rest', correct: false },
    { answer: 'Relax', correct: false },
    { answer: 'Eat', correct: false },
  ],
},
{
  question: 'Traduza o verbo: "Explorar"',
  answers: [
    { answer: 'Explore', correct: true },
    { answer: 'Discover', correct: false },
    { answer: 'Hide', correct: false },
    { answer: 'Escape', correct: false },
  ],
},
{
  question: 'Qual é a tradução correta do verbo? "Gritar"',
  answers: [
    { answer: 'Scream', correct: true },
    { answer: 'Whisper', correct: false },
    { answer: 'Talk', correct: false },
    { answer: 'Laugh', correct: false },
  ],
},
{
  question: 'Traduza o verbo: "Ignorar"',
  answers: [
    { answer: 'Ignore', correct: true },
    { answer: 'Notice', correct: false },
    { answer: 'Recognize', correct: false },
    { answer: 'Remember', correct: false },
  ],
},
{
  question: 'Qual é a tradução correta do verbo? "Inventar"',
  answers: [
    { answer: 'Invent', correct: true },
    { answer: 'Copy', correct: false },
    { answer: 'Destroy', correct: false },
    { answer: 'Observe', correct: false },
  ],
},
{
  question: 'Traduza o verbo: "Lembrar"',
  answers: [
    { answer: 'Remember', correct: true },
    { answer: 'Forget', correct: false },
    { answer: 'Recall', correct: false },
    { answer: 'Remind', correct: false },
  ],
},
{
  question: 'Qual é a tradução correta do verbo? "Lutar"',
  answers: [
    { answer: 'Fight', correct: true },
    { answer: 'Peace', correct: false },
    { answer: 'Surrender', correct: false },
    { answer: 'Agree', correct: false },
  ],
},
{
  question: 'Traduza o verbo: "Melhorar"',
  answers: [
    { answer: 'Improve', correct: true },
    { answer: 'Worsen', correct: false },
    { answer: 'Maintain', correct: false },
    { answer: 'Accept', correct: false },
  ],
},
{
  question: 'Qual é a tradução correta do verbo? "Navegar"',
  answers: [
    { answer: 'Navigate', correct: true },
    { answer: 'Sail', correct: false },
    { answer: 'Fly', correct: false },
    { answer: 'Drive', correct: false },
  ],
},
{
  question: 'Traduza o verbo: "Observar"',
  answers: [
    { answer: 'Observe', correct: true },
    { answer: 'Ignore', correct: false },
    { answer: 'Stare', correct: false },
    { answer: 'Watch', correct: false },
  ],
},
{
  question: 'Qual é a tradução correta do verbo? "Ocultar"',
  answers: [
    { answer: 'Hide', correct: true },
    { answer: 'Show', correct: false },
    { answer: 'Exhibit', correct: false },
    { answer: 'Reveal', correct: false },
  ],
},
{
  question: 'Traduza o verbo: "Pensar"',
  answers: [
    { answer: 'Think', correct: true },
    { answer: 'Remember', correct: false },
    { answer: 'Understand', correct: false },
    { answer: 'Forget', correct: false },
  ],
},
{
  question: 'Qual é a tradução correta do verbo? "Proteger"',
  answers: [
    { answer: 'Protect', correct: true },
    { answer: 'Attack', correct: false },
    { answer: 'Defend', correct: false },
    { answer: 'Hurt', correct: false },
  ],
},
{
  question: 'Traduza o verbo: "Quebrar"',
  answers: [
    { answer: 'Break', correct: true },
    { answer: 'Fix', correct: false },
    { answer: 'Build', correct: false },
    { answer: 'Create', correct: false },
  ],
},
{
  question: 'Qual é a tradução correta do verbo? "Reparar"',
  answers: [
    { answer: 'Fix', correct: true },
    { answer: 'Break', correct: false },
    { answer: 'Build', correct: false },
    { answer: 'Destroy', correct: false },
  ],
},
{
  question: 'Traduza o verbo: "Saltar"',
  answers: [
    { answer: 'Jump', correct: true },
    { answer: 'Run', correct: false },
    { answer: 'Climb', correct: false },
    { answer: 'Dance', correct: false },
  ],
},
{
  question: 'Qual é a tradução correta do verbo? "Salvar"',
  answers: [
    { answer: 'Save', correct: true },
    { answer: 'Delete', correct: false },
    { answer: 'Lose', correct: false },
    { answer: 'Recover', correct: false },
  ],
},
{
  question: 'Traduza o verbo: "Sorrir"',
  answers: [
    { answer: 'Smile', correct: true },
    { answer: 'Cry', correct: false },
    { answer: 'Laugh', correct: false },
    { answer: 'Talk', correct: false },
  ],
},
{
question: 'Qual é a tradução correta do verbo? "Sugerir"',
answers: [
{ answer: 'Suggest', correct: true },
{ answer: 'Recommend', correct: false },
{ answer: 'Command', correct: false },
{ answer: 'Request', correct: false },
],
},
{
question: 'Traduza o verbo: "Telefonar"',
answers: [
{ answer: 'Call', correct: true },
{ answer: 'Text', correct: false },
{ answer: 'Email', correct: false },
{ answer: 'Visit', correct: false },
],
},
{
question: 'Qual é a tradução correta do verbo? "Tocar (um instrumento)"',
answers: [
{ answer: 'Play', correct: true },
{ answer: 'Sing', correct: false },
{ answer: 'Compose', correct: false },
{ answer: 'Dance', correct: false },
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
question: 'Qual é a tradução correta do verbo? "Usar"',
answers: [
{ answer: 'Use', correct: true },
{ answer: 'Wear', correct: false },
{ answer: 'Consume', correct: false },
{ answer: 'Create', correct: false },
],
},
{
question: 'Traduza o verbo: "Vender"',
answers: [
{ answer: 'Sell', correct: true },
{ answer: 'Buy', correct: false },
{ answer: 'Trade', correct: false },
{ answer: 'Offer', correct: false },
],
},
{
question: 'Qual é a tradução correta do verbo? "Ver"',
answers: [
{ answer: 'See', correct: true },
{ answer: 'Look', correct: false },
{ answer: 'Watch', correct: false },
{ answer: 'Read', correct: false },
],
},
{
question: 'Traduza o verbo: "Viajar"',
answers: [
{ answer: 'Travel', correct: true },
{ answer: 'Drive', correct: false },
{ answer: 'Fly', correct: false },
{ answer: 'Walk', correct: false },
],
},
{
question: 'Qual é a tradução correta do verbo? "Visitar"',
answers: [
{ answer: 'Visit', correct: true },
{ answer: 'Travel', correct: false },
{ answer: 'Explore', correct: false },
{ answer: 'Depart', correct: false },
],
},
{
question: 'Traduza o verbo: "Voltar"',
answers: [
{ answer: 'Return', correct: true },
{ answer: 'Leave', correct: false },
{ answer: 'Go', correct: false },
{ answer: 'Arrive', correct: false },
],
},
{
question: 'Qual é a tradução correta do verbo? "Zombar"',
answers: [
{ answer: 'Mock', correct: true },
{ answer: 'Praise', correct: false },
{ answer: 'Ignore', correct: false },
{ answer: 'Encourage', correct: false },
],
},
{
question: 'Traduza o verbo: "Abraçar"',
answers: [
{ answer: 'Hug', correct: true },
{ answer: 'Kiss', correct: false },
{ answer: 'Shake hands', correct: false },
{ answer: 'Fight', correct: false },
],
},
{
question: 'Qual é a tradução correta do verbo? "Admirar"',
answers: [
{ answer: 'Admire', correct: true },
{ answer: 'Disapprove', correct: false },
{ answer: 'Ignore', correct: false },
{ answer: 'Criticize', correct: false },
],
},
{
question: 'Traduza o verbo: "Aproveitar"',
answers: [
{ answer: 'Enjoy', correct: true },
{ answer: 'Endure', correct: false },
{ answer: 'Suffer', correct: false },
{ answer: 'Ignore', correct: false },
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
question: 'Traduza o verbo: "Atacar"',
answers: [
{ answer: 'Attack', correct: true },
{ answer: 'Defend', correct: false },
{ answer: 'Retreat', correct: false },
{ answer: 'Negotiate', correct: false },
],
},
{
question: 'Qual é a tradução correta do verbo? "Atrair"',
answers: [
{ answer: 'Attract', correct: true },
{ answer: 'Repel', correct: false },
{ answer: 'Ignore', correct: false },
{ answer: 'Avoid', correct: false },
],
},
{
question: 'Traduza o verbo: "Aumentar"',
answers: [
{ answer: 'Increase', correct: true },
{ answer: 'Decrease', correct: false },
{ answer: 'Maintain', correct: false },
{ answer: 'Stabilize', correct: false },
],
},
{
question: 'Qual é a tradução correta do verbo? "Avisar"',
answers: [
{ answer: 'Warn', correct: true },
{ answer: 'Inform', correct: false },
{ answer: 'Comfort', correct: false },
{ answer: 'Encourage', correct: false },
],
},
{
question: 'Traduza o verbo: "Beijar"',
answers: [
{ answer: 'Kiss', correct: true },
{ answer: 'Hug', correct: false },
{ answer: 'Shake hands', correct: false },
{ answer: 'Fight', correct: false },
],
},
{
question: 'Qual é a tradução correta do verbo? "Brilhar"',
answers: [
{ answer: 'Shine', correct: true },
{ answer: 'Darken', correct: false },
{ answer: 'Hide', correct: false },
{ answer: 'Glow', correct: false },
],
},
{
question: 'Traduza o verbo: "Caminhar"',
answers: [
{ answer: 'Walk', correct: true },
{ answer: 'Run', correct: false },
{ answer: 'Jump', correct: false },
{ answer: 'Climb', correct: false },
],
},
{
question: 'Qual é a tradução correta do verbo? "Cancelar"',
answers: [
{ answer: 'Cancel', correct: true },
{ answer: 'Postpone', correct: false },
{ answer: 'Proceed', correct: false },
{ answer: 'Complete', correct: false },
],
},
{
question: 'Traduza o verbo: "Celebrar"',
answers: [
{ answer: 'Celebrate', correct: true },
{ answer: 'Mourn', correct: false },
{ answer: 'Ignore', correct: false },
{ answer: 'Avoid', correct: false },
],
},
{
question: 'Qual é a tradução correta do verbo? "Chorar"',
answers: [
{ answer: 'Cry', correct: true },
{ answer: 'Laugh', correct: false },
{ answer: 'Smile', correct: false },
{ answer: 'Talk', correct: false },
],
},
{
question: 'Traduza o verbo: "Cozinhar"',
answers: [
{ answer: 'Cook', correct: true },
{ answer: 'Eat', correct: false },
{ answer: 'Drink', correct: false },
{ answer: 'Smell', correct: false },
],
},
{
question: 'Qual é a tradução correta do verbo? "Crescer"',
answers: [
{ answer: 'Grow', correct: true },
{ answer: 'Shrink', correct: false },
{ answer: 'Maintain', correct: false },
{ answer: 'Cut', correct: false },
],
},
{
question: 'Traduza o verbo: "Criticar"',
answers: [
{ answer: 'Critique', correct: true },
{ answer: 'Praise', correct: false },
{ answer: 'Ignore', correct: false },
{ answer: 'Support', correct: false },
],
},
{
question: 'Qual é a tradução correta do verbo? "Cuidar"',
answers: [
{ answer: 'Take care', correct: true },
{ answer: 'Neglect', correct: false },
{ answer: 'Ignore', correct: false },
{ answer: 'Harm', correct: false },
],
},
{
question: 'Traduza o verbo: "Dançar"',
answers: [
{ answer: 'Dance', correct: true },
{ answer: 'Jump', correct: false },
{ answer: 'Run', correct: false },
{ answer: 'Climb', correct: false },
],
},
{
question: 'Qual é a tradução correta do verbo? "Decidir"',
answers: [
{ answer: 'Decide', correct: true },
{ answer: 'Consider', correct: false },
{ answer: 'Delay', correct: false },
{ answer: 'Deny', correct: false },
],
},
{
question: 'Traduza o verbo: "Desenhar"',
answers: [
{ answer: 'Draw', correct: true },
{ answer: 'Write', correct: false },
{ answer: 'Paint', correct: false },
{ answer: 'Read', correct: false },
],
},
{
question: 'Qual é a tradução correta do verbo? "Desistir"',
answers: [
{ answer: 'Give up', correct: true },
{ answer: 'Continue', correct: false },
{ answer: 'Start', correct: false },
{ answer: 'Finish', correct: false },
],
},
{
question: 'Traduza o verbo: "Dormir"',
answers: [
{ answer: 'Sleep', correct: true },
{ answer: 'Eat', correct: false },
{ answer: 'Wake up', correct: false },
{ answer: 'Dream', correct: false },
],
},
{
question: 'Qual é a tradução correta do verbo? "Economizar"',
answers: [
{ answer: 'Save (money)', correct: true },
{ answer: 'Spend', correct: false },
{ answer: 'Waste', correct: false },
{ answer: 'Invest', correct: false },
],
},
{
question: 'Traduza o verbo: "Embrulhar"',
answers: [
{ answer: 'Wrap', correct: true },
{ answer: 'Unwrap', correct: false },
{ answer: 'Fold', correct: false },
{ answer: 'Tear', correct: false },
],
},
{
question: 'Qual é a tradução correta do verbo? "Encontrar"',
answers: [
{ answer: 'Find', correct: true },
{ answer: 'Lose', correct: false },
{ answer: 'Search', correct: false },
{ answer: 'Hide', correct: false },
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

  // Embaralhar as respostas
  const shuffledAnswers = shuffleArray(questions[i].answers);

  shuffledAnswers.forEach((answer, i) => {
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
      checkAnswerQuizz(this);
    });
  });

  // incrementar o número da questão
  actualQuestion++;
}

// verificar resposta do usuário
function checkAnswerQuizz(btn) {
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
        // chama a função para verificar se todas as perguntas foram respondidas
        checkAllAnswersQuizz();
      }
    } else {
      button.classList.add('wrong-answer');
    }
  });

  // exibir próxima pergunta
  nextQuestion();
}

// verifica se todas as perguntas foram respondidas corretamente
function checkAllAnswersQuizz() {
  if (points === questions.length) {
    alert("Parabéns! Você acertou todas as perguntas.");
    // Adicione aqui o código adicional que desejar para quando todas as perguntas forem respondidas corretamente.
  }
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

// Função para embaralhar um array
function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}
