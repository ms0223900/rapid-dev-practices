import {PaperScissorStone} from "./PaperScissorStone";

describe('Paper Scissor Stone', function () {
    it('should Tom win (scissor win paper)', () => {
        let paperScissorStone = new PaperScissorStone();
        paperScissorStone.firstPlayer('scissor')
        paperScissorStone.secondPlayer('paper')
        expect(paperScissorStone.getResult()).toEqual('Tom win')
    });


    it('should Joy win (scissor win paper)', () => {
        let paperScissorStone = new PaperScissorStone();
        paperScissorStone.firstPlayer('paper')
        paperScissorStone.secondPlayer('scissor')
        expect(paperScissorStone.getResult()).toEqual('Joy win')
    });


    it('should Tom win (paper win stone)', () => {
        let paperScissorStone = new PaperScissorStone();
        paperScissorStone.firstPlayer('paper')
        paperScissorStone.secondPlayer('stone')
        expect(paperScissorStone.getResult()).toEqual('Tom win')
    });


    it('should Joy win (paper win stone)', () => {
        let paperScissorStone = new PaperScissorStone();
        paperScissorStone.firstPlayer('stone')
        paperScissorStone.secondPlayer('paper')
        expect(paperScissorStone.getResult()).toEqual('Joy win')
    });


    it('should Tom win (stone win scissor)', () => {
        let paperScissorStone = new PaperScissorStone();
        paperScissorStone.firstPlayer('stone')
        paperScissorStone.secondPlayer('scissor')
        expect(paperScissorStone.getResult()).toEqual('Tom win')
    });


    it('should Joy win (stone win scissor)', () => {
        let paperScissorStone = new PaperScissorStone();
        paperScissorStone.firstPlayer('scissor')
        paperScissorStone.secondPlayer('stone')
        expect(paperScissorStone.getResult()).toEqual('Joy win')
    });


    it('should draw (scissor and scissor)', () => {
        let paperScissorStone = new PaperScissorStone();
        paperScissorStone.firstPlayer('scissor')
        paperScissorStone.secondPlayer('scissor')
        expect(paperScissorStone.getResult()).toEqual('draw')
    });


    it('should draw (stone and stone)', () => {
        let paperScissorStone = new PaperScissorStone();
        paperScissorStone.firstPlayer('stone')
        paperScissorStone.secondPlayer('stone')
        expect(paperScissorStone.getResult()).toEqual('draw')
    });


    it('should draw (paper and paper)', () => {
        let paperScissorStone = new PaperScissorStone();
        paperScissorStone.firstPlayer('paper')
        paperScissorStone.secondPlayer('paper')
        expect(paperScissorStone.getResult()).toEqual('draw')
    });


});
