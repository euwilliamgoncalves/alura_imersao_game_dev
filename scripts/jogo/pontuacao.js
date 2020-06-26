class Pontuacao {
    constructor() {
        this.pontos = 0;
    }
    exibePts() {
        textAlign(RIGHT);
        fill('#fff');
        textSize(20);
        text(score, width - 30, 50);
    }
    exibeVida() {
        textAlign(LEFT);
        fill('#fff');
        textSize(20);
        text('Energia: '+playerEnergy, 30, 50);
    }
    somaPonto() {
        score += 100;
    }
    tiraVida() {
        playerEnergy -= 1;
    }
}