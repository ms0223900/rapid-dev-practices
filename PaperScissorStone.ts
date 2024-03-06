export class PaperScissorStone {
    private _firstPlayer: string;
    private _secondPlayer: string;

    private firstPlayerName = 'Tom';
    private secondPlayerName = 'Joy';

    private draw = 'draw';
    private stone = 'stone';
    private scissor = 'scissor';
    private paper = 'paper';

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
        if (this.isStone(this._secondPlayer) && this.isScissor(this._firstPlayer) || this.isPaper(this._secondPlayer) && this.isStone(this._firstPlayer) || this.isScissor(this._secondPlayer) && this.isPaper(this._firstPlayer)) {
            return `${(this.secondPlayerName)} win`;
        }
        return `${(this.firstPlayerName)} win`;
    }

    private isPaper(player: string) {
        return player === this.paper;
    }

    private isScissor(player: string) {
        return player === this.scissor;
    }

    private isStone(player: string) {
        return player === this.stone;
    }

    private isDraw() {
        return this._firstPlayer === this._secondPlayer;
    }
}
