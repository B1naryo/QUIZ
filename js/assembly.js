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
    question: "51. O que é 'opcode' em linguagem assembly?",
    answers: [
      { answer: "Um registrador especial utilizado para operações aritméticas", correct: false },
      { answer: "Um código que representa uma instrução de máquina específica", correct: true },
      { answer: "Uma área de memória reservada para variáveis locais", correct: false },
      { answer: "Um protocolo de comunicação entre processos", correct: false },
    ],
  },
  {
    question: "52. Em linguagem assembly, o que representa o termo 'mnemônico'?",
    answers: [
      { answer: "Um operando utilizado em operações lógicas", correct: false },
      { answer: "Uma sequência de instruções que compõem uma função", correct: false },
      { answer: "Um nome simbólico associado a uma instrução de máquina", correct: true },
      { answer: "Um tipo de registrador utilizado para manipulação de dados", correct: false },
    ],
  },
  {
    question: "53. O que é 'register operand' em termos de instruções assembly?",
    answers: [
      { answer: "Uma instrução que manipula valores diretamente na memória", correct: false },
      { answer: "Um operando que representa um registrador do processador", correct: true },
      { answer: "Uma área de memória utilizada para armazenar constantes", correct: false },
      { answer: "Um tipo de instrução que realiza operações lógicas", correct: false },
    ],
  },
  {
    question: "54. Qual é a função do registrador 'EIP' na arquitetura x86?",
    answers: [
      { answer: "Armazenar dados temporários durante a execução de uma função", correct: false },
      { answer: "Apontar para a próxima instrução a ser executada", correct: true },
      { answer: "Manter a contagem de instruções executadas até o momento", correct: false },
      { answer: "Armazenar endereços de memória utilizados em operações de I/O", correct: false },
    ],
  },
  {
    question: "55. Em linguagem assembly, o que significa 'Little Endian'?",
    answers: [
      { answer: "Uma técnica para otimizar o desempenho do sistema", correct: false },
      { answer: "A representação de dados de 16, 32 ou 64 bits com o byte menos significativo primeiro", correct: true },
      { answer: "Uma abordagem para o gerenciamento de memória dinâmica", correct: false },
      { answer: "Um protocolo de comunicação entre sistemas operacionais", correct: false },
    ],
  },
  {
    question: "56. O que é um 'instruction pointer'?",
    answers: [
      { answer: "Um registrador especial utilizado para armazenar instruções de máquina", correct: false },
      { answer: "Um tipo de instrução que manipula ponteiros de memória", correct: false },
      { answer: "Um registrador que armazena o endereço da próxima instrução a ser executada", correct: true },
      { answer: "Uma área de memória utilizada para armazenar instruções em linguagem de máquina", correct: false },
    ],
  },
  {
    question: "57. O que é um 'operand size' em instruções assembly?",
    answers: [
      { answer: "O tamanho máximo de uma instrução em bytes", correct: false },
      { answer: "O número máximo de operandos em uma instrução", correct: false },
      { answer: "O tamanho dos dados manipulados por uma instrução", correct: true },
      { answer: "A quantidade máxima de instruções que podem ser executadas por ciclo de clock", correct: false },
    ],
  },
  {
    question: "58. Qual é a função do registrador 'ESP' na arquitetura x86?",
    answers: [
      { answer: "Armazenar dados temporários durante a execução de uma função", correct: false },
      { answer: "Manter a contagem de instruções executadas até o momento", correct: false },
      { answer: "Apontar para o topo da pilha (stack) de execução", correct: true },
      { answer: "Armazenar endereços de memória utilizados em operações de I/O", correct: false },
    ],
  },
  {
    question: "59. O que é 'assembly listing'?",
    answers: [
      { answer: "Uma lista de instruções de máquina em binário", correct: false },
      { answer: "Um arquivo contendo o código-fonte em linguagem assembly", correct: false },
      { answer: "Uma representação textual do código assembly com endereços e instruções", correct: true },
      { answer: "Um protocolo de comunicação utilizado em redes de computadores", correct: false },
    ],
  },
  {
    question: "60. O que significa 'jump instruction' em linguagem assembly?",
    answers: [
      { answer: "Uma instrução que realiza uma operação de salto condicional ou incondicional", correct: true },
      { answer: "Uma instrução que manipula valores diretamente na memória", correct: false },
      { answer: "Uma técnica para otimizar o desempenho do sistema", correct: false },
      { answer: "Um tipo de instrução que realiza operações lógicas", correct: false },
    ],
  },
  {
    question: "61. Em assembly, o que é 'segment register'?",
    answers: [
      { answer: "Um registrador utilizado para armazenar endereços de memória relativos", correct: false },
      { answer: "Um registrador que indica o tamanho dos dados manipulados por uma instrução", correct: false },
      { answer: "Um registrador utilizado para realizar operações de salto", correct: false },
      { answer: "Um registrador que aponta para um segmento de memória na arquitetura x86", correct: true },
    ],
  },
  {
    question: "62. O que é 'interrupt vector' em assembly?",
    answers: [
      { answer: "Um método para otimizar o desempenho do sistema", correct: false },
      { answer: "Um vetor que contém endereços de rotinas de tratamento de interrupção", correct: true },
      { answer: "Uma abordagem para o gerenciamento de memória dinâmica", correct: false },
      { answer: "Um protocolo de comunicação entre sistemas operacionais", correct: false },
    ],
  },
  {
    question: "63. O que é 'segmentation fault' em linguagem assembly?",
    answers: [
      { answer: "Uma técnica para otimizar o desempenho do sistema", correct: false },
      { answer: "Um erro que ocorre quando um programa acessa uma área de memória não autorizada", correct: true },
      { answer: "Uma instrução que manipula ponteiros de memória", correct: false },
      { answer: "Um registrador especial utilizado para operações aritméticas", correct: false },
    ],
  },
  {
    question: "64. Em termos de assembly, o que é 'flag register'?",
    answers: [
      { answer: "Um registrador utilizado para armazenar endereços de memória relativos", correct: false },
      { answer: "Um registrador que indica o tamanho dos dados manipulados por uma instrução", correct: false },
      { answer: "Um registrador que armazena o estado do processador, indicando condições como zero ou sinal", correct: true },
      { answer: "Um registrador utilizado para realizar operações de salto", correct: false },
    ],
  },
  {
    question: "65. O que é 'indirect addressing' em instruções assembly?",
    answers: [
      { answer: "Uma técnica para otimizar o desempenho do sistema", correct: false },
      { answer: "A forma de endereçamento em que o endereço do operando é encontrado em outro registrador ou posição de memória", correct: true },
      { answer: "Um método para proteger contra ataques de phishing", correct: false },
      { answer: "Um protocolo de comunicação entre sistemas operacionais", correct: false },
    ],
  },
  {
    question: "66. O que é 'call instruction' em linguagem assembly?",
    answers: [
      { answer: "Uma instrução que realiza uma chamada de sistema operacional", correct: false },
      { answer: "Uma instrução que efetua uma chamada a uma sub-rotina ou função", correct: true },
      { answer: "Uma técnica para otimizar o desempenho do sistema", correct: false },
      { answer: "Um tipo de instrução que realiza operações lógicas", correct: false },
    ],
  },
  {
    question: "67. Em linguagem assembly, o que é 'segmentation'?",
    answers: [
      { answer: "A divisão de um programa em segmentos para melhorar a legibilidade do código", correct: false },
      { answer: "O processo de dividir a memória em segmentos para facilitar o gerenciamento", correct: false },
      { answer: "Um esquema de proteção de memória que divide o espaço de endereçamento em partes separadas", correct: true },
      { answer: "Um protocolo de comunicação utilizado em redes de computadores", correct: false },
    ],
  },
  {
    question: "68. O que é 'stack pointer'?",
    answers: [
      { answer: "Um registrador especial utilizado para armazenar instruções de máquina", correct: false },
      { answer: "Um registrador que armazena o endereço da próxima instrução a ser executada", correct: false },
      { answer: "Um registrador utilizado para armazenar endereços de memória relativos", correct: false },
      { answer: "Um registrador que aponta para o topo da pilha (stack) de execução", correct: true },
    ],
  },
  {
    question: "69. O que é 'immediate operand' em instruções assembly?",
    answers: [
      { answer: "Uma instrução que manipula valores diretamente na memória", correct: false },
      { answer: "Um operando que representa um registrador do processador", correct: false },
      { answer: "Um tipo de instrução que realiza operações lógicas", correct: false },
      { answer: "Um valor constante ou imediato que é parte da própria instrução", correct: true },
    ],
  },
  {
    question: "70. O que é 'call stack' em termos de execução de programas em assembly?",
    answers: [
      { answer: "Uma instrução que realiza uma chamada de sistema operacional", correct: false },
      { answer: "A área de memória utilizada para armazenar variáveis locais e informações de chamadas de sub-rotinas", correct: true },
      { answer: "Um método para otimizar o desempenho do sistema", correct: false },
      { answer: "Um tipo de registrador utilizado para manipulação de dados", correct: false },
    ],
  },
  {
    question: "71. O que é 'conditional jump' em linguagem assembly?",
    answers: [
      { answer: "Uma instrução que realiza uma chamada de sistema operacional", correct: false },
      { answer: "Uma instrução de salto que depende de uma condição específica", correct: true },
      { answer: "Um método para otimizar o desempenho do sistema", correct: false },
      { answer: "Um tipo de instrução que realiza operações lógicas", correct: false },
    ],
  },
  {
    question: "72. Em termos de assembly, o que é 'base pointer'?",
    answers: [
      { answer: "Um registrador especial utilizado para armazenar instruções de máquina", correct: false },
      { answer: "Um registrador que aponta para o topo da pilha (stack) de execução", correct: false },
      { answer: "Um registrador utilizado para armazenar endereços de memória relativos", correct: true },
      { answer: "Um registrador que armazena o endereço da próxima instrução a ser executada", correct: false },
    ],
  },
  {
    question: "73. O que é 'segmentation base'?",
    answers: [
      { answer: "O endereço inicial de um segmento de código em linguagem assembly", correct: true },
      { answer: "Um método para proteger contra ataques de phishing", correct: false },
      { answer: "Um registrador que armazena o estado do processador, indicando condições como zero ou sinal", correct: false },
      { answer: "Uma instrução que manipula ponteiros de memória", correct: false },
    ],
  },
  {
    question: "74. O que é 'push instruction'?",
    answers: [
      { answer: "Uma instrução que realiza uma chamada de sistema operacional", correct: false },
      { answer: "Uma instrução que adiciona um valor à pilha (stack)", correct: true },
      { answer: "Um método para otimizar o desempenho do sistema", correct: false },
      { answer: "Um tipo de instrução que realiza operações lógicas", correct: false },
    ],
  },
  {
    question: "75. Em linguagem assembly, o que é 'endianness'?",
    answers: [
      { answer: "A ordem dos bytes em uma instrução de máquina", correct: true },
      { answer: "O método de endereçamento utilizado em operações de I/O", correct: false },
      { answer: "Um esquema de proteção de memória que divide o espaço de endereçamento em partes separadas", correct: false },
      { answer: "Um protocolo de comunicação utilizado em redes de computadores", correct: false },
    ],
  },

  {
    question: "1. O que significa 'single-stepping' durante a depuração em assembly?",
    answers: [
      { answer: "Executar o programa normalmente", correct: false },
      { answer: "Executar o programa passo a passo, instrução por instrução", correct: true },
      { answer: "Pular a execução de uma instrução específica", correct: false },
      { answer: "Reverter a execução para o início do programa", correct: false },
    ],
  },
  {
    question: "2. Qual é a função do registrador 'EFLAGS' durante a depuração em assembly?",
    answers: [
      { answer: "Armazenar endereços de memória relativos", correct: false },
      { answer: "Manter a contagem de instruções executadas até o momento", correct: false },
      { answer: "Armazenar o estado do processador, indicando condições como zero ou sinal", correct: true },
      { answer: "Apontar para o topo da pilha (stack) de execução", correct: false },
    ],
  },
  {
    question: "3. O que é 'breakpoint' em termos de depuração de exploits?",
    answers: [
      { answer: "Um ponto de parada no código onde a execução é interrompida para inspeção", correct: true },
      { answer: "Uma instrução que efetua uma chamada a uma sub-rotina ou função", correct: false },
      { answer: "Uma instrução de salto que depende de uma condição específica", correct: false },
      { answer: "Um método para otimizar o desempenho do sistema", correct: false },
    ],
  },
  {
    question: "4. O que é 'watchpoint' na depuração em assembly?",
    answers: [
      { answer: "Uma instrução que adiciona um valor à pilha (stack)", correct: false },
      { answer: "Um ponto de parada que é acionado quando o valor de uma variável é modificado", correct: true },
      { answer: "Uma instrução que realiza uma chamada de sistema operacional", correct: false },
      { answer: "Uma instrução de salto que depende de uma condição específica", correct: false },
    ],
  },
  {
    question: "5. O que é 'step into' durante a depuração em assembly?",
    answers: [
      { answer: "Executar o programa normalmente", correct: false },
      { answer: "Executar o programa passo a passo, entrando nas sub-rotinas", correct: true },
      { answer: "Pular a execução de uma instrução específica", correct: false },
      { answer: "Reverter a execução para o início do programa", correct: false },
    ],
  },
  {
    question: "6. Qual é a função do registrador 'EIP' durante a depuração em assembly?",
    answers: [
      { answer: "Armazenar endereços de memória relativos", correct: false },
      { answer: "Manter a contagem de instruções executadas até o momento", correct: false },
      { answer: "Apontar para a próxima instrução a ser executada", correct: true },
      { answer: "Armazenar o estado do processador, indicando condições como zero ou sinal", correct: false },
    ],
  },
  {
    question: "7. O que é 'reverse debugging' em termos de depuração de exploits?",
    answers: [
      { answer: "Depurar um programa de trás para frente", correct: true },
      { answer: "Depurar um programa em ambientes reversos", correct: false },
      { answer: "Ignorar a execução de uma instrução específica", correct: false },
      { answer: "Executar o programa normalmente", correct: false },
    ],
  },
  {
    question: "8. Como o comando 'dump' é usado durante a depuração em assembly?",
    answers: [
      { answer: "Imprimir informações sobre o processo de depuração", correct: false },
      { answer: "Exibir o conteúdo da memória ou registradores em um determinado ponto de execução", correct: true },
      { answer: "Modificar o valor de uma variável em tempo de execução", correct: false },
      { answer: "Encerrar o processo de depuração", correct: false },
    ],
  },
  {
    question: "9. O que é 'call stack' na depuração de exploits?",
    answers: [
      { answer: "A área de memória utilizada para armazenar variáveis locais e informações de chamadas de sub-rotinas", correct: true },
      { answer: "Um ponto de parada no código onde a execução é interrompida para inspeção", correct: false },
      { answer: "Uma técnica para otimizar o desempenho do sistema", correct: false },
      { answer: "Executar o programa normalmente", correct: false },
    ],
  },
  {
    question: "10. O que é 'disassembly' em termos de depuração em assembly?",
    answers: [
      { answer: "A tradução de código de máquina para código-fonte de alto nível", correct: false },
      { answer: "A representação de código de máquina como instruções assembly legíveis", correct: true },
      { answer: "Um ponto de parada no código onde a execução é interrompida para inspeção", correct: false },
      { answer: "Ignorar a execução de uma instrução específica", correct: false },
    ],
  },
  {
    question: "11. Como o registrador 'ESP' é utilizado durante a depuração em assembly?",
    answers: [
      { answer: "Armazenar endereços de memória relativos", correct: false },
      { answer: "Manter a contagem de instruções executadas até o momento", correct: false },
      { answer: "Apontar para o topo da pilha (stack) de execução", correct: true },
      { answer: "Armazenar o estado do processador, indicando condições como zero ou sinal", correct: false },
    ],
  },
  {
    question: "12. O que é 'hardware breakpoint' na depuração de exploits?",
    answers: [
      { answer: "Um ponto de parada definido pelo programador no código-fonte", correct: false },
      { answer: "Um ponto de parada que é acionado por condições específicas no hardware", correct: true },
      { answer: "Executar o programa passo a passo, instrução por instrução", correct: false },
      { answer: "Reverter a execução para o início do programa", correct: false },
    ],
  },
  {
    question: "13. O que é 'software breakpoint' na depuração em assembly?",
    answers: [
      { answer: "Um ponto de parada que é acionado por condições específicas no hardware", correct: false },
      { answer: "Executar o programa normalmente", correct: false },
      { answer: "Um ponto de parada definido pelo programador no código-fonte", correct: true },
      { answer: "Ignorar a execução de uma instrução específica", correct: false },
    ],
  },
  {
    question: "14. Como o comando 'step over' é utilizado durante a depuração em assembly?",
    answers: [
      { answer: "Executar o programa normalmente", correct: false },
      { answer: "Executar o programa passo a passo, instrução por instrução", correct: false },
      { answer: "Pular a execução de uma instrução específica", correct: false },
      { answer: "Executar o programa passo a passo, pulando sub-rotinas", correct: true },
    ],
  },
  {
    question: "15. O que é 'context switch' durante a depuração em assembly?",
    answers: [
      { answer: "Um ponto de parada no código onde a execução é interrompida para inspeção", correct: false },
      { answer: "A troca de contexto entre diferentes threads ou processos durante a depuração", correct: true },
      { answer: "Executar o programa normalmente", correct: false },
      { answer: "Ignorar a execução de uma instrução específica", correct: false },
    ],
  },
  {
    question: "16. Como o comando 'restart' é utilizado durante a depuração em assembly?",
    answers: [
      { answer: "Reverter a execução para o início do programa", correct: true },
      { answer: "Executar o programa passo a passo, instrução por instrução", correct: false },
      { answer: "Um ponto de parada no código onde a execução é interrompida para inspeção", correct: false },
      { answer: "Ignorar a execução de uma instrução específica", correct: false },
    ],
  },
  {
    question: "17. O que é 'source-level debugging' em assembly?",
    answers: [
      { answer: "Depurar um programa usando apenas código de máquina", correct: false },
      { answer: "Depurar um programa usando informações do código-fonte de alto nível", correct: true },
      { answer: "Executar o programa normalmente", correct: false },
      { answer: "Ignorar a execução de uma instrução específica", correct: false },
    ],
  },
  {
    question: "18. O que é 'core dump' em depuração de exploits?",
    answers: [
      { answer: "Uma técnica para otimizar o desempenho do sistema", correct: false },
      { answer: "Um arquivo que contém o estado da memória e registradores durante uma falha", correct: true },
      { answer: "Executar o programa normalmente", correct: false },
      { answer: "Ignorar a execução de uma instrução específica", correct: false },
    ],
  },
  {
    question: "19. Como o comando 'run' é utilizado durante a depuração em assembly?",
    answers: [
      { answer: "Executar o programa normalmente", correct: true },
      { answer: "Executar o programa passo a passo, instrução por instrução", correct: false },
      { answer: "Um ponto de parada no código onde a execução é interrompida para inspeção", correct: false },
      { answer: "Reverter a execução para o início do programa", correct: false },
    ],
  },
  {
    question: "20. O que é 'tracepoint' na depuração de exploits?",
    answers: [
      { answer: "Uma técnica para otimizar o desempenho do sistema", correct: false },
      { answer: "Um ponto de parada que registra informações sobre a execução sem interrompê-la", correct: true },
      { answer: "Executar o programa passo a passo, instrução por instrução", correct: false },
      { answer: "Ignorar a execução de uma instrução específica", correct: false },
    ],
  },
  {
    question: "21. Como o comando 'finish' é utilizado durante a depuração em assembly?",
    answers: [
      { answer: "Encerrar o processo de depuração", correct: false },
      { answer: "Executar o programa passo a passo, instrução por instrução", correct: false },
      { answer: "Concluir a execução de uma sub-rotina ou função atual", correct: true },
      { answer: "Ignorar a execução de uma instrução específica", correct: false },
    ],
  },
  {
    question: "22. O que é 'attaching' em depuração de exploits?",
    answers: [
      { answer: "Anexar um arquivo de código-fonte ao programa em execução", correct: false },
      { answer: "Conectar o depurador a um processo em execução para análise", correct: true },
      { answer: "Executar o programa normalmente", correct: false },
      { answer: "Um ponto de parada no código onde a execução é interrompida para inspeção", correct: false },
    ],
  },
  {
    question: "23. O que é 'displacement' em instruções assembly durante a depuração?",
    answers: [
      { answer: "Um método para otimizar o desempenho do sistema", correct: false },
      { answer: "Um deslocamento ou offset usado para calcular endereços de memória", correct: true },
      { answer: "Executar o programa normalmente", correct: false },
      { answer: "Ignorar a execução de uma instrução específica", correct: false },
    ],
  },
  {
    question: "24. Como o comando 'info registers' é utilizado durante a depuração em assembly?",
    answers: [
      { answer: "Exibir informações sobre o processo de depuração", correct: false },
      { answer: "Exibir o conteúdo da memória ou registradores em um determinado ponto de execução", correct: false },
      { answer: "Exibir informações sobre os registradores do processador", correct: true },
      { answer: "Modificar o valor de uma variável em tempo de execução", correct: false },
    ],
  },
  {
    question: "25. O que é 'memory dump' em depuração de exploits?",
    answers: [
      { answer: "Um arquivo que contém o estado da memória e registradores durante uma falha", correct: true },
      { answer: "Um ponto de parada no código onde a execução é interrompida para inspeção", correct: false },
      { answer: "Um método para otimizar o desempenho do sistema", correct: false },
      { answer: "Executar o programa normalmente", correct: false },
    ],
  },
  {
    question: "26. O que é 'conditional breakpoint' em depuração de exploits?",
    answers: [
      { answer: "Um ponto de parada que só é acionado sob condições específicas", correct: true },
      { answer: "Executar o programa passo a passo, instrução por instrução", correct: false },
      { answer: "Reverter a execução para o início do programa", correct: false },
      { answer: "Encerrar o processo de depuração", correct: false },
    ],
  },
  {
    question: "27. O que é 'single-threaded debugging' em assembly?",
    answers: [
      { answer: "Depurar um programa usando apenas um thread", correct: true },
      { answer: "Depurar um programa usando vários threads simultaneamente", correct: false },
      { answer: "Executar o programa normalmente", correct: false },
      { answer: "Ignorar a execução de uma instrução específica", correct: false },
    ],
  },
  {
    question: "28. O que é 'trap flag' em termos de depuração em assembly?",
    answers: [
      { answer: "Um ponto de parada no código onde a execução é interrompida para inspeção", correct: false },
      { answer: "Um registrador que indica o estado do processador, indicando condições como zero ou sinal", correct: false },
      { answer: "Um flag que, quando ativado, interrompe a execução após a próxima instrução", correct: true },
      { answer: "Um ponto de parada que só é acionado sob condições específicas", correct: false },
    ],
  },
  {
    question: "29. O que é 'thread context' durante a depuração em assembly?",
    answers: [
      { answer: "A área de memória utilizada para armazenar variáveis locais e informações de chamadas de sub-rotinas", correct: false },
      { answer: "O contexto de execução de um thread, incluindo registradores e estado da pilha", correct: true },
      { answer: "Um método para otimizar o desempenho do sistema", correct: false },
      { answer: "Executar o programa normalmente", correct: false },
    ],
  },
  {
    question: "30. O que é 'deadlock' em depuração de exploits?",
    answers: [
      { answer: "Um ponto de parada no código onde a execução é interrompida para inspeção", correct: false },
      { answer: "Uma situação em que dois ou mais threads estão bloqueados, esperando uns pelos outros", correct: true },
      { answer: "Executar o programa passo a passo, instrução por instrução", correct: false },
      { answer: "Reverter a execução para o início do programa", correct: false },
    ],
  },

  {
    question: "31. O que é o OllyDbg?",
    answers: [
      { answer: "Um compilador de código assembly", correct: false },
      { answer: "Um debugger de código aberto para análise de código assembly", correct: true },
      { answer: "Uma linguagem de programação de alto nível", correct: false },
      { answer: "Um ambiente de desenvolvimento integrado (IDE)", correct: false },
    ],
  },
  {
    question: "32. Como o OllyDbg auxilia no desenvolvimento de exploits em assembly?",
    answers: [
      { answer: "Facilita a escrita de código assembly", correct: false },
      { answer: "Fornece uma interface gráfica para depuração de programas assembly", correct: true },
      { answer: "Automatiza a criação de shell code payloads", correct: false },
      { answer: "É uma linguagem de scripting para automação de tarefas de segurança", correct: false },
    ],
  },
  {
    question: "33. Qual é a função da janela 'CPU' no OllyDbg durante a depuração?",
    answers: [
      { answer: "Exibir o código-fonte de alto nível do programa", correct: false },
      { answer: "Mostrar o conteúdo da memória durante a execução do programa", correct: false },
      { answer: "Exibir os registradores e o estado do processador em tempo real", correct: true },
      { answer: "Fornecer uma visualização gráfica do fluxo de controle do programa", correct: false },
    ],
  },
  {
    question: "34. O que é um 'breakpoint' no contexto do OllyDbg?",
    answers: [
      { answer: "Um ponto de parada no código onde a execução é interrompida para inspeção", correct: true },
      { answer: "Uma instrução que efetua uma chamada a uma sub-rotina ou função", correct: false },
      { answer: "Uma técnica para otimizar o desempenho do sistema", correct: false },
      { answer: "Um método para proteger contra ataques de phishing", correct: false },
    ],
  },
  {
    question: "35. Como você define um 'breakpoint' no OllyDbg?",
    answers: [
      { answer: "Escrevendo manualmente a instrução de interrupção no código assembly", correct: false },
      { answer: "Clicando com o botão direito na linha de código desejada e escolhendo 'Toggle Breakpoint'", correct: true },
      { answer: "Digitando 'break' no console do OllyDbg", correct: false },
      { answer: "Selecionando a opção 'Break' no menu principal", correct: false },
    ],
  },
  {
    question: "36. Qual é a função da janela 'Memory' no OllyDbg?",
    answers: [
      { answer: "Exibir o código-fonte de alto nível do programa", correct: false },
      { answer: "Mostrar o conteúdo da memória durante a execução do programa", correct: true },
      { answer: "Exibir os registradores e o estado do processador em tempo real", correct: false },
      { answer: "Fornecer uma visualização gráfica do fluxo de controle do programa", correct: false },
    ],
  },
  {
    question: "37. O que é 'tracing' em termos do OllyDbg?",
    answers: [
      { answer: "Um método para otimizar o desempenho do sistema", correct: false },
      { answer: "Seguir a execução do programa instrução por instrução", correct: true },
      { answer: "Uma técnica para proteger contra ataques de phishing", correct: false },
      { answer: "Um ponto de parada no código onde a execução é interrompida para inspeção", correct: false },
    ],
  },
  {
    question: "38. O que é a função 'Run Trace' no OllyDbg?",
    answers: [
      { answer: "Executar o programa normalmente", correct: false },
      { answer: "Seguir a execução do programa instrução por instrução até encontrar um breakpoint", correct: true },
      { answer: "Pular a execução de uma instrução específica", correct: false },
      { answer: "Reverter a execução para o início do programa", correct: false },
    ],
  },
  {
    question: "39. Qual é o propósito da janela 'Stack' no OllyDbg?",
    answers: [
      { answer: "Exibir o código-fonte de alto nível do programa", correct: false },
      { answer: "Mostrar o conteúdo da pilha durante a execução do programa", correct: true },
      { answer: "Exibir os registradores e o estado do processador em tempo real", correct: false },
      { answer: "Fornecer uma visualização gráfica do fluxo de controle do programa", correct: false },
    ],
  },
  {
    question: "40. O que é 'conditional breakpoint' no OllyDbg?",
    answers: [
      { answer: "Um ponto de parada definido pelo programador no código-fonte", correct: false },
      { answer: "Um ponto de parada que só é acionado sob condições específicas", correct: true },
      { answer: "Executar o programa passo a passo, instrução por instrução", correct: false },
      { answer: "Reverter a execução para o início do programa", correct: false },
    ],
  },
  {
    question: "41. Como você utiliza a janela 'Registers' no OllyDbg durante a depuração?",
    answers: [
      { answer: "Exibir o código-fonte de alto nível do programa", correct: false },
      { answer: "Mostrar o conteúdo da memória durante a execução do programa", correct: false },
      { answer: "Exibir os registradores e o estado do processador em tempo real", correct: true },
      { answer: "Fornecer uma visualização gráfica do fluxo de controle do programa", correct: false },
    ],
  },
  {
    question: "42. O que é 'step over' no contexto do OllyDbg?",
    answers: [
      { answer: "Executar o programa normalmente", correct: false },
      { answer: "Executar o programa passo a passo, instrução por instrução", correct: false },
      { answer: "Pular a execução de uma sub-rotina ou função", correct: true },
      { answer: "Reverter a execução para o início do programa", correct: false },
    ],
  },
  {
    question: "43. O que significa 'tracing into' no OllyDbg?",
    answers: [
      { answer: "Executar o programa normalmente", correct: false },
      { answer: "Executar o programa passo a passo, entrando nas sub-rotinas", correct: true },
      { answer: "Pular a execução de uma instrução específica", correct: false },
      { answer: "Reverter a execução para o início do programa", correct: false },
    ],
  },
  {
    question: "44. Como o OllyDbg ajuda na análise de shell code payloads?",
    answers: [
      { answer: "Facilita a escrita de shell code payloads automaticamente", correct: false },
      { answer: "Fornece recursos para desmontar e entender shell code payloads em tempo real", correct: true },
      { answer: "Automatiza a criação de exploits", correct: false },
      { answer: "É um antivírus especializado em detectar shell code payloads", correct: false },
    ],
  },
  {
    question: "45. O que é 'hardware breakpoint' no OllyDbg?",
    answers: [
      { answer: "Um ponto de parada definido pelo programador no código-fonte", correct: false },
      { answer: "Um ponto de parada que é acionado por condições específicas no hardware", correct: true },
      { answer: "Executar o programa passo a passo, instrução por instrução", correct: false },
      { answer: "Reverter a execução para o início do programa", correct: false },
    ],
  },
  {
    question: "46. Como o OllyDbg lida com 'anti-debugging' techniques?",
    answers: [
      { answer: "Ignorando-as automaticamente", correct: false },
      { answer: "Detectando e neutralizando técnicas anti-debugging", correct: true },
      { answer: "Executando o programa em um ambiente isolado para evitar detecções", correct: false },
      { answer: "Desativando os recursos anti-debugging do sistema operacional", correct: false },
    ],
  },
  {
    question: "47. Qual é a função da janela 'Search' no OllyDbg?",
    answers: [
      { answer: "Pesquisar por vulnerabilidades no código-fonte", correct: false },
      { answer: "Localizar strings ou instruções específicas no código assembly", correct: true },
      { answer: "Pesquisar por exploits conhecidos na base de dados do OllyDbg", correct: false },
      { answer: "Executar o programa normalmente", correct: false },
    ],
  },
  {
    question: "48. Como o OllyDbg ajuda na identificação de funções e APIs?",
    answers: [
      { answer: "Exibindo apenas o código assembly, sem informações adicionais", correct: false },
      { answer: "Fornecendo uma lista de funções automaticamente", correct: false },
      { answer: "Analisando o código e identificando padrões que podem indicar funções e APIs", correct: true },
      { answer: "Permitindo que o programador defina manualmente as funções no código-fonte", correct: false },
    ],
  },
  {
    question: "49. Como você encontra referências a uma determinada string no OllyDbg?",
    answers: [
      { answer: "Usando um comando de busca no console do OllyDbg", correct: false },
      { answer: "Analisando manualmente o código assembly", correct: false },
      { answer: "Usando a janela 'Search' e digitando a string desejada", correct: true },
      { answer: "Percorrendo a lista de funções em busca da string específica", correct: false },
    ],
  },
  {
    question: "50. O que é 'data breakpoint' no OllyDbg?",
    answers: [
      { answer: "Um ponto de parada definido pelo programador no código-fonte", correct: false },
      { answer: "Um ponto de parada que é acionado quando uma variável é modificada", correct: true },
      { answer: "Executar o programa passo a passo, instrução por instrução", correct: false },
      { answer: "Reverter a execução para o início do programa", correct: false },
    ],
  },
  {
    question: "51. Como o OllyDbg auxilia na análise de registadores e flags durante a depuração?",
    answers: [
      { answer: "Exibindo apenas o conteúdo da memória, sem informações adicionais", correct: false },
      { answer: "Fornecendo uma visão gráfica do estado do processador", correct: false },
      { answer: "Oferecendo uma janela 'Registers' que mostra os valores dos registradores e flags em tempo real", correct: true },
      { answer: "Ignorando completamente o estado do processador durante a execução", correct: false },
    ],
  },
  {
    question: "52. O que é 'call stack' e como o OllyDbg o exibe?",
    answers: [
      { answer: "Uma técnica para otimizar o desempenho do sistema", correct: false },
      { answer: "A área de memória utilizada para armazenar variáveis locais e informações de chamadas de sub-rotinas", correct: false },
      { answer: "A pilha de chamadas de funções e sub-rotinas durante a execução do programa", correct: true },
      { answer: "Um ponto de parada no código onde a execução é interrompida para inspeção", correct: false },
    ],
  },
  {
    question: "53. O que é 'DLL injection' e como o OllyDbg pode ser usado para analisar esse tipo de ataque?",
    answers: [
      { answer: "Injetar DLLs maliciosas em um programa para explorar vulnerabilidades", correct: true },
      { answer: "Um ponto de parada definido pelo programador no código-fonte", correct: false },
      { answer: "Executar o programa normalmente", correct: false },
      { answer: "Desativar automaticamente qualquer injeção de DLL no sistema", correct: false },
    ],
  },
  {
    question: "54. Como o OllyDbg lida com a análise de código otimizado (optimized code)?",
    answers: [
      { answer: "Ignorando completamente a análise de código otimizado", correct: false },
      { answer: "Desativando automaticamente otimizações durante a depuração", correct: false },
      { answer: "Fornecendo ferramentas para desmontar e entender código otimizado", correct: true },
      { answer: "Exigindo que o programador desative manualmente as otimizações antes da depuração", correct: false },
    ],
  },
  {
    question: "55. Como o OllyDbg suporta a análise de código de 64 bits?",
    answers: [
      { answer: "Limitando-se a análise de código de 32 bits", correct: false },
      { answer: "Automatizando a conversão de código de 64 bits para 32 bits", correct: false },
      { answer: "Oferecendo suporte nativo para análise de código de 64 bits", correct: true },
      { answer: "Exigindo que o programador faça a conversão manual de código de 64 bits para 32 bits", correct: false },
    ],
  },
  {
    question: "56. O que é 'code cave' e como o OllyDbg pode ajudar na sua identificação?",
    answers: [
      { answer: "Um local onde o código assembly é armazenado de forma segura", correct: false },
      { answer: "Um ponto de parada definido pelo programador no código-fonte", correct: false },
      { answer: "Um espaço não utilizado no código executável que pode ser usado para inserir código adicional", correct: true },
      { answer: "Uma técnica para otimizar o desempenho do sistema", correct: false },
    ],
  },
  {
    question: "57. O que é 'API hooking' e como o OllyDbg pode ser usado para detectar esses hooks?",
    answers: [
      { answer: "Injetar código malicioso nas APIs do sistema operacional", correct: false },
      { answer: "Um ponto de parada definido pelo programador no código-fonte", correct: false },
      { answer: "Modificar o comportamento das APIs do sistema interceptando suas chamadas", correct: true },
      { answer: "Executar o programa normalmente", correct: false },
    ],
  },
  {
    question: "58. Como o OllyDbg facilita a análise de criptografia em programas?",
    answers: [
      { answer: "Ignorando completamente operações criptográficas", correct: false },
      { answer: "Fornecendo uma visão clara do código assembly relacionado a operações criptográficas", correct: true },
      { answer: "Desativando automaticamente qualquer algoritmo criptográfico durante a execução", correct: false },
      { answer: "Exigindo que o programador desative manualmente a criptografia antes da depuração", correct: false },
    ],
  },
  {
    question: "59. O que é 'packer' e como o OllyDbg pode ser utilizado para desempacotar um programa?",
    answers: [
      { answer: "Um dispositivo de hardware usado para compactar código assembly", correct: false },
      { answer: "Um programa que comprime executáveis para dificultar a análise", correct: true },
      { answer: "Um ponto de parada definido pelo programador no código-fonte", correct: false },
      { answer: "Executar o programa normalmente", correct: false },
    ],
  },
  {
    question: "60. Como o OllyDbg pode ajudar na identificação de técnicas de 'stack pivoting'?",
    answers: [
      { answer: "Ignorando automaticamente qualquer técnica de 'stack pivoting'", correct: false },
      { answer: "Detectando e alertando sobre a presença de 'stack pivoting'", correct: true },
      { answer: "Executando o programa em um ambiente isolado para evitar técnicas de 'stack pivoting'", correct: false },
      { answer: "Desativando os recursos relacionados ao 'stack pivoting' do sistema operacional", correct: false },
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
