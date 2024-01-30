// Declaração de variáveis
const questionElement = document.querySelector('#question');
const answerBox = document.querySelector('#answers-box');
const quizzContainer = document.querySelector('#quizz-container');
const scoreContainer = document.querySelector('#score-container');
const letters = ['a', 'b', 'c', 'd', 'e'];
let points = 0;
let actualQuestion = 0;

// Perguntas
let questions = [
  {
    question: 'Como realizar a conexão com um banco de dados MySQL usando PHP?',
    answers: [
      { 
        answer: 'mysqli_connect("localhost", "usuario", "senha", "nome_do_banco")', 
        correct: true,
        code: ''
      },
      {
        answer: 'connect_database("localhost", "usuario", "senha", "nome_do_banco")',
        correct: false,
        code: ''
      },
      { 
        answer: 'mysql_open("localhost", "usuario", "senha", "nome_do_banco")',
        correct: false,
        code: ''
      },
      { 
        answer: 'pdo_connect("localhost", "usuario", "senha", "nome_do_banco")',
        correct: false,
        code: ''
      },
    ],
  },
  {
    question: 'Qual função PHP é comumente usada para executar consultas SQL em um banco de dados?',
    answers: [
      { 
        answer: 'mysql_query()', 
        correct: false,
        code: ''
      },
      {
        answer: 'mysqli_query()',
        correct: true,
        code: ''
      },
      { 
        answer: 'pdo_execute()',
        correct: false,
        code: ''
      },
      { 
        answer: 'execute_sql()',
        correct: false,
        code: ''
      },
    ],
  },
  {
    question: 'Como evitar ataques de SQL Injection ao executar consultas SQL em PHP?',
    answers: [
      { 
        answer: 'Validar os dados de entrada apenas no lado do cliente',
        correct: false,
        code: ''
      },
      {
        answer: 'Utilizar consultas preparadas (prepared statements) com parâmetros',
        correct: true,
        code: ''
      },
      { 
        answer: 'Escapar manualmente os caracteres especiais nos dados de entrada',
        correct: false,
        code: ''
      },
      { 
        answer: 'Desativar completamente a execução de consultas SQL no PHP',
        correct: false,
        code: ''
      },
    ],
  },
  {
    question: 'Como realizar a remoção de registros de uma tabela no MySQL usando PHP?',
    answers: [
      { 
        answer: 'DELETE FROM tabela WHERE condição', 
        correct: true,
        code: ''
      },
      {
        answer: 'REMOVE FROM tabela WHERE condição',
        correct: false,
        code: ''
      },
      { 
        answer: 'REMOVE registro FROM tabela WHERE condição',
        correct: false,
        code: ''
      },
      { 
        answer: 'DELETE registro FROM tabela WHERE condição',
        correct: false,
        code: ''
      },
    ],
  },
 
  {
    question: 'Como realizar uma consulta SQL para selecionar todos os registros de uma tabela chamada "usuarios"?',
    answers: [
      { 
        answer: 'SELECT * FROM usuarios', 
        correct: true,
        code: ''
      },
      {
        answer: 'FETCH * FROM usuarios',
        correct: false,
        code: ''
      },
      { 
        answer: 'GET * FROM usuarios',
        correct: false,
        code: ''
      },
      { 
        answer: 'RETRIEVE * FROM usuarios',
        correct: false,
        code: ''
      },
    ],
  },
  {
    question: 'Qual função PHP é utilizada para obter o último ID inserido em uma tabela autoincrementável após uma inserção?',
    answers: [
      { 
        answer: 'mysql_last_id()', 
        correct: false,
        code: ''
      },
      {
        answer: 'mysqli_insert_id()',
        correct: true,
        code: ''
      },
      { 
        answer: 'pdo_last_insert_id()',
        correct: false,
        code: ''
      },
      { 
        answer: 'get_last_id()',
        correct: false,
        code: ''
      },
    ],
  },
  {
    question: 'Como realizar a atualização de registros em uma tabela chamada "produtos" no MySQL usando PHP?',
    answers: [
      { 
        answer: 'UPDATE produtos SET coluna1 = valor1, coluna2 = valor2 WHERE condição', 
        correct: true,
        code: ''
      },
      {
        answer: 'MODIFY produtos SET coluna1 = valor1, coluna2 = valor2 WHERE condição',
        correct: false,
        code: ''
      },
      { 
        answer: 'ALTER produtos SET coluna1 = valor1, coluna2 = valor2 WHERE condição',
        correct: false,
        code: ''
      },
      { 
        answer: 'CHANGE produtos SET coluna1 = valor1, coluna2 = valor2 WHERE condição',
        correct: false,
        code: ''
      },
    ],
  },
  {
    question: 'Qual função PHP é utilizada para fechar a conexão com o banco de dados MySQL?',
    answers: [
      { 
        answer: 'mysql_close()', 
        correct: false,
        code: ''
      },
      {
        answer: 'mysqli_close()',
        correct: true,
        code: ''
      },
      { 
        answer: 'pdo_close()',
        correct: false,
        code: ''
      },
      { 
        answer: 'close_database()',
        correct: false,
        code: ''
      },
    ],
  },
  
  {
    question: 'O que é SQL Injection e por que é uma ameaça para aplicativos PHP?',
    answers: [
      { 
        answer: 'SQL Injection é uma técnica que permite injetar código SQL malicioso em consultas, comprometendo a segurança do banco de dados.', 
        correct: true,
        code: ''
      },
      {
        answer: 'SQL Injection é uma forma segura de executar consultas SQL em um banco de dados MySQL.',
        correct: false,
        code: ''
      },
      { 
        answer: 'SQL Injection é um método para executar consultas SQL em um servidor web sem permissão.',
        correct: false,
        code: ''
      },
      { 
        answer: 'SQL Injection é uma ferramenta incorporada ao PHP para executar consultas SQL de maneira mais eficiente.',
        correct: false,
        code: ''
      },
    ],
  },
  {
    question: 'Como um atacante pode realizar SQL Injection em um formulário PHP?',
    answers: [
      { 
        answer: 'Inserindo código SQL malicioso nos campos do formulário para manipular consultas no backend.', 
        correct: true,
        code: ''
      },
      {
        answer: 'Alterando o método do formulário para "SQL" e inserindo as consultas diretamente.',
        correct: false,
        code: ''
      },
      { 
        answer: 'Usando JavaScript para executar ataques SQL no frontend.',
        correct: false,
        code: ''
      },
      { 
        answer: 'Apenas enviando muitos dados ao mesmo tempo no formulário.',
        correct: false,
        code: ''
      },
    ],
  },
  {
    question: 'Quais são as práticas recomendadas para prevenir SQL Injection em consultas PHP?',
    answers: [
      { 
        answer: 'Usar consultas preparadas (prepared statements) e parâmetros para separar dados do código SQL.', 
        correct: true,
        code: ''
      },
      {
        answer: 'Desativar completamente a execução de consultas SQL em formulários PHP.',
        correct: false,
        code: ''
      },
      { 
        answer: 'Escapar manualmente os caracteres especiais nos dados de entrada.',
        correct: false,
        code: ''
      },
      { 
        answer: 'Validar apenas os dados do lado do cliente para impedir a injeção de SQL.',
        correct: false,
        code: ''
      },
    ],
  },
  {
    question: 'Como um atacante pode realizar SQL Injection por meio da URL em uma aplicação PHP?',
    answers: [
      { 
        answer: 'Adicionando parâmetros manipulados com código SQL diretamente na URL.', 
        correct: true,
        code: ''
      },
      {
        answer: 'Enviando um e-mail com um link para o usuário clicar e executar código SQL.',
        correct: false,
        code: ''
      },
      { 
        answer: 'Realizando um ataque de força bruta na URL da aplicação.',
        correct: false,
        code: ''
      },
      { 
        answer: 'Inserindo scripts maliciosos no código-fonte PHP da aplicação.',
        correct: false,
        code: ''
      },
    ],
  },

  {
    question: 'O que é SQL Injection e como ela difere de Blind SQL Injection?',
    answers: [
      { 
        answer: 'SQL Injection é uma técnica que permite injetar código SQL malicioso em consultas, enquanto Blind SQL Injection ocorre quando o atacante não recebe diretamente os resultados da injeção, mas pode inferir informações com base no comportamento da aplicação.', 
        correct: true,
        code: ''
      },
      {
        answer: 'SQL Injection é apenas uma ameaça teórica, enquanto Blind SQL Injection é uma técnica real de ataque.',
        correct: false,
        code: ''
      },
      { 
        answer: 'Blind SQL Injection ocorre apenas em servidores Windows, enquanto SQL Injection é específico para servidores Linux.',
        correct: false,
        code: ''
      },
      { 
        answer: 'SQL Injection é um sinônimo de Blind SQL Injection.',
        correct: false,
        code: ''
      },
    ],
  },
  {
    question: 'Como um atacante pode explorar uma vulnerabilidade de SQL Injection baseada em erro de tipo de dado?',
    answers: [
      { 
        answer: 'Inserindo valores que causem erros de tipo de dado no código SQL, revelando informações sensíveis.', 
        correct: true,
        code: ''
      },
      {
        answer: 'Enviando consultas SQL excessivamente longas para sobrecarregar o servidor e obter informações.',
        correct: false,
        code: ''
      },
      { 
        answer: 'Utilizando ferramentas automatizadas para forçar a injeção de SQL sem a necessidade de explorar erros de tipo de dado.',
        correct: false,
        code: ''
      },
      { 
        answer: 'Realizando um ataque de força bruta para descobrir credenciais de banco de dados.',
        correct: false,
        code: ''
      },
    ],
  },
  {
    question: 'Explique como um atacante pode realizar Time-Based Blind SQL Injection para inferir informações do banco de dados.',
    answers: [
      { 
        answer: 'Inserindo instruções SQL que causem atrasos de tempo e observando a resposta do servidor para inferir informações.', 
        correct: true,
        code: ''
      },
      {
        answer: 'Enviando consultas SQL que exibam informações diretamente na resposta da aplicação.',
        correct: false,
        code: ''
      },
      { 
        answer: 'Utilizando técnicas de injeção de SQL apenas em campos de senha para obter credenciais do banco de dados.',
        correct: false,
        code: ''
      },
      { 
        answer: 'Atacando exclusivamente formulários de login para obter acesso não autorizado.',
        correct: false,
        code: ''
      },
    ],
  },
  {
    question: 'Quais são algumas práticas recomendadas para prevenir SQL Injection em aplicações PHP?',
    answers: [
      { 
        answer: 'Usar consultas preparadas (prepared statements) e parâmetros para separar dados do código SQL.', 
        correct: true,
        code: ''
      },
      {
        answer: 'Desativar completamente a execução de consultas SQL em formulários PHP.',
        correct: false,
        code: ''
      },
      { 
        answer: 'Escapar manualmente os caracteres especiais nos dados de entrada.',
        correct: false,
        code: ''
      },
      { 
        answer: 'Validar apenas os dados do lado do cliente para impedir a injeção de SQL.',
        correct: false,
        code: ''
      },
    ],
  },


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

  actualQuestion++;
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
  buttons.forEach((button) => {
    if (button.getAttribute('correct-answer') == 'true') {
      button.classList.add('correct-answer');
      if (btn === button) {
        points++;
      }
    } else {
      button.classList.add('wrong-answer');
    }
  });

  nextQuestion();
}

// Exibe próxima pergunta no quizz
function nextQuestion() {
  setTimeout(function () {
    if (actualQuestion >= questions.length) {
      showSuccessMessage();
      return;
    }
    createQuestion(actualQuestion);
  }, 1200);
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

