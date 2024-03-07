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

export function handleInput(input: Input2) {
    // console.log("input: ", input);
    if (input.isLeft()) {
        moveHorizontal(-1)
    }
    if (input.isRight()) {
        moveHorizontal(1)
    }
    if (input.isUp()) {
        moveVertical(-1)
    }
    if (input.isDown()) {
        moveVertical(1)
    }

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
