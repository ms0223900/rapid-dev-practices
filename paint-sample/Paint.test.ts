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

    }
}

describe('Paint', function () {
    it('should mix paint', () => {
        const white = new Paint(1, 10, 10, 10);
        const blue = new Paint(1, 0, 0, 10);

        white.mixIn(blue)
    });
});
