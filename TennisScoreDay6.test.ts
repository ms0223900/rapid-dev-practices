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
            if (this._firstPlayerScore === 0) {
                return 'love all'
            }
            if (this._firstPlayerScore === 1) {
                return 'fifteen all'
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

    it('should be love all', () => {
        const tennis = new Tennis();
        expect(tennis.getScore()).toEqual('love all')
    });
    beforeEach(() => {
        tennis = new Tennis()
    });

    function addFirstPlayerMultipleTimes(times = 1) {
        for (let i = 0; i < times; i++) {
            tennis.addFirstPlayerScore()
        }
    }

    it('should be fifteen love', () => {
        addFirstPlayerMultipleTimes(1);
        expect(tennis.getScore()).toEqual('fifteen love')
    });

    it('should be thirty love', () => {
        addFirstPlayerMultipleTimes(2)
        expect(tennis.getScore()).toEqual('thirty love')
    });

    it('should be forty love', () => {
        addFirstPlayerMultipleTimes(3)
        expect(tennis.getScore()).toEqual('forty love')
    });

    it('should be fifteen all', () => {
        addFirstPlayerMultipleTimes(1)
        tennis.addSecondPlayerScore()
        expect(tennis.getScore()).toEqual('fifteen all')
    });


});