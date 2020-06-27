class Inimigo extends Animacao {
    constructor(imagem, imagemAlt, somDano, obj){

        super(imagem, imagemAlt, somDano, obj);

        var {matriz, matrizAlt} = obj

        this.imgPadrao = this.imagem;
        this.matrizPadrao = matriz;

        this.imgDead = imagemAlt;
        this.matrizMorto = matrizAlt;

        this.atacado = false;

        this.somDano = somDano;

        this.velocidade = 5;

    }

    move() {
        this.x = this.x - this.velocidade;
        if(this.x < -this.largura){
            this.imagem = this.imgPadrao;
            this.matriz = this.matrizPadrao;
            this.posicaoMatriz = 0;
            this.atacado == false;
        }
    }

    foiAtacado() {
        this.somDano.play();
        this.atacado == true;
        this.matriz = this.matrizMorto;
        this.imagem = this.imgDead;
        return null;
    }
}