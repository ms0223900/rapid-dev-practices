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
        return `${(this.firstPlayerName)} win`;
    }
}
