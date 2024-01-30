class Tennis {
    scoreLookUp = {
        0: 'love',
        1: 'fifteen',
        2: 'thirty',
        3: 'forty'
    }
    private _firstPlayerScore = 0;
    private _secondPlayerScore = 0;

    getScore() {
        console.log(this._firstPlayerScore, this._secondPlayerScore)
        if (this._firstPlayerScore === this._secondPlayerScore) {
            if (this._firstPlayerScore === 0 || this._firstPlayerScore === 1 || this._firstPlayerScore === 2) {
                return `${this.scoreLookUp[this._firstPlayerScore]} all`
            }
        }
        if (this._firstPlayerScore === 1 || this._firstPlayerScore === 2 || this._firstPlayerScore === 3) {
            return `${this.scoreLookUp[this._firstPlayerScore]} ${this.scoreLookUp[this._secondPlayerScore]}`
        }
    }

    addFirstPlayerScore() {
        this._firstPlayerScore++
    }

    addSecondPlayerScore() {
        this._secondPlayerScore++
    }
}

describe('Tennis Score', function () {
    let tennis: Tennis;

    function firstPlayerScoreTimes(times: number) {
        for (let i = 0; i < times; i++) {
            tennis.addFirstPlayerScore()
        }
    }


    function secondPlayerScoreTimes(times: number) {
        for (let i = 0; i < times; i++) {
            tennis.addSecondPlayerScore()
        }
    }

    beforeEach(() => {
        tennis = new Tennis();
    })

    it('should be love all', () => {
        expect(tennis.getScore()).toEqual('love all')
    });
    it('should be love fifteen', () => {
        firstPlayerScoreTimes(1)
        expect(tennis.getScore()).toEqual('fifteen love')
    });

    it('should be fifteen all', () => {
        firstPlayerScoreTimes(1)
        secondPlayerScoreTimes(1)
        expect(tennis.getScore()).toEqual('fifteen all')
    });


    it('should be thirty love', () => {
        firstPlayerScoreTimes(2)
        expect(tennis.getScore()).toEqual('thirty love')
    });

    it('should be thirty fifteen', () => {
        firstPlayerScoreTimes(2)
        secondPlayerScoreTimes(1)
        expect(tennis.getScore()).toEqual('thirty fifteen')
    });


    it('should be thirty all', () => {
        firstPlayerScoreTimes(2)
        secondPlayerScoreTimes(2)
        expect(tennis.getScore()).toEqual('thirty all')
    });


    it('should be forty love', () => {
        firstPlayerScoreTimes(3)
        expect(tennis.getScore()).toEqual('forty love')
    });

});