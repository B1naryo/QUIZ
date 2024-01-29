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

