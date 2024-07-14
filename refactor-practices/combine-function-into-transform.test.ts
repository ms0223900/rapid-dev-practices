interface Reading {
    customer: string
    quantity: number
    month: number
    year: number
}

const reading: Reading = {
    month: 3,
    quantity: 2,
    year: 2024,
    customer: "PPP"
};

function calculateRate(acquiredReading: Reading) {
    return baseRate(acquiredReading.month, acquiredReading.year) * acquiredReading.quantity;
}

interface EnrichedReading extends Reading {
    baseCharge: number
}

function enrichReading(acquiredReading: Reading) {
    const res: EnrichedReading = { baseCharge: 0, ...structuredClone(acquiredReading) }
    res.baseCharge = calculateRate(acquiredReading);
    return res;
}

function client1() {
    const acquiredReading = acquireReading();
    const enrichedReading = enrichReading(acquiredReading);
    return enrichedReading.baseCharge;
}

client1();

function client2() {
    const acquiredReading = acquireReading();
    const base = calculateRate(acquiredReading)
    const taxableCharge = Math.max(0, base - taxThreshold(acquiredReading.year));
    return taxableCharge;
}

client2();


function acquireReading() {
    return reading;
}


function baseRate(month: number, year: number) {
    if (year < 2020) {
        return 100;
    }
    if (month < 8) {
        return 150
    }
    return 200
}

function taxThreshold(year: number) {
    if (year > 2020) {
        return 10;
    }
    return 0;
}

describe('combine fns', function () {
    it('should get client 1 change correctly.', () => {
        expect(client1()).toEqual(300)
    });

    it('should get client2 taxable change correctly.', () => {
        expect(client2()).toEqual(290)
    });
});
