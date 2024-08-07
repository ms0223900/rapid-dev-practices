import { MORA, mora, MoraResult } from "./mora";

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
