class Animacao {
    constructor(matriz, imagem, x, y, largura, altura, larguraSprite, alturaSprite){
        this.matriz = matriz;
        this.imagem = imagem;
        this.x = x;
        this.y = y;
        this.largura = largura;
        this.altura = altura;
        this.larguraSprite = larguraSprite;
        this.alturaSprite = alturaSprite;
        this.posicaoMatriz = 0;
    }

    exibe(){
        image(this.imagem, this.x, this.y, this.largura, this.altura, this.matriz[this.posicaoMatriz][0], this.matriz[this.posicaoMatriz][1], this.larguraSprite, this.alturaSprite);
        this.anima();
    }

    anima() {
        this.posicaoMatriz++;
        if(this.posicaoMatriz >= this.matriz.length - 1) {
            this.posicaoMatriz = 0;
        }
    }
}