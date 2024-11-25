function baseCharge(usage: number) {
    if (usage < 0) return usd(0);
    const amount =
        bottomBand(usage) * 0.03
        + withinBand(usage, 100, 200) * 0.05
        + topBand(usage) * 0.07;
    return usd(amount);
}

function bottomBand(usage: number) {
    return Math.min(usage, 100);
}

function middleBand(usage: number) {
    return usage > 100 ? Math.min(usage, 200) - 100 : 0;
}

function topBand(usage: number) {
    return usage > 200 ? usage - 200 : 0;
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
