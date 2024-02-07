class Tennis {
    private _fistPlayerScore = 0;
    private scoreLookUp = {
        0: 'love',
        1: 'fifteen',
        2: 'thirty',
        3: 'forty',
    };
    private _secondPlayerScore = 0;

    private firstPlayerName: string;
    private _advPlayer: string;
    private secondPlayerName: string;

    constructor(firstPlayerName: string, secondPlayerName: string) {
        this.firstPlayerName = firstPlayerName;
        this.secondPlayerName = secondPlayerName;
    }

    getScore() {
        if (this.scoreDiff()) {
            if (this.checkPoint()) {
                return this.checkAdvPlayer() ? `${this.getAdvPlayer()} adv` : `${this.getAdvPlayer()} win`;
            }
            return this.getNormalScore();
        }
        if (this._fistPlayerScore > 2) {
            return 'deuce';
        }
        return `${this.scoreLookUp[this._fistPlayerScore]} all`;
    }

    fistPlayerScore() {
        this._fistPlayerScore++
    }

    secondPlayerScore() {
        this._secondPlayerScore++
    }

    private getNormalScore() {
        return `${(this.scoreLookUp)[this._fistPlayerScore]} ${this.scoreLookUp[this._secondPlayerScore]}`;
    }

    private getAdvPlayer() {
        this._advPlayer = this._fistPlayerScore > this._secondPlayerScore ? this.firstPlayerName : this.secondPlayerName
        return this._advPlayer;
    }

    private scoreDiff() {
        return this._fistPlayerScore !== this._secondPlayerScore;
    }

    private checkAdvPlayer() {
        return Math.abs(this._fistPlayerScore - this._secondPlayerScore) === 1;
    }

    private checkPoint() {
        return this._fistPlayerScore > 3 || this._secondPlayerScore > 3;
    }
}

describe('Tennis Score', function () {
    let tennis: Tennis;
    beforeEach(() => {
        tennis = new Tennis('Tom', 'Peng');
    });

    it('should be love all', () => {
        expect(tennis.getScore()).toEqual('love all')
    });

    it('should be fifteen love', () => {
        tennis.fistPlayerScore()
        expect(tennis.getScore()).toEqual('fifteen love')
    });


    function givenFirstPlayerTimes(times: number) {
        for (let i = 0; i < times; i++) {
            tennis.fistPlayerScore()
        }
    }

    it('should be thirty love', () => {
        givenFirstPlayerTimes(2);
        expect(tennis.getScore()).toEqual('thirty love')
    });


    it('should be forty love', () => {
        givenFirstPlayerTimes(3);
        expect(tennis.getScore()).toEqual('forty love')
    });


    it('should be love fifteen', () => {
        tennis.secondPlayerScore()
        expect(tennis.getScore()).toEqual('love fifteen')
    });


    function givenSecondPlayerTimes(times: number) {
        for (let i = 0; i < times; i++) {
            tennis.secondPlayerScore()
        }
    }

    it('should be love thirty', () => {
        givenSecondPlayerTimes(2);
        expect(tennis.getScore()).toEqual('love thirty')
    });


    it('should be love forty', () => {
        givenSecondPlayerTimes(3);
        expect(tennis.getScore()).toEqual('love forty')
    });

    it('should be fifteen all', () => {
        givenFirstPlayerTimes(1)
        givenSecondPlayerTimes(1);
        expect(tennis.getScore()).toEqual('fifteen all')
    });


    it('should be thirty all', () => {
        givenFirstPlayerTimes(2)
        givenSecondPlayerTimes(2);
        expect(tennis.getScore()).toEqual('thirty all')
    });

    it('should be deuce', () => {
        givenFirstPlayerTimes(3)
        givenSecondPlayerTimes(3);
        expect(tennis.getScore()).toEqual('deuce')
    });


    it('should be Tom adv', () => {
        givenFirstPlayerTimes(4)
        givenSecondPlayerTimes(3);
        expect(tennis.getScore()).toEqual('Tom adv')
    });


    it('should be Tom adv', () => {
        givenFirstPlayerTimes(4)
        givenSecondPlayerTimes(3);
        expect(tennis.getScore()).toEqual('Tom adv')
    });


    it('should be Tom win', () => {
        givenFirstPlayerTimes(5)
        givenSecondPlayerTimes(3);
        expect(tennis.getScore()).toEqual('Tom win')
    });


    it('should be Peng adv', () => {
        givenFirstPlayerTimes(3)
        givenSecondPlayerTimes(4);
        expect(tennis.getScore()).toEqual('Peng adv')
    });

    it('should be Peng win', () => {
        givenFirstPlayerTimes(3)
        givenSecondPlayerTimes(5);
        expect(tennis.getScore()).toEqual('Peng win')
    });


});
