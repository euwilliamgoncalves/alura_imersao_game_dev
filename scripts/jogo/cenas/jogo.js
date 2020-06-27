class Jogo {
    constructor() {
        this.inimigoAtual = 0;
        this.inimigoMapa = [];
        this.arrayInimigos = [];
    }

    setup() {
        cenario = new Cenario(fundo, 6);    // Criando cena sob a classe Cenário (cenario.js)

        /* CRIANDO PERSONAGEM - propriedades atribuídas dentro de objeto */
        const playerObj = {
            matriz: [0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7],
            matrizAlt: '',
            x: -20,
            y: 290,
            largura: 256,
            altura: 256,
            larguraSprite: 128,
            alturaSprite: 128
        }
        this.player = new Personagem(playerSpriteSh, playerSpriteShAlt, playerHurtSound, playerObj);

        /* CRIANDO INIMIGOS - propriedades atribuídas dentro de objetos */
        const bonesObj = {
            matriz: [12,11,10,9,8,7,6,5,4,3,2,1],
            matrizAlt: [12,12,12,11,11,11,10,10,10,9,9,9,8,8,8,7,7,7,6,6,6,5,5,5,4,4,4,3,3,3,2,2,2,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0],
            x: width-60,
            y: 362,
            largura: 55,
            altura: 83,
            larguraSprite: 22,
            alturaSprite: 33
        }
        const ghostObj = {
            matriz: [6,6,6,5,5,5,4,4,4,3,3,3,2,2,2,1,1,1,0,0,0],
            matrizAlt: [6,6,6,5,5,5,4,4,4,3,3,3,2,2,2,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            x: width+20,
            y: 250,
            largura: 96,
            altura: 120,
            larguraSprite: 64,
            alturaSprite: 80
        }
        this.bones = new Inimigo(bonesSpriteSh, bonesSpriteShAlt, bonesSound, bonesObj);    // Criando novo inimigo sob a classe "Inimigo (inimigo.js)"
        this.ghost = new Inimigo(ghostSpriteSh, ghostSpriteShAlt, ghostSound, ghostObj);    // Criando novo inimigo sob a classe "Inimigo (inimigo.js)"
        this.arrayInimigos.push(this.bones, this.ghost);                                    // Criando array com todos os inimigos

        /* OUTRAS CONFIGURAÇÕES DO JOGO */
        this.pontuacao = new Pontuacao();   // pontuacao.js => controla as pontuações e as perdas e ganhos de vidas
        somDoJogo.loop();
    }

    draw() {
        /* Exibindo e animando cena */
        cenario.exibe();
        cenario.move();

        /* Exibindo e animando personagem */
        this.player.exibe();
        this.player.aplicaGravidade();

        /* Exibindo pontuação e pontos de energia */
        this.pontuacao.exibePts();
        this.pontuacao.exibeVida();

        /* Exibição dinâmica de inimigos */
        this.inimigoMapa = [0,0,1,0,0,0,1];                                         // Padrão de exibição dos inimigos
        const inimigo = this.arrayInimigos[this.inimigoMapa[this.inimigoAtual]];    // Inimigo a ser exibido dentro da 'arrayInimigos', seguindo o 
                                                                                    // padrão da 'inimigoMapa' que é percorrida pela 'inimigoAtual'
        const inimigoPassou = inimigo.x < -inimigo.largura;                         // Verifica se o inimigo saiu da tela

        /* Exibe o inimigo */
        inimigo.exibe();
        inimigo.move();
        if (inimigoPassou) {                                    // Se o inimigo saiu da tela...
            this.inimigoAtual++;                                // 'inimigoAtual' (como index de 'inimigoMapa') é incrementada e exibe o próximo inimigo do mapa
            if (this.inimigoAtual >= this.inimigoMapa.length) { // se o mapa terminar
                this.inimigoAtual = 0;                          // 'inimigoAtual' volta ao início do mapa
            }
            inimigo.x = width + parseInt(random(200, 350));     // distância randômica no retorno do próximo inimigo
            inimigo.velocidade = parseInt(random(7, 15));       // velocidade randômica no retorno do próximo inimigo
        }

        this.player.estaColidindo(inimigo);                     // verifica se há colisão entre o personagem e o inimigo (escopo em personagem.js)
        if (this.pontuacao.vidas < 1) {                         // se a energia for menor que 1... (escopo em pontuacao.js)
            noLoop;                                             // o jogo é interrompido
            alert('Game Over');                                 // exibida uma mensagem popup
            location.reload();                                  // clicando em 'Ok' a tela é reiniciada
        }
    }

    keyPressed(key) {
        if (key === 'ArrowUp' && somaPulos < 2) {               // se 'Seta pra Cima' for pressionada e o player tiver menos de 2 pulos somados...
            this.player.pula();                                 // ...ele pula (escopo em personagem.js)
            playerJumpSound.play()                              // executa som de pulo
            somaPulos += 1;                                     // soma a quantidade de pulos
        }
    }
}