class Tennis {
    scoreLookUp = {
        0: 'love',
        1: 'fifteen',
        2: 'thirty',
        3: 'forty',
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
            if (this._firstPlayerScore > 2) {
                return 'deuce';
            }
            return `${this.scoreLookUp[this._firstPlayerScore]} all`;
        }
        if (this.isAfterDeuce()) {
            if (this._firstPlayerScore > this._secondPlayerScore) {
                if (this._firstPlayerScore - this._secondPlayerScore === 2) {
                    return `${this._firstPlayerName} win`;
                }
                return `${this._firstPlayerName} adv`;
            }
            if (this._secondPlayerScore > this._firstPlayerScore) {
                if (Math.abs(this._firstPlayerScore - this._secondPlayerScore) === 2) {
                    return `${this._secondPlayerName} win`;
                }
                return `${this._secondPlayerName} adv`;
            }
        }
        if (this._firstPlayerScore > 3) {
            return `${this._firstPlayerName} win`;
        }
        if (this._secondPlayerScore > 3) {
            return `${this._secondPlayerName} win`;
        }
        return `${this.scoreLookUp[this._firstPlayerScore]} ${this.scoreLookUp[this._secondPlayerScore]}`;
    }

    firstPlayerScore() {
        this._firstPlayerScore++
    }

    secondPlayerTime() {
        this._secondPlayerScore++
    }

    private isAfterDeuce() {
        return this._firstPlayerScore >= 3 && this._secondPlayerScore >= 3;
    }

    private isSameScore() {
        return this._firstPlayerScore === this._secondPlayerScore;
    }

    private under3() {
        return this._firstPlayerScore < 3 || this._secondPlayerScore < 3;
    }
}

describe('Tennis Score', function () {
    let tennis: Tennis;
    beforeEach(() => {
        tennis = new Tennis('Tom', 'Pen')
    });

    it('love all', () => {
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

    function secondPlayerTimes(times: number) {
        for (let i = 0; i < times; i++) {
            tennis.secondPlayerTime()
        }
    }

    it('should be thirty all', () => {
        firstPlayerTimes(2);
        secondPlayerTimes(2);
        expect(tennis.getScore()).toEqual('thirty all')
    });


    it('should be love fifteen', () => {
        tennis.secondPlayerTime()
        expect(tennis.getScore()).toEqual('love fifteen')
    });


    it('should be fifteen thirty', () => {
        firstPlayerTimes(1);
        secondPlayerTimes(2)
        expect(tennis.getScore()).toEqual('fifteen thirty')
    });


    it('should be fifteen thirty', () => {
        firstPlayerTimes(1);
        secondPlayerTimes(2)
        expect(tennis.getScore()).toEqual('fifteen thirty')
    });

    it('should be deuce', () => {
        firstPlayerTimes(3);
        secondPlayerTimes(3)
        expect(tennis.getScore()).toEqual('deuce')
    });


    it('should be Tom adv', () => {
        firstPlayerTimes(4);
        secondPlayerTimes(3)
        expect(tennis.getScore()).toEqual('Tom adv')
    });

    it('should be Tom win', () => {
        firstPlayerTimes(5);
        secondPlayerTimes(3)
        expect(tennis.getScore()).toEqual('Tom win')
    });


    it('should be Tom win (normal condition)', () => {
        firstPlayerTimes(4);
        secondPlayerTimes(0)
        expect(tennis.getScore()).toEqual('Tom win')
    });


    it('should be Pen adv', () => {
        firstPlayerTimes(3);
        secondPlayerTimes(4)
        expect(tennis.getScore()).toEqual('Pen adv')
    });

    it('should be Pen win', () => {
        firstPlayerTimes(3);
        secondPlayerTimes(5)
        expect(tennis.getScore()).toEqual('Pen win')
    });

    it('should be Pen win (normal condition)', () => {
        firstPlayerTimes(0);
        secondPlayerTimes(4)
        expect(tennis.getScore()).toEqual('Pen win')
    });


});
