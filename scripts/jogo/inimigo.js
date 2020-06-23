class Inimigo extends Animacao {
    constructor(matriz, imagem, x, y, largura, altura, larguraSprite, alturaSprite){
        super(matriz, imagem, x, y, largura, altura, larguraSprite, alturaSprite);
    }

    move() {
        this.x = this.x - 5;

        function getRandomArbitrary(min, max) {
            return Math.random() * (max - min) + min;
        }

        if(this.x < -this.largura){
            this.x = width + getRandomArbitrary(50, 150);
        }
    }
}