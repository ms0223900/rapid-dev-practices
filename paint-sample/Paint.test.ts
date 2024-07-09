class Paint {
    private volume: number;
    private red: number;
    private green: number;
    private blue: number;

    constructor(volume: number, red: number, green: number, blue: number) {
        this.volume = volume
        this.red = red
        this.green = green
        this.blue = blue
    }

    mixIn(other: Paint) {
        this.volume += other.getVolume()

        this.red = this.mixColor(this.red, other.red)
        this.green = this.mixColor(this.green, other.green)
        this.blue = this.mixColor(this.blue, other.blue)
    }

    getVolume() {
        return this.volume;
    }

    getRed() {
        return this.red;
    }

    getBlue() {
        return this.blue;
    }

    getGreen() {
        return this.green;
    }

    private mixColor(color: number, otherColor: number) {
        return (color + otherColor) / 2;
    }
}

describe('Paint', function () {
    it('should mix paint', () => {
        const paint = new Paint(1, 10, 10, 10);
        const otherPaint = new Paint(1, 0, 0, 20);

        paint.mixIn(otherPaint)
        expect(paint.getVolume()).toEqual(1 + 1)
        expect(paint.getRed()).toEqual(5)
        expect(paint.getGreen()).toEqual(5)
        expect(paint.getBlue()).toEqual(15)
    });
});
