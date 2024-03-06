export class PaperScissorStone {
    private _firstPlayer: string;
    private _secondPlayer: string;
    private firstPlayerName = 'Tom';

    firstPlayer(hand: string) {
        this._firstPlayer = hand
    }

    secondPlayer(hand: string) {
        this._secondPlayer = hand
    }

    getResult() {
        if (this._secondPlayer === 'stone' && this._firstPlayer === 'scissor') {
            return 'Joy win';
        }
        if (this._secondPlayer === 'paper' && this._firstPlayer === 'stone') {
            return 'Joy win';
        }
        return `${(this.firstPlayerName)} win`;
    }
}
