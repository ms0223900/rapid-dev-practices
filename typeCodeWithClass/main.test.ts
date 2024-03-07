import * as fns from "./main";

import {Input} from "./input";

describe('main', function () {
    const spyMoveHorizontal = jest.spyOn(fns, 'moveHorizontal');
    const spyMoveVertical = jest.spyOn(fns, 'moveVertical');

    beforeEach(() => {
        spyMoveHorizontal.mockReset()
        spyMoveVertical.mockReset()
    });

    it('should move left', () => {
        fns.handleInput(Input.LEFT)
        expect(spyMoveHorizontal).toHaveBeenCalledWith(-1)
    });

    it('should move right', () => {
        fns.handleInput(Input.RIGHT)
        expect(spyMoveHorizontal).toHaveBeenCalledWith(1)
    });


    it('should move up', () => {
        fns.handleInput(Input.UP)
        expect(spyMoveVertical).toHaveBeenCalledWith(-1)
    });


    it('should move down', () => {
        fns.handleInput(Input.DOWN)
        expect(spyMoveVertical).toHaveBeenCalledWith(1)
    });
});
