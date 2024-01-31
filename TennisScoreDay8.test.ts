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
        if (this._firstPlayerScore === this._secondPlayerScore) {
            return `${this.scoreLookUp[this._secondPlayerScore]} all`;
        }
        if (this._firstPlayerScore === 1 || this._firstPlayerScore === 2 || this._firstPlayerScore === 3) {
            return `${this.scoreLookUp[this._firstPlayerScore]} ${this.scoreLookUp[this._secondPlayerScore]}`;
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
    let tennis: Tennis
    beforeEach(() => {

        tennis = new Tennis();
    });
    it('should be love all', () => {
        expect(tennis.getScore()).toEqual('love all')
    });

    it('should be fifteen love', () => {
        tennis.firstPlayerScore()
        expect(tennis.getScore()).toEqual('fifteen love')
    });

    function firstPlayerScoreTimes(times: number) {
        for (let i = 0; i < times; i++) {
            tennis.firstPlayerScore()
        }
    }

    function secondPlayerScoreTimes(times: number) {
        for (let i = 0; i < times; i++) {
            tennis.secondPlayerScore()
        }
    }

    it('should be thirty love', () => {
        firstPlayerScoreTimes(2);
        expect(tennis.getScore()).toEqual('thirty love')
    });

    it('should be forty love', () => {
        firstPlayerScoreTimes(3);
        expect(tennis.getScore()).toEqual('forty love')
    });


    it('should be fifteen thirty', () => {
        firstPlayerScoreTimes(1);
        secondPlayerScoreTimes(2);
        expect(tennis.getScore()).toEqual('fifteen thirty')
    });

    it('should be fifteen forty', () => {
        firstPlayerScoreTimes(1);
        secondPlayerScoreTimes(3);
        expect(tennis.getScore()).toEqual('fifteen forty')
    });

    it('should be thirty forty', () => {
        firstPlayerScoreTimes(2);
        secondPlayerScoreTimes(3);
        expect(tennis.getScore()).toEqual('thirty forty')
    });

    it('should be fifteen all', () => {
        firstPlayerScoreTimes(1);
        secondPlayerScoreTimes(1);
        expect(tennis.getScore()).toEqual('fifteen all')
    });


});
