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
        if (this.isSameScore()) {
            if (this._firstPlayerScore >= 3) {
                return 'deuce';
            }
            return `${this.scoreLookUp[this._firstPlayerScore]} all`;
        }
        if (this.isUnderOrEqual3()) {
            return `${this.scoreLookUp[this._firstPlayerScore]} ${this.scoreLookUp[this._secondPlayerScore]}`
        }

    }

    firstPlayerScore() {
        this._firstPlayerScore++;
    }

    secondPlayerScore() {
        this._secondPlayerScore++
    }

    private isSameScore() {
        return this._firstPlayerScore === this._secondPlayerScore;
    }

    private isUnderOrEqual3() {
        return this._firstPlayerScore === 1 || this._firstPlayerScore === 2 || this._firstPlayerScore === 3;
    }
}


describe('Tennis', function () {
    let tennis: Tennis;
    beforeEach(() => {
        tennis = new Tennis();

    });

    it('should be love all', () => {
        expect(tennis.getScore()).toEqual('love all')
    });

    it('should be thirty all', () => {
        addFirstPlayerScore(2);
        addSecondPlayerScore(2)
        expect(tennis.getScore()).toEqual('thirty all')
    });

    it('should be fifteen love', () => {
        addFirstPlayerScore(1)
        expect(tennis.getScore()).toEqual('fifteen love')
    });

    function addFirstPlayerScore(times: number) {
        for (let i = 0; i < times; i++) {
            tennis.firstPlayerScore()
        }

    }

    it('should be thirty love', () => {
        addFirstPlayerScore(2);
        expect(tennis.getScore()).toEqual('thirty love')
    });

    it('should be thirty fifteen', () => {
        addFirstPlayerScore(2);
        addSecondPlayerScore(1)
        expect(tennis.getScore()).toEqual('thirty fifteen')
    });


    it('should be forty love', () => {
        addFirstPlayerScore(3);
        expect(tennis.getScore()).toEqual('forty love')
    });

    it('should be forty fifteen', () => {
        addFirstPlayerScore(3);
        addSecondPlayerScore(1);
        expect(tennis.getScore()).toEqual('forty fifteen')
    });

    function addSecondPlayerScore(times: number) {
        for (let i = 0; i < times; i++) {
            tennis.secondPlayerScore()
        }
    }

    it('should be forty thirty', () => {
        addFirstPlayerScore(3);
        addSecondPlayerScore(2);
        expect(tennis.getScore()).toEqual('forty thirty')
    });


    it('should be forty all', () => {
        addFirstPlayerScore(3);
        addSecondPlayerScore(3);
        expect(tennis.getScore()).toEqual('forty all')
    });


    it('should be deuce', () => {
        addFirstPlayerScore(4);
        addSecondPlayerScore(4);
        expect(tennis.getScore()).toEqual('deuce')
    });


});
