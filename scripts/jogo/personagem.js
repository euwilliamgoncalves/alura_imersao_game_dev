class Personagem {
  
  constructor(imagem) {
     this.imagem = imagem;
     this.matriz = [
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
     ]
    this.posicaoMatriz = 0;
  }
  
  exibe(){
     image(this.imagem, -20, 290, 256, 256, this.matriz[this.posicaoMatriz][0], this.matriz[this.posicaoMatriz][1], 128, 128);
    this.anima();
  }
  
  anima() {
     this.posicaoMatriz++
     if(this.posicaoMatriz >= this.matriz.length - 1) {
       this.posicaoMatriz = 0;
     }
  }
  
}