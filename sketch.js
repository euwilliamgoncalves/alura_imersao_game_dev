let fundo;
let cenario;

let personagem;
let player;
let playerSprite = 128;

let inimigo;
let enemy;
let enemySpriteX = 105;
let enemySpriteY = 100;

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
  [0, 0],
  [enemySpriteX, 0],
  [enemySpriteX*2, 0],
  [enemySpriteX*3, 0],
  [0, enemySpriteY],
  [enemySpriteX, enemySpriteY],
  [enemySpriteX*2, enemySpriteY],
  [enemySpriteX*3, enemySpriteY],
  [0, enemySpriteY*2],
  [enemySpriteX, enemySpriteY*2],
  [enemySpriteX*2, enemySpriteY*2],
  [enemySpriteX*3, enemySpriteY*2],
  [0, enemySpriteY*3],
  [enemySpriteX, enemySpriteY*3],
  [enemySpriteX*2, enemySpriteY*3],
  [enemySpriteX*3, enemySpriteY*3],
  [0, enemySpriteY*4],
  [enemySpriteX, enemySpriteY*4],
  [enemySpriteX*2, enemySpriteY*4],
  [enemySpriteX*3, enemySpriteY*4],
  [0, enemySpriteY*5],
  [enemySpriteX, enemySpriteY*5],
  [enemySpriteX*2, enemySpriteY*5],
  [enemySpriteX*3, enemySpriteY*5],
  [0, enemySpriteY*6],
  [enemySpriteX, enemySpriteY*6],
  [enemySpriteX*2, enemySpriteY*6],
  [enemySpriteX*3, enemySpriteY*6]
];

function preload() {
   fundo = loadImage("imagens/cenario/fundo.jpg");
   personagem = loadImage("imagens/personagem/arqueiro.png");
   inimigo = loadImage("imagens/inimigos/gotinha.png")
   somDoJogo = loadSound("sons/trilha_jogo.mp3");
}

function setup() {
  createCanvas(720, 480);
  cenario = new Cenario(fundo, 5);
  player = new Personagem(matrizPersonagem, personagem, -20, 290, playerSprite*2, playerSprite*2, playerSprite, playerSprite);
  enemy = new Inimigo(matrizInimigo, inimigo, width-60, 417, 32, 32, enemySpriteX, enemySpriteY)
  frameRate(30);
  //somDoJogo.loop();
}

function draw() { 
  cenario.exibe();
  cenario.move();
  player.exibe();
  enemy.exibe();
  enemy.move();
}

