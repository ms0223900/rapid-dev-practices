export class Tennis {
    private firstPlayerScoreTimes = 0;
    private scoreLookUp = {
        0: 'love',
        1: 'fifteen',
        2: 'thirty',
        3: 'forty',
    };
    private secondPlayerScoreTimes = 0;

    getScore() {
        if (this.firstPlayerScoreTimes === this.secondPlayerScoreTimes) {
            return `${this.scoreLookUp[this.firstPlayerScoreTimes]} all`;
        }
        return `${(this.scoreLookUp)[this.firstPlayerScoreTimes]} ${(this.scoreLookUp)[this.secondPlayerScoreTimes]}`;
    }

    firstPlayerScore() {
        this.firstPlayerScoreTimes++
    }

    secondPlayerScore() {
        this.secondPlayerScoreTimes++
    }
}
