class Tennis {
    scoreLookUp = {
        0: 'love',
        1: 'fifteen',
        2: 'thirty',
        3: 'forty',
    }
    private firstPlayerScore = 0;
    private secondPlayerScore = 0;
    private firstPlayerName: string;
    private secondPlayerName: string;


    constructor(firstPlayerName: string, secondPlayerName: string) {
        this.firstPlayerName = firstPlayerName;
        this.secondPlayerName = secondPlayerName;
    }

    getScore() {
        if (this.scoreNotSame()) {
            if (this.afterDeuce()) {

                
                if (this.firstPlayerScore > this.secondPlayerScore) {
                    if (this.firstPlayerScore - this.secondPlayerScore === 2) {
                        return `${this.firstPlayerName} win`;
                    }
                    return `${this.firstPlayerName} adv`;
                }
                if (this.firstPlayerScore < this.secondPlayerScore) {
                    if (Math.abs(this.firstPlayerScore - this.secondPlayerScore) === 2) {
                        return `${this.secondPlayerName} win`;
                    }
                    return `${this.secondPlayerName} adv`;
                }
            }
            if (this.firstPlayerScore > 3) {
                return `${this.firstPlayerName} win`;
            }
            if (this.secondPlayerScore > 3) {
                return `${this.secondPlayerName} win`;
            }
            return `${this.scoreLookUp[this.firstPlayerScore]} ${this.scoreLookUp[this.secondPlayerScore]}`;
        }
        if (this.firstPlayerScore > 2) {
            return 'deuce';
        }
        return `${this.scoreLookUp[this.firstPlayerScore]} all`;
    }

    addFirstPlayerScore() {
        this.firstPlayerScore++
    }

    addSecondPlayerScore() {
        this.secondPlayerScore++
    }

    private afterDeuce() {
        return this.firstPlayerScore > 2 && this.secondPlayerScore > 2;
    }

    private scoreNotSame() {
        return this.firstPlayerScore !== this.secondPlayerScore;
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

    it('fifteen all', () => {
        firstPlayerScoreTimes(1)
        secondPlayerScoreTimes(1)
        expect(tennis.getScore()).toEqual('fifteen all')
    });

    it('thirty all', () => {
        firstPlayerScoreTimes(2)
        secondPlayerScoreTimes(2)
        expect(tennis.getScore()).toEqual('thirty all')
    });

    it('deuce', () => {
        firstPlayerScoreTimes(3)
        secondPlayerScoreTimes(3)
        expect(tennis.getScore()).toEqual('deuce')
    });

    it('Tom adv', () => {
        firstPlayerScoreTimes(4)
        secondPlayerScoreTimes(3)
        expect(tennis.getScore()).toEqual('Tom adv')
    });

    it('Tom win', () => {
        firstPlayerScoreTimes(5)
        secondPlayerScoreTimes(3)
        expect(tennis.getScore()).toEqual('Tom win')
    });

    it('Pen adv', () => {
        firstPlayerScoreTimes(3)
        secondPlayerScoreTimes(4)
        expect(tennis.getScore()).toEqual('Pen adv')
    });

    it('Pen win', () => {
        firstPlayerScoreTimes(3)
        secondPlayerScoreTimes(5)
        expect(tennis.getScore()).toEqual('Pen win')
    });


    it('fifteen love', () => {
        tennis.addFirstPlayerScore()
        expect(tennis.getScore()).toEqual('fifteen love')
    });

    function firstPlayerScoreTimes(times: number) {
        for (let i = 0; i < times; i++) {
            tennis.addFirstPlayerScore()
        }
    }

    it('thirty love', () => {
        firstPlayerScoreTimes(2);
        expect(tennis.getScore()).toEqual('thirty love')
    });

    it('forty love', () => {
        firstPlayerScoreTimes(3);
        expect(tennis.getScore()).toEqual('forty love')
    });


    it('love fifteen', () => {
        firstPlayerScoreTimes(0);
        tennis.addSecondPlayerScore()
        expect(tennis.getScore()).toEqual('love fifteen')
    });

    function secondPlayerScoreTimes(times: number) {
        for (let i = 0; i < times; i++) {
            tennis.addSecondPlayerScore()
        }
    }

    it('love thirty', () => {
        firstPlayerScoreTimes(0);
        secondPlayerScoreTimes(2);
        expect(tennis.getScore()).toEqual('love thirty')
    });

    it('love forty', () => {
        firstPlayerScoreTimes(0);
        secondPlayerScoreTimes(3);
        expect(tennis.getScore()).toEqual('love forty')
    });

    it('Tom win', () => {
        firstPlayerScoreTimes(4);
        expect(tennis.getScore()).toEqual('Tom win')
    });


    it('Pen win', () => {
        secondPlayerScoreTimes(4);
        expect(tennis.getScore()).toEqual('Pen win')
    });


});
