class Inimigo extends Animacao {
    constructor(matriz, imagem, x, y, largura, altura, larguraSprite, alturaSprite){
        super(matriz, imagem, x, y, largura, altura, larguraSprite, alturaSprite);

        this.imgDead = loadImage("imagens/inimigos/dead.png");
        this.matrizPadrao = matriz;

        this.matrizMorto = [
            [enemySpriteX*12, 0],
            [enemySpriteX*12, 0],
            [enemySpriteX*12, 0],
            [enemySpriteX*11, 0],
            [enemySpriteX*11, 0],
            [enemySpriteX*11, 0],
            [enemySpriteX*10, 0],
            [enemySpriteX*10, 0],
            [enemySpriteX*10, 0],
            [enemySpriteX*9, 0],
            [enemySpriteX*9, 0],
            [enemySpriteX*9, 0],
            [enemySpriteX*8, 0],
            [enemySpriteX*8, 0],
            [enemySpriteX*8, 0],
            [enemySpriteX*7, 0],
            [enemySpriteX*7, 0],
            [enemySpriteX*7, 0],
            [enemySpriteX*6, 0],
            [enemySpriteX*6, 0],
            [enemySpriteX*6, 0],
            [enemySpriteX*5, 0],
            [enemySpriteX*5, 0],
            [enemySpriteX*5, 0],
            [enemySpriteX*4, 0],
            [enemySpriteX*4, 0],
            [enemySpriteX*4, 0],
            [enemySpriteX*3, 0],
            [enemySpriteX*3, 0],
            [enemySpriteX*3, 0],
            [enemySpriteX*2, 0],
            [enemySpriteX*2, 0],
            [enemySpriteX*2, 0],
            [enemySpriteX*1, 0],
            [enemySpriteX*1, 0],
            [enemySpriteX*1, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0]
        ];

    }

    move() {
        this.x = this.x - 5;

        function getRandomArbitrary(min, max) {
            return Math.random() * (max - min) + min;
        }
        if(this.x < -this.largura){
            this.x = width + getRandomArbitrary(50, 150);
            this.imagem = loadImage("imagens/inimigos/bones.png");
            this.matriz = this.matrizPadrao;
            this.posicaoMatriz = 0;
        }
    }

    

    foiAtacado() {
        this.matriz = this.matrizMorto;
        this.imagem = this.imgDead;
        return null;
    }
}