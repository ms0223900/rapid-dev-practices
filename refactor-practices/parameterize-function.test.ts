const TOP_BAND_USAGE_RATE = 0.07;
const MIDDLE_BAND_USAGE_RATE = 0.05;
const BOTTOM_BAND_USAGE_RATE = 0.03;

function baseCharge(usage: number) {
    if (usage < 0) return usd(0);
    const amount =
        withinBand(usage, 0, 100) * BOTTOM_BAND_USAGE_RATE
        + withinBand(usage, 100, 200) * MIDDLE_BAND_USAGE_RATE
        + withinBand(usage, 200, Infinity) * TOP_BAND_USAGE_RATE;
    return usd(amount);
}

function withinBand(usage: number, bottom: number, top: number) {
    return usage > bottom ? Math.min(usage, top) - bottom : 0;
}

function usd(amount: number) {
    return amount;
}

describe("baseCharge", () => {
    it("should return 0 when usage is less than 0", () => {
        expect(baseCharge(-1)).toBe(0);
    });

    it("should return 3 when usage is 100", () => {
        expect(baseCharge(100)).toBe(3);
    });

    it("should return 5.5 when usage is 150", () => {
        expect(baseCharge(150)).toBe(5.5);
    });

    it("should return 11.5 when usage is 250", () => {
        expect(baseCharge(250)).toBe(11.5);
    });
});
