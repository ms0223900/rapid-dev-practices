import * as string_decoder from "string_decoder";

class Tennis {
    scoreLookUp = {
        0: 'love',
        1: 'fifteen',
        2: 'thirty',
        3: 'forty',
    }
    private _firstPlayerName: string;
    private _secondPlayerName: string;
    private _firstPlayerScore = 0;
    private _secondPlayerScore = 0;

    constructor(firstPlayerName: string, secondPlayerName: string) {
        this._firstPlayerName = firstPlayerName
        this._secondPlayerName = secondPlayerName
    }

    getScore() {
        if (this._firstPlayerScore > 2 && this._secondPlayerScore > 2) {
            if (this._firstPlayerScore === this._secondPlayerScore) {
                return 'deuce';
            }
            const advPlayer = this._firstPlayerScore > this._secondPlayerScore ? this._firstPlayerName : this._secondPlayerName
            if (Math.abs(this._firstPlayerScore - this._secondPlayerScore) === 2) {
                return `${advPlayer} win`;
            }

            return `${advPlayer} adv`;
        }
        if (this._firstPlayerScore !== this._secondPlayerScore) {
            if (this._firstPlayerScore > 3) {
                return `${this._firstPlayerName} win`;
            }
            return `${this.scoreLookUp[this._firstPlayerScore]} ${this.scoreLookUp[this._secondPlayerScore]}`;
        }
        return `${this.scoreLookUp[this._firstPlayerScore]} all`;

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
        tennis = new Tennis('Tom', 'Peng')
    });
    it('should be love all', () => {
        const tennis = new Tennis('Tom', "Peng");
        expect(
            tennis.getScore()
        ).toEqual('love all')


    });


    it('should be fifteen love', () => {
        firstPlayerTimes(1);
        expect(
            tennis.getScore()
        ).toEqual('fifteen love')


    });

    function firstPlayerTimes(times: number) {
        for (let i = 0; i < times; i++) {
            tennis.firstPlayerScore()
        }
    }

    function secondPlayerTimes(times: number) {
        for (let i = 0; i < times; i++) {
            tennis.secondPlayerScore()
        }
    }

    it('should be thirty love', () => {
        firstPlayerTimes(2);
        expect(
            tennis.getScore()
        ).toEqual('thirty love')


    });

    it('should be forty love', () => {
        firstPlayerTimes(3);
        expect(
            tennis.getScore()
        ).toEqual('forty love')
    });

    it('should be Tom win', () => {
        firstPlayerTimes(4);
        expect(
            tennis.getScore()
        ).toEqual('Tom win')
    });


    it('should be fifteen all', () => {
        firstPlayerTimes(1);
        secondPlayerTimes(1);

        expect(
            tennis.getScore()
        ).toEqual('fifteen all')
    });

    it('should be thirty all', () => {
        firstPlayerTimes(2);
        secondPlayerTimes(2);

        expect(
            tennis.getScore()
        ).toEqual('thirty all')
    });

    it('should be deuce', () => {
        firstPlayerTimes(3);
        secondPlayerTimes(3);

        expect(
            tennis.getScore()
        ).toEqual('deuce')
    });


    it('should be deuce', () => {
        firstPlayerTimes(3);
        secondPlayerTimes(3);

        expect(
            tennis.getScore()
        ).toEqual('deuce')
    });

    it('should be Tom adv', () => {
        firstPlayerTimes(4);
        secondPlayerTimes(3);

        expect(
            tennis.getScore()
        ).toEqual('Tom adv')
    });


    it('should be Peng adv', () => {
        firstPlayerTimes(3);
        secondPlayerTimes(4);

        expect(
            tennis.getScore()
        ).toEqual('Peng adv')
    });


    it('should be Peng win', () => {
        firstPlayerTimes(3);
        secondPlayerTimes(5);

        expect(
            tennis.getScore()
        ).toEqual('Peng win')
    });


});
