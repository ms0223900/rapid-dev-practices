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
        if (this.isScoreDiff()) {
            if (this.isCheckPoint()) {
                return this.isAdv() ? `${this.getAdvPlayer()} adv` : `${this.getAdvPlayer()} win`;
            }
            return `${this.scoreLookUp[this._firstPlayerScore]} ${this.scoreLookUp[this._secondPlayerScore]}`;
        }
        if (this._firstPlayerScore > 2) {
            return 'deuce';
        }
        return `${this.scoreLookUp[this._firstPlayerScore]} all`;
    }

    firstPlayerScore() {
        this._firstPlayerScore++
    }

    secondPlayerScore() {
        this._secondPlayerScore++
    }

    private getAdvPlayer() {
        return this._firstPlayerScore > this._secondPlayerScore ? this.firstPlayerName : this.secondPlayerName;
    }

    private isAdv() {
        return Math.abs(this._firstPlayerScore - this._secondPlayerScore) === 1;
    }

    private isCheckPoint() {
        return this._firstPlayerScore > 3 || this._secondPlayerScore > 3;
    }

    private isScoreDiff() {
        return this._firstPlayerScore !== this._secondPlayerScore;
    }
}

describe('Tennis Score', function () {
    let tennis: Tennis;
    beforeEach(() => {
        tennis = new Tennis('Tom', 'Joe')
    });

    it('should be love all', () => {
        expect(tennis.getScore()).toEqual('love all')
    });

    it('should be fifteen love', () => {
        tennis.firstPlayerScore()
        expect(tennis.getScore()).toEqual('fifteen love')
    });

    function givenFirstPlayer(times: number) {
        for (let i = 0; i < times; i++) {
            tennis.firstPlayerScore()
        }
    }

    it('should be thirty love', () => {
        givenFirstPlayer(2);
        expect(tennis.getScore()).toEqual('thirty love')
    });


    it('should be forty love', () => {
        givenFirstPlayer(3)
        expect(tennis.getScore()).toEqual('forty love')
    });


    it('should be love fifteen', () => {
        tennis.secondPlayerScore()
        expect(tennis.getScore()).toEqual('love fifteen')
    });


    function givenSecondPlayerScores(tims: number) {
        for (let i = 0; i < tims; i++) {
            tennis.secondPlayerScore()
        }
    }

    it('should be love thirty', () => {
        givenSecondPlayerScores(2);
        expect(tennis.getScore()).toEqual('love thirty')
    });


    it('should be love forty', () => {
        givenSecondPlayerScores(3);
        expect(tennis.getScore()).toEqual('love forty')
    });


    it('should be fifteen all', () => {
        givenFirstPlayer(1)
        givenSecondPlayerScores(1)
        expect(tennis.getScore()).toEqual('fifteen all')
    });


    it('should be thirty all', () => {
        givenFirstPlayer(2)
        givenSecondPlayerScores(2)
        expect(tennis.getScore()).toEqual('thirty all')
    });


    it('should be deuce', () => {
        givenFirstPlayer(3)
        givenSecondPlayerScores(3)
        expect(tennis.getScore()).toEqual('deuce')
    });


    it('should be Tom adv', () => {
        givenFirstPlayer(4)
        givenSecondPlayerScores(3)
        expect(tennis.getScore()).toEqual('Tom adv')
    });


    it('should be Tom win', () => {
        givenFirstPlayer(5)
        givenSecondPlayerScores(3)
        expect(tennis.getScore()).toEqual('Tom win')
    });


    it('should be Joe adv', () => {
        givenFirstPlayer(3)
        givenSecondPlayerScores(4)
        expect(tennis.getScore()).toEqual('Joe adv')
    });


    it('should be Joe win', () => {
        givenFirstPlayer(3)
        givenSecondPlayerScores(5)
        expect(tennis.getScore()).toEqual('Joe win')
    });


});
