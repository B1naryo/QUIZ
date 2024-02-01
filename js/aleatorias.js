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
  {
    question: "O que significa 'Hello' em português, na música de Adele?",
    answers: [
      { answer: "Olá", correct: true },
      { answer: "Adeus", correct: false },
      { answer: "Até logo", correct: false },
      { answer: "Oi", correct: false },
    ],
  },
  {
    question: "O que significa 'Rolling' em português, na música de Adele?",
    answers: [
      { answer: "Rolar", correct: true },
      { answer: "Dançar", correct: false },
      { answer: "Cantar", correct: false },
      { answer: "Voar", correct: false },
    ],
  },
  {
    question: "O que significa 'Deep' em português, na música de Adele?",
    answers: [
      { answer: "Profundo", correct: true },
      { answer: "Alto", correct: false },
      { answer: "Distante", correct: false },
      { answer: "Escuro", correct: false },
    ],
  },
  {
    question: "O que significa 'Someone' em português, na música de Adele?",
    answers: [
      { answer: "Alguém", correct: true },
      { answer: "Ninguém", correct: false },
      { answer: "Todo mundo", correct: false },
      { answer: "Qualquer um", correct: false },
    ],
  },
  {
    question: "O que significa 'Like' em português, na música de Adele?",
    answers: [
      { answer: "Como", correct: true },
      { answer: "Amar", correct: false },
      { answer: "Curtir", correct: false },
      { answer: "Gostar", correct: false },
    ],
  },
  {
    question: "O que significa 'You' em português, na música de Adele?",
    answers: [
      { answer: "Você", correct: true },
      { answer: "Nós", correct: false },
      { answer: "Eles", correct: false },
      { answer: "Eu", correct: false },
    ],
  },
  {
    question: "O que significa 'Skyfall' em português?",
    answers: [
      { answer: "Queda do Céu", correct: true },
      { answer: "Cair do Céu", correct: false },
      { answer: "Céu Estrelado", correct: false },
      { answer: "Céu Azul", correct: false },
    ],
  },
  {
    question: "O que significa 'Chasing' em português, na música 'Chasing Pavements' de Adele?",
    answers: [
      { answer: "Perseguindo", correct: true },
      { answer: "Correndo", correct: false },
      { answer: "Atrás de", correct: false },
      { answer: "Evitando", correct: false },
    ],
  },
  {
    question: "O que significa 'Pavements' em português, na música 'Chasing Pavements' de Adele?",
    answers: [
      { answer: "Calçadas", correct: true },
      { answer: "Passarelas", correct: false },
      { answer: "Estradas", correct: false },
      { answer: "Praias", correct: false },
    ],
  },
  {
    question: "O que significa 'Rumor' em português, na música 'Rumour Has It' de Adele?",
    answers: [
      { answer: "Rumor", correct: true },
      { answer: "História", correct: false },
      { answer: "Fofoca", correct: false },
      { answer: "Notícia", correct: false },
    ],
  },
  {
    question: "O que significa 'Set Fire to the Rain' em português, na música de Adele?",
    answers: [
      { answer: "Colocar fogo na chuva", correct: true },
      { answer: "Brincar com a chuva", correct: false },
      { answer: "Dançar na chuva", correct: false },
      { answer: "Ignorar a chuva", correct: false },
    ],
  },
  {
    question: "O que significa 'Hometown Glory' em português, na música de Adele?",
    answers: [
      { answer: "Gloria da cidade natal", correct: true },
      { answer: "Orgulho da cidade", correct: false },
      { answer: "História da cidade", correct: false },
      { answer: "Canção da cidade", correct: false },
    ],
  },
  {
    question: "O que significa 'Turning Tables' em português, na música de Adele?",
    answers: [
      { answer: "Virando mesas", correct: true },
      { answer: "Trocando de lugar", correct: false },
      { answer: "Jogando cartas", correct: false },
      { answer: "Dobrando mesas", correct: false },
    ],
  },
  {
    question: "O que significa 'Remedy' em português, na música de Adele?",
    answers: [
      { answer: "Remédio", correct: true },
      { answer: "Cura", correct: false },
      { answer: "Tratamento", correct: false },
      { answer: "Solução", correct: false },
    ],
  },
  {
    question: "O que significa 'Water Under the Bridge' em português, na música de Adele?",
    answers: [
      { answer: "Água debaixo da ponte", correct: true },
      { answer: "Chuva na ponte", correct: false },
      { answer: "Rio sob a ponte", correct: false },
      { answer: "Lago na ponte", correct: false },
    ],
  },
  {
    question: "O que significa 'Send My Love (To Your New Lover)' em português, na música de Adele?",
    answers: [
      { answer: "Envie meu amor (para seu novo amor)", correct: true },
      { answer: "Mande meu amor (para seu antigo amor)", correct: false },
      { answer: "Diga meu amor (para seu amigo)", correct: false },
      { answer: "Leve meu amor (para seu amante)", correct: false },
    ],
  },
  {
    question: "O que significa 'Sweetest Devotion' em português, na música de Adele?",
    answers: [
      { answer: "Doçura da devoção", correct: true },
      { answer: "Devoção amarga", correct: false },
      { answer: "Amor mais doce", correct: false },
      { answer: "Devoção sincera", correct: false },
    ],
  },
  {
    question: "O que significa 'Daydreamer' em português, na música de Adele?",
    answers: [
      { answer: "Sonhador diurno", correct: true },
      { answer: "Viajante diurno", correct: false },
      { answer: "Contemplador diurno", correct: false },
      { answer: "Sonhador noturno", correct: false },
    ],
  },
  {
    question: "O que significa 'Melt My Heart to Stone' em português, na música de Adele?",
    answers: [
      { answer: "Derreter meu coração em pedra", correct: true },
      { answer: "Quebrar meu coração de pedra", correct: false },
      { answer: "Amolecer meu coração de pedra", correct: false },
      { answer: "Transformar meu coração em pedra", correct: false },
    ],
  },
  {
    question: "O que significa 'Make You Feel My Love' em português, na música de Adele?",
    answers: [
      { answer: "Fazer você sentir meu amor", correct: true },
      { answer: "Deixar você sentir meu amor", correct: false },
      { answer: "Mostrar meu amor a você", correct: false },
      { answer: "Permitir você sentir meu amor", correct: false },
    ],
  },
  {
    question: "O que significa 'Chasing Pavements' em português, na música de Adele?",
    answers: [
      { answer: "Perseguindo calçadas", correct: true },
      { answer: "Correndo atrás de pavimentos", correct: false },
      { answer: "Caminhando nas passarelas", correct: false },
      { answer: "Procurando estradas", correct: false },
    ],
  },
  {
    question: "O que significa 'River Lea' em português, na música de Adele?",
    answers: [
      { answer: "Rio Lea", correct: true },
      { answer: "Lea do Rio", correct: false },
      { answer: "Correnteza de Lea", correct: false },
      { answer: "Córrego Lea", correct: false },
    ],
  },
  {
    question: "O que significa 'Love in the Dark' em português, na música de Adele?",
    answers: [
      { answer: "Amor no escuro", correct: true },
      { answer: "Amar na escuridão", correct: false },
      { answer: "Paixão nas sombras", correct: false },
      { answer: "Romance na penumbra", correct: false },
    ],
  },
  {
    question: "O que significa 'I Miss You' em português, na música de Adele?",
    answers: [
      { answer: "Sinto sua falta", correct: true },
      { answer: "Eu te perdi", correct: false },
      { answer: "Eu te amo", correct: false },
      { answer: "Eu sinto falta de você", correct: false },
    ],
  },
  {
    question: "O que significa 'All I Ask' em português, na música de Adele?",
    answers: [
      { answer: "Tudo o que eu peço", correct: true },
      { answer: "Tudo o que eu quero", correct: false },
      { answer: "Tudo o que eu imploro", correct: false },
      { answer: "Tudo o que eu desejo", correct: false },
    ],
  },
  {
    question: "O que significa 'He Won't Go' em português, na música de Adele?",
    answers: [
      { answer: "Ele não vai", correct: true },
      { answer: "Ele foi embora", correct: false },
      { answer: "Ele se recusa", correct: false },
      { answer: "Ele fugirá", correct: false },
    ],
  },
  {
    question: "O que significa 'Why Do You Love Me' em português, na música de Adele?",
    answers: [
      { answer: "Por que você me ama", correct: true },
      { answer: "Por que eu te amo", correct: false },
      { answer: "Por que amar alguém", correct: false },
      { answer: "Por que amar de novo", correct: false },
    ],
  },
  {
    question: "O que significa 'Water and a Flame' em português, na música de Adele?",
    answers: [
      { answer: "Água e uma chama", correct: true },
      { answer: "Água e uma tocha", correct: false },
      { answer: "Água e fogo", correct: false },
      { answer: "Água e uma vela", correct: false },
    ],
  },
  {
    question: "O que significa 'Cold Shoulder' em português, na música de Adele?",
    answers: [
      { answer: "Ombro frio", correct: true },
      { answer: "Ignorar", correct: false },
      { answer: "Ombro distante", correct: false },
      { answer: "Desprezo", correct: false },
    ],
  },
  {
    question: "O que significa 'Take It All' em português, na música de Adele?",
    answers: [
      { answer: "Leve tudo", correct: true },
      { answer: "Pegue tudo", correct: false },
      { answer: "Aceite tudo", correct: false },
      { answer: "Tire tudo", correct: false },
    ],
  },
  {
    question: "O que significa 'I'll Be Waiting' em português, na música de Adele?",
    answers: [
      { answer: "Eu estarei esperando", correct: true },
      { answer: "Eu estarei indo", correct: false },
      { answer: "Eu estarei cantando", correct: false },
      { answer: "Eu estarei partindo", correct: false },
    ],
  },
  {
    question: "O que significa 'Love Song' em português, na música de Adele?",
    answers: [
      { answer: "Canção de amor", correct: true },
      { answer: "Música de amor", correct: false },
      { answer: "Hino de amor", correct: false },
      { answer: "Serenata de amor", correct: false },
    ],
  },
  {
    question: "O que significa 'One and Only' em português, na música de Adele?",
    answers: [
      { answer: "Único e exclusivo", correct: true },
      { answer: "Um e somente", correct: false },
      { answer: "Único e solitário", correct: false },
      { answer: "Um e apenas", correct: false },
    ],
  },
  {
    question: "O que significa 'Rumour Has It' em português?",
    answers: [
      { answer: "Rumor tem isso", correct: true },
      { answer: "Boato diz", correct: false },
      { answer: "História conta", correct: false },
      { answer: "Fofoca afirma", correct: false },
    ],
  },
  {
    question: "O que significa 'Lovesong' em português, na música de Adele?",
    answers: [
      { answer: "Canção de amor", correct: true },
      { answer: "Música de amor", correct: false },
      { answer: "Hino de amor", correct: false },
      { answer: "Serenata de amor", correct: false },
    ],
  },
  {
    question: "O que significa 'I Found a Boy' em português, na música de Adele?",
    answers: [
      { answer: "Eu encontrei um garoto", correct: true },
      { answer: "Eu achei um menino", correct: false },
      { answer: "Eu descobri um rapaz", correct: false },
      { answer: "Eu encontrei um cara", correct: false },
    ],
  },
  {
    question: "O que significa 'Sweet Serenade' em português, na música de Adele?",
    answers: [
      { answer: "Doce serenata", correct: true },
      { answer: "Serenata suave", correct: false },
      { answer: "Canto suave", correct: false },
      { answer: "Melodia doce", correct: false },
    ],
  },
  {
    question: "O que significa 'Tired' em português, na música de Adele?",
    answers: [
      { answer: "Cansado", correct: true },
      { answer: "Triste", correct: false },
      { answer: "Frustrado", correct: false },
      { answer: "Entediado", correct: false },
    ],
  },
  {
    question: "O que significa 'My Same' em português, na música de Adele?",
    answers: [
      { answer: "Meu igual", correct: true },
      { answer: "Meu semelhante", correct: false },
      { answer: "Minha diferença", correct: false },
      { answer: "Meu diferente", correct: false },
    ],
  },
  {
    question: "O que significa 'Crazy for You' em português, na música de Adele?",
    answers: [
      { answer: "Louco por você", correct: true },
      { answer: "Insano por você", correct: false },
      { answer: "Maluco por você", correct: false },
      { answer: "Loucura por você", correct: false },
    ],
  },
  {
    question: "O que significa 'Turning Tables' em português, na música de Adele?",
    answers: [
      { answer: "Virando mesas", correct: true },
      { answer: "Trocando de lugar", correct: false },
      { answer: "Jogando cartas", correct: false },
      { answer: "Dobrando mesas", correct: false },
    ],
  },
  {
    question: "O que significa 'First Love' em português, na música de Adele?",
    answers: [
      { answer: "Primeiro amor", correct: true },
      { answer: "Amor inicial", correct: false },
      { answer: "Amor principal", correct: false },
      { answer: "Primeira paixão", correct: false },
    ],
  },
  {
    question: "O que significa 'Hiding My Heart' em português, na música de Adele?",
    answers: [
      { answer: "Escondendo meu coração", correct: true },
      { answer: "Escondendo meu amor", correct: false },
      { answer: "Ocultando meu coração", correct: false },
      { answer: "Escondendo minha alma", correct: false },
    ],
  },
  {
    question: "O que significa 'Now and Then' em português, na música de Adele?",
    answers: [
      { answer: "Agora e então", correct: true },
      { answer: "Aqui e ali", correct: false },
      { answer: "Hoje e amanhã", correct: false },
      { answer: "Ontem e hoje", correct: false },
    ],
  },
  {
    question: "O que significa 'Melt My Heart to Stone' em português, na música de Adele?",
    answers: [
      { answer: "Derreter meu coração em pedra", correct: true },
      { answer: "Quebrar meu coração de pedra", correct: false },
      { answer: "Amolecer meu coração de pedra", correct: false },
      { answer: "Transformar meu coração em pedra", correct: false },
    ],
  },
  {
    question: "O que significa 'If It Hadn't Been for Love' em português, na música de Adele?",
    answers: [
      { answer: "Se não fosse pelo amor", correct: true },
      { answer: "Se não fosse pela paixão", correct: false },
      { answer: "Se não fosse pela amizade", correct: false },
      { answer: "Se não fosse pela dor", correct: false },
    ],
  },
  {
    question: "O que significa 'Lay Me Down' em português, na música de Adele?",
    answers: [
      { answer: "Deite-me", correct: true },
      { answer: "Abaixe-me", correct: false },
      { answer: "Coloque-me", correct: false },
      { answer: "Encoste-me", correct: false },
    ],
  },
  {
    question: "O que significa 'Right As Rain' em português, na música de Adele?",
    answers: [
      { answer: "Certo como chuva", correct: true },
      { answer: "Bom como chuva", correct: false },
      { answer: "Direito como vento", correct: false },
      { answer: "Justo como trovão", correct: false },
    ],
  },
  {
    question: "O que significa 'Many Shades of Black' em português, na música de Adele?",
    answers: [
      { answer: "Muitos tons de preto", correct: true },
      { answer: "Muitas sombras negras", correct: false },
      { answer: "Diversos matizes escuros", correct: false },
      { answer: "Muitos tons escuros", correct: false },
    ],
  },
  {
    question: "O que significa 'Make You Feel My Love' em português, na música de Adele?",
    answers: [
      { answer: "Fazer você sentir meu amor", correct: true },
      { answer: "Deixar você sentir meu amor", correct: false },
      { answer: "Mostrar meu amor a você", correct: false },
      { answer: "Permitir você sentir meu amor", correct: false },
    ],
  },
  {
    question: "O que significa 'Million Years Ago' em português, na música de Adele?",
    answers: [
      { answer: "Milhões de anos atrás", correct: true },
      { answer: "Há um milhão de anos", correct: false },
      { answer: "Um milhão de anos atrás", correct: false },
      { answer: "Mil anos atrás", correct: false },
    ],
  },
  {
    question: "O que significa 'Someone Like You' em português, na música de Adele?",
    answers: [
      { answer: "Alguém como você", correct: true },
      { answer: "Alguém como eu", correct: false },
      { answer: "Alguém como nós", correct: false },
      { answer: "Alguém como ele", correct: false },
    ],
  },
  {
    question: "O que significa 'Skyfall' em português?",
    answers: [
      { answer: "Queda do Céu", correct: true },
      { answer: "Cair do Céu", correct: false },
      { answer: "Céu Estrelado", correct: false },
      { answer: "Céu Azul", correct: false },
    ],
  },
  {
    question: "O que significa 'Turning Tables' em português, na música de Adele?",
    answers: [
      { answer: "Virando mesas", correct: true },
      { answer: "Trocando de lugar", correct: false },
      { answer: "Jogando cartas", correct: false },
      { answer: "Dobrando mesas", correct: false },
    ],
  },
  {
    question: "O que significa 'When We Were Young' em português, na música de Adele?",
    answers: [
      { answer: "Quando éramos jovens", correct: true },
      { answer: "Quando éramos crianças", correct: false },
      { answer: "Quando éramos adolescentes", correct: false },
      { answer: "Quando éramos velhos", correct: false },
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
