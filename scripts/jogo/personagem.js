class Personagem extends Animacao {
  constructor(matriz, imagem, x, y, largura, altura, larguraSprite, alturaSprite){
      super(matriz, imagem, x, y, largura, altura, larguraSprite, alturaSprite);

    this.yInicial = y;
    //this.y = this.yInicial;

    this.imagemPadrao = imagem;
    this.imgJump = loadImage("imagens/personagem/jump.png");
    
    this.velocidadeDoPulo = 0;
    this.gravidade = 3;

    this.colidiu = false;

    
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
    }
  }

  estaColidindo() {
    rect(this.x + 130, this.y + 70, 2, this.altura / 3);
    rect(enemy.x + 8, enemy.y + 5, 3, enemy.altura);
    const colisao = collideRectRect(this.x + 130, this.y + 70, 2, this.altura / 3, enemy.x + 8, enemy.y, 3, enemy.altura);

    if (colisao == true && this.colidiu == false) {
      playerEnergy -= 1;
      console.log(playerEnergy);
    }
    
    
  }

}