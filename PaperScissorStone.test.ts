import {PaperScissorStone} from "./PaperScissorStone";

describe('Paper Scissor Stone', function () {
    it('should scissor win paper', () => {
        let paperScissorStone = new PaperScissorStone();
        paperScissorStone.firstPlayer('scissor')
        paperScissorStone.secondPlayer('scissor')
        expect(paperScissorStone.getResult()).toEqual('Tom win')
    });


});
