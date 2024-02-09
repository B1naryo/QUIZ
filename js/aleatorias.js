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
    question: "O que significa 'feliz' em inglês?",
    answers: [
      { answer: "Happy", correct: true },
      { answer: "Sad", correct: false },
      { answer: "Angry", correct: false },
      { answer: "Excited", correct: false },
    ],
  },
  {
    question: "O que significa 'tempo' em inglês?",
    answers: [
      { answer: "Time", correct: true },
      { answer: "Clock", correct: false },
      { answer: "Space", correct: false },
      { answer: "Moment", correct: false },
    ],
  },
  {
    question: "O que significa 'grande' em inglês?",
    answers: [
      { answer: "Big", correct: true },
      { answer: "Small", correct: false },
      { answer: "Tall", correct: false },
      { answer: "Short", correct: false },
    ],
  },
  {
    question: "O que significa 'cidade' em inglês?",
    answers: [
      { answer: "City", correct: true },
      { answer: "Town", correct: false },
      { answer: "Village", correct: false },
      { answer: "Country", correct: false },
    ],
  },
  {
    question: "O que significa 'comida' em inglês?",
    answers: [
      { answer: "Food", correct: true },
      { answer: "Drink", correct: false },
      { answer: "Snack", correct: false },
      { answer: "Meal", correct: false },
    ],
  },
  {
    question: "O que significa 'água' em inglês?",
    answers: [
      { answer: "Water", correct: true },
      { answer: "Fire", correct: false },
      { answer: "Earth", correct: false },
      { answer: "Air", correct: false },
    ],
  },
  {
    question: "O que significa 'sol' em inglês?",
    answers: [
      { answer: "Sun", correct: true },
      { answer: "Moon", correct: false },
      { answer: "Star", correct: false },
      { answer: "Sky", correct: false },
    ],
  },
  {
    question: "O que significa 'livro' em inglês?",
    answers: [
      { answer: "Book", correct: true },
      { answer: "Pen", correct: false },
      { answer: "Paper", correct: false },
      { answer: "Pencil", correct: false },
    ],
  },
  {
    question: "O que significa 'olho' em inglês?",
    answers: [
      { answer: "Eye", correct: true },
      { answer: "Ear", correct: false },
      { answer: "Nose", correct: false },
      { answer: "Mouth", correct: false },
    ],
  },
  {
    question: "O que significa 'casa' em inglês?",
    answers: [
      { answer: "House", correct: true },
      { answer: "Apartment", correct: false },
      { answer: "Building", correct: false },
      { answer: "Room", correct: false },
    ],
  },
  {
    question: "O que significa 'carro' em inglês?",
    answers: [
      { answer: "Car", correct: true },
      { answer: "Bus", correct: false },
      { answer: "Bicycle", correct: false },
      { answer: "Train", correct: false },
    ],
  },
  {
    question: "O que significa 'música' em inglês?",
    answers: [
      { answer: "Music", correct: true },
      { answer: "Song", correct: false },
      { answer: "Dance", correct: false },
      { answer: "Instrument", correct: false },
    ],
  },
  {
    question: "O que significa 'trabalho' em inglês?",
    answers: [
      { answer: "Work", correct: true },
      { answer: "Job", correct: false },
      { answer: "Career", correct: false },
      { answer: "Task", correct: false },
    ],
  },
  {
    question: "O que significa 'amigo' em inglês?",
    answers: [
      { answer: "Friend", correct: true },
      { answer: "Buddy", correct: false },
      { answer: "Companion", correct: false },
      { answer: "Mate", correct: false },
    ],
  },
  {
    question: "O que significa 'família' em inglês?",
    answers: [
      { answer: "Family", correct: true },
      { answer: "Relatives", correct: false },
      { answer: "Parents", correct: false },
      { answer: "Siblings", correct: false },
    ],
  },
  {
    question: "O que significa 'tempo' (clima) em inglês?",
    answers: [
      { answer: "Weather", correct: true },
      { answer: "Time", correct: false },
      { answer: "Season", correct: false },
      { answer: "Clock", correct: false },
    ],
  },
  {
    question: "O que significa 'ver' em inglês?",
    answers: [
      { answer: "See", correct: true },
      { answer: "Look", correct: false },
      { answer: "Watch", correct: false },
      { answer: "Read", correct: false },
    ],
  },
  {
    question: "O que significa 'comer' em inglês?",
    answers: [
      { answer: "Eat", correct: true },
      { answer: "Cook", correct: false },
      { answer: "Drink", correct: false },
      { answer: "Taste", correct: false },
    ],
  },
  {
    question: "O que significa 'beber' em inglês?",
    answers: [
      { answer: "Drink", correct: true },
      { answer: "Eat", correct: false },
      { answer: "Sip", correct: false },
      { answer: "Swallow", correct: false },
    ],
  },
  {
    question: "O que significa 'caminhar' em inglês?",
    answers: [
      { answer: "Walk", correct: true },
      { answer: "Run", correct: false },
      { answer: "Jump", correct: false },
      { answer: "Stroll", correct: false },
    ],
  },
  {
    question: "O que significa 'triste' em inglês?",
    answers: [
      { answer: "Sad", correct: true },
      { answer: "Happy", correct: false },
      { answer: "Angry", correct: false },
      { answer: "Excited", correct: false },
    ],
  },
  {
    question: "O que significa 'rápido' em inglês?",
    answers: [
      { answer: "Fast", correct: true },
      { answer: "Slow", correct: false },
      { answer: "Quick", correct: false },
      { answer: "Speedy", correct: false },
    ],
  },
  {
    question: "O que significa 'alto' em inglês?",
    answers: [
      { answer: "Tall", correct: true },
      { answer: "Short", correct: false },
      { answer: "High", correct: false },
      { answer: "Low", correct: false },
    ],
  },
  {
    question: "O que significa 'perto' em inglês?",
    answers: [
      { answer: "Near", correct: true },
      { answer: "Far", correct: false },
      { answer: "Close", correct: false },
      { answer: "Distant", correct: false },
    ],
  },
  {
    question: "O que significa 'longe' em inglês?",
    answers: [
      { answer: "Far", correct: true },
      { answer: "Near", correct: false },
      { answer: "Distant", correct: false },
      { answer: "Close", correct: false },
    ],
  },
  {
    question: "O que significa 'rico' em inglês?",
    answers: [
      { answer: "Rich", correct: true },
      { answer: "Poor", correct: false },
      { answer: "Wealthy", correct: false },
      { answer: "Affluent", correct: false },
    ],
  },
  {
    question: "O que significa 'pobre' em inglês?",
    answers: [
      { answer: "Poor", correct: true },
      { answer: "Rich", correct: false },
      { answer: "Needy", correct: false },
      { answer: "Wealthy", correct: false },
    ],
  },
  {
    question: "O que significa 'feliz' em inglês?",
    answers: [
      { answer: "Happy", correct: true },
      { answer: "Sad", correct: false },
      { answer: "Joyful", correct: false },
      { answer: "Content", correct: false },
    ],
  },
  {
    question: "O que significa 'trabalhador' em inglês?",
    answers: [
      { answer: "Hardworking", correct: true },
      { answer: "Lazy", correct: false },
      { answer: "Diligent", correct: false },
      { answer: "Productive", correct: false },
    ],
  },
  {
    question: "O que significa 'preguiçoso' em inglês?",
    answers: [
      { answer: "Lazy", correct: true },
      { answer: "Hardworking", correct: false },
      { answer: "Indolent", correct: false },
      { answer: "Sluggish", correct: false },
    ],
  },
  {
    question: "O que significa 'correr' em inglês?",
    answers: [
      { answer: "Run", correct: true },
      { answer: "Walk", correct: false },
      { answer: "Sprint", correct: false },
      { answer: "Jog", correct: false },
    ],
  },
  {
    question: "O que significa 'comprar' em inglês?",
    answers: [
      { answer: "Buy", correct: true },
      { answer: "Sell", correct: false },
      { answer: "Purchase", correct: false },
      { answer: "Trade", correct: false },
    ],
  },
  {
    question: "O que significa 'vender' em inglês?",
    answers: [
      { answer: "Sell", correct: true },
      { answer: "Buy", correct: false },
      { answer: "Trade", correct: false },
      { answer: "Purchase", correct: false },
    ],
  },
  {
    question: "O que significa 'chegar' em inglês?",
    answers: [
      { answer: "Arrive", correct: true },
      { answer: "Leave", correct: false },
      { answer: "Depart", correct: false },
      { answer: "Travel", correct: false },
    ],
  },
  {
    question: "O que significa 'partir' em inglês?",
    answers: [
      { answer: "Leave", correct: true },
      { answer: "Arrive", correct: false },
      { answer: "Depart", correct: false },
      { answer: "Exit", correct: false },
    ],
  },
  {
    question: "O que significa 'trabalho' (tarefa) em inglês?",
    answers: [
      { answer: "Task", correct: true },
      { answer: "Job", correct: false },
      { answer: "Work", correct: false },
      { answer: "Assignment", correct: false },
    ],
  },
  {
    question: "O que significa 'dinheiro' em inglês?",
    answers: [
      { answer: "Money", correct: true },
      { answer: "Cash", correct: false },
      { answer: "Currency", correct: false },
      { answer: "Wealth", correct: false },
    ],
  },
  {
    question: "O que significa 'escola' em inglês?",
    answers: [
      { answer: "School", correct: true },
      { answer: "Class", correct: false },
      { answer: "College", correct: false },
      { answer: "University", correct: false },
    ],
  },
  {
    question: "O que significa 'amor' em inglês?",
    answers: [
      { answer: "Love", correct: true },
      { answer: "Hate", correct: false },
      { answer: "Adoration", correct: false },
      { answer: "Affection", correct: false },
    ],
  },
  {
    question: "O que significa 'ódio' em inglês?",
    answers: [
      { answer: "Hate", correct: true },
      { answer: "Love", correct: false },
      { answer: "Dislike", correct: false },
      { answer: "Detest", correct: false },
    ],
  },
  {
    question: "O que significa 'nadar' em inglês?",
    answers: [
      { answer: "Swim", correct: true },
      { answer: "Dive", correct: false },
      { answer: "Float", correct: false },
      { answer: "Splash", correct: false },
    ],
  },
  {
    question: "O que significa 'voar' em inglês?",
    answers: [
      { answer: "Fly", correct: true },
      { answer: "Soar", correct: false },
      { answer: "Glide", correct: false },
      { answer: "Jump", correct: false },
    ],
  },
  question: "O que significa 'Should' em inglês?",
