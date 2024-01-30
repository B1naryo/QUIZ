// Declaração de variáveis
const questionElement = document.querySelector('#question');
const answerBox = document.querySelector('#answers-box');
const quizzContainer = document.querySelector('#quizz-container');
const scoreContainer = document.querySelector('#score-container');
const letters = ['a', 'b', 'c', 'd', 'e'];
let points = 0;
let actualQuestion = 0;

let questions = [
  
  {
    question: 'Qual formulário está correto?',
    answers: [
      { 
        answer: '<form>
          <label for="texto">Texto:</label>
          <input type="text" id="texto" name="texto">
          <input type="submit" value="Enviar">
        </form>', 
        correct: false,
       
      },
      {
        answer: `<form action="/processar_formulario.php" method="post">
          <label for="nome">Nome:</label>
          <input type="text" id="nome" name="nome">
          <input type="submit" value="Enviar">
        </form>`,
        correct: true,
        
      },
      { 
        answer: '<form>
          <label for="areaTexto">Área de Texto:</label>
          <textarea id="areaTexto" name="areaTexto"></textarea>
          <input type="submit" value="Enviar">
        </form', 
        correct: false,
       
      },
      { 
        answer: '<form>
          <label for="textoLabel">Texto Label:</label>
          <input type="text" id="textoLabel" name="textoLabel">
          <input type="submit" value="Enviar">
        </form>', 
        correct: false,
       
      },
    ],
  },

  {
    question: 'Qual foi o objetivo principal no desenvolvimento do PHP?',
    answers: [
      { answer: 'Back-End', correct: true },
      { answer: 'Front-End', correct: false },
      { answer: 'Sistema operacional', correct: false },
      { answer: 'Banco de dados', correct: false },
    ],
  },
  {
    question: 'O que significa a sigla PHP?',
    answers: [
      { answer: 'Personal Hypertext Processor', correct: false },
      { answer: 'Preprocessed Hypertext Pages', correct: false },
      { answer: 'PHP: Hypertext Preprocessor', correct: true },
      { answer: 'Programming Hyperlink Protocol', correct: false },
    ],
  },
  {
    question: 'Como você pode enviar dados de um formulário HTML para um script PHP?',
    answers: [
      { answer: 'Usando a tag <data> no HTML', correct: false },
      { answer: 'Apenas usando JavaScript', correct: false },
      { answer: 'Usando o método GET ou POST no formulário HTML', correct: true },
      { answer: 'Enviando por e-mail diretamente', correct: false },
    ],
  },
  {
    question: 'Qual função do PHP é utilizada para validar dados de entrada de formulário contra injeção de SQL?',
    answers: [
      { answer: 'validate_sql()', correct: false },
      { answer: 'clean_input()', correct: false },
      { answer: 'filter_input()', correct: true },
      { answer: 'sanitize_sql()', correct: false },
    ],
  },
  {
    question: 'Como você acessa os dados enviados por um formulário em um script PHP?',
    answers: [
      { answer: 'Usando a variável $input_data', correct: false },
      { answer: 'Apenas através de AJAX', correct: false },
      { answer: 'Usando a variável $_POST ou $_GET, dependendo do método de envio', correct: true },
      { answer: 'Com a função fetch_form_data()', correct: false },
    ],
  },
  {
    question: 'O que é a validação de formulários no contexto do PHP?',
    answers: [
      { answer: 'Um método para criptografar os dados do formulário', correct: false },
      { answer: 'Um processo de verificar se os dados enviados por um formulário estão corretos e seguros', correct: true },
      { answer: 'Uma maneira de ocultar campos de formulário sensíveis', correct: false },
      { answer: 'Um procedimento para compactar os dados do formulário antes do envio', correct: false },
    ],
  },
  {
    question: 'Como você pode impedir a injeção de HTML em dados de formulário exibidos em uma página?',
    answers: [
      { answer: 'Usando a função escape_html()', correct: false },
      { answer: 'Substituindo os caracteres especiais por versões codificadas usando htmlspecialchars()', correct: true },
      { answer: 'Não é possível evitar injeção de HTML em dados de formulário', correct: false },
      { answer: 'Configurando corretamente as permissões do servidor web', correct: false },
    ],
  },
 
  {
    question: 'Qual é a principal diferença entre os métodos POST e GET em um formulário HTML?',
    answers: [
      { answer: 'O método POST é usado para enviar dados seguros, enquanto o GET é usado para dados não seguros', correct: false },
      { answer: 'O método GET é mais seguro que o POST para o envio de dados sensíveis', correct: false },
      { answer: 'O método POST é usado para enviar dados e o GET para receber dados', correct: false },
      { answer: 'O método GET anexa os dados à URL, enquanto o POST os envia de forma mais segura no corpo da requisição', correct: true },
    ],
  },
  {
    question: 'Como você pode validar se um campo obrigatório está preenchido em um formulário usando PHP?',
    answers: [
      { answer: 'Verificando se a variável $_REQUIRED está definida', correct: false },
      { answer: 'Usando a função check_required() do PHP', correct: false },
      { answer: 'Verificando se a variável do campo está vazia ou não', correct: true },
      { answer: 'Aplicando uma validação automática durante o envio do formulário', correct: false },
    ],
  },
  {
    question: 'Qual a importância de se validar e filtrar dados de entrada em um formulário?',
    answers: [
      { answer: 'Apenas para melhorar a estética do formulário', correct: false },
      { answer: 'Evitar que usuários preencham formulários desnecessários', correct: false },
      { answer: 'Prevenir ataques de segurança, como injeção de SQL e XSS', correct: true },
      { answer: 'Simplificar o código PHP', correct: false },
    ],
  },
  {
    question: 'O que é a CSRF (Cross-Site Request Forgery) e como você pode preveni-la em formulários PHP?',
    answers: [
      { answer: 'Uma técnica para proteger formulários contra tentativas de falsificação', correct: false },
      { answer: 'Uma vulnerabilidade que permite a execução remota de código no servidor', correct: false },
      { answer: 'Um ataque que engana o navegador do usuário para executar ações não desejadas em um site onde o usuário está autenticado', correct: true },
      { answer: 'Uma biblioteca PHP para processamento seguro de formulários', correct: false },
    ],
  },
  {
    question: 'Como você pode implementar um redirecionamento após o envio bem-sucedido de um formulário em PHP?',
    answers: [
      { answer: 'Usando a função navigate_to() no PHP', correct: false },
      { answer: 'Adicionando uma tag <redirect> no formulário HTML', correct: false },
      { answer: 'Utilizando a função header() para enviar um cabeçalho de redirecionamento', correct: true },
      { answer: 'Definindo a URL de destino como atributo no botão de envio do formulário', correct: false },
    ],
  },
  {
    question: 'O que é uma sessão em PHP e como ela pode ser utilizada para armazenar dados temporários de um formulário?',
    answers: [
      { answer: 'Uma sessão em PHP é um tipo de criptografia para proteger dados do formulário', correct: false },
      { answer: 'Uma forma de armazenar dados de formulário no banco de dados', correct: false },
      { answer: 'Uma maneira de manter o estado da aplicação entre requisições, permitindo armazenar dados temporários, como resultados de formulários', correct: true },
      { answer: 'Um tipo de validação automática para formulários', correct: false },
    ],
  },
 
  {
    question: 'Qual é a tag HTML usada para criar um formulário?',
    answers: [
      { answer: '<form>', correct: true },
      { answer: '<input>', correct: false },
      { answer: '<label>', correct: false },
      { answer: '<div>', correct: false },
    ],
    code: `
      <form action="/processar_formulario.php" method="post">
        <!-- Campos do formulário aqui -->
      </form>
    `,
  },
  {
    question: 'Como criar um campo de texto em um formulário HTML?',
    answers: [
      { answer: '<text>', correct: false },
      { answer: '<input type="text">', correct: true },
      { answer: '<textarea>', correct: false },
      { answer: '<label for="text">', correct: false },
    ],
    code: `
      <form>
        <label for="nome">Nome:</label>
        <input type="text" id="nome" name="nome">
      </form>
    `,
  },
  {
    question: 'Como enviar um formulário para um script PHP usando o método POST?',
    answers: [
      { answer: '<form action="/processar_formulario.php" method="get">', correct: false },
      { answer: '<form action="/processar_formulario.php" method="post">', correct: true },
      { answer: '<form method="post">', correct: false },
      { answer: '<form action="/processar_formulario.php">', correct: false },
    ],
    code: `
      <form action="/processar_formulario.php" method="post">
        <!-- Campos do formulário aqui -->
        <input type="submit" value="Enviar">
      </form>
    `,
  },
  {
    question: 'Como acessar os dados de um campo de texto enviado por um formulário em um script PHP?',
    answers: [
      { answer: '$_GET["nome"]', correct: false },
      { answer: '$_POST["nome"]', correct: true },
      { answer: '$_REQUEST["nome"]', correct: false },
      { answer: '$_SESSION["nome"]', correct: false },
    ],
    code: `
      <?php
        $nome = $_POST["nome"];
        // Restante do código aqui
      ?>
    `,
  },
  {
    question: 'Como validar se um campo de texto não está vazio em PHP?',
    answers: [
      { answer: 'if ($campo == "") { /* código aqui */ }', correct: false },
      { answer: 'if (empty($campo)) { /* código aqui */ }', correct: true },
      { answer: 'if ($campo === null) { /* código aqui */ }', correct: false },
      { answer: 'if (isset($campo)) { /* código aqui */ }', correct: false },
    ],
    code: `
      <?php
        $campo = $_POST["campo"];
        if (empty($campo)) {
          echo "Campo não pode estar vazio.";
        } else {
          // Processar os dados do formulário
        }
      ?>
    `,
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

