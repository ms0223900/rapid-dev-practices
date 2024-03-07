import * as fns from "./main";
import {Down, Left, Right, Up} from "./main";

describe('main', function () {
    const spyMoveHorizontal = jest.spyOn(fns, 'moveHorizontal');
    const spyMoveVertical = jest.spyOn(fns, 'moveVertical');

    beforeEach(() => {
        spyMoveHorizontal.mockReset()
        spyMoveVertical.mockReset()
    });

    it('should move left', () => {
        fns.handleInput(new Left())
        expect(spyMoveHorizontal).toHaveBeenCalledWith(-1)
    });

    it('should move right', () => {
        fns.handleInput(new Right())
        expect(spyMoveHorizontal).toHaveBeenCalledWith(1)
    });


    it('should move up', () => {
        fns.handleInput(new Up())
        expect(spyMoveVertical).toHaveBeenCalledWith(-1)
    });


    it('should move down', () => {
        fns.handleInput(new Down())
        expect(spyMoveVertical).toHaveBeenCalledWith(1)
    });
});