answers: [
{ answer: "Dever", correct: true },
{ answer: "Poder", correct: false },
{ answer: "Fazer", correct: false },
{ answer: "Ir", correct: false },
],
},

question: "O que significa 'Need' em inglês?",
answers: [
{ answer: "Precisar", correct: true },
{ answer: "Querer", correct: false },
{ answer: "Ter", correct: false },
{ answer: "Fazer", correct: false },
],
},

question: "O que significa 'Do' em inglês?",
answers: [
{ answer: "Fazer", correct: true },
{ answer: "Dizer", correct: false },
{ answer: "Ir", correct: false },
{ answer: "Ver", correct: false },
],
},

question: "O que significa 'Let' em inglês?",
answers: [
{ answer: "Deixar", correct: true },
{ answer: "Permitir", correct: false },
{ answer: "Fazer", correct: false },
{ answer: "Tomar", correct: false },
],
},

question: "O que significa 'Must' em inglês?",
answers: [
{ answer: "Dever", correct: true },
{ answer: "Poder", correct: false },
{ answer: "Fazer", correct: false },
{ answer: "Ir", correct: false },
],
},

question: "O que significa 'Mean' em inglês?",
answers: [
{ answer: "Significar", correct: true },
{ answer: "Dizer", correct: false },
{ answer: "Fazer", correct: false },
{ answer: "Ir", correct: false },
],
},

