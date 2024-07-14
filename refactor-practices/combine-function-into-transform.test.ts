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
    taxableCharge: number;
    baseCharge: number
}

function enrichReading(acquiredReading: Reading) {
    const res: EnrichedReading = { taxableCharge: 0, baseCharge: 0, ...structuredClone(acquiredReading) }
    res.baseCharge = calculateRate(acquiredReading);
    res.taxableCharge = calculateTaxableCharge(res.baseCharge, acquiredReading.year)
    return res;
}

function client1() {
    const acquiredReading = acquireReading();
    const enrichedReading = enrichReading(acquiredReading);
    return enrichedReading.baseCharge;
}

client1();

function calculateTaxableCharge(baseCharge: number, year: number) {
    return Math.max(0, baseCharge - taxThreshold(year));
}

function client2() {
    const acquiredReading = acquireReading();
    const enrichedReading = enrichReading(acquiredReading);
    return calculateTaxableCharge(enrichedReading.baseCharge, acquiredReading.year);
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
