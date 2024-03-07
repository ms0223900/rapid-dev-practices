import * as fns from "./main";
import {handleInput, Input} from "./main";

describe('main', function () {
    const spyMoveHorizontal = jest.spyOn(fns, 'moveHorizontal');
    beforeEach(() => {
        spyMoveHorizontal.mockReset()
    });

    it('should move left', () => {
        fns.handleInput(Input.LEFT)
        expect(spyMoveHorizontal).toHaveBeenCalledWith(-1)
    });
});
