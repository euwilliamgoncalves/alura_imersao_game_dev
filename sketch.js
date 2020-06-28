/* CRIAÇÃO DE VARIÁVEIS GERAIS */
let playerEnergy = 5;     // Atribui a energia inicial/máxima do personagem (utilizada no escopo de pontuacao.js)
let somaPulos = 0;        // Utilizada para somar a quantidade de pulos dados, para que possa limitá-los a 2 por vez (utilizada em jogo.js)
let score = 0;            // Utilizada para somar a pontuação geral (utilizada em pontuacao.js)
let cenaAtual = 'menu';   // Utilizada para exibir a cena escolhida no canvas
let gameEnded = false;    // Utilizada para verificar se o jogo terminou

function preload() {

  /* RECURSOS GERAIS DO JOGO */
  fundo = loadImage("imagens/cenario/fundo.jpg");                     // Imagem de fundo da fase
  somDoJogo = loadSound("sons/tribal.wav");                           // Trilha sonora do jogo
  menuA = loadImage("imagens/cenario/menu1.png");                     // Imagem de fundo do menu
  menuB = loadImage("imagens/cenario/menu2.png");                     // Imagem de fundo da história
  menuC = loadImage("imagens/cenario/menu3.png");                     // Imagem de fundo das instruções
  menuD = loadImage("imagens/cenario/menu4.png");                     // Imagem de fundo dos créditos
  endImg = loadImage("imagens/cenario/gameover.png")                  // Imagem de Game Over

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
  menu = new Menu();

  jogo.setup();
  cenas = {
    jogo,
    menu
  };
}

/* EXIBE O ESCOPO DA CENA EXECUTADA */
function draw() { 
  cenas[cenaAtual].draw();
}

/* CAPTURA TECLA PRESSIONADA */
function keyPressed() {
  jogo.keyPressed(key);
}

function touchStarted() {
  jogo.touchStarted();
}

function mouseClicked() {
  jogo.mouseClicked();
}

function gameOver() {
    gameEnded = true;
    image(endImg, 0, 0, width, height);
    somDoJogo.stop();
    noLoop();
}
