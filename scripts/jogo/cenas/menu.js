class Menu {
    constructor(){
        this.botaoJogo = new Botao('Iniciar Jogo', 282, 300);
        this.botaoHistoria = new Botao('História', 115, 400);
        this.botaoInstrucoes = new Botao('Instruções', 288, 400);
        this.botaoCreditos = new Botao('Créditos', 485, 400);
        this.botaoVoltar = new Botao('Voltar', -200, -200);
        
        this.telaMenu = 'menu';

        this.botaoHistoria.botao.mousePressed(() => {
            this.telaMenu = 'historia';
            this.submenuButton();
        });
        this.botaoInstrucoes.botao.mousePressed(() => {
            this.telaMenu = 'instrucoes';
            this.submenuButton();
        });
        this.botaoCreditos.botao.mousePressed(() => {
            this.telaMenu = 'creditos';
            this.submenuButton();
        });
        this.botaoVoltar.botao.mousePressed(() => {
            this.telaMenu = 'menu';
            this.menuButton();
        });
        this.botaoJogo.botao.mousePressed(() => {
            this.telaMenu = 'menu';
            this.clearButton();
            cenaAtual = 'jogo';
        });
    }
    draw(){
        this._backgroundImg();
        this.drawButton();
    }
        
    _backgroundImg() {
        if (this.telaMenu == 'menu'){
            image(menuA, 0, 0, width, height);
        }else if (this.telaMenu == 'historia'){
            image(menuB, 0, 0, width, height);
        }else if (this.telaMenu == 'instrucoes'){
            image(menuC, 0, 0, width, height);
        }else if (this.telaMenu == 'creditos'){
            image(menuD, 0, 0, width, height);
        }
        
    }

    drawButton() {
            this.botaoJogo.draw();
            this.botaoHistoria.draw();
            this.botaoInstrucoes.draw();
            this.botaoCreditos.draw();
            this.botaoVoltar.draw();
    }
    
    clearButton() {
        this.botaoJogo.botao.remove();
        this.botaoHistoria.botao.remove();
        this.botaoInstrucoes.botao.remove();
        this.botaoCreditos.botao.remove();
        this.botaoVoltar.botao.remove();
    }

    menuButton() {
        this.botaoJogo.x = 282;
        this.botaoJogo.y = 300;
        this.botaoHistoria.x = 115;
        this.botaoHistoria.y = 400;
        this.botaoInstrucoes.x = 288;
        this.botaoInstrucoes.y = 400;
        this.botaoCreditos.x = 485;
        this.botaoCreditos.y = 400;
        this.botaoVoltar.x = -200;
        this.botaoVoltar.y = -200;
    }

    submenuButton () {
        this.botaoJogo.x = -200;
        this.botaoJogo.y = -200;
        this.botaoHistoria.x = -200;
        this.botaoHistoria.y = -200;
        this.botaoInstrucoes.x = -200;
        this.botaoInstrucoes.y = -200;
        this.botaoCreditos.x = -200;
        this.botaoCreditos.y = -200;
        this.botaoVoltar.x = 310;
        this.botaoVoltar.y = 20;
    }
}