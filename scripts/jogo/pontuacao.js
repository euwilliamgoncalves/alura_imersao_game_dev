class Pontuacao {
    constructor() {
        this.milhar = 0;
        this.vidas = playerEnergy;
        this.xInicial = 30;
    }

    exibePts() {
        textAlign(RIGHT);
        fill('#fff');
        textSize(20);
        text(score, width - 30, 50);
    }

    exibeVida() {

        for (let i = 0; i < this.vidas; i++) {
            const margem = i * 10;
            const posicao = this.xInicial * (i + 1);
            image(playerEnergyImg, posicao + margem, 30, 24, 24);
        }
    }

    somaPonto() {
        score += 100;
        this.milhar += 100;
        if (this.milhar >= 1000) {
            this.milhar = 0;
            this.ganhaVida();
        }
        console.log(this.milhar)
    }

    tiraVida() {
        this.vidas -= 1;
    }

    ganhaVida() {
        if (this.vidas < playerEnergy) {
            this.vidas += 1;
        }
    }
}