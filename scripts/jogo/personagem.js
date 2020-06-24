class Personagem extends Animacao {
  constructor(matriz, imagem, x, y, largura, altura, larguraSprite, alturaSprite){
      super(matriz, imagem, x, y, largura, altura, larguraSprite, alturaSprite);

    this.yInicial = y;
    //this.y = this.yInicial;

    this.imagemPadrao = imagem;
    this.imgJump = loadImage("imagens/personagem/jump.png");
    
    this.velocidadeDoPulo = 0;
    this.gravidade = 3;

  }
  
  pula() {
    this.imagem = this.imgJump;
    this.velocidadeDoPulo = -30
  }
  
  aplicaGravidade() {
    this.y = this.y + this.velocidadeDoPulo
    this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade
    
    if(this.y > this.yInicial){
      this.y = this.yInicial
      this.imagem = this.imagemPadrao;
      somaPulos = 0;
    }
  }

  estaColidindo() {

    const colisaoPorCima = collideRectRect(this.x + 100, this.y + 155, this.largura / 4, 10, enemy.x + 8, enemy.y + 10, enemy.largura, 5);
    const colisao = collideRectRect(this.x + 130, this.y + 70, 2, this.altura / 3, enemy.x + 8, enemy.y + 20, 3, enemy.altura);

    if (colisaoPorCima == true) {
      score += 100;
      console.log("Pontos: " + score);
      enemy.foiAtacado();
    }

    if (colisao == true && colisaoPorCima == false) {
      playerEnergy -= 1;
      console.log("Energia: " + playerEnergy);
    }

  }

}