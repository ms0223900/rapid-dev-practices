const scoreLookup = {
    0: 'love',
    1: 'fifteen',
    2: 'thirty',
    3: 'forty'
}
class Tennis {
    private _firstPlayerScore = 0;

    getScore() {
        if (this._firstPlayerScore === 1 || this._firstPlayerScore === 2 || this._firstPlayerScore === 3) {
            return `love ${scoreLookup[this._firstPlayerScore]}`
        }
    }

    firstPlayerScore(score: number) {
        this._firstPlayerScore = score
    }
}

describe('Tennis Score', function () {
    it('should be love fifteen', () => {
        const tennis = new Tennis();
       tennis.firstPlayerScore(1)
        expect(tennis.getScore()).toEqual('love fifteen')
    });

    it('should be love thirty', () => {
        const tennis = new Tennis();
        tennis.firstPlayerScore(2)
        expect(tennis.getScore()).toEqual('love thirty')
    });


    it('should be love forty', () => {
        const tennis = new Tennis();
        tennis.firstPlayerScore(3)
        expect(tennis.getScore()).toEqual('love forty')
    });

});