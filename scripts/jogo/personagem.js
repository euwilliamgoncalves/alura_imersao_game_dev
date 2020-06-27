class Personagem extends Animacao {
  constructor(imagem, imagemAlt, somDano, obj){

    super(imagem, imagemAlt, somDano, obj);

    var {y} = obj

    this.yInicial = y;

    this.imagemPadrao = imagem;
    this.imgJump = imagemAlt;
    
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

  estaColidindo(element) {

    // rect((element.x + element.largura/3), element.y + 10, element.largura / 3, 10)
    // rect((element.x + element.largura/3), (element.y + element.altura/3), 2, this.altura / 4)

    // rect(this.x + 110, this.y + 155, this.largura / 8, 10)
    // rect(this.x + 140, this.y + 90, 2, this.altura / 4)

    const colisaoPorCima = collideRectRect(this.x + 110, this.y + 155, this.largura / 8, 10, (element.x + element.largura/3), element.y + 10, element.largura / 3, 10);
    const colisao = collideRectRect(this.x + 140, this.y + 90, 3, this.altura / 4, (element.x + element.largura/3), (element.y + element.altura/3), 2, this.altura / 4);

    if (colisaoPorCima == true) {
      pontuacao.somaPonto();
      element.foiAtacado();
    }

    if (colisao == true && colisaoPorCima == false && element.atacado == false) {
      pontuacao.tiraVida();
      this.somDano.play();
    }

  }

}