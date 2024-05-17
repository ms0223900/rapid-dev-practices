import { Tennis } from "./Tennis";

describe('Tennis Score', function () {
    let tennis = new Tennis();
    beforeEach(() => {
        tennis = new Tennis();
    });

    it('should be love all', () => {
        expect(tennis.getScore()).toEqual('love all')
    });

    it('should be fifteen love', () => {
        tennis.firstPlayerScore()
        expect(tennis.getScore()).toEqual('fifteen love')
    });


    function givenFirstPlayerScore(score: number) {
        for (let i = 0; i < score; i++) {
            tennis.firstPlayerScore()
        }
    }

    it('should be thirty love', () => {
        givenFirstPlayerScore(2);
        expect(tennis.getScore()).toEqual('thirty love')
    });


    it('should be forty love', () => {
        givenFirstPlayerScore(3);
        expect(tennis.getScore()).toEqual('forty love')
    });


    it('should be love fifteen', () => {
        tennis.secondPlayerScore()
        expect(tennis.getScore()).toEqual('love fifteen')
    });


    function givenSecondPlayerScore(score: number) {
        for (let i = 0; i < score; i++) {
            tennis.secondPlayerScore()
        }
    }

    it('should be love thirty', () => {
        givenSecondPlayerScore(2);
        expect(tennis.getScore()).toEqual('love thirty')
    });

    it('should be love forty', () => {
        givenSecondPlayerScore(3);
        expect(tennis.getScore()).toEqual('love forty')
    });


    it('should be fifteen all', () => {
        givenFirstPlayerScore(1)
        givenSecondPlayerScore(1)
        expect(tennis.getScore()).toEqual('fifteen all')
    });


});
