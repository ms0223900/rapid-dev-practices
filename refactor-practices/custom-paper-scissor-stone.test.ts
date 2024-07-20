enum MoraResult {
    WIN
}

enum MORA {
    paper,
    stone,
}

function mora(mora1: MORA, mora2: MORA) {
    if (mora1 === MORA.paper && mora2 === MORA.stone) {
        return MoraResult.WIN;
    }
}

describe('Custom Paper Scissor Stone', function () {
    it('should paper win stone', () => {
        expect(mora(MORA.paper, MORA.stone)).toEqual(MoraResult.WIN)
    });
});