question: "O que significa 'Keep' em inglês?",
answers: [
{ answer: "Manter", correct: true },
{ answer: "Guardar", correct: false },
{ answer: "Fazer", correct: false },
{ answer: "Ir", correct: false },
],
},

question: "O que significa 'Hold' em inglês?",
answers: [
{ answer: "Segurar", correct: true },
{ answer: "Manter", correct: false },
{ answer: "Fazer", correct: false },
{ answer: "Ir", correct: false },
],
},

question: "O que significa 'Help' em inglês?",
answers: [
{ answer: "Ajudar", correct: true },
{ answer: "Pedir ajuda", correct: false },
{ answer: "Fazer", correct: false },
{ answer: "Ir", correct: false },
],
},

question: "O que significa 'Talk' em inglês?",
answers: [
{ answer: "Conversar", correct: true },
{ answer: "Falar", correct: false },
{ answer: "Dizer", correct: false },
{ answer: "Ir", correct: false },
],
},

question: "O que significa 'Turn' em inglês?",
answers: [
{ answer: "Virar", correct: true },
{ answer: "Ligar", correct: false },
{ answer: "Fazer", correct: false },
{ answer: "Ir", correct: false },
],
},

question: "O que significa 'Start' em inglês?",
answers: [
{ answer: "Começar", correct: true },
{ answer: "Iniciar", correct: false },
{ answer: "Fazer", correct: false },
{ answer: "Ir", correct: false },
],
},

