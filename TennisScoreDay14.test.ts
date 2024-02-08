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
        if (this.scoreDiff()) {
            if (this.isCheckPoint()) {
                return this.isAdv() ? `${this.getAdvPlayer()} adv` : `${this.getAdvPlayer()} win`;
            }
            return this.getDiffResult();
        }
        return this.isDeuce() ? this.getDeuce() : this.getSameAll();
    }

    firstPlayerScore() {
        this._firstPlayerScore++
    }

    secondPlayerScore() {
        this._secondPlayerScore++
    }

    private getSameAll() {
        return `${this.scoreLookUp[this._firstPlayerScore]} all`;
    }

    private getDeuce() {
        return 'deuce';
    }

    private isDeuce() {
        return this._firstPlayerScore > 2;
    }

    private isAdv() {
        return Math.abs(this._firstPlayerScore - this._secondPlayerScore) === 1;
    }

    private getAdvPlayer() {
        return this._firstPlayerScore > this._secondPlayerScore ? this.firstPlayerName : this.secondPlayerName;
    }

    private isCheckPoint() {
        return this._firstPlayerScore > 3 || this._secondPlayerScore > 3;
    }

    private getDiffResult() {
        return `${this.scoreLookUp[this._firstPlayerScore]} ${this.scoreLookUp[this._secondPlayerScore]}`;
    }

    private scoreDiff() {
        return this._firstPlayerScore !== this._secondPlayerScore;
    }
}

describe('Tennis Score', function () {
    let tennis: Tennis
    beforeEach(() => {
        tennis = new Tennis('Tom', 'David');

    });
    it('should be love all', () => {
        expect(tennis.getScore()).toEqual('love all')
    });

    it('should be fifteen love', () => {
        tennis.firstPlayerScore()
        expect(tennis.getScore()).toEqual('fifteen love')
    });


    function givenFirstPlayerScores(times: number) {
        for (let i = 0; i < times; i++) {
            tennis.firstPlayerScore()
        }
    }

    it('should be thirty love', () => {
        givenFirstPlayerScores(2);
        expect(tennis.getScore()).toEqual('thirty love')
    });


    it('should be forty love', () => {
        givenFirstPlayerScores(3);
        expect(tennis.getScore()).toEqual('forty love')
    });


    it('should be love fifteen', () => {
        tennis.secondPlayerScore()
        expect(tennis.getScore()).toEqual('love fifteen')
    });

    function givenSecondPlayerScores(times: number) {
        for (let i = 0; i < times; i++) {
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
        givenFirstPlayerScores(1)
        givenSecondPlayerScores(1)
        expect(tennis.getScore()).toEqual('fifteen all')
    });


    it('should be thirty all', () => {
        givenFirstPlayerScores(2)
        givenSecondPlayerScores(2)
        expect(tennis.getScore()).toEqual('thirty all')
    });

    it('should be deuce', () => {
        givenFirstPlayerScores(3)
        givenSecondPlayerScores(3)
        expect(tennis.getScore()).toEqual('deuce')
    });


    it('should David adv', () => {
        givenFirstPlayerScores(3)
        givenSecondPlayerScores(4)
        expect(tennis.getScore()).toEqual('David adv')
    });


    it('should David win', () => {
        givenFirstPlayerScores(3)
        givenSecondPlayerScores(5)
        expect(tennis.getScore()).toEqual('David win')
    });


    it('should be Tom adv', () => {
        givenFirstPlayerScores(4)
        givenSecondPlayerScores(3)
        expect(tennis.getScore()).toEqual('Tom adv')
    });

    it('should be Tom win', () => {
        givenFirstPlayerScores(5)
        givenSecondPlayerScores(3)
        expect(tennis.getScore()).toEqual('Tom win')
    });
});
