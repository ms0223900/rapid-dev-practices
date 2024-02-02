class TicTacToe {
    private _pos: string[][]
    private _firstPlayer: string;
    private _secondPlayer: string;

    constructor(firstPlayer: string, secondPlayer: string) {
        this.initTicTacToe();
        this._firstPlayer = firstPlayer;
        this._secondPlayer = secondPlayer;
    }

    firstPlayer(pos: number[]) {
        return this._pos[pos[0]][pos[1]] = this._firstPlayer
    }

    secondPlayer(pos: number[]) {
        if (this._pos[pos[0]][pos[1]]) {
            throw new Error('Not Same !')
        }
        return this._pos[pos[0]][pos[1]] = this._secondPlayer
    }

    getResult() {
        if (this._pos[0][0] === this._pos[0][1] &&
            this._pos[0][1] === this._pos[0][2] || this._pos[0][0] === this._pos[1][0] &&
            this._pos[1][0] === this._pos[2][0]) {
            return `${this._pos[0][0]} win`;
        }
        return null;
    }

    getPos() {
        return this._pos;

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


    it('should firstPlayer win', () => {
        const ticTacToe = new TicTacToe(firstPlayer, secondPlayer);
        ticTacToe.firstPlayer([0, 0])
        ticTacToe.secondPlayer([0, 1])
        ticTacToe.firstPlayer([1, 0])
        ticTacToe.secondPlayer([0, 2])
        ticTacToe.firstPlayer([2, 0])

        expect(ticTacToe.getResult()).toEqual(`${firstPlayer} win`)
    });

    it('should firstPlayer win', () => {
        const ticTacToe = new TicTacToe(firstPlayer, secondPlayer);
        ticTacToe.firstPlayer([0, 0])
        ticTacToe.secondPlayer([0, 1])
        ticTacToe.firstPlayer([1, 1])
        ticTacToe.secondPlayer([0, 2])
        ticTacToe.firstPlayer([2, 0])

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
