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
        if (this._firstPlayerScore === this._secondPlayerScore) {
            return `${this.scoreLookUp[this._firstPlayerScore]} all`
        }
        if (this._firstPlayerScore === 1 || this._firstPlayerScore === 2 || this._firstPlayerScore === 3) {
            return `${this.scoreLookUp[this._firstPlayerScore]} ${this.scoreLookUp[this._secondPlayerScore]}`
        }
    }

    firstPlayerScore() {
        this._firstPlayerScore++
    }

    secondPlayerScore() {
        this._secondPlayerScore++
    }
}

describe('Tennis Score', function () {
    let tennis: Tennis;

    beforeEach(() => {
        tennis = new Tennis();
    });

    it('should be love all', () => {
        expect(
            tennis.getScore()
        ).toEqual('love')
    });

    function addFirstPlayerScore(times: number) {
        for (let i = 0; i < times; i++) {
            tennis.firstPlayerScore()
        }
    }

    it('should be fifteen love', () => {
        addFirstPlayerScore(1);
        expect(
            tennis.getScore()
        ).toEqual('fifteen love')
    });

    function addSecondPlayerScore(times: number) {
        for (let i = 0; i < times; i++) {
            tennis.secondPlayerScore()
        }
    }

    it('should be fifteen all', () => {
        addFirstPlayerScore(1);
        addSecondPlayerScore(1);
        expect(
            tennis.getScore()
        ).toEqual('fifteen all')
    });


    it('should be thirty love', () => {
        addFirstPlayerScore(2)
        expect(
            tennis.getScore()
        ).toEqual('thirty love')
    });

    it('should be thirty fifteen', () => {
        addFirstPlayerScore(2)
        addSecondPlayerScore(1)
        expect(
            tennis.getScore()
        ).toEqual('thirty fifteen')
    });


    it('should be forty love', () => {
        addFirstPlayerScore(3)
        expect(
            tennis.getScore()
        ).toEqual('forty love')
    });


});