question: "O que significa 'Show' em inglês?",
answers: [
{ answer: "Mostrar", correct: true },
{ answer: "Exibir", correct: false },
{ answer: "Fazer", correct: false },
{ answer: "Ir", correct: false },
],
},

question: "O que significa 'Hear' em inglês?",
answers: [
{ answer: "Ouvir", correct: true },
{ answer: "Escutar", correct: false },
{ answer: "Falar", correct: false },
{ answer: "Ver", correct: false },
],
},

question: "O que significa 'Play' em inglês?",
answers: [
{ answer: "Jogar", correct: true },
{ answer: "Tocar", correct: false },
{ answer: "Brincar", correct: false },
{ answer: "Ver", correct: false },
],
},

question: "O que significa 'Run' em inglês?",
answers: [
{ answer: "Correr", correct: true },
{ answer: "Andar", correct: false },
{ answer: "Fazer", correct: false },
{ answer: "Ir", correct: false },
],
},

question: "O que significa 'Move' em inglês?",
answers: [
{ answer: "Mover", correct: true },
{ answer: "Mexer", correct: false },
{ answer: "Fazer", correct: false },
{ answer: "Ir", correct: false },
],
},

question: "O que significa 'Like' em inglês?",
answers: [
{ answer: "Gostar", correct: true },
{ answer: "Amor", correct: false },
{ answer: "Fazer", correct: false },
{ answer: "Ir", correct: false },
],
},

question: "O que significa 'Live' em inglês?",
answers: [
{ answer: "Viver", correct: true },
{ answer: "Vivo", correct: false },
{ answer: "Fazer", correct: false },
{ answer: "Ir", correct: false },
],
},

question: "O que significa 'Believe' em inglês?",
answers: [
{ answer: "Acreditar", correct: true },
{ answer: "Crer", correct: false },
{ answer: "Fazer", correct: false },
{ answer: "Ir", correct: false },
],
},

