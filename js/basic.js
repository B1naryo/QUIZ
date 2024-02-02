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
    question: "1. O que é um exploit na segurança da informação?",
    answers: [
      { answer: "Um código malicioso utilizado para explorar vulnerabilidades em sistemas", correct: true },
      { answer: "Um mecanismo de proteção contra ataques cibernéticos", correct: false },
      { answer: "Um tipo de antivírus avançado", correct: false },
      { answer: "Um protocolo de segurança para redes", correct: false },
    ],
  },
  {
    question: "2. Qual é o objetivo principal de um buffer overflow em termos de exploits?",
    answers: [
      { answer: "Corrigir falhas de segurança", correct: false },
      { answer: "Prevenir ataques de phishing", correct: false },
      { answer: "Executar código malicioso ao sobrecarregar uma área de memória", correct: true },
      { answer: "Otimizar o desempenho do sistema", correct: false },
    ],
  },
  {
    question: "3. O que é um shell code payload?",
    answers: [
      { answer: "Um tipo de linguagem de programação", correct: false },
      { answer: "Um fragmento de código projetado para ser executado por um shell", correct: true },
      { answer: "Um método de criptografia avançada", correct: false },
      { answer: "Uma técnica para detectar ameaças de segurança", correct: false },
    ],
  },
  {
    question: "4. Qual é a função principal de um NOP sled em um exploit?",
    answers: [
      { answer: "Injetar código malicioso", correct: false },
      { answer: "Facilitar a execução do shell code", correct: true },
      { answer: "Detectar vulnerabilidades em sistemas", correct: false },
      { answer: "Criar firewalls de segurança", correct: false },
    ],
  },
  {
    question: "5. Em termos de exploits, o que significa 'Zero-Day'?",
    answers: [
      { answer: "Um exploit que não requer nenhum código malicioso", correct: false },
      { answer: "Uma vulnerabilidade de dia zero", correct: true },
      { answer: "Um código de shell payload avançado", correct: false },
      { answer: "Um protocolo de segurança usado em redes", correct: false },
    ],
  },
  {
    question: "6. O que é um ROP chain?",
    answers: [
      { answer: "Um método de criptografia", correct: false },
      { answer: "Uma cadeia de instruções de retorno orientadas", correct: true },
      { answer: "Um tipo de firewall", correct: false },
      { answer: "Um protocolo de comunicação segura", correct: false },
    ],
  },
  {
    question: "7. O que é um payload reverse shell?",
    answers: [
      { answer: "Um código de segurança para redes", correct: false },
      { answer: "Um fragmento de código projetado para desativar firewalls", correct: false },
      { answer: "Um código que cria um canal de comunicação reverso com o atacante", correct: true },
      { answer: "Uma técnica para proteger contra ataques de phishing", correct: false },
    ],
  },
  {
    question: "8. O que é a técnica 'Return-Oriented Programming' (ROP) em exploração de vulnerabilidades?",
    answers: [
      { answer: "Um método para programar interfaces de usuário", correct: false },
      { answer: "Uma técnica para explorar vulnerabilidades usando instruções de retorno", correct: true },
      { answer: "Uma abordagem para criptografar dados sensíveis", correct: false },
      { answer: "Um protocolo de segurança em redes sociais", correct: false },
    ],
  },
  {
    question: "9. Em termos de segurança, o que é um 'stack canary'?",
    answers: [
      { answer: "Um mecanismo de proteção contra buffer overflows", correct: true },
      { answer: "Um código de shell payload", correct: false },
      { answer: "Um tipo de vírus de computador", correct: false },
      { answer: "Um firewall avançado", correct: false },
    ],
  },
  {
    question: "10. Qual é o papel do 'DEP' (Data Execution Prevention) na segurança contra exploits?",
    answers: [
      { answer: "Prevenir ataques de phishing", correct: false },
      { answer: "Evitar a execução de código em áreas de memória designadas como não executáveis", correct: true },
      { answer: "Injetar código malicioso em sistemas", correct: false },
      { answer: "Otimizar o desempenho do sistema", correct: false },
    ],
  },
  {
    question: "11. O que é um 'heap overflow' em termos de exploração de vulnerabilidades?",
    answers: [
      { answer: "Uma vulnerabilidade causada pelo estouro de pilha", correct: false },
      { answer: "Um método de explorar falhas em firewalls", correct: false },
      { answer: "Uma vulnerabilidade causada pelo estouro de uma área de memória alocada dinamicamente", correct: true },
      { answer: "Um protocolo de segurança para transmissão de dados", correct: false },
    ],
  },
  {
    question: "12. Qual é a importância da técnica 'Fuzzing' no desenvolvimento seguro de software?",
    answers: [
      { answer: "Testar a resistência de firewalls", correct: false },
      { answer: "Detectar vulnerabilidades através da entrada de dados aleatórios", correct: true },
      { answer: "Proteger contra ataques de negação de serviço", correct: false },
      { answer: "Otimizar o desempenho de algoritmos de criptografia", correct: false },
    ],
  },
  {
    question: "13. O que é um 'integer overflow' em termos de exploração de vulnerabilidades?",
    answers: [
      { answer: "Uma vulnerabilidade causada por entradas de dados não esperadas", correct: false },
      { answer: "Um método de criptografia de números inteiros", correct: false },
      { answer: "Uma vulnerabilidade causada pelo estouro de um valor inteiro durante uma operação", correct: true },
      { answer: "Um código de shell payload para números inteiros", correct: false },
    ],
  },
  {
    question: "14. O que significa 'ASLR' (Address Space Layout Randomization) em termos de segurança de sistemas?",
    answers: [
      { answer: "Um método de otimização de espaço em disco", correct: false },
      { answer: "Um protocolo de segurança para transmissão de dados", correct: false },
      { answer: "Uma técnica que randomiza a localização na memória de áreas críticas do sistema", correct: true },
      { answer: "Um código de shell payload para endereços de IP", correct: false },
    ],
  },
  {
    question: "15. Em exploração de vulnerabilidades, o que é um 'ROP gadget'?",
    answers: [
      { answer: "Uma técnica para programar interfaces de usuário", correct: false },
      { answer: "Um fragmento de código usado em Return-Oriented Programming", correct: true },
      { answer: "Uma vulnerabilidade causada pelo estouro de pilha", correct: false },
      { answer: "Um protocolo de comunicação seguro", correct: false },
    ],
  },
  {
    question: "16. Qual é a diferença entre um ataque 'stack overflow' e 'heap overflow'?",
    answers: [
      { answer: "Ambos são termos diferentes para o mesmo tipo de ataque", correct: false },
      { answer: "Um ataque 'stack overflow' ocorre na pilha, enquanto um 'heap overflow' ocorre na memória alocada dinamicamente", correct: true },
      { answer: "Um ataque 'heap overflow' ocorre na pilha, enquanto um 'stack overflow' ocorre na memória alocada dinamicamente", correct: false },
      { answer: "Ambos são métodos de proteção contra exploração de vulnerabilidades", correct: false },
    ],
  },
  {
    question: "17. O que é um 'format string vulnerability'?",
    answers: [
      { answer: "Uma vulnerabilidade causada por formatação inadequada de textos", correct: true },
      { answer: "Um método de proteção contra ataques de phishing", correct: false },
      { answer: "Uma técnica de criptografia para formatos de arquivos", correct: false },
      { answer: "Um código de shell payload para formatação de discos", correct: false },
    ],
  },
  {
    question: "18. Em termos de segurança de sistemas, o que é um 'Race Condition'?",
    answers: [
      { answer: "Um método para detectar vulnerabilidades", correct: false },
      { answer: "Uma vulnerabilidade causada por condições climáticas adversas", correct: false },
      { answer: "Uma situação em que o comportamento de um sistema depende da ordem das operações concorrentes", correct: true },
      { answer: "Um protocolo de segurança para redes sociais", correct: false },
    ],
  },
  {
    question: "19. O que significa 'DLL injection'?",
    answers: [
      { answer: "Um método para otimizar a execução de programas", correct: false },
      { answer: "Uma técnica para injetar código malicioso em bibliotecas dinâmicas", correct: true },
      { answer: "Um protocolo de comunicação entre sistemas operacionais", correct: false },
      { answer: "Um código de shell payload para injeção de dados", correct: false },
    ],
  },
  {
    question: "20. O que é 'Shimming' em termos de exploração de vulnerabilidades?",
    answers: [
      { answer: "Um método de proteção contra ataques cibernéticos", correct: false },
      { answer: "Uma técnica de otimização de código", correct: false },
      { answer: "Um processo de interceptação e modificação de chamadas de API", correct: true },
      { answer: "Um código de shell payload para desativar firewalls", correct: false },
    ],
  },
  {
    question: "21. Qual é o propósito do 'Canary Token' em termos de segurança?",
    answers: [
      { answer: "Um método para detectar vulnerabilidades em firewalls", correct: false },
      { answer: "Um token usado em autenticação multifatorial", correct: false },
      { answer: "Um mecanismo de detecção de intrusos", correct: false },
      { answer: "Um marcador falso colocado em sistemas para alertar sobre atividades suspeitas", correct: true },
    ],
  },
  {
    question: "22. O que é 'DLL hijacking'?",
    answers: [
      { answer: "Um método para otimizar a execução de programas", correct: false },
      { answer: "Uma técnica para sequestro de bibliotecas dinâmicas para executar código malicioso", correct: true },
      { answer: "Um protocolo de comunicação entre sistemas operacionais", correct: false },
      { answer: "Um código de shell payload para injeção de dados", correct: false },
    ],
  },
  {
    question: "23. O que é um 'ROP gadget'?",
    answers: [
      { answer: "Uma técnica para programar interfaces de usuário", correct: false },
      { answer: "Um fragmento de código usado em Return-Oriented Programming", correct: true },
      { answer: "Uma vulnerabilidade causada pelo estouro de pilha", correct: false },
      { answer: "Um protocolo de comunicação seguro", correct: false },
    ],
  },
  {
    question: "24. O que significa 'ASLR' (Address Space Layout Randomization) em termos de segurança de sistemas?",
    answers: [
      { answer: "Um método de otimização de espaço em disco", correct: false },
      { answer: "Um protocolo de segurança para transmissão de dados", correct: false },
      { answer: "Uma técnica que randomiza a localização na memória de áreas críticas do sistema", correct: true },
      { answer: "Um código de shell payload para endereços de IP", correct: false },
    ],
  },
  {
    question: "25. O que é um 'payload stager' em termos de exploração de vulnerabilidades?",
    answers: [
      { answer: "Um fragmento de código que executa um ataque inicial para baixar um payload completo", correct: true },
      { answer: "Um método de proteção contra ataques de phishing", correct: false },
      { answer: "Uma técnica para explorar vulnerabilidades usando instruções de retorno", correct: false },
      { answer: "Um código de shell payload para formatação de discos", correct: false },
    ],
  },
  {
    question: "26. Qual é a função do 'Canary Value' em um buffer overflow?",
    answers: [
      { answer: "Um método de criptografia para proteger dados sensíveis", correct: false },
      { answer: "Um valor aleatório inserido entre variáveis locais e o ponteiro de retorno", correct: true },
      { answer: "Um protocolo de segurança para redes sociais", correct: false },
      { answer: "Uma técnica para detectar vulnerabilidades em firewalls", correct: false },
    ],
  },
  {
    question: "27. O que é um 'shellcode encoder'?",
    answers: [
      { answer: "Um fragmento de código que executa um ataque inicial para baixar um payload completo", correct: false },
      { answer: "Um método de codificação usado para ofuscar shell code", correct: true },
      { answer: "Uma técnica para explorar vulnerabilidades usando instruções de retorno", correct: false },
      { answer: "Um código de shell payload para formatação de discos", correct: false },
    ],
  },
  {
    question: "28. Qual é a principal função de um 'exploit framework'?",
    answers: [
      { answer: "Detectar vulnerabilidades em sistemas operacionais", correct: false },
      { answer: "Automatizar o processo de desenvolvimento de exploits", correct: true },
      { answer: "Otimizar o desempenho do sistema", correct: false },
      { answer: "Criar firewalls de segurança avançados", correct: false },
    ],
  },
  {
    question: "29. O que é um 'shellcode obfuscation'?",
    answers: [
      { answer: "Um método de otimização de código", correct: false },
      { answer: "Um processo de tornar o shell code mais difícil de ser detectado", correct: true },
      { answer: "Uma técnica para explorar vulnerabilidades usando instruções de retorno", correct: false },
      { answer: "Um código de shell payload para injeção de dados", correct: false },
    ],
  },
  {
    question: "30. O que significa 'ROP chaining'?",
    answers: [
      { answer: "Um método para programar interfaces de usuário", correct: false },
      { answer: "Uma técnica para encadear gadgets em Return-Oriented Programming", correct: true },
      { answer: "Uma vulnerabilidade causada pelo estouro de pilha", correct: false },
      { answer: "Um protocolo de comunicação seguro", correct: false },
    ],
  },

  {
    question: "31. O que é 'DLL sideloading'?",
    answers: [
      { answer: "Um método para otimizar a execução de programas", correct: false },
      { answer: "Uma técnica para carregar dinamicamente bibliotecas em um processo para executar código malicioso", correct: true },
      { answer: "Um protocolo de comunicação entre sistemas operacionais", correct: false },
      { answer: "Um código de shell payload para injeção de dados", correct: false },
    ],
  },
  {
    question: "32. Qual é a função do 'ROP compiler' em exploração de vulnerabilidades?",
    answers: [
      { answer: "Compilar programas escritos em Return-Oriented Programming", correct: false },
      { answer: "Automatizar a geração de gadgets para ataques ROP", correct: true },
      { answer: "Otimizar o desempenho do sistema", correct: false },
      { answer: "Criar firewalls de segurança avançados", correct: false },
    ],
  },
  {
    question: "33. O que é 'exfiltration' em termos de segurança cibernética?",
    answers: [
      { answer: "Um método de proteção contra buffer overflows", correct: false },
      { answer: "A remoção não autorizada de dados de um sistema comprometido", correct: true },
      { answer: "Uma técnica para codificar dados sensíveis", correct: false },
      { answer: "Um protocolo de comunicação seguro", correct: false },
    ],
  },
  {
    question: "34. O que caracteriza um ataque 'ROP-only'?",
    answers: [
      { answer: "Um ataque que utiliza apenas instruções de retorno", correct: true },
      { answer: "Um ataque sem shell code payload", correct: false },
      { answer: "Um método de criptografia avançada", correct: false },
      { answer: "Uma técnica para proteger contra ataques de phishing", correct: false },
    ],
  },
  {
    question: "35. O que é 'string format exploitation'?",
    answers: [
      { answer: "Um método de proteção contra buffer overflows", correct: false },
      { answer: "Uma técnica para explorar vulnerabilidades usando formatação de strings", correct: true },
      { answer: "Uma abordagem para codificar strings em linguagens de programação", correct: false },
      { answer: "Um protocolo de comunicação seguro", correct: false },
    ],
  },
  {
    question: "36. O que é 'ROP chain pivoting'?",
    answers: [
      { answer: "Um método para programar interfaces de usuário", correct: false },
      { answer: "Uma técnica para mover a execução para uma nova cadeia de gadgets em Return-Oriented Programming", correct: true },
      { answer: "Uma vulnerabilidade causada pelo estouro de pilha", correct: false },
      { answer: "Um protocolo de comunicação seguro", correct: false },
    ],
  },
  {
    question: "37. O que significa 'EIP' em termos de exploits?",
    answers: [
      { answer: "Um método de otimização de espaço em disco", correct: false },
      { answer: "O registrador de instrução na arquitetura x86", correct: true },
      { answer: "Um protocolo de segurança para transmissão de dados", correct: false },
      { answer: "Um código de shell payload para endereços de IP", correct: false },
    ],
  },
  {
    question: "38. Em um contexto de segurança, o que é um 'honeypot'?",
    answers: [
      { answer: "Um método para otimizar a execução de programas", correct: false },
      { answer: "Um sistema falso projetado para atrair e detectar invasores", correct: true },
      { answer: "Um protocolo de comunicação entre sistemas operacionais", correct: false },
      { answer: "Um código de shell payload para injeção de dados", correct: false },
    ],
  },
  {
    question: "39. O que é um 'stack frame' em termos de programação e exploração de vulnerabilidades?",
    answers: [
      { answer: "Um método para programar interfaces de usuário", correct: false },
      { answer: "Uma estrutura de dados que representa a ativação de uma função", correct: true },
      { answer: "Uma vulnerabilidade causada pelo estouro de pilha", correct: false },
      { answer: "Um protocolo de comunicação seguro", correct: false },
    ],
  },
  {
    question: "40. O que é 'DLL planting'?",
    answers: [
      { answer: "Um método para otimizar a execução de programas", correct: false },
      { answer: "Uma técnica para injetar DLLs maliciosas em um processo", correct: true },
      { answer: "Um protocolo de comunicação entre sistemas operacionais", correct: false },
      { answer: "Um código de shell payload para injeção de dados", correct: false },
    ],
  },
  {
    question: "41. Qual é a finalidade do 'ROP payload' em um ataque ROP?",
    answers: [
      { answer: "Compilar gadgets em Return-Oriented Programming", correct: false },
      { answer: "O código executável que realiza a intenção maliciosa em um ataque ROP", correct: true },
      { answer: "Otimizar o desempenho do sistema", correct: false },
      { answer: "Criar firewalls de segurança avançados", correct: false },
    ],
  },
  {
    question: "42. O que é 'JIT spraying'?",
    answers: [
      { answer: "Um método para programar interfaces de usuário", correct: false },
      { answer: "Uma técnica para explorar vulnerabilidades em compiladores just-in-time", correct: true },
      { answer: "Uma vulnerabilidade causada pelo estouro de pilha", correct: false },
      { answer: "Um protocolo de comunicação seguro", correct: false },
    ],
  },
  {
    question: "43. O que significa 'ROP payload' em um ataque ROP?",
    answers: [
      { answer: "Compilar gadgets em Return-Oriented Programming", correct: false },
      { answer: "O código executável que realiza a intenção maliciosa em um ataque ROP", correct: true },
      { answer: "Otimizar o desempenho do sistema", correct: false },
      { answer: "Criar firewalls de segurança avançados", correct: false },
    ],
  },
  {
    question: "44. O que é 'sheltering' em exploração de vulnerabilidades?",
    answers: [
      { answer: "Um método para otimizar a execução de programas", correct: false },
      { answer: "Uma técnica para esconder ou camuflar códigos maliciosos", correct: true },
      { answer: "Um protocolo de comunicação entre sistemas operacionais", correct: false },
      { answer: "Um código de shell payload para injeção de dados", correct: false },
    ],
  },
  {
    question: "45. Qual é a finalidade de um 'stack cookie' em termos de segurança contra buffer overflow?",
    answers: [
      { answer: "Um método para detectar vulnerabilidades em firewalls", correct: false },
      { answer: "Um valor aleatório inserido entre variáveis locais e o ponteiro de retorno", correct: true },
      { answer: "Um protocolo de segurança para redes sociais", correct: false },
      { answer: "Uma técnica para programar interfaces de usuário", correct: false },
    ],
  },
  {
    question: "46. O que caracteriza um ataque 'ROP-less'?",
    answers: [
      { answer: "Um ataque que utiliza apenas instruções de retorno", correct: false },
      { answer: "Um ataque sem shell code payload", correct: true },
      { answer: "Um método de criptografia avançada", correct: false },
      { answer: "Uma técnica para proteger contra ataques de phishing", correct: false },
    ],
  },
  {
    question: "47. O que é 'Return-to-libc'?",
    answers: [
      { answer: "Um método para programar interfaces de usuário", correct: false },
      { answer: "Uma técnica que utiliza chamadas de funções da biblioteca C em um ataque", correct: true },
      { answer: "Uma vulnerabilidade causada pelo estouro de pilha", correct: false },
      { answer: "Um protocolo de comunicação seguro", correct: false },
    ],
  },
  {
    question: "48. Em termos de exploits, o que é 'ASAN'?",
    answers: [
      { answer: "Um método para otimizar a execução de programas", correct: false },
      { answer: "AddressSanitizer, uma ferramenta de detecção de erros de memória", correct: true },
      { answer: "Um protocolo de comunicação entre sistemas operacionais", correct: false },
      { answer: "Um código de shell payload para injeção de dados", correct: false },
    ],
  },
  {
    question: "49. O que é um 'NOP sled' em um ataque de buffer overflow?",
    answers: [
      { answer: "Um método para programar interfaces de usuário", correct: false },
      { answer: "Uma sequência de instruções NOP usada para facilitar a execução do shell code", correct: true },
      { answer: "Uma vulnerabilidade causada pelo estouro de pilha", correct: false },
      { answer: "Um protocolo de comunicação seguro", correct: false },
    ],
  },
  {
    question: "50. O que é 'ROP stack pivot'?",
    answers: [
      { answer: "Um método para programar interfaces de usuário", correct: false },
      { answer: "Uma técnica para mudar a pilha durante um ataque ROP", correct: true },
      { answer: "Uma vulnerabilidade causada pelo estouro de pilha", correct: false },
      { answer: "Um protocolo de comunicação seguro", correct: false },
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
