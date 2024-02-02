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
            return `${this.scoreLookUp[this._firstPlayerScore]} all`;
        }
        return `${this.scoreLookUp[this._firstPlayerScore]} ${this.scoreLookUp[this._secondPlayerScore]}`;


    }

    firstPlayerScore() {
        this._firstPlayerScore++
    }

    secondPlayerScore() {
        this._secondPlayerScore++
    }
}

describe('Tennis Score', function () {
    let tennis;
    beforeEach(() => {
        tennis = new Tennis()
    });

    it('should be love all', () => {
        expect(tennis.getScore()).toEqual('love all')
    });


    it('should be fifteen love', () => {
        tennis.firstPlayerScore()
        expect(tennis.getScore()).toEqual('fifteen love')
    });

    function firstPlayerTimes(times: number) {
        for (let i = 0; i < times; i++) {
            tennis.firstPlayerScore()
        }
    }

    it('should be thirty love', () => {
        firstPlayerTimes(2);
        expect(tennis.getScore()).toEqual('thirty love')
    });

    it('should be forty love', () => {
        firstPlayerTimes(3);
        expect(tennis.getScore()).toEqual('forty love')
    });


    function secondPlayerTimes(times: number) {
        for (let i = 0; i < times; i++) {
            tennis.secondPlayerScore()
        }
    }

    it('should be fifteen all', () => {
        firstPlayerTimes(1);
        secondPlayerTimes(1);
        expect(tennis.getScore()).toEqual('fifteen all')
    });

    it('should be fifteen thirty', () => {
        firstPlayerTimes(1);
        secondPlayerTimes(2);
        expect(tennis.getScore()).toEqual('fifteen thirty')
    });


    it('should be fifteen thirty', () => {
        firstPlayerTimes(0);
        secondPlayerTimes(2);
        expect(tennis.getScore()).toEqual('love thirty')
    });


});
