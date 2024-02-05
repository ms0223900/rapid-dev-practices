class Tennis {
    scoreLookUp = {
        0: 'love',
        1: 'fifteen',
        2: 'thirty',
        3: 'forty',
    }
    private _firstPlayerScore = 0;
    private _secondPlayerTime = 0;

    getScore() {
        if (this._firstPlayerScore !== this._secondPlayerTime) {
            if (this._firstPlayerScore === 1 || this._firstPlayerScore === 2 || this._firstPlayerScore === 3) {
                return `${this.scoreLookUp[this._firstPlayerScore]} love`;
            }
        }
        return `${this.scoreLookUp[this._firstPlayerScore]} all`;
    }

    firstPlayerScore() {
        this._firstPlayerScore++
    }

    secondPlayerTime() {
        this._secondPlayerTime++
    }
}

describe('Tennis Score', function () {
    let tennis: Tennis;
    beforeEach(() => {
        tennis = new Tennis()
    });

    it('love all', () => {
        const tennis = new Tennis();
        expect(tennis.getScore()).toEqual('love all')
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

    it('should be fifteen all', () => {
        firstPlayerTimes(1);
        tennis.secondPlayerTime()
        expect(tennis.getScore()).toEqual('fifteen all')
    });


});
