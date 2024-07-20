enum MoraResult {
    WIN,
    LOSE,
    DRAW,
}

enum MORA {
    paper,
    stone,
    scissor,
}

const moraOrderMap = {
    [MORA.stone]: 0,
    [MORA.paper]: 1,
    [MORA.scissor]: 2,
};

function checkLastOrderWinCase(orderDiff: number) {
    const loopOrderDiff = moraOrderMap[MORA.stone] - moraOrderMap[MORA.scissor];
    return orderDiff === loopOrderDiff;
}

function checkWin(mora1: MORA, mora2: MORA) {
    const orderDiff = moraOrderMap[mora1] - moraOrderMap[mora2];
    if (orderDiff === 1) return true;
    if (checkLastOrderWinCase(orderDiff)) return true;

    return false;
}

function checkDraw(mora1: MORA, mora2: MORA) {
    return mora1 === mora2;
}

function mora(mora1: MORA, mora2: MORA) {
    if (checkWin(mora1, mora2)) {
        return MoraResult.WIN;
    }
    if (checkDraw(mora1, mora2)) {
        return MoraResult.DRAW;
    }
    return MoraResult.LOSE;
}

describe('Custom Paper Scissor Stone', function () {
    it('should paper win stone', () => {
        expect(mora(MORA.paper, MORA.stone)).toEqual(MoraResult.WIN)
    });

    it('should stone win scissor', () => {
        expect(mora(MORA.stone, MORA.scissor)).toEqual(MoraResult.WIN)
    });

    it('should scissor win paper', () => {
        expect(mora(MORA.scissor, MORA.paper)).toEqual(MoraResult.WIN)
    });

    it('should stone lose paper', () => {
        expect(mora(MORA.stone, MORA.paper,)).toEqual(MoraResult.LOSE)
    });

    it('should scissor lose stone', () => {
        expect(mora(MORA.scissor, MORA.stone,)).toEqual(MoraResult.LOSE)
    });

    it('should paper lose scissor', () => {
        expect(mora(MORA.paper, MORA.scissor,)).toEqual(MoraResult.LOSE)
    });

    it('should stone draw stone', () => {
        expect(mora(MORA.stone, MORA.stone,)).toEqual(MoraResult.DRAW)
    });

    it('should paper draw paper', () => {
        expect(mora(MORA.paper, MORA.paper,)).toEqual(MoraResult.DRAW)
    });

    it('should scissor draw scissor', () => {
        expect(mora(MORA.scissor, MORA.scissor,)).toEqual(MoraResult.DRAW)
    });

});
