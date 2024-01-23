class Tennis {
    scoreMap = {
        1: 'fifteen',
        2: 'thirty',
        3: 'forty',
    }
    firstPlayerScore = 0
    secondPlayerScore = 0

    getScore(score: number) {
        if (score === 1 || score === 2 || score === 3) {
            return `${this.scoreMap[this.firstPlayerScore]} ${this.scoreMap[this.secondPlayerScore]}`
        }
    }

    setFirstPlayerScore(score: number) {

        this.firstPlayerScore = score
    }

    setSecondPlayerScore(score: number) {
        this.secondPlayerScore = score
    }
}

describe('Tennis Score', function () {
    it('should be love fifteen', function () {
        const tennis = new Tennis();
        tennis.setFirstPlayerScore(0)
        tennis.setSecondPlayerScore(1)
        expect(tennis.getScore(1)).toEqual('love fifteen')
    });

    it('should be love thirty', function () {
        const tennis = new Tennis();
        tennis.setFirstPlayerScore(0)
        tennis.setSecondPlayerScore(2)
        expect(tennis.getScore(2)).toEqual('love thirty')
    });

    it('should be love forty', function () {
        const tennis = new Tennis();
        tennis.setFirstPlayerScore(0)
        tennis.setSecondPlayerScore(3)
        expect(tennis.getScore(3)).toEqual('love forty')
    });


});