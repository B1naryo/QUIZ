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
    question: "O que significa 'Inspired' em inglês?",
    answers: [
      { answer: "Cansado", correct: false },
      { answer: "Inspirado", correct: true },
      { answer: "Feliz", correct: false },
      { answer: "Corajoso", correct: false },
      { answer: "Engraçado", correct: false },
    ],
  },
  {
    question: "O que significa 'by' em inglês?",
    answers: [
      { answer: "Por", correct: false },
      { answer: "Perto", correct: false },
      { answer: "Pelo", correct: true },
      { answer: "Belo", correct: false },
      { answer: "Com", correct: false },
    ],
  },
  {
    question: "O que significa 'the' em inglês?",
    answers: [
      { answer: "O", correct: true },
      { answer: "A", correct: false },
      { answer: "Um", correct: false },
      { answer: "Ela", correct: false },
      { answer: "Ele", correct: false },
    ],
  },
  {
    question: "O que significa 'great' em inglês?",
    answers: [
      { answer: "Ótimo", correct: false },
      { answer: "Bom", correct: false },
      { answer: "Grande", correct: true },
      { answer: "Ruim", correct: false },
      { answer: "Legal", correct: false },
    ],
  },
  
  {
    question: "O que significa 'post' em inglês?",
    answers: [
      { answer: "Enviar", correct: false },
      { answer: "Correio", correct: false },
      { answer: "Publicar", correct: true },
      { answer: "Cartaz", correct: false },
      { answer: "Prego", correct: false },
    ],
  },
 
  {
    question: "O que significa 'I' em inglês?",
    answers: [
      { answer: "Eu", correct: true },
      { answer: "Tu", correct: false },
      { answer: "Ele", correct: false },
      { answer: "Nós", correct: false },
      { answer: "Eles", correct: false },
    ],
  },
  {
    question: "O que significa 'put' em inglês?",
    answers: [
      { answer: "Colocar", correct: true },
      { answer: "Pegar", correct: false },
      { answer: "Tirar", correct: false },
      { answer: "Deixar", correct: false },
      { answer: "Levar", correct: false },
    ],
  },
  {
    question: "O que significa 'together' em inglês?",
    answers: [
      { answer: "Sozinho", correct: false },
      { answer: "Juntos", correct: true },
      { answer: "Separados", correct: false },
      { answer: "Longe", correct: false },
      { answer: "Perto", correct: false },
    ],
  },
  {
    question: "O que significa 'following' em inglês?",
    answers: [
      { answer: "Seguinte", correct: false },
      { answer: "Anterior", correct: false },
      { answer: "Precedente", correct: false },
      { answer: "Próximo", correct: true },
      { answer: "Último", correct: false },
    ],
  },
  {
    question: "O que significa 'extra' em inglês?",
    answers: [
      { answer: "Básico", correct: false },
      { answer: "Essencial", correct: false },
      { answer: "Adicional", correct: true },
      { answer: "Normal", correct: false },
      { answer: "Principal", correct: false },
    ],
  },
  {
    question: "O que significa 'methods' em inglês?",
    answers: [
      { answer: "Métodos", correct: true },
      { answer: "Técnicas", correct: false },
      { answer: "Procedimentos", correct: false },
      { answer: "Meios", correct: false },
      { answer: "Modos", correct: false },
    ],
  },
  {
    question: "O que significa 'and' em inglês?",
    answers: [
      { answer: "E", correct: true },
      { answer: "Ou", correct: false },
      { answer: "Mas", correct: false },
      { answer: "No", correct: false },
      { answer: "Sim", correct: false },
    ],
  },
  {
    question: "O que significa 'alternatives' em inglês?",
    answers: [
      { answer: "Alternativas", correct: true },
      { answer: "Opções", correct: false },
      { answer: "Substitutos", correct: false },
      { answer: "Escolhas", correct: false },
      { answer: "Variações", correct: false },
    ],
  },
  {
    question: "O que significa 'for' em inglês?",
    answers: [
      { answer: "Para", correct: true },
      { answer: "Pelo", correct: false },
      { answer: "Por", correct: false },
      { answer: "A", correct: false },
      { answer: "Com", correct: false },
    ],
  },
  {
    question: "O que significa 'some' em inglês?",
    answers: [
      { answer: "Alguns", correct: true },
      { answer: "Um", correct: false },
      { answer: "Muitos", correct: false },
      { answer: "Tudo", correct: false },
      { answer: "Nenhum", correct: false },
    ],
  },
  {
    question: "O que significa 'explained' em inglês?",
    answers: [
      { answer: "Explicado", correct: true },
      { answer: "Desenhado", correct: false },
      { answer: "Examinado", correct: false },
      { answer: "Explorado", correct: false },
      { answer: "Esclarecido", correct: false },
    ],
  },
  {
    question: "O que significa 'in' em inglês?",
    answers: [
      { answer: "Em", correct: true },
      { answer: "Dentro", correct: false },
      { answer: "No", correct: false },
      { answer: "Sobre", correct: false },
      { answer: "Por", correct: false },
    ],
  },
  {
    question: "O que significa 'cheat' em inglês?",
    answers: [
      { answer: "Trapacear", correct: false },
      { answer: "Fraude", correct: false },
      { answer: "Batota", correct: false },
      { answer: "Truque", correct: true },
      { answer: "Enganar", correct: false },
    ],
  },
  {
    question: "O que significa 'sheet' em inglês?",
    answers: [
      { answer: "Folha", correct: true },
      { answer: "Tecido", correct: false },
      { answer: "Lençol", correct: false },
      { answer: "Papel", correct: false },
      { answer: "Placa", correct: false },
    ],
  },
  {
    question: "O que significa 'There' em inglês?",
    answers: [
      { answer: "Lá", correct: true },
      { answer: "Aqui", correct: false },
      { answer: "Acolá", correct: false },
      { answer: "Além", correct: false },
      { answer: "Então", correct: false },
    ],
  },
  {
    question: "O que significa 'is' em inglês?",
    answers: [
      { answer: "É", correct: true },
      { answer: "Está", correct: false },
      { answer: "Foi", correct: false },
      { answer: "Será", correct: false },
      { answer: "São", correct: false },
    ],
  },
  {
    question: "O que significa 'nothing' em inglês?",
    answers: [
      { answer: "Tudo", correct: false },
      { answer: "Nada", correct: true },
      { answer: "Alguma coisa", correct: false },
      { answer: "Qualquer coisa", correct: false },
      { answer: "Ninguém", correct: false },
    ],
  },
  {
    question: "O que significa 'cutting' em inglês?",
    answers: [
      { answer: "Cortando", correct: true },
      { answer: "Cortante", correct: false },
      { answer: "Cortado", correct: false },
      { answer: "Cortesia", correct: false },
      { answer: "Cortes", correct: false },
    ],
  },
  {
    question: "O que significa 'edge' em inglês?",
    answers: [
      { answer: "Borda", correct: true },
      { answer: "Canto", correct: false },
      { answer: "Aresta", correct: false },
      { answer: "Ponta", correct: false },
      { answer: "Limite", correct: false },
    ],
  },
  {
    question: "O que significa 'however' em inglês?",
    answers: [
      { answer: "Entretanto", correct: true },
      { answer: "No entanto", correct: false },
      { answer: "Contudo", correct: false },
      { answer: "Porém", correct: false },
      { answer: "De qualquer forma", correct: false },
    ],
  },
  {
    question: "O que significa 'you' em inglês?",
    answers: [
      { answer: "Você", correct: true },
      { answer: "Eu", correct: false },
      { answer: "Ele", correct: false },
      { answer: "Nós", correct: false },
      { answer: "Eles", correct: false },
    ],
  },
  {
    question: "O que significa 'may' em inglês?",
    answers: [
      { answer: "Maio", correct: false },
      { answer: "Pode", correct: true },
      { answer: "Deve", correct: false },
      { answer: "Talvez", correct: false },
      { answer: "Vai", correct: false },
    ],
  },
  {
    question: "O que significa 'find' em inglês?",
    answers: [
      { answer: "Achar", correct: true },
      { answer: "Perder", correct: false },
      { answer: "Encontrar", correct: false },
      { answer: "Descobrir", correct: false },
      { answer: "Procurar", correct: false },
    ],
  },
  {
    question: "O que significa 'this' em inglês?",
    answers: [
      { answer: "Isso", correct: true },
      { answer: "Aquilo", correct: false },
      { answer: "Aquele", correct: false },
      { answer: "Ele", correct: false },
      { answer: "Ela", correct: false },
    ],
  },
  {
    question: "O que significa 'handy' em inglês?",
    answers: [
      { answer: "À mão", correct: false },
      { answer: "Conveniente", correct: true },
      { answer: "Habilidoso", correct: false },
      { answer: "Útil", correct: false },
      { answer: "Manuseável", correct: false },
    ],
  },
  {
    question: "O que significa 'during' em inglês?",
    answers: [
      { answer: "Antes", correct: false },
      { answer: "Depois", correct: false },
      { answer: "Durante", correct: true },
      { answer: "Através", correct: false },
      { answer: "Enquanto", correct: false },
    ],
  },
  {
    question: "O que significa 'your' em inglês?",
    answers: [
      { answer: "Seu", correct: true },
      { answer: "Meu", correct: false },
      { answer: "Dele", correct: false },
      { answer: "Delas", correct: false },
      { answer: "Nosso", correct: false },
    ],
  },
  {
    question: "O que significa 'penetration' em inglês?",
    answers: [
      { answer: "Perfuração", correct: false },
      { answer: "Infiltração", correct: true },
      { answer: "Penetração", correct: false },
      { answer: "Exploração", correct: false },
      { answer: "Invadindo", correct: false },
    ],
  },
  {
    question: "O que significa 'tests' em inglês?",
    answers: [
      { answer: "Testes", correct: true },
      { answer: "Provas", correct: false },
      { answer: "Exames", correct: false },
      { answer: "Experimentos", correct: false },
      { answer: "Avaliações", correct: false },
    ],
  },
  {
    question: "O que significa 'If' em inglês?",
    answers: [
      { answer: "Se", correct: true },
      { answer: "Caso", correct: false },
      { answer: "Quando", correct: false },
      { answer: "Então", correct: false },
      { answer: "Como", correct: false },
    ],
  },
  {
    question: "O que significa 'you're' em inglês?",
    answers: [
      { answer: "Você é", correct: true },
      { answer: "Você está", correct: false },
      { answer: "Você tem", correct: false },
      { answer: "Você vai", correct: false },
      { answer: "Você faz", correct: false },
    ],
  },
  {
    question: "O que significa 'lucky' em inglês?",
    answers: [
      { answer: "Sortudo", correct: true },
      { answer: "Feliz", correct: false },
      { answer: "Azarado", correct: false },
      { answer: "Abençoado", correct: false },
      { answer: "Fortunado", correct: false },
    ],
  },
  {
    question: "O que significa 'enough' em inglês?",
    answers: [
      { answer: "Suficiente", correct: true },
      { answer: "Bastante", correct: false },
      { answer: "Satisfeito", correct: false },
      { answer: "Suficientemente", correct: false },
      { answer: "Demasiado", correct: false },
    ],
  },
  {
    question: "O que significa 'to' em inglês?",
    answers: [
      { answer: "Para", correct: true },
      { answer: "Até", correct: false },
      { answer: "A", correct: false },
      { answer: "No", correct: false },
      { answer: "Com", correct: false },
    ],
  },
  {
    question: "O que significa 'command' em inglês?",
    answers: [
      { answer: "Comando", correct: true },
      { answer: "Ordem", correct: false },
      { answer: "Instrução", correct: false },
      { answer: "Diretiva", correct: false },
      { answer: "Mandato", correct: false },
    ],
  },
  {
    question: "O que significa 'execution' em inglês?",
    answers: [
      { answer: "Execução", correct: true },
      { answer: "Executando", correct: false },
      { answer: "Executivo", correct: false },
      { answer: "Executável", correct: false },
      { answer: "Exibição", correct: false },
    ],
  },
  {
    question: "O que significa 'vulnerability' em inglês?",
    answers: [
      { answer: "Vulnerabilidade", correct: true },
      { answer: "Vulnerável", correct: false },
      { answer: "Frágil", correct: false },
      { answer: "Exposto", correct: false },
      { answer: "Susceptível", correct: false },
    ],
  },
  {
    question: "O que significa 'pretty' em inglês?",
    answers: [
      { answer: "Bonito", correct: true },
      { answer: "Feio", correct: false },
      { answer: "Bastante", correct: false },
      { answer: "Elegante", correct: false },
      { answer: "Adorável", correct: false },
    ],
  },
  {
    question: "O que significa 'soon' em inglês?",
    answers: [
      { answer: "Em breve", correct: true },
      { answer: "Agora", correct: false },
      { answer: "Depressa", correct: false },
      { answer: "Logo", correct: false },
      { answer: "Rapidamente", correct: false },
    ],
  },
  {
    question: "O que significa 'afterwards' em inglês?",
    answers: [
      { answer: "Depois", correct: true },
      { answer: "Antes", correct: false },
      { answer: "Posteriormente", correct: false },
      { answer: "Em seguida", correct: false },
      { answer: "Então", correct: false },
    ],
  },
  {
    question: "O que significa 'you'll' em inglês?",
    answers: [
      { answer: "Você vai", correct: true },
      { answer: "Você irá", correct: false },
      { answer: "Você terá", correct: false },
      { answer: "Você tem", correct: false },
      { answer: "Você estava", correct: false },
    ],
  },
  {
    question: "O que significa 'probably' em inglês?",
    answers: [
      { answer: "Provavelmente", correct: true },
      { answer: "Possivelmente", correct: false },
      { answer: "Certamente", correct: false },
      { answer: "Talvez", correct: false },
      { answer: "Absolutamente", correct: false },
    ],
  },
  {
    question: "O que significa 'want' em inglês?",
    answers: [
      { answer: "Querer", correct: true },
      { answer: "Precisar", correct: false },
      { answer: "Ter", correct: false },
      { answer: "Desejar", correct: false },
      { answer: "Pedir", correct: false },
    ],
  },
  {
    question: "O que significa 'an' em inglês?",
    answers: [
      { answer: "Um", correct: true },
      { answer: "O", correct: false },
      { answer: "A", correct: false },
      { answer: "Ela", correct: false },
      { answer: "Ele", correct: false },
    ],
  },
  {
    question: "O que significa 'interactive' em inglês?",
    answers: [
      { answer: "Interativo", correct: true },
      { answer: "Ativo", correct: false },
      { answer: "Reativo", correct: false },
      { answer: "Atencioso", correct: false },
      { answer: "Intuitivo", correct: false },
    ],
  },
  {
    question: "O que significa 'shell' em inglês?",
    answers: [
      { answer: "Concha", correct: true },
      { answer: "Casca", correct: false },
      { answer: "Shell", correct: false },
      { answer: "Abóbada", correct: false },
      { answer: "Carapaça", correct: false },
    ],
  },
  {
    question: "O que significa 'Your' em inglês?",
    answers: [
      { answer: "Seu", correct: true },
      { answer: "Meu", correct: false },
      { answer: "Dele", correct: false },
      { answer: "Delas", correct: false },
      { answer: "Nosso", correct: false },
    ],
  },
  {
    question: "O que significa 'options' em inglês?",
    answers: [
      { answer: "Opções", correct: true },
      { answer: "Alternativas", correct: false },
      { answer: "Escolhas", correct: false },
      { answer: "Possibilidades", correct: false },
      { answer: "Variedades", correct: false },
    ],
  },
  {
    question: "O que significa 'creating' em inglês?",
    answers: [
      { answer: "Criando", correct: true },
      { answer: "Criação", correct: false },
      { answer: "Criativo", correct: false },
      { answer: "Criado", correct: false },
      { answer: "Cria", correct: false },
    ],
  },
  {
    question: "O que significa 'reverse' em inglês?",
    answers: [
      { answer: "Inverso", correct: true },
      { answer: "Reverso", correct: false },
      { answer: "Traseiro", correct: false },
      { answer: "Voltar", correct: false },
      { answer: "Retrocesso", correct: false },
    ],
  },
  {
    question: "O que significa 'are' em inglês?",
    answers: [
      { answer: "São", correct: true },
      { answer: "Estão", correct: false },
      { answer: "Eram", correct: false },
      { answer: "Serão", correct: false },
      { answer: "Eram", correct: false },
    ],
  },
  {
    question: "O que significa 'limited' em inglês?",
    answers: [
      { answer: "Limitado", correct: true },
      { answer: "Restrito", correct: false },
      { answer: "Ilimitado", correct: false },
      { answer: "Controlado", correct: false },
      { answer: "Finito", correct: false },
    ],
  },
  {
    question: "O que significa 'scripting' em inglês?",
    answers: [
      { answer: "Script", correct: true },
      { answer: "Programação", correct: false },
      { answer: "Roteiro", correct: false },
      { answer: "Codificação", correct: false },
      { answer: "Criptografia", correct: false },
    ],
  },
  {
    question: "O que significa 'languages' em inglês?",
    answers: [
      { answer: "Línguas", correct: true },
      { answer: "Idiomas", correct: false },
      { answer: "Dialectos", correct: false },
      { answer: "Linguagens", correct: false },
      { answer: "Falar", correct: false },
    ],
  },
  {
    question: "O que significa 'installed' em inglês?",
    answers: [
      { answer: "Instalado", correct: true },
      { answer: "Configurado", correct: false },
      { answer: "Fixado", correct: false },
      { answer: "Implementado", correct: false },
      { answer: "Montado", correct: false },
    ],
  },
  {
    question: "O que significa 'on' em inglês?",
    answers: [
      { answer: "Em", correct: true },
      { answer: "No", correct: false },
      { answer: "Sobre", correct: false },
      { answer: "A", correct: false },
      { answer: "Dentro", correct: false },
    ],
  },
  {
    question: "O que significa 'target' em inglês?",
    answers: [
      { answer: "Alvo", correct: true },
      { answer: "Objetivo", correct: false },
      { answer: "Meta", correct: false },
      { answer: "Destino", correct: false },
      { answer: "Objetivo", correct: false },
    ],
  },
  {
    question: "O que significa 'system' em inglês?",
    answers: [
      { answer: "Sistema", correct: true },
      { answer: "Programa", correct: false },
      { answer: "Processo", correct: false },
      { answer: "Máquina", correct: false },
      { answer: "Aparelho", correct: false },
    ],
  },
  {
    question: "O que significa 'though' em inglês?",
    answers: [
      { answer: "Embora", correct: true },
      { answer: "Apesar", correct: false },
      { answer: "Contudo", correct: false },
      { answer: "No entanto", correct: false },
      { answer: "Entretanto", correct: false },
    ],
  },
  {
    question: "O que significa 'could' em inglês?",
    answers: [
      { answer: "Poderia", correct: true },
      { answer: "Deveria", correct: false },
      { answer: "Pode", correct: false },
      { answer: "Poder", correct: false },
      { answer: "Seria capaz", correct: false },
    ],
  },
  {
    question: "O que significa 'upload' em inglês?",
    answers: [
      { answer: "Carregar", correct: true },
      { answer: "Baixar", correct: false },
      { answer: "Enviar", correct: false },
      { answer: "Receber", correct: false },
      { answer: "Postar", correct: false },
    ],
  },
  {
    question: "O que significa 'binary' em inglês?",
    answers: [
      { answer: "Binário", correct: true },
      { answer: "Bipolar", correct: false },
      { answer: "Duplo", correct: false },
      { answer: "Unificado", correct: false },
      { answer: "Simples", correct: false },
    ],
  },
  {
    question: "O que significa 'program' em inglês?",
    answers: [
      { answer: "Programa", correct: true },
      { answer: "Projeto", correct: false },
      { answer: "Plano", correct: false },
      { answer: "Problema", correct: false },
      { answer: "Processo", correct: false },
    ],
  },
  {
    question: "O que significa 'too' em inglês?",
    answers: [
      { answer: "Também", correct: true },
      { answer: "Demais", correct: false },
      { answer: "Muito", correct: false },
      { answer: "Além", correct: false },
      { answer: "Junto", correct: false },
    ],
  },
  {
    question: "O que significa 'if' em inglês?",
    answers: [
      { answer: "Se", correct: true },
      { answer: "E", correct: false },
      { answer: "Então", correct: false },
      { answer: "Caso", correct: false },
      { answer: "Mas", correct: false },
    ],
  },
  {
    question: "O que significa 'suitably' em inglês?",
    answers: [
      { answer: "Adequadamente", correct: true },
      { answer: "Adequado", correct: false },
      { answer: "Apropriado", correct: false },
      { answer: "Satisfatoriamente", correct: false },
      { answer: "Convenientemente", correct: false },
    ],
  },
  {
    question: "O que significa 'well' em inglês?",
    answers: [
      { answer: "Bem", correct: true },
      { answer: "Muito", correct: false },
      { answer: "Pouco", correct: false },
      { answer: "Ruim", correct: false },
      { answer: "Melhor", correct: false },
    ],
  },
  {
    question: "O que significa 'prepared' em inglês?",
    answers: [
      { answer: "Preparado", correct: true },
      { answer: "Pronto", correct: false },
      { answer: "Preparando", correct: false },
      { answer: "Preparação", correct: false },
      { answer: "Pré-preparado", correct: false },
    ],
  },
  {
    question: "O que significa 'First' em inglês?",
    answers: [
      { answer: "Primeiro", correct: true },
      { answer: "Segundo", correct: false },
      { answer: "Terceiro", correct: false },
      { answer: "Último", correct: false },
      { answer: "Inicial", correct: false },
    ],
  },
  {
    question: "O que significa 'all' em inglês?",
    answers: [
      { answer: "Todos", correct: true },
      { answer: "Tudo", correct: false },
      { answer: "Todas", correct: false },
      { answer: "Cada", correct: false },
      { answer: "Cada um", correct: false },
    ],
  },
  {
    question: "O que significa 'on' em inglês?",
    answers: [
      { answer: "Em", correct: true },
      { answer: "No", correct: false },
      { answer: "Sobre", correct: false },
      { answer: "A", correct: false },
      { answer: "Dentro", correct: false },
    ],
  },
  {
    question: "O que significa 'machine' em inglês?",
    answers: [
      { answer: "Máquina", correct: true },
      { answer: "Mecânico", correct: false },
      { answer: "Máquina", correct: false },
      { answer: "Equipamento", correct: false },
      { answer: "Maquinaria", correct: false },
    ],
  },
  {
    question: "O que significa 'set' em inglês?",
    answers: [
      { answer: "Definir", correct: true },
      { answer: "Colocar", correct: false },
      { answer: "Estabelecer", correct: false },
      { answer: "Fixar", correct: false },
      { answer: "Preparar", correct: false },
    ],
  },
  {
    question: "O que significa 'up' em inglês?",
    answers: [
      { answer: "Acima", correct: false },
      { answer: "Para cima", correct: false },
      { answer: "Levantar", correct: true },
      { answer: "Subir", correct: false },
      { answer: "Cima", correct: false },
    ],
  },
  {
    question: "O que significa 'listener' em inglês?",
    answers: [
      { answer: "Ouvinte", correct: true },
      { answer: "Escutador", correct: false },
      { answer: "Falante", correct: false },
      { answer: "Ouvinte", correct: false },
      { answer: "Observador", correct: false },
    ],
  },
  {
    question: "O que significa 'where' em inglês?",
    answers: [
      { answer: "Onde", correct: true },
      { answer: "Quando", correct: false },
      { answer: "Aonde", correct: false },
      { answer: "Quem", correct: false },
      { answer: "Por que", correct: false },
    ],
  },
  {
    question: "O que significa 'attackerip' em inglês?",
    answers: [
      { answer: "IP do atacante", correct: true },
      { answer: "Ataque IP", correct: false },
      { answer: "Atacante", correct: false },
      { answer: "IP do alvo", correct: false },
      { answer: "IP de origem", correct: false },
    ],
  },
  {
    question: "O que significa 'access' em inglês?",
    answers: [
      { answer: "Acesso", correct: true },
      { answer: "Entrada", correct: false },
      { answer: "Abrir", correct: false },
      { answer: "Aceder", correct: false },
      { answer: "Acessar", correct: false },
    ],
  },
  {
    question: "O que significa 'subnet' em inglês?",
    answers: [
      { answer: "Sub-rede", correct: true },
      { answer: "Máscara de sub-rede", correct: false },
      { answer: "Rede", correct: false },
      { answer: "Sub-domínio", correct: false },
      { answer: "Sub-grupo", correct: false },
    ],
  },
  {
    question: "O que significa 'resolve' em inglês?",
    answers: [
      { answer: "Resolver", correct: true },
      { answer: "Resolução", correct: false },
      { answer: "Finalizar", correct: false },
      { answer: "Resolver", correct: false },
      { answer: "Decidir", correct: false },
    ],
  },
  {
    question: "O que significa 'helper' em inglês?",
    answers: [
      { answer: "Auxiliar", correct: true },
      { answer: "Ajudante", correct: false },
      { answer: "Assistente", correct: false },
      { answer: "Cooperador", correct: false },
      { answer: "Suporte", correct: false },
    ],
  },
  {
    question: "O que significa 'search' em inglês?",
    answers: [
      { answer: "Pesquisa", correct: true },
      { answer: "Procurar", correct: false },
      { answer: "Buscar", correct: false },
      { answer: "Pesquisar", correct: false },
      { answer: "Encontrar", correct: false },
    ],
  },
  {
    question: "O que significa 'similar' em inglês?",
    answers: [
      { answer: "Similar", correct: true },
      { answer: "Semelhante", correct: false },
      { answer: "Igual", correct: false },
      { answer: "Parecido", correct: false },
      { answer: "Diferente", correct: false },
    ],
  },
  {
    question: "O que significa 'also' em inglês?",
    answers: [
      { answer: "Também", correct: true },
      { answer: "Além", correct: false },
      { answer: "Ademais", correct: false },
      { answer: "Igualmente", correct: false },
      { answer: "Também", correct: false },
    ],
  },
  {
    question: "O que significa 'indicates' em inglês?",
    answers: [
      { answer: "Indica", correct: true },
      { answer: "Indicado", correct: false },
      { answer: "Indicação", correct: false },
      { answer: "Indicador", correct: false },
      { answer: "Indicando", correct: false },
    ],
  },
  {
    question: "O que significa 'various' em inglês?",
    answers: [
      { answer: "Vários", correct: true },
      { answer: "Diversos", correct: false },
      { answer: "Várias", correct: false },
      { answer: "Diferentes", correct: false },
      { answer: "Vário", correct: false },
    ],
  },
  {
    question: "O que significa 'however' em inglês?",
    answers: [
      { answer: "Entretanto", correct: true },
      { answer: "Contudo", correct: false },
      { answer: "No entanto", correct: false },
      { answer: "Porém", correct: false },
      { answer: "De qualquer forma", correct: false },
    ],
  },
  {
    question: "O que significa 'upon' em inglês?",
    answers: [
      { answer: "Sobre", correct: true },
      { answer: "Através", correct: false },
      { answer: "Em", correct: false },
      { answer: "Por", correct: false },
      { answer: "Depois", correct: false },
    ],
  },
  {
    question: "O que significa 'connection' em inglês?",
    answers: [
      { answer: "Conexão", correct: true },
      { answer: "Conectar", correct: false },
      { answer: "Ligação", correct: false },
      { answer: "Contato", correct: false },
      { answer: "Conexões", correct: false },
    ],
  },
  {
    question: "O que significa 'found' em inglês?",
    answers: [
      { answer: "Encontrado", correct: true },
      { answer: "Fundado", correct: false },
      { answer: "Achado", correct: false },
      { answer: "Descoberto", correct: false },
      { answer: "Encontrou", correct: false },
    ],
  },
  {
    question: "O que significa 'settings' em inglês?",
    answers: [
      { answer: "Configurações", correct: true },
      { answer: "Ajustes", correct: false },
      { answer: "Definições", correct: false },
      { answer: "Opções", correct: false },
      { answer: "Preferências", correct: false },
    ],
  },
  {
    question: "O que significa 'below' em inglês?",
    answers: [
      { answer: "Abaixo", correct: true },
      { answer: "Abaixo", correct: false },
      { answer: "Abaixo de", correct: false },
      { answer: "Debaixo", correct: false },
      { answer: "Abaixo do", correct: false },
    ],
  },
  {
    question: "O que significa 'fixing' em inglês?",
    answers: [
      { answer: "Corrigindo", correct: true },
      { answer: "Fixação", correct: false },
      { answer: "Reparo", correct: false },
      { answer: "Fixo", correct: false },
      { answer: "Consertando", correct: false },
    ],
  },
  {
    question: "O que significa 'user' em inglês?",
    answers: [
      { answer: "Usuário", correct: true },
      { answer: "Utilizador", correct: false },
      { answer: "Utilizador", correct: false },
      { answer: "Usuário", correct: false },
      { answer: "Utilizadora", correct: false },
    ],
  },
  {
    question: "O que significa 'space' em inglês?",
    answers: [
      { answer: "Espaço", correct: true },
      { answer: "Local", correct: false },
      { answer: "Espacial", correct: false },
      { answer: "Vazio", correct: false },
      { answer: "Área", correct: false },
    ],
  },
  {
    question: "O que significa 'requested' em inglês?",
    answers: [
      { answer: "Solicitado", correct: true },
      { answer: "Pedido", correct: false },
      { answer: "Requisitado", correct: false },
      { answer: "Exigido", correct: false },
      { answer: "Perguntado", correct: false },
    ],
  },
  {
    question: "O que significa 'perform' em inglês?",
    answers: [
      { answer: "Realizar", correct: true },
      { answer: "Desempenhar", correct: false },
      { answer: "Executar", correct: false },
      { answer: "Atuar", correct: false },
      { answer: "Fazer", correct: false },
    ],
  },
  {
    question: "O que significa 'capabilities' em inglês?",
    answers: [
      { answer: "Capacidades", correct: true },
      { answer: "Habilidades", correct: false },
      { answer: "Competências", correct: false },
      { answer: "Capacitações", correct: false },
      { answer: "Potencialidades", correct: false },
    ],
  },
  {
    question: "O que significa 'missing' em inglês?",
    answers: [
      { answer: "Faltando", correct: true },
      { answer: "Perdido", correct: false },
      { answer: "Desaparecido", correct: false },
      { answer: "Faltante", correct: false },
      { answer: "Ausente", correct: false },
    ],
  },
  {
    question: "O que significa 'submit' em inglês?",
    answers: [
      { answer: "Enviar", correct: true },
      { answer: "Submeter", correct: false },
      { answer: "Submeter-se", correct: false },
      { answer: "Apresentar", correct: false },
      { answer: "Entregar", correct: false },
    ],
  },
  {
    question: "O que significa 'external' em inglês?",
    answers: [
      { answer: "Externo", correct: true },
      { answer: "Fora", correct: false },
      { answer: "Exterior", correct: false },
      { answer: "Externo", correct: false },
      { answer: "Extranho", correct: false },
    ],
  },
  {
    question: "O que significa 'technique' em inglês?",
    answers: [
      { answer: "Técnica", correct: true },
      { answer: "Técnico", correct: false },
      { answer: "Tecnologia", correct: false },
      { answer: "Método", correct: false },
      { answer: "Tecnológico", correct: false },
    ],
  },
  {
    question: "O que significa 'provide' em inglês?",
    answers: [
      { answer: "Fornecer", correct: true },
      { answer: "Proporcionar", correct: false },
      { answer: "Dar", correct: false },
      { answer: "Oferecer", correct: false },
      { answer: "Prover", correct: false },
    ],
  },
  {
    question: "O que significa 'related' em inglês?",
    answers: [
      { answer: "Relacionado", correct: true },
      { answer: "Relativo", correct: false },
      { answer: "Associado", correct: false },
      { answer: "Correlacionado", correct: false },
      { answer: "Pertencente", correct: false },
    ],
  },
  {
    question: "O que significa 'running' em inglês?",
    answers: [
      { answer: "Executando", correct: true },
      { answer: "Correndo", correct: false },
      { answer: "Rodando", correct: false },
      { answer: "Funcionando", correct: false },
      { answer: "Ativo", correct: false },
    ],
  },
  {
    question: "O que significa 'uses' em inglês?",
    answers: [
      { answer: "Usos", correct: true },
      { answer: "Utilizações", correct: false },
      { answer: "Usado", correct: false },
      { answer: "Usa", correct: false },
      { answer: "Utiliza", correct: false },
    ],
  },
  {
    question: "O que significa 'initial' em inglês?",
    answers: [
      { answer: "Inicial", correct: true },
      { answer: "Iniciante", correct: false },
      { answer: "Primário", correct: false },
      { answer: "Primeiro", correct: false },
      { answer: "Inicializar", correct: false },
    ],
  },
  {
    question: "O que significa 'identify' em inglês?",
    answers: [
      { answer: "Identificar", correct: true },
      { answer: "Identificação", correct: false },
      { answer: "Identidade", correct: false },
      { answer: "Identificado", correct: false },
      { answer: "Identificando", correct: false },
    ],
  },
  {
    question: "O que significa 'version' em inglês?",
    answers: [
      { answer: "Versão", correct: true },
      { answer: "Variação", correct: false },
      { answer: "Edição", correct: false },
      { answer: "Variante", correct: false },
      { answer: "Revisão", correct: false },
    ],
  },
  {
    question: "O que significa 'solve' em inglês?",
    answers: [
      { answer: "Resolver", correct: true },
      { answer: "Solucionar", correct: false },
      { answer: "Resolver", correct: false },
      { answer: "Resolução", correct: false },
      { answer: "Corrigir", correct: false },
    ],
  },
  {
    question: "O que significa 'storing' em inglês?",
    answers: [
      { answer: "Armazenamento", correct: true },
      { answer: "Armazenando", correct: false },
      { answer: "Armazenado", correct: false },
      { answer: "Estocagem", correct: false },
      { answer: "Estocando", correct: false },
    ],
  },
  {
    question: "O que significa 'reference' em inglês?",
    answers: [
      { answer: "Referência", correct: true },
      { answer: "Referir", correct: false },
      { answer: "Referente", correct: false },
      { answer: "Referencial", correct: false },
      { answer: "Referido", correct: false },
    ],
  },
  {
    question: "O que significa 'deployment' em inglês?",
    answers: [
      { answer: "Implementação", correct: true },
      { answer: "Desdobramento", correct: false },
      { answer: "Implantação", correct: false },
      { answer: "Distribuição", correct: false },
      { answer: "Posicionamento", correct: false },
    ],
  },
  {
    question: "O que significa 'easy' em inglês?",
    answers: [
      { answer: "Fácil", correct: true },
      { answer: "Simples", correct: false },
      { answer: "Fácil", correct: false },
      { answer: "Fácilmente", correct: false },
      { answer: "Descomplicado", correct: false },
    ],
  },
  {
    question: "O que significa 'targeting' em inglês?",
    answers: [
      { answer: "Alvejando", correct: true },
      { answer: "Mirando", correct: false },
      { answer: "Meta", correct: false },
      { answer: "Alvo", correct: false },
      { answer: "Objetivando", correct: false },
    ],
  },
  {
    question: "O que significa 'occurred' em inglês?",
    answers: [
      { answer: "Ocorrido", correct: true },
      { answer: "Acontecido", correct: false },
      { answer: "Ocorreu", correct: false },
      { answer: "Aconteceu", correct: false },
      { answer: "Sucedido", correct: false },
    ],
  },
  {
    question: "O que significa 'intended' em inglês?",
    answers: [
      { answer: "Destinado", correct: true },
      { answer: "Intencional", correct: false },
      { answer: "Previsto", correct: false },
      { answer: "Planejado", correct: false },
      { answer: "Proposto", correct: false },
    ],
  },
  {
    question: "O que significa 'failed' em inglês?",
    answers: [
      { answer: "Falhou", correct: true },
      { answer: "Fracassado", correct: false },
      { answer: "Falhado", correct: false },
      { answer: "Fracasso", correct: false },
      { answer: "Falha", correct: false },
    ],
  },
  {
    question: "O que significa 'expected' em inglês?",
    answers: [
      { answer: "Esperado", correct: true },
      { answer: "Previsto", correct: false },
      { answer: "Aguardado", correct: false },
      { answer: "Esperança", correct: false },
      { answer: "Expectativa", correct: false },
    ],
  },
  {
    question: "O que significa 'prevent' em inglês?",
    answers: [
      { answer: "Prevenir", correct: true },
      { answer: "Evitar", correct: false },
      { answer: "Impedir", correct: false },
      { answer: "Proteger", correct: false },
      { answer: "Prevenção", correct: false },
    ],
  },
  {
    question: "O que significa 'awareness' em inglês?",
    answers: [
      { answer: "Conscientização", correct: true },
      { answer: "Consciência", correct: false },
      { answer: "Sensibilização", correct: false },
      { answer: "Percepção", correct: false },
      { answer: "Alerta", correct: false },
    ],
  },
  {
    question: "O que significa 'configure' em inglês?",
    answers: [
      { answer: "Configurar", correct: true },
      { answer: "Configuração", correct: false },
      { answer: "Ajustar", correct: false },
      { answer: "Configurado", correct: false },
      { answer: "Configurando", correct: false },
    ],
  },
  {
    question: "O que significa 'occurs' em inglês?",
    answers: [
      { answer: "Ocorre", correct: true },
      { answer: "Acontece", correct: false },
      { answer: "Ocorreu", correct: false },
      { answer: "Aconteceu", correct: false },
      { answer: "Sucede", correct: false },
    ],
  },
  {
    question: "O que significa 'misconfigured' em inglês?",
    answers: [
      { answer: "Configuração incorreta", correct: true },
      { answer: "Mal configurado", correct: false },
      { answer: "Configuração errada", correct: false },
      { answer: "Configuração falhada", correct: false },
      { answer: "Configuração incorreta", correct: false },
    ],
  },
  {
    question: "O que significa 'fix' em inglês?",
    answers: [
      { answer: "Corrigir", correct: true },
      { answer: "Consertar", correct: false },
      { answer: "Arrumar", correct: false },
      { answer: "Resolver", correct: false },
      { answer: "Correção", correct: false },
    ],
  },
  {
    question: "O que significa 'updated' em inglês?",
    answers: [
      { answer: "Atualizado", correct: true },
      { answer: "Atualizar", correct: false },
      { answer: "Atualizando", correct: false },
      { answer: "Atualização", correct: false },
      { answer: "Update", correct: false },
    ],
  },
  {
    question: "O que significa 'resolving' em inglês?",
    answers: [
      { answer: "Resolvendo", correct: true },
      { answer: "Resolução", correct: false },
      { answer: "Resolver", correct: false },
      { answer: "Resolve", correct: false },
      { answer: "Resolvido", correct: false },
    ],
  },
  {
    question: "O que significa 'refresh' em inglês?",
    answers: [
      { answer: "Atualizar", correct: true },
      { answer: "Refrescar", correct: false },
      { answer: "Recarregar", correct: false },
      { answer: "Renovar", correct: false },
      { answer: "Refresh", correct: false },
    ],
  },
  {
    question: "O que significa 'networking' em inglês?",
    answers: [
      { answer: "Rede", correct: true },
      { answer: "Conectividade", correct: false },
      { answer: "Networking", correct: false },
      { answer: "Comunicação", correct: false },
      { answer: "Interconexão", correct: false },
    ],
  },
  {
    question: "O que significa 'protection' em inglês?",
    answers: [
      { answer: "Proteção", correct: true },
      { answer: "Proteger", correct: false },
      { answer: "Defesa", correct: false },
      { answer: "Guarda", correct: false },
      { answer: "Segurança", correct: false },
    ],
  },
  {
    question: "O que significa 'filtering' em inglês?",
    answers: [
      { answer: "Filtragem", correct: true },
      { answer: "Filtrar", correct: false },
      { answer: "Filtrado", correct: false },
      { answer: "Filtro", correct: false },
      { answer: "Filtrante", correct: false },
    ],
  },
  {
    question: "O que significa 'request' em inglês?",
    answers: [
      { answer: "Pedido", correct: true },
      { answer: "Requisição", correct: false },
      { answer: "Solicitar", correct: false },
      { answer: "Solicitação", correct: false },
      { answer: "Requerimento", correct: false },
    ],
  },
  {
    question: "O que significa 'version' em inglês?",
    answers: [
      { answer: "Versão", correct: true },
      { answer: "Variação", correct: false },
      { answer: "Edição", correct: false },
      { answer: "Variante", correct: false },
      { answer: "Revisão", correct: false },
    ],
  },
  {
    question: "O que significa 'encrypt' em inglês?",
    answers: [
      { answer: "Criptografar", correct: true },
      { answer: "Criptografia", correct: false },
      { answer: "Encriptar", correct: false },
      { answer: "Cifrar", correct: false },
      { answer: "Cifragem", correct: false },
    ],
  },
  {
    question: "O que significa 'assurance' em inglês?",
    answers: [
      { answer: "Garantia", correct: true },
      { answer: "Segurança", correct: false },
      { answer: "Assegurar", correct: false },
      { answer: "Certeza", correct: false },
      { answer: "Confiança", correct: false },
    ],
  },
  {
    question: "O que significa 'exists' em inglês?",
    answers: [
      { answer: "Existe", correct: true },
      { answer: "Existente", correct: false },
      { answer: "Existir", correct: false },
      { answer: "Existência", correct: false },
      { answer: "Existindo", correct: false },
    ],
  },
  {
    question: "O que significa 'implemented' em inglês?",
    answers: [
      { answer: "Implementado", correct: true },
      { answer: "Implementar", correct: false },
      { answer: "Implementação", correct: false },
      { answer: "Executado", correct: false },
      { answer: "Implantado", correct: false },
    ],
  },
  {
    question: "O que significa 'vulnerability' em inglês?",
    answers: [
      { answer: "Vulnerabilidade", correct: true },
      { answer: "Frágil", correct: false },
      { answer: "Vulnerável", correct: false },
      { answer: "Fragilidade", correct: false },
      { answer: "Risco", correct: false },
    ],
  },
  {
    question: "O que significa 'ability' em inglês?",
    answers: [
      { answer: "Habilidade", correct: true },
      { answer: "Capacidade", correct: false },
      { answer: "Aptidão", correct: false },
      { answer: "Habilidade", correct: false },
      { answer: "Capacidade", correct: false },
    ],
  },
  {
    question: "O que significa 'using' em inglês?",
    answers: [
      { answer: "Usando", correct: true },
      { answer: "Usado", correct: false },
      { answer: "Utilizando", correct: false },
      { answer: "Usa", correct: false },
      { answer: "Utilizando", correct: false },
    ],
  },
  {
    question: "O que significa 'validated' em inglês?",
    answers: [
      { answer: "Validado", correct: true },
      { answer: "Validar", correct: false },
      { answer: "Validação", correct: false },
      { answer: "Verificado", correct: false },
      { answer: "Comprovado", correct: false },
    ],
  },
  {
    question: "O que significa 'ability' em inglês?",
    answers: [
      { answer: "Habilidade", correct: true },
      { answer: "Capacidade", correct: false },
      { answer: "Aptidão", correct: false },
      { answer: "Habilidade", correct: false },
      { answer: "Capacidade", correct: false },
    ],
  },
  {
    question: "O que significa 'explore' em inglês?",
    answers: [
      { answer: "Explorar", correct: true },
      { answer: "Exploração", correct: false },
      { answer: "Pesquisar", correct: false },
      { answer: "Descobrir", correct: false },
      { answer: "Investigar", correct: false },
    ],
  },
  {
    question: "O que significa 'important' em inglês?",
    answers: [
      { answer: "Importante", correct: true },
      { answer: "Significativo", correct: false },
      { answer: "Essencial", correct: false },
      { answer: "Relevante", correct: false },
      { answer: "Crucial", correct: false },
    ],
  },
  {
    question: "O que significa 'integrity' em inglês?",
    answers: [
      { answer: "Integridade", correct: true },
      { answer: "Integro", correct: false },
      { answer: "Integral", correct: false },
      { answer: "Íntegro", correct: false },
      { answer: "Integridade", correct: false },
    ],
  },
  {
    question: "O que significa 'sensitive' em inglês?",
    answers: [
      { answer: "Sensível", correct: true },
      { answer: "Delicado", correct: false },
      { answer: "Sensitivo", correct: false },
      { answer: "Sensível", correct: false },
      { answer: "Vulnerável", correct: false },
    ],
  },
  {
    question: "O que significa 'detection' em inglês?",
    answers: [
      { answer: "Detecção", correct: true },
      { answer: "Detectar", correct: false },
      { answer: "Deteção", correct: false },
      { answer: "Detectado", correct: false },
      { answer: "Detectivo", correct: false },
    ],
  },
  {
    question: "O que significa 'determine' em inglês?",
    answers: [
      { answer: "Determinar", correct: true },
      { answer: "Determinado", correct: false },
      { answer: "Determinação", correct: false },
      { answer: "Decidir", correct: false },
      { answer: "Estabelecer", correct: false },
    ],
  },
  {
    question: "O que significa 'intrusion' em inglês?",
    answers: [
      { answer: "Intrusão", correct: true },
      { answer: "Intrusivo", correct: false },
      { answer: "Invasão", correct: false },
      { answer: "Intruso", correct: false },
      { answer: "Invasor", correct: false },
    ],
  },
  {
    question: "O que significa 'real-time' em inglês?",
    answers: [
      { answer: "Tempo real", correct: true },
      { answer: "Real", correct: false },
      { answer: "Tempo real", correct: false },
      { answer: "Em tempo real", correct: false },
      { answer: "Realidade", correct: false },
    ],
  },
  {
    question: "O que significa 'response' em inglês?",
    answers: [
      { answer: "Resposta", correct: true },
      { answer: "Responder", correct: false },
      { answer: "Reação", correct: false },
      { answer: "Resposta", correct: false },
      { answer: "Reagir", correct: false },
    ],
  },
  {
    question: "O que significa 'alert' em inglês?",
    answers: [
      { answer: "Alerta", correct: true },
      { answer: "Alertar", correct: false },
      { answer: "Atenção", correct: false },
      { answer: "Aviso", correct: false },
      { answer: "Alarme", correct: false },
    ],
  },
  {
    question: "O que significa 'virus' em inglês?",
    answers: [
      { answer: "Vírus", correct: true },
      { answer: "Viral", correct: false },
      { answer: "Infecção", correct: false },
      { answer: "Bactéria", correct: false },
      { answer: "Doença", correct: false },
    ],
  },
  {
    question: "O que significa 'malware' em inglês?",
    answers: [
      { answer: "Malware", correct: true },
      { answer: "Malicioso", correct: false },
      { answer: "Vírus", correct: false },
      { answer: "Software malicioso", correct: false },
      { answer: "Trojan", correct: false },
    ],
  },
  {
    question: "O que significa 'hack' em inglês?",
    answers: [
      { answer: "Hackear", correct: true },
      { answer: "Hacker", correct: false },
      { answer: "Hacking", correct: false },
      { answer: "Cortar", correct: false },
      { answer: "Quebrar", correct: false },
    ],
  },
  {
    question: "O que significa 'breach' em inglês?",
    answers: [
      { answer: "Violação", correct: true },
      { answer: "Brecha", correct: false },
      { answer: "Quebra", correct: false },
      { answer: "Violador", correct: false },
      { answer: "Quebrar", correct: false },
    ],
  },
  {
    question: "O que significa 'phishing' em inglês?",
    answers: [
      { answer: "Phishing", correct: true },
      { answer: "Pescaria", correct: false },
      { answer: "Pesca", correct: false },
      { answer: "Fishing", correct: false },
      { answer: "Phisher", correct: false },
    ],
  },
  
  {
    question: "O que significa 'backup' em inglês?",
    answers: [
      { answer: "Backup", correct: true },
      { answer: "Cópia de segurança", correct: false },
      { answer: "Cópia reserva", correct: false },
      { answer: "Cópia de backup", correct: false },
      { answer: "Cópia de dados", correct: false },
    ],
  },
  {
    question: "O que significa 'data breach' em inglês?",
    answers: [
      { answer: "Violção de dados", correct: true },
      { answer: "Breach de dados", correct: false },
      { answer: "Quebra de dados", correct: false },
      { answer: "Vazamento de dados", correct: false },
      { answer: "Exposição de dados", correct: false },
    ],
  },
  {
    question: "O que significa 'permission' em inglês?",
    answers: [
      { answer: "Permissão", correct: true },
      { answer: "Autorização", correct: false },
      { answer: "Concessão", correct: false },
      { answer: "Habilitação", correct: false },
      { answer: "Permitir", correct: false },
    ],
  },
  {
    question: "O que significa 'denial-of-service' em inglês?",
    answers: [
      { answer: "Negação de serviço", correct: true },
      { answer: "Recusa de serviço", correct: false },
      { answer: "Negar serviço", correct: false },
      { answer: "Negação de acesso", correct: false },
      { answer: "Ataque de negação de serviço", correct: false },
    ],
  },

  {
    question: "O que significa 'authentication' em inglês?",
    answers: [
      { answer: "Autenticação", correct: true },
      { answer: "Autenticidade", correct: false },
      { answer: "Autorização", correct: false },
      { answer: "Identificação", correct: false },
      { answer: "Validação", correct: false },
    ],
  },
  {
    question: "O que significa 'access control' em inglês?",
    answers: [
      { answer: "Controle de acesso", correct: true },
      { answer: "Controle de permissão", correct: false },
      { answer: "Controle de segurança", correct: false },
      { answer: "Acesso e controle", correct: false },
      { answer: "Controle de autorização", correct: false },
    ],
  },
  {
    question: "O que significa 'biometrics' em inglês?",
    answers: [
      { answer: "Biometria", correct: true },
      { answer: "Biometria", correct: false },
      { answer: "Biometria", correct: false },
      { answer: "Biometria", correct: false },
      { answer: "Biometria", correct: false },
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
