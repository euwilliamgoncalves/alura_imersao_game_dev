/* CRIAÇÃO DE VARIÁVEIS GERAIS */

let fundo;                // Utilizada para carregar a imagem de fundo (função preload() abaixo)
let cenario;              // Definida na classe Jogo (jogo.js) - utilizada para criar um novo cenário a partir da classe Cenário (cenario.js)
let jogo;                 // Utilizada para gerar uma cena a partir da classe Jogo (jogo.js)
let playerEnergy = 5;     // Atribui a energia inicial/máxima do personagem (utilizada no escopo de pontuacao.js)
let somaPulos = 0;        // Utilizada para somar a quantidade de pulos dados, para que possa limitá-los a 2 por vez (utilizada em jogo.js)
let score = 0;            // Utilizada para somar a pontuação geral (utilizada em pontuacao.js)
let somDoJogo;            // Utilizada para carregar a trilha sonora do jogo (função preload() abaixo)

function preload() {

  /* RECURSOS GERAIS DO JOGO */
  fundo = loadImage("imagens/cenario/fundo.jpg");                     // Imagem de plano de fundo
  somDoJogo = loadSound("sons/tribal.wav");                           // Trilha sonora do jogo

  /* RECURSOS DO PERSONAGEM */
  playerSpriteSh = loadImage("imagens/personagem/ode.png");           // Spritesheet principal
  playerSpriteShAlt = loadImage("imagens/personagem/odejump.png");    // Spritesheet alternativa
  playerJumpSound = loadSound("sons/pulo.flac");                      // Som de Pulo 
  playerHurtSound = loadSound("sons/dor.flac");                       // Som de dor/dano
  playerEnergyImg = loadImage("imagens/personagem/energia.png");      // Imagem de energia (exibida no topo)

  /* RECURSOS DO INIMIGO (BONES) */
  bonesSpriteSh = loadImage("imagens/inimigos/bones.png");            // Spritesheet principal
  bonesSpriteShAlt = loadImage("imagens/inimigos/dead.png");          // Spritesheet alternativa
  bonesSound = loadSound("sons/bones.wav");                           // Som de dor/dano

  /* RECURSOS DO INIMIGO (GHOST) */
  ghostSpriteSh = loadImage("imagens/inimigos/ghost.png");            // Spritesheet principal
  ghostSpriteShAlt = loadImage("imagens/inimigos/ghostdead.png");     // Spritesheet alternativa
  ghostSound = loadSound("sons/ghost.wav");                           // Som de dor/dano
}

/* CONFIGURA TELA, FRAMERATE E INICIA NOVA CENA */
function setup() {
  createCanvas(720, 480);
  frameRate(30);
  jogo = new Jogo();
  jogo.setup();
}

/* EXIBE O ESCOPO DA CENA EXECUTADA */
function draw() { 
  jogo.draw();
}

/* CAPTURA TECLA PRESSIONADA */
function keyPressed() {
  jogo.keyPressed(key);
}