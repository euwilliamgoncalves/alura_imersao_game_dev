let fundo;
let cenario;

let personagem;
let player;
let playerSprite = 128;
let playerEnergy = 5;

let inimigo;
let enemy;
let enemySpriteX = 22;
let enemySpriteY = 33;

let somDoJogo;

const matrizPersonagem = [
  [0, 0],
  [0, 0],
  [playerSprite, 0],
  [playerSprite, 0],
  [playerSprite*2, 0],
  [playerSprite*2, 0],
  [playerSprite*3, 0],
  [playerSprite*3, 0],
  [playerSprite*4, 0],
  [playerSprite*4, 0],
  [playerSprite*5, 0],
  [playerSprite*5, 0],
  [playerSprite*6, 0],
  [playerSprite*6, 0],
  [playerSprite*7, 0],
  [playerSprite*7, 0]
];

const matrizInimigo = [
  [enemySpriteX*12, 0],
  [enemySpriteX*11, 0],
  [enemySpriteX*10, 0],
  [enemySpriteX*9, 0],
  [enemySpriteX*8, 0],
  [enemySpriteX*7, 0],
  [enemySpriteX*6, 0],
  [enemySpriteX*5, 0],
  [enemySpriteX*4, 0],
  [enemySpriteX*3, 0],
  [enemySpriteX*2, 0],
  [enemySpriteX*1, 0],
  [0, 0]
];

function preload() {
   fundo = loadImage("imagens/cenario/fundo.jpg");
   personagem = loadImage("imagens/personagem/arqueiro.png");
   inimigo = loadImage("imagens/inimigos/bones.png")
   somDoJogo = loadSound("sons/trilha_jogo.mp3");
}

function setup() {
  createCanvas(720, 480);
  cenario = new Cenario(fundo, 6);
  player = new Personagem(matrizPersonagem, personagem, -20, 290, playerSprite*2, playerSprite*2, playerSprite, playerSprite);
  enemy = new Inimigo(matrizInimigo, inimigo, width-60, 362, enemySpriteX * 2.5, enemySpriteY * 2.5, enemySpriteX, enemySpriteY)
  frameRate(30);
  //somDoJogo.loop();
}

function draw() { 
  cenario.exibe();
  cenario.move();
  player.exibe();
  player.aplicaGravidade();
  enemy.exibe();
  enemy.move();
  player.estaColidindo(enemy);
}

function keyPressed() {
  if (key === 'ArrowUp') {
    player.pula();
  }
}