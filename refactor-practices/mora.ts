export enum MoraResult {
    WIN,
    LOSE,
    DRAW,
}

export enum MORA {
    paper,
    stone,
    scissor,
    lizard,
}

function checkWin(mora1: MORA, mora2: MORA) {
    const moraWinGraph = {
        [MORA.scissor]: MORA.paper,
        [MORA.paper]: MORA.stone,
        [MORA.stone]: MORA.scissor,
    };
    return moraWinGraph[mora1] === mora2;
}

function checkDraw(mora1: MORA, mora2: MORA) {
    return mora1 === mora2;
}

export function mora(mora1: MORA, mora2: MORA) {
    if (checkWin(mora1, mora2)) {
        return MoraResult.WIN;
    }
    if (checkDraw(mora1, mora2)) {
        return MoraResult.DRAW;
    }
    return MoraResult.LOSE;
}