question: "O que significa 'Bring' em inglês?",
answers: [
{ answer: "Trazer", correct: true },
{ answer: "Levar", correct: false },
{ answer: "Fazer", correct: false },
{ answer: "Ir", correct: false },
],
},

question: "O que significa 'Happen' em inglês?",
answers: [
{ answer: "Acontecer", correct: true },
{ answer: "Ocorrer", correct: false },
{ answer: "Fazer", correct: false },
{ answer: "Ir", correct: false },
],
},

question: "O que significa 'Write' em inglês?",
answers: [
{ answer: "Escrever", correct: true },
{ answer: "Ler", correct: false },
{ answer: "Fazer", correct: false },
{ answer: "Ir", correct: false },
],
},

question: "O que significa 'Provide' em inglês?",
answers: [
{ answer: "Fornecer", correct: true },
{ answer: "Prover", correct: false },
{ answer: "Fazer", correct: false },
{ answer: "Ir", correct: false },
],
},

question: "O que significa 'Stand' em inglês?",
answers: [
{ answer: "Estar em pé", correct: true },
{ answer: "Apoiar", correct: false },
{ answer: "Fazer", correct: false },
{ answer: "Ir", correct: false },
],
},

question: "O que significa 'Lose' em inglês?",
answers: [
{ answer: "Perder", correct: true },
{ answer: "Ganhar", correct: false },
{ answer: "Fazer", correct: false },
{ answer: "Ir", correct: false },
],
},

question: "O que significa 'Pay' em inglês?",
answers: [
{ answer: "Pagar", correct: true },
{ answer: "Ganhar", correct: false },
{ answer: "Fazer", correct: false },
{ answer: "Ir", correct: false },
],
},

question: "O que significa 'Meet' em inglês?",
answers: [
{ answer: "Encontrar", correct: true },
{ answer: "Conhecer", correct: false },
{ answer: "Fazer", correct: false },
{ answer: "Ir", correct: false },
],
},

question: "O que significa 'Include' em inglês?",
answers: [
{ answer: "Incluir", correct: true },
{ answer: "Excluir", correct: false },
{ answer: "Fazer", correct: false },
{ answer: "Ir", correct: false },
],
},

question: "O que significa 'Continue' em inglês?",
answers: [
{ answer: "Continuar", correct: true },
{ answer: "Parar", correct: false },
{ answer: "Fazer", correct: false },
{ answer: "Ir", correct: false },
],
},

question: "O que significa 'Set' em inglês?",
answers: [
{ answer: "Definir", correct: true },
{ answer: "Colocar", correct: false },
{ answer: "Fazer", correct: false },
{ answer: "Ir", correct: false },
],
},

question: "O que significa 'Learn' em inglês?",
answers: [
{ answer: "Aprender", correct: true },
{ answer: "Ensinar", correct: false },
{ answer: "Fazer", correct: false },
{ answer: "Ir", correct: false },
],
},

question: "O que significa 'Change' em inglês?",
answers: [
{ answer: "Mudar", correct: true },
{ answer: "Trocar", correct: false },
{ answer: "Fazer", correct: false },
{ answer: "Ir", correct: false },
],
},

question: "O que significa 'Lead' em inglês?",
answers: [
{ answer: "Liderar", correct: true },
{ answer: "Seguir", correct: false },
{ answer: "Fazer", correct: false },
{ answer: "Ir", correct: false },
],
},

question: "O que significa 'Understand' em inglês?",
answers: [
{ answer: "Entender", correct: true },
{ answer: "Compreender", correct: false },
{ answer: "Fazer", correct: false },
{ answer: "Ir", correct: false },
],
},

question: "O que significa 'Watch' em inglês?",
answers: [
{ answer: "Assistir", correct: true },
{ answer: "Observar", correct: false },
{ answer: "Fazer", correct: false },
{ answer: "Ir", correct: false },
],
},

