class Tennis {
    private _firstPlayerScore = 0;
    private scoreLookUp = {
        0: 'love',
        1: 'fifteen',
        2: 'thirty',
        3: 'forty',
    };
    private _secondPlayerScore = 0;
    private firstPlayerName: string;
    private secondPlayerName: string;


    constructor(firstPlayerName: string, secondPlayerName: string) {
        this.firstPlayerName = firstPlayerName;
        this.secondPlayerName = secondPlayerName;
    }

    getScore() {
        if (this.isSameScore()) {
            return this._firstPlayerScore >= 3 ? 'deuce' : `${this.scoreLookUp[this._secondPlayerScore]} all`;
        }

        if (this.isMoreThan3()) {
            const advPlayer = this._firstPlayerScore > this._secondPlayerScore ? this.firstPlayerName : this.secondPlayerName

            return this.isWin() ? `${advPlayer} win` : `${advPlayer} adv`;
        }

        return `${this.scoreLookUp[this._firstPlayerScore]} ${this.scoreLookUp[this._secondPlayerScore]}`;
    }

    firstPlayerScore() {
        this._firstPlayerScore++
    }

    secondPlayerScore() {
        this._secondPlayerScore++
    }

    private isSameScore() {
        return this._firstPlayerScore === this._secondPlayerScore;
    }

    private isMoreThan3() {
        return this._firstPlayerScore >= 3 && this._secondPlayerScore >= 3;
    }

    private isWin() {
        return Math.abs(this._firstPlayerScore - this._secondPlayerScore) == 2;
    }

    private underOrEqual3() {
        return this._firstPlayerScore === 0 || this._firstPlayerScore === 1 || this._firstPlayerScore === 2 || this._firstPlayerScore === 3;
    }
}

describe('Tennis Score', function () {
    let tennis: Tennis
    beforeEach(() => {

        tennis = new Tennis('Tom', 'Pen');
    });
    it('should be love all', () => {
        expect(tennis.getScore()).toEqual('love all')
    });

    it('should be fifteen love', () => {
        tennis.firstPlayerScore()
        expect(tennis.getScore()).toEqual('fifteen love')
    });

    it('should be love fifteen', () => {
        tennis.secondPlayerScore()
        expect(tennis.getScore()).toEqual('love fifteen')
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

    it('should be thirty all', () => {
        firstPlayerScoreTimes(2);
        secondPlayerScoreTimes(2);
        expect(tennis.getScore()).toEqual('thirty all')
    });

    it('should be deuce', () => {
        firstPlayerScoreTimes(3);
        secondPlayerScoreTimes(3);
        expect(tennis.getScore()).toEqual('deuce')
    });


    it('should Tom adv', () => {
        firstPlayerScoreTimes(4);
        secondPlayerScoreTimes(3);
        expect(tennis.getScore()).toEqual('Tom adv')
    });


    it('should Pen adv', () => {
        firstPlayerScoreTimes(3);
        secondPlayerScoreTimes(4);
        expect(tennis.getScore()).toEqual('Pen adv')
    });


    it('should Tom win', () => {
        firstPlayerScoreTimes(5);
        secondPlayerScoreTimes(3);
        expect(tennis.getScore()).toEqual('Tom win')
    });


});
