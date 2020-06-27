class Animacao {
    constructor(imagem, imagemAlt, somDano, obj){
        
        this.imagem = imagem;
        this.imagemAlt = imagemAlt;

        this.somDano = somDano;

        var {matriz, matrizAlt, x, y, largura, altura, larguraSprite, alturaSprite} = obj;
        
        this.matriz = matriz;
        this.matrizAlt = matrizAlt;
        this.x = x;
        this.y = y;
        this.largura = largura;
        this.altura = altura;
        this.larguraSprite = larguraSprite;
        this.alturaSprite = alturaSprite;

        this.posicaoMatriz = 0;

    }

    exibe(){
        image(this.imagem, this.x, this.y, this.largura, this.altura, this.matriz[this.posicaoMatriz]*this.larguraSprite, 0, this.larguraSprite, this.alturaSprite);
        this.anima();
    }

    anima() {
        this.posicaoMatriz++;
        if(this.posicaoMatriz >= this.matriz.length - 1) {
            this.posicaoMatriz = 0;
        }
    }
}