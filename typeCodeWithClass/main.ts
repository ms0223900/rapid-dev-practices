export const moveHorizontal = (x: number) => {
    console.log("x: ", x);
};

export enum Input {
    LEFT,

}

export function handleInput(input: Input) {
    if (input === Input.LEFT) {
        moveHorizontal(-1)
    }

}
