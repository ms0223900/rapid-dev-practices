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
        return ~~((color * (1 - ratio) + otherColor * ratio) * 100) / 100
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
        const otherVolumeRatio = this.getOtherVolumeRatio(other.getVolume());
        this.pigmentColor = this.pigmentColor.mixWith(other.pigmentColor, otherVolumeRatio)
    }

    getVolume() {
        return this.volume;
    }

    getColor() {
        return this.pigmentColor;
    }

    private getOtherVolumeRatio(otherVolume: number) {
        return otherVolume / this.volume;
    }
}

class StockPaint {
    paint: Paint;

    constructor(volume: number, color: PigmentColor) {
        this.paint = new Paint(volume, color)
    }

    getVolume() {
        return this.paint.getVolume();
    }
}

class MixedPaint {
    private paintStocks: StockPaint[];

    constructor() {
        this.paintStocks = [];
    }

    mixIn(stockPaint: StockPaint) {
        // 直接 mix 的話呢？ => 似乎就不符合其彈性設計？
        this.paintStocks.push(stockPaint)
    }

    getVolume() {
        return this.paintStocks.reduce((prev, next) => prev + next.getVolume(), 0)
    }

    getColor(): PigmentColor {
        const paint = this.paintStocks.reduce((prev, next) => {
            const totalVolume = prev.getVolume() + next.getVolume();
            const mixedColor = prev.getColor().mixWith(next.paint.getColor(), next.getVolume() / totalVolume);

            return new Paint(totalVolume, mixedColor);
        }, new Paint(0, new PigmentColor(0, 0, 0)));
        return paint.getColor();
        // return this.paintStocks[0].paint.getColor().mixWith(
        //     this.paintStocks[1].paint.getColor(),
        //     this.paintStocks[0].getVolume() / this.getVolume()
        // );
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

    it('test mixin paint', () => {
        const yellow = new PigmentColor(255, 255, 0);
        const red = new PigmentColor(255, 0, 0);

        const stockPaint = new StockPaint(1, yellow);
        const stockPaint2 = new StockPaint(1, red);

        const mixedPaint = new MixedPaint();
        mixedPaint.mixIn(stockPaint)
        mixedPaint.mixIn(stockPaint2)

        expect(mixedPaint.getVolume()).toEqual(1 + 1)
        expect(mixedPaint.getColor().getRed()).toEqual(255)
        expect(mixedPaint.getColor().getGreen()).toEqual(127.5)
        expect(mixedPaint.getColor().getBlue()).toEqual(0)
    });

    it('test mixin paint 3 paints', () => {
        const yellow = new PigmentColor(255, 255, 0);
        const red = new PigmentColor(255, 0, 0);
        const blue = new PigmentColor(0, 0, 255);

        const stockPaint = new StockPaint(1, yellow);
        const stockPaint2 = new StockPaint(1, red);
        const stockPaint3 = new StockPaint(1, blue);

        const mixedPaint = new MixedPaint();
        mixedPaint.mixIn(stockPaint)
        mixedPaint.mixIn(stockPaint2)
        mixedPaint.mixIn(stockPaint3)

        expect(mixedPaint.getVolume()).toEqual(1 + 1 + 1)
        expect(mixedPaint.getColor().getRed()).toEqual(170)
        expect(mixedPaint.getColor().getGreen()).toEqual(85)
        expect(mixedPaint.getColor().getBlue()).toEqual(85)
    });


});
