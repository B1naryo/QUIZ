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
    question: "31. Qual é o papel do registrador EIP em um exploit?",
    answers: [
      { answer: "Armazenar endereços de memória relativos", correct: false },
      { answer: "Manter a contagem de instruções executadas até o momento", correct: false },
      { answer: "Armazenar o endereço de próxima instrução a ser executada", correct: true },
      { answer: "Armazenar o estado do processador, indicando condições como zero ou sinal", correct: false },
    ],
  },
  {
    question: "32. Como o registrador ESP é utilizado na criação de exploits?",
    answers: [
      { answer: "Armazenar endereços de memória relativos", correct: false },
      { answer: "Manter a contagem de instruções executadas até o momento", correct: false },
      { answer: "Apontar para o topo da pilha (stack) de execução", correct: true },
      { answer: "Armazenar o estado do processador, indicando condições como zero ou sinal", correct: false },
    ],
  },
  {
    question: "33. O que é 'stack pivoting' em termos de exploits?",
    answers: [
      { answer: "Uma técnica para otimizar o desempenho do sistema", correct: false },
      { answer: "A manipulação da pilha para redirecionar a execução do programa", correct: true },
      { answer: "A execução de um programa dentro de outro programa", correct: false },
      { answer: "Ignorar a execução de uma instrução específica", correct: false },
    ],
  },
  {
    question: "34. O registrador EAX é frequentemente usado em exploits para:",
    answers: [
      { answer: "Armazenar endereços de memória relativos", correct: false },
      { answer: "Manter a contagem de instruções executadas até o momento", correct: false },
      { answer: "Armazenar o resultado de operações aritméticas e lógicas", correct: true },
      { answer: "Armazenar o estado do processador, indicando condições como zero ou sinal", correct: false },
    ],
  },
  {
    question: "35. Como o registrador EBX pode ser explorado em exploits?",
    answers: [
      { answer: "Controlar o fluxo de execução do programa", correct: false },
      { answer: "Armazenar endereços de memória relativos", correct: false },
      { answer: "Apontar para dados na seção de dados do programa", correct: true },
      { answer: "Armazenar o estado do processador, indicando condições como zero ou sinal", correct: false },
    ],
  },
  {
    question: "36. O que é 'register trashing' em exploits?",
    answers: [
      { answer: "Uma técnica para otimizar o desempenho do sistema", correct: false },
      { answer: "A corrupção intencional de registradores para alterar o comportamento do programa", correct: true },
      { answer: "A execução de um código arbitrário sem a permissão do sistema", correct: false },
      { answer: "Ignorar a execução de uma instrução específica", correct: false },
    ],
  },
  {
    question: "37. Como o registrador EDI é usado em exploits?",
    answers: [
      { answer: "Controlar o fluxo de execução do programa", correct: false },
      { answer: "Armazenar endereços de memória relativos", correct: false },
      { answer: "Apontar para dados na seção de dados do programa", correct: false },
      { answer: "Manipular destinos de transferência de dados durante operações de string", correct: true },
    ],
  },
  {
    question: "38. O que é 'register encoding' em exploits?",
    answers: [
      { answer: "Uma técnica para otimizar o desempenho do sistema", correct: false },
      { answer: "A codificação de dados para armazenamento em registradores", correct: false },
      { answer: "A manipulação de registradores para representar instruções ou dados específicos", correct: true },
      { answer: "A execução de um código arbitrário sem a permissão do sistema", correct: false },
    ],
  },
  {
    question: "39. Qual é a função do registrador ECX em técnicas de 'shellcoding'?",
    answers: [
      { answer: "Armazenar endereços de memória relativos", correct: false },
      { answer: "Manter a contagem de instruções executadas até o momento", correct: false },
      { answer: "Controlar o tamanho dos buffers usados no shellcode", correct: true },
      { answer: "Armazenar o estado do processador, indicando condições como zero ou sinal", correct: false },
    ],
  },
  {
    question: "40. O registrador ESI é comumente utilizado em exploits para:",
    answers: [
      { answer: "Controlar o fluxo de execução do programa", correct: false },
      { answer: "Armazenar endereços de memória relativos", correct: false },
      { answer: "Manipular fontes de transferência de dados durante operações de string", correct: true },
      { answer: "Armazenar o estado do processador, indicando condições como zero ou sinal", correct: false },
    ],
  },
  {
    question: "41. O que é 'register hijacking' em exploits?",
    answers: [
      { answer: "A corrupção acidental de registradores devido a falhas no código", correct: false },
      { answer: "A técnica de redirecionar a execução do programa manipulando registradores", correct: true },
      { answer: "A substituição de registradores por versões mais recentes durante a execução", correct: false },
      { answer: "A execução de um código arbitrário sem a permissão do sistema", correct: false },
    ],
  },
  {
    question: "42. Como os registradores de segmento (CS, DS, SS, ES, FS, GS) são utilizados em exploits?",
    answers: [
      { answer: "Armazenar endereços de memória relativos", correct: false },
      { answer: "Apontar para a posição inicial de segmentos específicos na memória", correct: true },
      { answer: "Manipular fontes de transferência de dados durante operações de string", correct: false },
      { answer: "Controlar o tamanho dos buffers usados no shellcode", correct: false },
    ],
  },
  {
    question: "43. O que é 'call gate' em exploits?",
    answers: [
      { answer: "Um mecanismo para chamar funções em linguagens de alto nível", correct: false },
      { answer: "Um ponto de parada no código onde a execução é interrompida para inspeção", correct: false },
      { answer: "Um ponto de entrada seguro em um segmento de código privilegiado", correct: true },
      { answer: "A execução de um código arbitrário sem a permissão do sistema", correct: false },
    ],
  },
  {
    question: "44. Como os registradores de flags (EFLAGS) são relevantes na criação de exploits?",
    answers: [
      { answer: "Armazenar endereços de memória relativos", correct: false },
      { answer: "Controlar o tamanho dos buffers usados no shellcode", correct: false },
      { answer: "Armazenar o estado do processador, indicando condições como zero ou sinal", correct: false },
      { answer: "Indicar o resultado de operações e influenciar o fluxo de controle do programa", correct: true },
    ],
  },
  {
    question: "45. Como o registrador FLAGS pode ser manipulado em técnicas de 'exploit development'?",
    answers: [
      { answer: "Alterando manualmente os valores em tempo de execução", correct: false },
      { answer: "Aproveitando vulnerabilidades para alterar flags específicas", correct: true },
      { answer: "Ignorando completamente a influência dos flags no programa", correct: false },
      { answer: "Executando o programa normalmente, sem considerar os flags", correct: false },
    ],
  },
  {
    question: "46. O que são 'zero-day exploits' e como os registradores são relevantes nesse contexto?",
    answers: [
      { answer: "Explorações que não requerem a utilização de registradores", correct: false },
      { answer: "Explorações que aproveitam vulnerabilidades ainda não corrigidas", correct: true },
      { answer: "Explorações que só ocorrem em sistemas com registradores específicos", correct: false },
      { answer: "Explorações que ocorrem no primeiro dia de lançamento de um programa", correct: false },
    ],
  },
  {
    question: "47. Como os registradores são utilizados em técnicas de 'return-oriented programming' (ROP)?",
    answers: [
      { answer: "Controlar o fluxo de execução do programa", correct: false },
      { answer: "Apontar para a posição inicial de segmentos específicos na memória", correct: false },
      { answer: "Construir sequências de instruções existentes no código do programa", correct: true },
      { answer: "Ignorar a execução de uma instrução específica", correct: false },
    ],
  },
  {
    question: "48. Qual é a importância do registrador CR0 em técnicas de 'privilege escalation'?",
    answers: [
      { answer: "Determinar o valor de retorno de funções no programa", correct: false },
      { answer: "Controlar o acesso a recursos do sistema operacional", correct: true },
      { answer: "Manipular fontes de transferência de dados durante operações de string", correct: false },
      { answer: "Armazenar o estado do processador, indicando condições como zero ou sinal", correct: false },
    ],
  },
  {
    question: "49. O que são registradores SIMD e como são utilizados em técnicas de otimização de exploits?",
    answers: [
      { answer: "Registradores que operam exclusivamente em modo texto", correct: false },
      { answer: "Registradores especiais projetados para operações de criptografia", correct: false },
      { answer: "Registradores que suportam instruções de processamento de dados simultâneas", correct: true },
      { answer: "Registradores que controlam o acesso a recursos do sistema operacional", correct: false },
    ],
  },
  {
    question: "50. Qual é a função do registrador RSP em sistemas de 64 bits durante a execução de exploits?",
    answers: [
      { answer: "Armazenar endereços de memória relativos", correct: false },
      { answer: "Controlar o tamanho dos buffers usados no shellcode", correct: false },
      { answer: "Apontar para o topo da pilha (stack) de execução", correct: true },
      { answer: "Armazenar o estado do processador, indicando condições como zero ou sinal", correct: false },
    ],
  },
  {
    question: "51. Como os registradores de controle (CR1-CR4) são relevantes na criação de exploits?",
    answers: [
      { answer: "Controlar a execução de instruções específicas", correct: false },
      { answer: "Determinar o valor de retorno de funções no programa", correct: false },
      { answer: "Manipular fontes de transferência de dados durante operações de string", correct: false },
      { answer: "Controlar o acesso a recursos do sistema operacional e configurar características do processador", correct: true },
    ],
  },
  {
    question: "52. Em técnicas de 'heap spraying', como os registradores são utilizados para alocar e preencher a memória?",
    answers: [
      { answer: "Controlar o fluxo de execução do programa", correct: false },
      { answer: "Apontar para a posição inicial de segmentos específicos na memória", correct: false },
      { answer: "Alocar e preencher áreas de memória específicas para facilitar exploits", correct: true },
      { answer: "Ignorar a execução de uma instrução específica", correct: false },
    ],
  },
  {
    question: "53. O que são registradores de vetor (Vector Registers) e como são utilizados em otimizações de código?",
    answers: [
      { answer: "Registradores que armazenam instruções de salto condicional", correct: false },
      { answer: "Registradores especiais projetados para operações de criptografia", correct: false },
      { answer: "Registradores que suportam operações de dados em paralelo", correct: true },
      { answer: "Registradores que controlam o acesso a recursos do sistema operacional", correct: false },
    ],
  },
  {
    question: "54. Como os registradores de controle de depuração (DR0-DR7) são utilizados em técnicas de 'debugging' durante a criação de exploits?",
    answers: [
      { answer: "Controlar a execução de instruções específicas", correct: false },
      { answer: "Determinar o valor de retorno de funções no programa", correct: false },
      { answer: "Detectar e responder a eventos de depuração", correct: true },
      { answer: "Controlar o acesso a recursos do sistema operacional", correct: false },
    ],
  },
  {
    question: "55. Qual é a função do registrador MMX em otimizações de código e técnicas de shellcoding?",
    answers: [
      { answer: "Suportar instruções de processamento de dados simultâneas", correct: false },
      { answer: "Armazenar instruções de salto condicional", correct: false },
      { answer: "Facilitar operações de ponto flutuante", correct: false },
      { answer: "Realizar operações de dados em paralelo para melhorar o desempenho", correct: true },
    ],
  },
  {
    question: "56. Como os registradores XMM são utilizados em técnicas de otimização de exploits?",
    answers: [
      { answer: "Suportar instruções de processamento de dados simultâneas", correct: true },
      { answer: "Armazenar instruções de salto condicional", correct: false },
      { answer: "Facilitar operações de ponto flutuante", correct: false },
      { answer: "Realizar operações de dados em paralelo para melhorar o desempenho", correct: false },
    ],
  },
  {
    question: "57. Em exploits que visam vulnerabilidades de estouro de buffer, como os registradores são explorados?",
    answers: [
      { answer: "Alterando o conteúdo de registradores de controle", correct: false },
      { answer: "Redirecionando a execução do programa por meio do registrador EIP", correct: true },
      { answer: "Substituindo os registradores de dados durante a execução", correct: false },
      { answer: "Ignorando completamente o uso de registradores", correct: false },
    ],
  },
  {
    question: "58. O que são registradores de somente leitura (RO registers) e como eles impactam a criação de exploits?",
    answers: [
      { answer: "Registradores que armazenam instruções de salto condicional", correct: false },
      { answer: "Registradores especiais projetados para operações de criptografia", correct: false },
      { answer: "Registradores que só podem ser lidos, não modificados, durante a execução do programa", correct: true },
      { answer: "Registradores que controlam o acesso a recursos do sistema operacional", correct: false },
    ],
  },
  {
    question: "59. Qual é a função dos registradores de controle de interrupção (IDT e ISR) em exploits?",
    answers: [
      { answer: "Controlar a execução de instruções específicas", correct: false },
      { answer: "Detectar e responder a eventos de depuração", correct: false },
      { answer: "Facilitar a manipulação de interrupções e exceções", correct: true },
      { answer: "Controlar o acesso a recursos do sistema operacional", correct: false },
    ],
  },
  {
    question: "60. Em técnicas de 'code injection', como os registradores são utilizados para inserir código malicioso?",
    answers: [
      { answer: "Controlar a execução de instruções específicas", correct: false },
      { answer: "Determinar o valor de retorno de funções no programa", correct: false },
      { answer: "Manipular fontes de transferência de dados durante operações de string", correct: false },
      { answer: "Apontar para o código malicioso inserido na memória por meio de registradores", correct: true },
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
