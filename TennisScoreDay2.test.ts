class Tennis {
    scoreLookUp = {
        0: 'love',
        1: 'fifteen',
        2: 'thirty',
        3: 'forty'
    }
    private _firstPlayerScore = 0;
    private _secondPlayerScore = 0;

    score() {
        if (this._firstPlayerScore <= 3) {
            if (this._secondPlayerScore <= 3) {
                return `${this.scoreLookUp[this._firstPlayerScore]} ${this.scoreLookUp[this._secondPlayerScore]}`
            }
        }

    }

    firstPlayerScore(score: number) {
        this._firstPlayerScore = score

    }

    secondPlayerScore(score: number) {

        this._secondPlayerScore = score
    }
}

describe('Tennis score', function () {
    it('should be love fifteen', () => {
        const tennis = new Tennis();
        tennis.firstPlayerScore(0)
        tennis.secondPlayerScore(1)
        expect(
            tennis.score()
        ).toEqual('love fifteen')

    });
    it('should be love thirty', () => {
        const tennis = new Tennis();
        tennis.firstPlayerScore(0)
        tennis.secondPlayerScore(2)
        expect(
            tennis.score()
        ).toEqual('love thirty')

    });

    it('should be fifteen thirty', () => {
        const tennis = new Tennis();
        tennis.firstPlayerScore(1)
        tennis.secondPlayerScore(2)
        expect(
            tennis.score()
        ).toEqual('fifteen thirty')
    });

    it('should be fifteen forty', () => {
        const tennis = new Tennis();
        tennis.firstPlayerScore(1)
        tennis.secondPlayerScore(3)
        expect(
            tennis.score()
        ).toEqual('fifteen forty')
    });

    it('should be love forty', () => {
        const tennis = new Tennis();
        tennis.firstPlayerScore(0)
        tennis.secondPlayerScore(3)
        expect(
            tennis.score()
        ).toEqual('love forty')
    });

});