question: "O que significa 'Follow' em inglês?",
answers: [
{ answer: "Seguir", correct: true },
{ answer: "Acompanhar", correct: false },
{ answer: "Fazer", correct: false },
{ answer: "Ir", correct: false },
],
},

question: "O que significa 'Stop' em inglês?",
answers: [
{ answer: "Parar", correct: true },
{ answer: "Continuar", correct: false },
{ answer: "Fazer", correct: false },
{ answer: "Ir", correct: false },
],
},

question: "O que significa 'Create' em inglês?",
answers: [
{ answer: "Criar", correct: true },
{ answer: "Fazer", correct: false },
{ answer: "Construir", correct: false },
{ answer: "Ir", correct: false },
],
},

question: "O que significa 'Speak' em inglês?",
answers: [
{ answer: "Falar", correct: true },
{ answer: "Dizer", correct: false },
{ answer: "Conversar", correct: false },
{ answer: "Ir", correct: false },
],
},

question: "O que significa 'Read' em inglês?",
answers: [
{ answer: "Ler", correct: true },
{ answer: "Escrever", correct: false },
{ answer: "Falar", correct: false },
{ answer: "Ir", correct: false },
],
},

question: "O que significa 'Allow' em inglês?",
answers: [
{ answer: "Permitir", correct: true },
{ answer: "Proibir", correct: false },
{ answer: "Fazer", correct: false },
{ answer: "Ir", correct: false },
],
},

question: "O que significa 'Add' em inglês?",
answers: [
{ answer: "Adicionar", correct: true },
{ answer: "Subtrair", correct: false },
{ answer: "Multiplicar", correct: false },
{ answer: "Dividir", correct: false },
],
},

question: "O que significa 'Spend' em inglês?",
answers: [
{ answer: "Gastar", correct: true },
{ answer: "Economizar", correct: false },
{ answer: "Fazer", correct: false },
{ answer: "Ir", correct: false },
],
},

question: "O que significa 'Buy' em inglês?",
answers: [
{ answer: "Comprar", correct: true },
{ answer: "Vender", correct: false },
{ answer: "Fazer", correct: false },
{ answer: "Ir", correct: false },
],
},

question: "O que significa 'Walk' em inglês?",
answers: [
{ answer: "Andar", correct: true },
{ answer: "Correr", correct: false },
{ answer: "Fazer", correct: false },
{ answer: "Ir", correct: false },
],
},

question: "O que significa 'Wait' em inglês?",
answers: [
{ answer: "Esperar", correct: true },
{ answer: "Correr", correct: false },
{ answer: "Fazer", correct: false },
{ answer: "Ir", correct: false },
],
},

question: "O que significa 'Plan' em inglês?",
answers: [
{ answer: "Planejar", correct: true },
{ answer: "Fazer", correct: false },
{ answer: "Ir", correct: false },
{ answer: "Construir", correct: false },
],
},

question: "O que significa 'Remember' em inglês?",
answers: [
{ answer: "Lembrar", correct: true },
{ answer: "Esquecer", correct: false },
{ answer: "Fazer", correct: false },
{ answer: "Ir", correct: false },
],
},

question: "O que significa 'Decide' em inglês?",
answers: [
{ answer: "Decidir", correct: true },
{ answer: "Escolher", correct: false },
{ answer: "Fazer", correct: false },
{ answer: "Ir", correct: false },
],
},

question: "O que significa 'Realize' em inglês?",
answers: [
{ answer: "Perceber", correct: true },
{ answer: "Entender", correct: false },
{ answer: "Fazer", correct: false },
{ answer: "Ir", correct: false },
],
},

question: "O que significa 'Forget' em inglês?",
answers: [
{ answer: "Esquecer", correct: true },
{ answer: "Lembrar", correct: false },
{ answer: "Fazer", correct: false },
{ answer: "Ir", correct: false },
],
},

question: "O que significa 'Miss' em inglês?",
answers: [
{ answer: "Perder", correct: true },
{ answer: "Ganhar", correct: false },
{ answer: "Fazer", correct: false },
{ answer: "Ir", correct: false },
],
},

