export class PaperScissorStone {
    private _firstPlayer: string;
    private _secondPlayer: string;

    private firstPlayerName = 'Tom';
    private secondPlayerName = 'Joy';
    
    private draw = 'draw';

    firstPlayer(hand: string) {
        this._firstPlayer = hand
    }

    secondPlayer(hand: string) {
        this._secondPlayer = hand
    }

    getResult() {
        if (this.isDraw()) {
            return this.draw;
        }
        if (this._secondPlayer === 'stone' && this._firstPlayer === 'scissor' || this._secondPlayer === 'paper' && this._firstPlayer === 'stone' || this._secondPlayer === 'scissor' && this._firstPlayer === 'paper') {
            return `${(this.secondPlayerName)} win`;
        }
        return `${(this.firstPlayerName)} win`;
    }

    private isDraw() {
        return this._firstPlayer === this._secondPlayer;
    }
}
