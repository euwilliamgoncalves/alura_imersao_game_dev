let fundo;
let cenario;

let playerEnergy = 5;
let somaPulos = 0;
let score = 0;

let somDoJogo;

var arrayInimigos = [];
let inimigoAtual = 0;

function preload() {
  fundo = loadImage("imagens/cenario/fundo.jpg");

  playerSpriteSh = loadImage("imagens/personagem/ode.png");
  playerSpriteShAlt = loadImage("imagens/personagem/odejump.png");
  playerJumpSound = loadSound("sons/pulo.flac");
  playerHurtSound = loadSound("sons/dor.flac");

  bonesSpriteSh = loadImage("imagens/inimigos/bones.png");
  bonesSpriteShAlt = loadImage("imagens/inimigos/dead.png");
  bonesSound = loadSound("sons/bones.wav");

  ghostSpriteSh = loadImage("imagens/inimigos/ghost.png");
  ghostSpriteShAlt = loadImage("imagens/inimigos/ghostdead.png");
  ghostSound = loadSound("sons/ghost.wav");

  somDoJogo = loadSound("sons/tribal.wav");
}

function setup() {
  createCanvas(720, 480);
  cenario = new Cenario(fundo, 6);
  
  /* CRIANDO PERSONAGEM */
  
  const playerObj = {
    matriz: [0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7],
    matrizAlt: '',
    x: -20,
    y: 290,
    largura: 256,
    altura: 256,
    larguraSprite: 128,
    alturaSprite: 128
  }
  
  player = new Personagem(playerSpriteSh, playerSpriteShAlt, playerHurtSound, playerObj);

  /* CRIANDO INIMIGOS */

  const bonesObj = {
    matriz: [12,11,10,9,8,7,6,5,4,3,2,1],
    matrizAlt: [12,12,12,11,11,11,10,10,10,9,9,9,8,8,8,7,7,7,6,6,6,5,5,5,4,4,4,3,3,3,2,2,2,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0],
    x: width-60,
    y: 362,
    largura: 55,
    altura: 83,
    larguraSprite: 22,
    alturaSprite: 33
  }

  const ghostObj = {
    matriz: [6,6,6,5,5,5,4,4,4,3,3,3,2,2,2,1,1,1,0,0,0],
    matrizAlt: [6,6,6,5,5,5,4,4,4,3,3,3,2,2,2,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    x: width+20,
    y: 250,
    largura: 96,
    altura: 120,
    larguraSprite: 64,
    alturaSprite: 80
  }
  
  bones = new Inimigo(bonesSpriteSh, bonesSpriteShAlt, bonesSound, bonesObj);
  ghost = new Inimigo(ghostSpriteSh, ghostSpriteShAlt, ghostSound, ghostObj);

  arrayInimigos.push(bones, ghost);

  /* OUTRAS CONFIGURAÇÕES DO JOGO */

  pontuacao = new Pontuacao();
  frameRate(30);
  somDoJogo.loop();
}

function draw() { 
  cenario.exibe();
  cenario.move();

  player.exibe();
  player.aplicaGravidade();

  pontuacao.exibePts();
  pontuacao.exibeVida();

  const inimigo = arrayInimigos[inimigoAtual];

  const inimigoPassou = inimigo.x < -inimigo.largura;

  inimigo.exibe();
  inimigo.move();

  if (inimigoPassou) {
    inimigoAtual++;
    
    if (inimigoAtual >= arrayInimigos.length) {
      inimigoAtual = 0;
    }
    inimigo.x = width + parseInt(random(200, 350));
    inimigo.velocidade = parseInt(random(7, 15));
  }


  player.estaColidindo(inimigo);
  
  if (playerEnergy < 1) {
    noLoop;
    alert('Game Over');
    location.reload();
  }
}

function keyPressed() {
  if (key === 'ArrowUp' && somaPulos < 2) {
    player.pula();
    playerJumpSound.play()
    somaPulos += 1;
  }
}