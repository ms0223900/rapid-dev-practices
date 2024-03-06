import {PaperScissorStone} from "./PaperScissorStone";

describe('Paper Scissor Stone', function () {
    it('should Tom win (scissor win paper)', () => {
        let paperScissorStone = new PaperScissorStone();
        paperScissorStone.firstPlayer('scissor')
        paperScissorStone.secondPlayer('paper')
        expect(paperScissorStone.getResult()).toEqual('Tom win')
    });


    it('should Tom win (paper win scissor)', () => {
        let paperScissorStone = new PaperScissorStone();
        paperScissorStone.firstPlayer('paper')
        paperScissorStone.secondPlayer('scissor')
        expect(paperScissorStone.getResult()).toEqual('Tom win')
    });


    it('should Tom win (stone win scissor)', () => {
        let paperScissorStone = new PaperScissorStone();
        paperScissorStone.firstPlayer('stone')
        paperScissorStone.secondPlayer('scissor')
        expect(paperScissorStone.getResult()).toEqual('Tom win')
    });


});
