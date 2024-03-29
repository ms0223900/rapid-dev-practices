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
        return new TrafficColorImpl("green");
    }
    if (trafficColor.color() === 'green') {
        return new TrafficColorImpl("yellow");
    }
    if (trafficColor.color() === 'yellow') {
        return new TrafficColorImpl("red");
    }
}

class TrafficColorImpl implements TrafficColor {
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


class Yellow implements TrafficColor {
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

describe('unify similar', function () {
    it('red light next is green light', () => {
        expect(nextColor(new TrafficColorImpl("red"))).toEqual(new TrafficColorImpl("green"))
    });

    it('green light next is yellow light', () => {
        expect(nextColor(new TrafficColorImpl("green"))).toEqual(new TrafficColorImpl("yellow"))
    });

    it('yellow light next is red light', () => {
        expect(nextColor(new TrafficColorImpl("yellow"))).toEqual(new TrafficColorImpl("red"))
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
        new TrafficColorImpl("green").check(myCar)
        expect(spyDrive).toBeCalled()
    });

    it('car should stop when light is yellow', () => {
        const spyStop = jest.spyOn(myCar, "stop");
        new TrafficColorImpl("yellow").check(myCar)
        expect(spyStop).toBeCalled()
    });

    it('car should stop when light is red', () => {
        const spyStop = jest.spyOn(myCar, "stop");
        new TrafficColorImpl("red").check(myCar)
        expect(spyStop).toBeCalled()
    });

});
