import {Input} from "./input";

export const moveHorizontal = (x: number) => {
    console.log("x: ", x);
};
;


export const moveVertical = (y: number) => {
    console.log("moveVertical: ",);
    return y;
};

export function handleInput(input: Input) {
    // console.log("input: ", input);
    if (input === Input.LEFT) {
        moveHorizontal(-1)
    }
    if (input === Input.RIGHT) {
        moveHorizontal(1)
    }
    if (input === Input.UP) {
        moveVertical(-1)
    }
    if (input === Input.DOWN) {
        moveVertical(1)
    }

}
