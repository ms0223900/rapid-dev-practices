class TicTacToe {
    private _pos: string[][]
    private _firstPlayer: string;
    private _secondPlayer: string;
    private _winner: string;

    constructor(firstPlayer: string, secondPlayer: string) {
        this.initTicTacToe();
        this._firstPlayer = firstPlayer;
        this._secondPlayer = secondPlayer;
    }

    firstPlayer(pos: number[]) {
        this.checkIsWin()
        return this._pos[pos[0]][pos[1]] = this._firstPlayer
    }

    secondPlayer(pos: number[]) {
        this.checkIsWin()
        if (this._winner) {
            throw new Error('Game Over')
        }
        if (this._pos[pos[0]][pos[1]]) {
            throw new Error('Not Same !')
        }
        return this._pos[pos[0]][pos[1]] = this._secondPlayer
    }

    getResult() {
        if (this.checkIsWin()) {
            return `${this._winner} win`;
        }
        return null;
    }

    getPos() {
        return this._pos;

    }

    private checkIsWin() {
        for (let i = 0; i < 3; i++) {
            // row
            if (this.checkPosSame([this._pos[0][i], this._pos[1][i]
                , this._pos[2][i]])) {
                this._winner = this._pos[0][i]
                return true;
            }

            if (this.checkPosSame([this._pos[i][0], this._pos[i][1]
                , this._pos[i][2]])) {
                this._winner = this._pos[i][0]
                return true;
            }

        }
        if (this.checkPosSame([this._pos[0][0], this._pos[1][1], this._pos[2][2]])) {
            this._winner = this._pos[0][0]
            return true;
        }
        if (this.checkPosSame([this._pos[2][0], this._pos[1][1], this._pos[0][2]])) {
            this._winner = this._pos[2][0]
            return true;
        }
    }

    private checkPosSame(positions: string[]) {
        return positions.every(val => val === positions[0] && !!val);
    }

    private initTicTacToe() {
        this._pos = Array(3).fill(0).map(arr => ['', '', ''])
    }
}

const firstPlayer = 'Peng';

const secondPlayer = 'Tom';


describe('Tic Tac Toe', function () {
    it('should init success', () => {
        const ticTacToe = new TicTacToe(firstPlayer, secondPlayer);
        expect(ticTacToe.getPos()).toEqual([
            ['', '', ''],
            ['', '', ''],
            ['', '', ''],
        ])
    });

    it('should firsPlayer pos correct', () => {
        const ticTacToe = new TicTacToe(firstPlayer, secondPlayer);
        ticTacToe.firstPlayer([0, 0])
        expect(ticTacToe.getPos()[0][0]).toEqual(firstPlayer)
    });

    it('should secondPlayer pos correct', () => {
        const ticTacToe = new TicTacToe(firstPlayer, secondPlayer);
        ticTacToe.firstPlayer([0, 0])
        ticTacToe.secondPlayer([1, 0])

        expect(ticTacToe.getPos()[0][0]).toEqual(firstPlayer)
        expect(ticTacToe.getPos()[1][0]).toEqual(secondPlayer)
    });

    it('should firstPlayer win', () => {
        const ticTacToe = new TicTacToe(firstPlayer, secondPlayer);
        ticTacToe.firstPlayer([0, 0])
        ticTacToe.secondPlayer([1, 0])
        ticTacToe.firstPlayer([0, 1])
        ticTacToe.secondPlayer([2, 0])
        ticTacToe.firstPlayer([0, 2])

        expect(ticTacToe.getResult()).toEqual(`${firstPlayer} win`)
    });


    it('should firstPlayer win (row)', () => {
        const ticTacToe = new TicTacToe(firstPlayer, secondPlayer);
        ticTacToe.firstPlayer([0, 0])
        ticTacToe.secondPlayer([0, 1])
        ticTacToe.firstPlayer([1, 0])
        ticTacToe.secondPlayer([0, 2])
        ticTacToe.firstPlayer([2, 0])

        expect(ticTacToe.getResult()).toEqual(`${firstPlayer} win`)
    });

    it('should not continue if someone win', () => {
        const ticTacToe = new TicTacToe(firstPlayer, secondPlayer);
        ticTacToe.firstPlayer([0, 0])
        ticTacToe.secondPlayer([0, 1])
        ticTacToe.firstPlayer([1, 0])
        ticTacToe.secondPlayer([0, 2])
        ticTacToe.firstPlayer([2, 0])
        expect(() =>
            ticTacToe.secondPlayer([1, 2])
        ).toThrow('Game Over')

        expect(ticTacToe.getResult()).toEqual(`${firstPlayer} win`)
        expect(ticTacToe.getPos()[1][2]).not.toEqual(secondPlayer)
    });


    it('should firstPlayer win (column 1)', () => {
        const ticTacToe = new TicTacToe(firstPlayer, secondPlayer);
        ticTacToe.firstPlayer([0, 0])
        ticTacToe.secondPlayer([0, 1])
        ticTacToe.firstPlayer([1, 0])
        ticTacToe.secondPlayer([0, 2])
        ticTacToe.firstPlayer([2, 0])

        expect(ticTacToe.getResult()).toEqual(`${firstPlayer} win`)
    });

    it('should firstPlayer win (row 2)', () => {
        const ticTacToe = new TicTacToe(firstPlayer, secondPlayer);
        ticTacToe.firstPlayer([0, 1])
        ticTacToe.secondPlayer([0, 0])
        ticTacToe.firstPlayer([1, 1])
        ticTacToe.secondPlayer([0, 2])
        ticTacToe.firstPlayer([2, 1])

        expect(ticTacToe.getResult()).toEqual(`${firstPlayer} win`)
    });

    it('should secondPlayer win', () => {
        const ticTacToe = new TicTacToe(firstPlayer, secondPlayer);
        ticTacToe.firstPlayer([0, 1])
        ticTacToe.secondPlayer([0, 0])
        ticTacToe.firstPlayer([1, 1])
        ticTacToe.secondPlayer([1, 0])
        ticTacToe.firstPlayer([2, 2])
        ticTacToe.secondPlayer([2, 0])

        expect(ticTacToe.getResult()).toEqual(`${secondPlayer} win`)
    });


    it('should firstPlayer win (slash)', () => {
        const ticTacToe = new TicTacToe(firstPlayer, secondPlayer);
        ticTacToe.firstPlayer([0, 0])
        ticTacToe.secondPlayer([0, 1])
        ticTacToe.firstPlayer([1, 1])
        ticTacToe.secondPlayer([0, 2])
        ticTacToe.firstPlayer([2, 2])

        expect(ticTacToe.getResult()).toEqual(`${firstPlayer} win`)
    });


    it('should not player be same pos', () => {
        const ticTacToe = new TicTacToe(firstPlayer, secondPlayer);
        ticTacToe.firstPlayer([0, 0])
        expect(() =>
            ticTacToe.secondPlayer([0, 0])
        ).toThrow('Not Same !')
        expect(ticTacToe.getResult()).toBeNull()
    });


});
