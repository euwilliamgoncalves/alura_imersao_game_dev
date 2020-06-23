let fundo;
let personagem;
let cenario;
let somDoJogo;
let player;

function preload() {
   fundo = loadImage("imagens/cenario/fundo.jpg");
   personagem = loadImage("imagens/personagem/arqueiro.png");
   somDoJogo = loadSound("sons/trilha_jogo.mp3");
}

function setup() {
  createCanvas(720, 480);
  cenario = new Cenario(fundo, 5);
  player = new Personagem(personagem);
  frameRate(30);
  //somDoJogo.loop();
}

function draw() { 
  cenario.exibe();
  cenario.move();
  player.exibe();
}

