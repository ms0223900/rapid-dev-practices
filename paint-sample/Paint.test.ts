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
    }

    getVolume() {
        return this.volume;
    }
}

describe('Paint', function () {
    it('should mix paint', () => {
        const ourPaint = new Paint(1, 10, 10, 10);
        const blue = new Paint(1, 0, 0, 10);

        ourPaint.mixIn(blue)
        // TODO, from here (sample with side effect)
        expect(ourPaint.getVolume()).toEqual(1 + 1)
    });
});