question: "O que significa 'Raise' em inglês?",
answers: [
{ answer: "Levantar", correct: true },
{ answer: "Baixar", correct: false },
{ answer: "Fazer", correct: false },
{ answer: "Ir", correct: false },
],
},

question: "O que significa 'Try' em inglês?",
answers: [
{ answer: "Experimentar", correct: true },
{ answer: "Testar", correct: false },
{ answer: "Fazer", correct: false },
{ answer: "Ir", correct: false },
],
},

question: "O que significa 'Listen' em inglês?",
answers: [
{ answer: "Ouvir", correct: true },
{ answer: "Escutar", correct: false },
{ answer: "Fazer", correct: false },
{ answer: "Ir", correct: false },
],
},

question: "O que significa 'Travel' em inglês?",
answers: [
{ answer: "Viajar", correct: true },
{ answer: "Andar", correct: false },
{ answer: "Fazer", correct: false },
{ answer: "Ir", correct: false },
],
},

question: "O que significa 'Enjoy' em inglês?",
answers: [
{ answer: "Aproveitar", correct: true },
{ answer: "Gostar", correct: false },
{ answer: "Fazer", correct: false },
{ answer: "Ir", correct: false },
],
},

question: "O que significa 'Apply' em inglês?",
answers: [
{ answer: "Aplicar", correct: true },
{ answer: "Usar", correct: false },
{ answer: "Fazer", correct: false },
{ answer: "Ir", correct: false },
],
},

question: "O que significa 'Finish' em inglês?",
answers: [
{ answer: "Terminar", correct: true },
{ answer: "Começar", correct: false },
{ answer: "Fazer", correct: false },
{ answer: "Ir", correct: false },
],
},
  question: "O que significa 'Ask' em inglês?",
answers: [
{ answer: "Perguntar", correct: true },
{ answer: "Pedir", correct: false },
{ answer: "Responder", correct: false },
{ answer: "Dizer", correct: false },
],
},

question: "O que significa 'Work' em inglês?",
answers: [
{ answer: "Trabalhar", correct: true },
{ answer: "Funcionar", correct: false },
{ answer: "Fazer", correct: false },
{ answer: "Ir", correct: false },
],
},

question: "O que significa 'Seem' em inglês?",
answers: [
{ answer: "Parecer", correct: true },
{ answer: "Ser", correct: false },
{ answer: "Estar", correct: false },
{ answer: "Ficar", correct: false },
],
},

question: "O que significa 'Feel' em inglês?",
answers: [
{ answer: "Sentir", correct: true },
{ answer: "Tocar", correct: false },
{ answer: "Ver", correct: false },
{ answer: "Ouvir", correct: false },
],
},

question: "O que significa 'Try' em inglês?",
answers: [
{ answer: "Tentar", correct: true },
{ answer: "Testar", correct: false },
{ answer: "Fazer", correct: false },
{ answer: "Ir", correct: false },
],
},

question: "O que significa 'Leave' em inglês?",
answers: [
{ answer: "Sair", correct: true },
{ answer: "Partir", correct: false },
{ answer: "Deixar", correct: false },
{ answer: "Ir", correct: false },
],
},

question: "O que significa 'Call' em inglês?",
answers: [
{ answer: "Chamar", correct: true },
{ answer: "Ligar", correct: false },
{ answer: "Gritar", correct: false },
{ answer: "Falar", correct: false },
],
},

  question: "O que significa 'Use' em inglês?",
answers: [
{ answer: "Usar", correct: true },
{ answer: "Ter", correct: false },
{ answer: "Fazer", correct: false },
{ answer: "Estar", correct: false },
],
},

question: "O que significa 'Find' em inglês?",
answers: [
{ answer: "Encontrar", correct: true },
{ answer: "Procurar", correct: false },
{ answer: "Perder", correct: false },
{ answer: "Pegar", correct: false },
],
},

