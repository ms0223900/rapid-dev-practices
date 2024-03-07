import * as fns from "./main";
import {LeftAction, RightAction} from "./main";

describe('main', function () {
    const spyMoveHorizontal = jest.spyOn(fns, 'moveHorizontal');
    const spyMoveVertical = jest.spyOn(fns, 'moveVertical');

    beforeEach(() => {
        spyMoveHorizontal.mockReset()
        spyMoveVertical.mockReset()
    });

    it('should move left', () => {
        fns.handleInput(new LeftAction())
        expect(spyMoveHorizontal).toHaveBeenCalledWith(-1)
    });

    xit('should move right', () => {
        fns.handleInput(new RightAction())
        expect(spyMoveHorizontal).toHaveBeenCalledWith(1)
    });

    //
    // xit('should move up', () => {
    //     fns.handleInput(new Up())
    //     expect(spyMoveVertical).toHaveBeenCalledWith(-1)
    // });
    //
    //
    // xit('should move down', () => {
    //     fns.handleInput(new Down())
    //     expect(spyMoveVertical).toHaveBeenCalledWith(1)
    // });
});
