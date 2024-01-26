class Tennis {
    scoreLookUp = {
        0: 'love',
        1: 'fifteen',
        2: 'thirty',
        3: 'forty',
    }
    private _firstPlayerScore = 0;
    private _secondPlayerScore = 0;

    getScore() {
        if (this._secondPlayerScore === 1 || this._secondPlayerScore === 2 || this._secondPlayerScore === 3) {
            return `${this.scoreLookUp[this._firstPlayerScore]} ${this.scoreLookUp[this._secondPlayerScore]}`
        }
    }

    firstPlayerScore(score: number) {
        this._firstPlayerScore = score
    }

    secondPlayerScore(score: number) {

        this._secondPlayerScore = score
    }
}

describe('Tennis Score', function () {
    it('should be love fifteen', () => {
        const tennis = new Tennis();
        tennis.firstPlayerScore(0)
        tennis.secondPlayerScore(1)
        expect(tennis.getScore()).toEqual('love fifteen')
    });

    it('should be love thirty', () => {
        const tennis = new Tennis();
        tennis.firstPlayerScore(0)
        tennis.secondPlayerScore(2)
        expect(tennis.getScore()).toEqual('love thirty')
    });

    it('should be fifteen forty', () => {
        const tennis = new Tennis();
        tennis.firstPlayerScore(1)
        tennis.secondPlayerScore(3)
        expect(tennis.getScore()).toEqual('fifteen forty')
    });

    it('should be fifteen thirty', () => {
        const tennis = new Tennis();
        tennis.firstPlayerScore(1)
        tennis.secondPlayerScore(2)
        expect(tennis.getScore()).toEqual('fifteen thirty')
    });

    it('should be thirty forty', () => {
        const tennis = new Tennis();
        tennis.firstPlayerScore(2)
        tennis.secondPlayerScore(3)
        expect(tennis.getScore()).toEqual('thirty forty')
    });


});