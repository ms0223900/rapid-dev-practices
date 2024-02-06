class Tennis {
    private _firstPlayerScore = 0;
    private scoreLookUp = {
        0: 'love',
        1: 'fifteen',
        2: 'thirty',
        3: 'forty',
    };
    private _secondPlayerScore = 0;

    getScore() {
        if (this._firstPlayerScore !== this._secondPlayerScore) {
            if (this._firstPlayerScore === 1 || this._firstPlayerScore === 2 || this._firstPlayerScore === 3) {
                return `${this.scoreLookUp[this._firstPlayerScore]} love`;
            }
            if (this._secondPlayerScore === 1 || this._secondPlayerScore === 2 || this._secondPlayerScore === 3) {
                return `love ${this.scoreLookUp[this._secondPlayerScore]}`;
            }
        }
        return `${this.scoreLookUp[this._firstPlayerScore]} all`;
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
        tennis = new Tennis()
    });
    it('should be love all', () => {
        expect(tennis.getScore()).toEqual('love all')
    });

    it('should be fifteen all', () => {
        firstPlayerTimes(1)
        secondPlayerScoreTimes(1)
        expect(tennis.getScore()).toEqual('fifteen all')
    });


    it('should be fifteen love', () => {
        tennis.firstPlayerScore()
        expect(tennis.getScore()).toEqual('fifteen love')
    });

    it('should be thirty love', () => {
        firstPlayerTimes(2)
        expect(tennis.getScore()).toEqual('thirty love')
    });


    function firstPlayerTimes(times: number) {
        for (let i = 0; i < times; i++) {
            tennis.firstPlayerScore()
        }
    }

    it('should be forty love', () => {
        firstPlayerTimes(3);
        expect(tennis.getScore()).toEqual('forty love')
    });


    it('should be love fifteen', () => {
        firstPlayerTimes(0);
        tennis.secondPlayerScore()
        expect(tennis.getScore()).toEqual('love fifteen')
    });


    function secondPlayerScoreTimes(times: number) {
        for (let i = 0; i < times; i++) {
            tennis.secondPlayerScore()
        }
    }

    it('should be love thirty', () => {
        firstPlayerTimes(0);
        secondPlayerScoreTimes(2);
        expect(tennis.getScore()).toEqual('love thirty')
    });


});
