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

function client1() {
    const acquiredReading = acquireReading();
    const baseCharge = baseRate(acquiredReading.month, acquiredReading.year) * acquiredReading.quantity;
    return baseCharge;
}

client1();

function client2() {
    const acquiredReading = acquireReading();
    const base = baseRate(acquiredReading.month, acquiredReading.year) * acquiredReading.quantity;
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
    return 0;
}

describe('combine fns', function () {
    it('should get client 1 change correctly', () => {
        expect(client1()).toEqual(300)
    });
});
