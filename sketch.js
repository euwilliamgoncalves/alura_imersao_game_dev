let fundo;
let personagem;
let inimigo;
let cenario;
let somDoJogo;
let player;
let enemy;

const matrizPersonagem = [
  [0, 0],
  [0, 0],
  [128, 0],
  [128, 0],
  [256, 0],
  [256, 0],
  [384, 0],
  [384, 0],
  [512, 0],
  [512, 0],
  [640, 0],
  [640, 0],
  [768, 0],
  [768, 0],
  [896, 0],
  [896, 0]
];

const matrizInimigo = [
  [0, 0],
  [104, 0],
  [208, 0],
  [312, 0],
  [0, 104],
  [104, 104],
  [208, 104],
  [312, 104],
  [0, 208],
  [104, 208],
  [208, 208],
  [312, 208],
  [0, 312],
  [104, 312],
  [208, 312],
  [312, 312],
  [0, 418],
  [104, 418],
  [208, 418],
  [312, 418],
  [0, 522],
  [104, 522],
  [208, 522],
  [312, 522],
  [0, 626],
  [104, 626],
  [208, 626],
  [312, 626],
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
  player = new Personagem(matrizPersonagem, personagem, -20, 290, 256, 256, 128, 128);
  enemy = new Inimigo(matrizInimigo, inimigo, width-50, 252, 52, 52, 104, 104)
  frameRate(30);
  //somDoJogo.loop();
}

function draw() { 
  cenario.exibe();
  cenario.move();
  player.exibe();
  enemy.exibe();
}

