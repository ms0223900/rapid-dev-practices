class PigmentColor {
    private red: number;
    private green: number;
    private blue: number;

    constructor(red: number, green: number, blue: number) {
        this.red = red
        this.green = green
        this.blue = blue
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

    mixWith(otherPigmentColor: PigmentColor, ratio: number) {
        return new PigmentColor(
            this.mixColor(this.red, otherPigmentColor.red, ratio),
            this.mixColor(this.green, otherPigmentColor.green, ratio),
            this.mixColor(this.blue, otherPigmentColor.blue, ratio),
        );
    }

    private mixColor(color: number, otherColor: number, ratio: number) {
        return color * (1 - ratio) + otherColor * ratio
    }
}

class Paint {
    private pigmentColor: PigmentColor;
    private volume: number;

    constructor(volume: number, pigmentColor: PigmentColor) {
        this.volume = volume
        this.pigmentColor = pigmentColor
    }

    mixIn(other: Paint) {
        this.volume += other.getVolume()

        const ratio = other.getVolume() / this.volume;
        this.pigmentColor = this.pigmentColor.mixWith(other.pigmentColor, ratio)
    }

    getVolume() {
        return this.volume;
    }

    getColor() {
        return this.pigmentColor;
    }
}

describe('Paint', function () {
    it('should mix paint', () => {
        const paint = new Paint(1, new PigmentColor(10, 10, 10));
        const otherPaint = new Paint(1, new PigmentColor(0, 0, 20));

        paint.mixIn(otherPaint)

        expect(paint.getVolume()).toEqual(1 + 1)
        expect(paint.getColor().getRed()).toEqual(5)
        expect(paint.getColor().getGreen()).toEqual(5)
        expect(paint.getColor().getBlue()).toEqual(15)
    });
});
