interface Car {
    drive(): void

    stop(): void
}

interface TrafficColor {
    color(): string

    check(car: Car): void
}

function nextColor(trafficColor: TrafficColor) {
    if (trafficColor.color() === 'red') {
        return new Green();
    }
    if (trafficColor.color() === 'green') {
        return new Yellow();
    }
    if (trafficColor.color() === 'yellow') {
        return new Red("red");
    }
}

class Red implements TrafficColor {
    private _color: string;

    constructor(color: string) {
        this._color = color;
    }

    color() {
        return this._color;
    }

    check(car: Car): void {
        if (this.color() === 'red') {
            car.stop()
            return
        }
        if (this.color() === 'green') {
            car.drive()
            return
        }
        if (this.color() === 'yellow') {
            car.stop()
            return
        }
    }
}

class Green implements TrafficColor {
    color(): string {
        return "green";
    }

    check(car: Car): void {
        if (this.color() === 'green') {
            car.drive()
        }
    }
}

class Yellow implements TrafficColor {
    color(): string {
        return "yellow";
    }

    check(car: Car): void {
        if (this.color() === 'yellow') {
            car.stop()
        }
    }
}

describe('unify similar', function () {
    it('red light next is green light', () => {
        expect(nextColor(new Red("red"))).toEqual(new Green())
    });

    it('green light next is yellow light', () => {
        expect(nextColor(new Green())).toEqual(new Yellow())
    });

    it('yellow light next is red light', () => {
        expect(nextColor(new Yellow())).toEqual(new Red("red"))
    });
});

class MyCar implements Car {
    drive(): void {
    }

    stop(): void {
    }
}

describe('color and car', function () {
    let myCar = new MyCar();
    beforeEach(() => {
        myCar = new MyCar();
    });

    it('car should drive when light is green', () => {
        const spyDrive = jest.spyOn(myCar, "drive");
        new Green().check(myCar)
        expect(spyDrive).toBeCalled()
    });

    it('car should stop when light is yellow', () => {
        const spyStop = jest.spyOn(myCar, "stop");
        new Yellow().check(myCar)
        expect(spyStop).toBeCalled()
    });

    it('car should stop when light is red', () => {
        const spyStop = jest.spyOn(myCar, "stop");
        new Red("red").check(myCar)
        expect(spyStop).toBeCalled()
    });

});
