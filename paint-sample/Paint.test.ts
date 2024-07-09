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
        const ourPaint = new Paint(1, 10, 10, 10);
        const blue = new Paint(1, 0, 0, 10);

        ourPaint.mixIn(blue)
        expect(ourPaint.getVolume()).toEqual(1 + 1)
        expect(ourPaint.getRed()).toEqual(5)
        expect(ourPaint.getGreen()).toEqual(5)
    });
});
