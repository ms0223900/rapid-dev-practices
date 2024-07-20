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

function mora(mora1: MORA, mora2: MORA) {
    if (mora1 === mora2) {
        return MoraResult.DRAW;
    }
    if (mora1 === MORA.paper && mora2 === MORA.stone) {
        return MoraResult.WIN;
    }
    if (mora1 === MORA.stone && mora2 === MORA.scissor) {
        return MoraResult.WIN;
    }
    if (mora1 === MORA.stone && mora2 === MORA.paper) {
        return MoraResult.LOSE;
    }
}

describe('Custom Paper Scissor Stone', function () {
    it('should paper win stone', () => {
        expect(mora(MORA.paper, MORA.stone)).toEqual(MoraResult.WIN)
    });

    it('should stone win scissor', () => {
        expect(mora(MORA.stone, MORA.scissor)).toEqual(MoraResult.WIN)
    });

    it('should stone lose paper', () => {
        expect(mora(MORA.stone, MORA.paper,)).toEqual(MoraResult.LOSE)
    });

    it('should stone draw stone', () => {
        expect(mora(MORA.stone, MORA.stone,)).toEqual(MoraResult.DRAW)
    });

    it('should paper draw paper', () => {
        expect(mora(MORA.paper, MORA.paper,)).toEqual(MoraResult.DRAW)
    });


});
