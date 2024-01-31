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
    question: 'Qual foi o objetivo principal no desenvolvimento do PHP?',
    answers: [
      { answer: 'Back-End', correct: true },
      { answer: 'Front-End', correct: false },
      { answer: 'Sistema operacional', correct: false },
      { answer: 'Banco de dados', correct: false },
    ],
  },
  {
    question: 'O PHP é mais voltado para qual aspecto do desenvolvimento web?',
    answers: [
      { answer: 'Front-End', correct: false },
      { answer: 'Back-End', correct: true },
      { answer: 'Full-Stack', correct: false },
      { answer: 'Mobile', correct: false },
    ],
  },
  {
    question: 'Em que parte de uma aplicação web o PHP geralmente é utilizado?',
    answers: [
      { answer: 'Front-End', correct: false },
      { answer: 'Back-End', correct: true },
      { answer: 'Banco de dados', correct: false },
      { answer: 'Ambos Front-End e Back-End', correct: false },
    ],
  },
  {
    question: 'Qual é a principal diferença entre o PHP e o JavaScript?',
    answers: [
      { answer: 'PHP é server-side, JavaScript é client-side', correct: true },
      { answer: 'PHP é client-side, JavaScript é server-side', correct: false },
      { answer: 'Ambos são server-side', correct: false },
      { answer: 'Ambos são client-side', correct: false },
    ],
  },
  {
    question: 'O PHP é uma linguagem de programação de que tipo?',
    answers: [
      { answer: 'Markup', correct: false },
      { answer: 'Back-End', correct: true },
      { answer: 'Front-End', correct: false },
      { answer: 'Script', correct: false },
    ],
  },
  {
    question: 'Qual é a função predominante do PHP no contexto de uma aplicação web?',
    answers: [
      { answer: 'Estilo e design', correct: false },
      { answer: 'Manipulação de dados e lógica de negócios', correct: true },
      { answer: 'Interação do usuário', correct: false },
      { answer: 'Requisições HTTP', correct: false },
    ],
  },
  {
    question: 'Em que camada de uma arquitetura de software o PHP é frequentemente utilizado?',
    answers: [
      { answer: 'Apresentação (UI)', correct: false },
      { answer: 'Lógica de Aplicação', correct: true },
      { answer: 'Banco de Dados', correct: false },
      { answer: 'Infraestrutura', correct: false },
    ],
  },
  
  {
    question: 'Qual é o acrônimo PHP?',
    answers: [
      { answer: 'Personal Home Page', correct: false },
      { answer: 'Pre-Hypertext Processor', correct: false },
      { answer: 'PHP: Hypertext Preprocessor', correct: true },
      { answer: 'Public Hosting Platform', correct: false },
    ],
  },
  {
    question: 'Quem é o criador original do PHP?',
    answers: [
      { answer: 'Mark Zuckerberg', correct: false },
      { answer: 'Rasmus Lerdorf', correct: true },
      { answer: 'Larry Page', correct: false },
      { answer: 'Tim Berners-Lee', correct: false },
    ],
  },
  {
    question: 'Em que ano o PHP foi inicialmente lançado?',
    answers: [
      { answer: '1990', correct: false },
      { answer: '1995', correct: false },
      { answer: '2000', correct: false },
      { answer: '1994', correct: true },
    ],
  },
  {
    question: 'Qual é o principal propósito do arquivo php.ini?',
    answers: [
      { answer: 'Definir estilos de página', correct: false },
      { answer: 'Configurar diretórios de imagens', correct: false },
      { answer: 'Configurar configurações do PHP', correct: true },
      { answer: 'Estruturar layouts de banco de dados', correct: false },
    ],
  },
  {
    question: 'O que significa a sigla SQL em relação ao PHP?',
    answers: [
      { answer: 'Simple Query Language', correct: false },
      { answer: 'Structured Query Language', correct: false },
      { answer: 'Server Query Language', correct: false },
      { answer: 'No contexto do PHP, não tem significado específico', correct: true },
    ],
  },
  {
    question: 'Qual é a função da função "echo" no PHP?',
    answers: [
      { answer: 'Imprimir conteúdo na página', correct: true },
      { answer: 'Definir variáveis', correct: false },
      { answer: 'Executar consultas SQL', correct: false },
      { answer: 'Criar funções personalizadas', correct: false },
    ],
  },
  {
    question: 'O que é o Composer no ecossistema PHP?',
    answers: [
      { answer: 'Um editor de código', correct: false },
      { answer: 'Um framework PHP', correct: false },
      { answer: 'Um gerenciador de dependências', correct: true },
      { answer: 'Um servidor web', correct: false },
    ],
  },
  {
    question: 'Qual função é utilizada para iniciar uma sessão no PHP?',
    answers: [
      { answer: 'start_session()', correct: false },
      { answer: 'begin_session()', correct: false },
      { answer: 'session_start()', correct: true },
      { answer: 'init_session()', correct: false },
    ],
  },
  {
    question: 'O que é uma variável superglobal no PHP?',
    answers: [
      { answer: 'Uma variável acessível apenas em funções específicas', correct: false },
      { answer: 'Uma variável que armazena valores globais', correct: false },
      { answer: 'Uma variável com escopo global, acessível em qualquer lugar do script', correct: true },
      { answer: 'Uma variável que só pode ser usada em loops', correct: false },
    ],
  },
  {
    question: 'Qual é a diferença entre "==" e "===" em PHP?',
    answers: [
      { answer: 'Nenhuma diferença, ambos são usados para comparação igual', correct: false },
      { answer: '== compara apenas valores, enquanto === compara valores e tipos de dados', correct: true },
      { answer: '== compara apenas tipos de dados, enquanto === compara valores', correct: false },
      { answer: '== é utilizado para atribuição, enquanto === é utilizado para comparação', correct: false },
    ],
  },
  {
    question: 'O que é um namespace no PHP?',
    answers: [
      { answer: 'Uma área de armazenamento temporário no servidor', correct: false },
      { answer: 'Um conjunto de funções específicas', correct: false },
      { answer: 'Uma forma de encapsular itens como classes e funções', correct: true },
      { answer: 'Uma variável que armazena nomes de arquivos', correct: false },
    ],
  },
  {
    question: 'Como o PHP lida com exceções?',
    answers: [
      { answer: 'Através de comandos try, catch e finally', correct: true },
      { answer: 'Ignorando-as automaticamente', correct: false },
      { answer: 'Encerrando a execução do script imediatamente', correct: false },
      { answer: 'Exibindo um aviso, mas continuando a execução', correct: false },
    ],
  },
  {
    question: 'O que é o PDO (PHP Data Objects) no contexto do PHP?',
    answers: [
      { answer: 'Um framework PHP', correct: false },
      { answer: 'Um editor de código para PHP', correct: false },
      { answer: 'Uma extensão para manipulação de bancos de dados', correct: true },
      { answer: 'Uma linguagem de consulta específica para PHP', correct: false },
    ],
  },
  {
    question: 'Qual é a principal diferença entre include() e require() no PHP?',
    answers: [
      { answer: 'Não há diferença, ambos fazem a mesma coisa', correct: false },
      { answer: 'include() é utilizado para incluir arquivos HTML, require() para arquivos PHP', correct: false },
      { answer: 'include() gera um aviso se o arquivo não for encontrado, require() gera um erro fatal', correct: true },
      { answer: 'require() é obsoleto, e include() deve ser utilizado em seu lugar', correct: false },
    ],
  },
  {
    question: 'O que é a injeção de SQL, e como o PHP pode ajudar a preveni-la?',
    answers: [
      { answer: 'Injeção de SQL é uma técnica de otimização de consultas, e o PHP não está relacionado a isso', correct: false },
      { answer: 'Injeção de SQL é uma forma de inserir códigos maliciosos em consultas SQL, e o PHP pode prevenir usando declarações preparadas (prepared statements)', correct: true },
      { answer: 'Injeção de SQL é uma técnica para modificar o código-fonte PHP, e o PHP não oferece proteção contra isso', correct: false },
      { answer: 'Injeção de SQL é uma técnica para aumentar o desempenho do PHP, e não é necessário preveni-la', correct: false },
    ],
  },
  {
    question: 'O que é a função header() no PHP?',
    answers: [
      { answer: 'Define o cabeçalho de uma tabela HTML', correct: false },
      { answer: 'Envia um cabeçalho HTTP personalizado', correct: true },
      { answer: 'Inclui um arquivo externo no script', correct: false },
      { answer: 'Define um cabeçalho para uma requisição AJAX', correct: false },
    ],
  },
  {
    question: 'Qual é a diferença entre POST e GET no PHP?',
    answers: [
      { answer: 'POST é utilizado para solicitações seguras, enquanto GET é para solicitações menos seguras', correct: true },
      { answer: 'GET é mais eficiente para o envio de grandes volumes de dados', correct: false },
      { answer: 'POST é utilizado exclusivamente para envio de formulários', correct: false },
      { answer: 'GET é preferível para dados sensíveis devido à sua criptografia embutida', correct: false },
    ],
  },
  {
    question: 'O que é o Modo de Segurança no PHP?',
    answers: [
      { answer: 'Um modo que impede qualquer execução de scripts PHP', correct: false },
      { answer: 'Uma configuração que força o uso de HTTPS', correct: false },
      { answer: 'Uma característica que restringe o acesso a certos recursos do PHP', correct: true },
      { answer: 'Uma configuração que desabilita completamente o PHP', correct: false },
    ],
  },
  {
    question: 'Como você acessa os parâmetros passados via URL em PHP?',
    answers: [
      { answer: 'Através da variável $_POST', correct: false },
      { answer: 'Através da variável $_REQUEST', correct: true },
      { answer: 'Através da variável $_GET', correct: false },
      { answer: 'Através da variável $_URL', correct: false },
    ],
  },
  {
    question: 'O que é a função "unlink()" no PHP?',
    answers: [
      { answer: 'Remove uma linha de uma tabela de banco de dados', correct: false },
      { answer: 'Exclui um arquivo do sistema de arquivos', correct: true },
      { answer: 'Desvincula uma biblioteca externa no PHP', correct: false },
      { answer: 'Revoga as permissões de acesso a um arquivo', correct: false },
    ],
  },
  {
    question: 'O que é a técnica de "hashing" e como ela é usada em PHP?',
    answers: [
      { answer: 'Hashing é a transformação de dados em uma representação fixa de comprimento, geralmente usada para armazenar senhas de forma segura', correct: true },
      { answer: 'Hashing é o processo de compactação de imagens em PHP', correct: false },
      { answer: 'Hashing é uma técnica de otimização de consultas SQL', correct: false },
      { answer: 'Hashing é usado para criar arrays associativos em PHP', correct: false },
    ],
  },
  {
    question: 'Qual é a diferença entre aspas simples e aspas duplas ao definir uma string em PHP?',
    answers: [
      { answer: 'Nenhuma diferença, ambas podem ser usadas de forma intercambiável', correct: false },
      { answer: 'Aspas duplas interpretam variáveis dentro da string, enquanto aspas simples tratam tudo literalmente', correct: true },
      { answer: 'Aspas simples são usadas apenas para strings longas', correct: false },
      { answer: 'Aspas duplas são usadas apenas para strings curtas', correct: false },
    ],
  },
  {
    question: 'O que é a função "session_destroy()" no PHP?',
    answers: [
      { answer: 'Encerra a execução do script PHP', correct: false },
      { answer: 'Fecha a conexão com o banco de dados', correct: false },
      { answer: 'Destroi todos os dados associados à sessão atual', correct: true },
      { answer: 'Remove uma variável de sessão específica', correct: false },
    ],
  },
  {
    question: 'Qual é a finalidade da função "header("Content-Type: application/json")" em PHP?',
    answers: [
      { answer: 'Definir o estilo de uma página HTML', correct: false },
      { answer: 'Definir a codificação de caracteres em um script PHP', correct: false },
      { answer: 'Especificar que o conteúdo retornado é do tipo JSON', correct: true },
      { answer: 'Enviar um cabeçalho HTTP personalizado', correct: false },
    ],
  },
  {
    question: 'O que é a função "file_get_contents()" no PHP?',
    answers: [
      { answer: 'Uma função para criar novos arquivos no sistema de arquivos', correct: false },
      { answer: 'Uma função para ler o conteúdo de um arquivo em uma string', correct: true },
      { answer: 'Uma função para verificar se um arquivo existe', correct: false },
      { answer: 'Uma função para renomear arquivos', correct: false },
    ],
  },
  {
    question: 'O que é o autoload no contexto de classes em PHP?',
    answers: [
      { answer: 'Uma função para carregar automaticamente imagens em um site', correct: false },
      { answer: 'Uma técnica para carregar automaticamente classes quando são necessárias', correct: true },
      { answer: 'Um recurso para carregar automaticamente arquivos CSS', correct: false },
      { answer: 'Uma função para carregar automaticamente arquivos JavaScript', correct: false },
    ],
  },
  {
    question: 'Como você realiza uma consulta preparada (prepared statement) em PHP?',
    answers: [
      { answer: 'Utilizando a função "query()"', correct: false },
      { answer: 'Inserindo diretamente a consulta SQL no código', correct: false },
      { answer: 'Usando a função "prepare()" e vinculando os parâmetros', correct: true },
      { answer: 'A função "execute()" é suficiente para consultas preparadas', correct: false },
    ],
  },
  

];

// Inicialização do quizz
function init() {
  createQuestion(actualQuestion);
}

// Criação de pergunta
// Função para embaralhar um array usando o algoritmo de Fisher-Yates
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Criação de pergunta
function createQuestion(index) {
  clearPreviousQuestion();
  const question = questions[index];
  const questionText = questionElement.querySelector('#question-text');
  const questionNumber = questionElement.querySelector('#question-number');

  questionText.textContent = question.question;
  questionNumber.textContent = index + 1;

  // Embaralha as respostas antes de exibi-las
  shuffle(question.answers);

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

// Restante do seu código...

// Função para inicializar o quizz
function init() {
  createQuestion(actualQuestion);
}

// Inicialização do quizz
init();
