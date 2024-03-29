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
        return new Red();
    }
}

class Red implements TrafficColor {
    color() {
        return "red";
    }

    check(car: Car): void {
        if (true) {
            car.stop()
        }
    }
}

class Green implements TrafficColor {
    color(): string {
        return "green";
    }

    check(car: Car): void {
        if (true) {
            car.drive
        }
    }
}

class Yellow implements TrafficColor {
    color(): string {
        return "yellow";
    }

    check(car: Car): void {
        if (true) {
            car.stop()
        }
    }
}

describe('unify similar', function () {
    it('red light next is green light', () => {
        expect(nextColor(new Red())).toEqual(new Green())
    });

    it('green light next is yellow light', () => {
        expect(nextColor(new Green())).toEqual(new Yellow())
    });

    it('yellow light next is red light', () => {
        expect(nextColor(new Yellow())).toEqual(new Red())
    });


});
