class Tennis {
    scoreLookUp = {
        0: 'love',
        1: 'fifteen',
        2: 'thirty',
        3: 'forty'
    }
    private _firstPlayerScore = 0;
    private _secondPlayerScore = 0;

    private _firstPlayerName: string;
    private _secondPlayerName: string;


    constructor(firstPlayerName: string, secondPlayerName: string) {
        this._firstPlayerName = firstPlayerName;
        this._secondPlayerName = secondPlayerName;
    }

    getScore() {
        if (this.isSameScore()) {
            return this.under3() ? `${this.scoreLookUp[this._firstPlayerScore]} all` : 'deuce';
        }
        if (this.firstScoreUnderOrEqualTo3() && this.secondScoreUnderOrEqualTo3()) {
            return `${this.scoreLookUp[this._firstPlayerScore]} ${this.scoreLookUp[this._secondPlayerScore]}`
        }

        const advPlayer = this._firstPlayerScore > this._secondPlayerScore ? this._firstPlayerName : this._secondPlayerName;
        return this.isPlayerWin() ? `${advPlayer} win` : `${advPlayer} adv`;
    }

    addFirstPlayerScore() {
        this._firstPlayerScore++
    }

    addSecondPlayerScore() {
        this._secondPlayerScore++
    }

    private under3() {
        return this._firstPlayerScore < 3
    }

    private isPlayerWin() {
        return Math.abs(this._firstPlayerScore - this._secondPlayerScore) === 2;
    }

    private isSameScore() {
        return this._firstPlayerScore === this._secondPlayerScore;
    }

    private firstScoreUnderOrEqualTo3() {
        return this._firstPlayerScore <= 3
    }

    private secondScoreUnderOrEqualTo3() {
        return this._secondPlayerScore <= 3
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
        tennis = new Tennis('Tom', 'Joy');
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

    it('should be forty fifteen', () => {
        firstPlayerScoreTimes(3)
        secondPlayerScoreTimes(1)
        expect(tennis.getScore()).toEqual('forty fifteen')
    });

    it('should be forty thirty', () => {
        firstPlayerScoreTimes(3)
        secondPlayerScoreTimes(2)
        expect(tennis.getScore()).toEqual('forty thirty')
    });

    it('should be deuce', () => {
        firstPlayerScoreTimes(3)
        secondPlayerScoreTimes(3)
        expect(tennis.getScore()).toEqual('deuce')
    });

    it('should Tom be adv', () => {
        firstPlayerScoreTimes(4)
        secondPlayerScoreTimes(3)
        expect(tennis.getScore()).toEqual('Tom adv')
    });


    it('should Tom win', () => {
        firstPlayerScoreTimes(5)
        secondPlayerScoreTimes(3)
        expect(tennis.getScore()).toEqual('Tom win')
    });


    it('should Joy be adv', () => {
        firstPlayerScoreTimes(3)
        secondPlayerScoreTimes(4)
        expect(tennis.getScore()).toEqual('Joy adv')
    });

    it('should Joy win', () => {
        firstPlayerScoreTimes(3)
        secondPlayerScoreTimes(5)
        expect(tennis.getScore()).toEqual('Joy win')
    });


});