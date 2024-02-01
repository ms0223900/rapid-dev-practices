class TicTacToe {
    private _pos: string[][]
    private _firstPlayer: string;
    private _secondPlayer: string;

    constructor(firstPlayer: string, secondPlayer: string) {
        this._pos = Array(3).fill(0).map(arr => ['', '', ''])
        this._firstPlayer = firstPlayer;
        this._secondPlayer = secondPlayer;
    }

    firstPlayer(pos: number[]) {
        return this._pos[pos[0]][pos[1]] = this._firstPlayer
    }

    secondPlayer(pos: number[]) {

        return this._pos[pos[0]][pos[1]] = this._secondPlayer
    }

    getResult() {
        return null;

    }

    getPos() {
        return this._pos;

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

    // TODO
    it('should not player be same pos', () => {
        const ticTacToe = new TicTacToe(firstPlayer, secondPlayer);
        ticTacToe.firstPlayer([0, 0])
        ticTacToe.secondPlayer([0, 0])
        expect(ticTacToe.getResult()).toBeNull()
    });


});