question: "O que significa 'Tell' em inglês?",
answers: [
{ answer: "Dizer", correct: true },
{ answer: "Contar", correct: false },
{ answer: "Falar", correct: false },
{ answer: "Perguntar", correct: false },
],
},
  question: "O que significa 'Be' em inglês?",
answers: [
{ answer: "Ser", correct: true },
{ answer: "é", correct: false },
{ answer: "e", correct: false },
{ answer: "como", correct: false },
],
},

question: "O que significa 'Have' em inglês?",
answers: [
{ answer: "Ter", correct: true },
{ answer: "Haver", correct: false },
{ answer: "Fazer", correct: false },
{ answer: "Comer", correct: false },
],
},

question: "O que significa 'Do' em inglês?",
answers: [
{ answer: "Fazer", correct: true },
{ answer: "Dizer", correct: false },
{ answer: "Ir", correct: false },
{ answer: "Ver", correct: false },
],
},

question: "O que significa 'Say' em inglês?",
answers: [
{ answer: "Dizer", correct: true },
{ answer: "Falar", correct: false },
{ answer: "Ir", correct: false },
{ answer: "Ver", correct: false },
],
},

question: "O que significa 'Get' em inglês?",
answers: [
{ answer: "Obter", correct: true },
{ answer: "Pegar", correct: false },
{ answer: "Ficar", correct: false },
{ answer: "Ir", correct: false },
],
},

question: "O que significa 'Make' em inglês?",
answers: [
{ answer: "Fazer", correct: true },
{ answer: "Criar", correct: false },
{ answer: "Pegar", correct: false },
{ answer: "Ir", correct: false },
],
},

question: "O que significa 'Go' em inglês?",
answers: [
{ answer: "Ir", correct: true },
{ answer: "Vir", correct: false },
{ answer: "Ficar", correct: false },
{ answer: "Andar", correct: false },
],
},

question: "O que significa 'Know' em inglês?",
answers: [
{ answer: "Saber", correct: true },
{ answer: "Conhecer", correct: false },
{ answer: "Pensar", correct: false },
{ answer: "Fazer", correct: false },
],
},

question: "O que significa 'Take' em inglês?",
answers: [
{ answer: "Pegar", correct: true },
{ answer: "Levar", correct: false },
{ answer: "Tomar", correct: false },
{ answer: "Fazer", correct: false },
],
},

question: "O que significa 'See' em inglês?",
answers: [
{ answer: "Ver", correct: true },
{ answer: "Olhar", correct: false },
{ answer: "Ouvir", correct: false },
{ answer: "Sentir", correct: false },
],
},

question: "O que significa 'Come' em inglês?",
answers: [
{ answer: "Vir", correct: true },
{ answer: "Ir", correct: false },
{ answer: "Ficar", correct: false },
{ answer: "Andar", correct: false },
],
},

question: "O que significa 'Think' em inglês?",
answers: [
{ answer: "Pensar", correct: true },
{ answer: "Achar", correct: false },
{ answer: "Saber", correct: false },
{ answer: "Dizer", correct: false },
],
},

question: "O que significa 'Look' em inglês?",
answers: [
{ answer: "Olhar", correct: true },
{ answer: "Ver", correct: false },
{ answer: "Ouvir", correct: false },
{ answer: "Sentir", correct: false },
],
},

question: "O que significa 'Want' em inglês?",
answers: [
{ answer: "Querer", correct: true },
{ answer: "Precisar", correct: false },
{ answer: "Gostar", correct: false },
{ answer: "Pedir", correct: false },
],
},

question: "O que significa 'Give' em inglês?",
answers: [
{ answer: "Dar", correct: true },
{ answer: "Receber", correct: false },
{ answer: "Tomar", correct: false },
{ answer: "Pegar", correct: false },
],
},


  

];


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
