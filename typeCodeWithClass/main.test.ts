import * as fns from "./main";
import {DownAction, LeftAction, RightAction, UpAction} from "./main";

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

    it('should move right', () => {
        fns.handleInput(new RightAction())
        expect(spyMoveHorizontal).toHaveBeenCalledWith(1)
    });


    it('should move up', () => {
        fns.handleInput(new UpAction())
        expect(spyMoveVertical).toHaveBeenCalledWith(-1)
    });


    it('should move down', () => {
        fns.handleInput(new DownAction())
        expect(spyMoveVertical).toHaveBeenCalledWith(1)
    });
});
