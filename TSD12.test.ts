class Tennis {
    scoreLookUp = {
        0: 'love',
        1: 'fifteen',
        2: 'thirty',
        3: 'forty',
    }

    private firstPlayerScore = 0;

    getScore() {
        if (this.firstPlayerScore === 1 || this.firstPlayerScore === 2 || this.firstPlayerScore === 3) {
            return `${this.scoreLookUp[this.firstPlayerScore]} love`;
        }
        return 'love all';
    }

    addFirstPlayerScore() {
        this.firstPlayerScore++
    }
}

describe('Tennis Score', function () {
    let tennis;
    beforeEach(() => {
        tennis = new Tennis()
    });

    it('love all', () => {
        expect(tennis.getScore()).toEqual('love all')
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


});
