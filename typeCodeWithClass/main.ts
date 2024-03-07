export const moveHorizontal = (x: number) => {
    console.log("x: ", x);
};
;


export const moveVertical = (y: number) => {
    console.log("moveVertical: ",);
    return y;
};

interface Input2 {
    isLeft: () => boolean
    isRight: () => boolean
    isUp: () => boolean
    isDown: () => boolean
}

interface InputAction {
    move: () => void
}

export function handleInput(input: InputAction) {
    // console.log("input: ", input);
    input.move()
}

export class Left implements Input2 {
    isDown(): boolean {
        return false;
    }

    isLeft(): boolean {
        return true;
    }

    isRight(): boolean {
        return false;
    }

    isUp(): boolean {
        return false;
    }
}

export class Right implements Input2 {
    isDown(): boolean {
        return false;
    }

    isLeft(): boolean {
        return false;
    }

    isRight(): boolean {
        return true;
    }

    isUp(): boolean {
        return false;
    }
}

export class Up implements Input2 {
    isDown(): boolean {
        return false;
    }

    isLeft(): boolean {
        return false;
    }

    isRight(): boolean {
        return false;
    }

    isUp(): boolean {
        return true;
    }
}

export class Down implements Input2 {
    isDown(): boolean {
        return true;
    }

    isLeft(): boolean {
        return false;
    }

    isRight(): boolean {
        return false;
    }

    isUp(): boolean {
        return false;
    }
}

export class LeftAction implements InputAction {
    move(): void {
        moveHorizontal(-1)
    }
}

export class RightAction implements InputAction {
    move(): void {
        moveHorizontal(1)
    }
}
