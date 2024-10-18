interface Instrument {
    capital: number;
    interestRate: number;
    duration: number;
    adjustmentFactor: number;
    income: number;
}

function adjustedCapital(anInstrument: Instrument): number {
    let result = 0;
    if (anInstrument.capital <= 0) return 0;
    if (anInstrument.interestRate > 0 && anInstrument.duration > 0) {
        result = (anInstrument.income / anInstrument.duration) * anInstrument.adjustmentFactor;
    }
    return result;
}


describe('adjustedCapital', () => {
    it('should return 0 if capital is less than 0', () => {
        const instrument: Instrument = {
            capital: -100,
            interestRate: 0.1,
            duration: 10,
            adjustmentFactor: 1.2,
            income: 1000,
        };
        expect(adjustedCapital(instrument)).toBe(0);
    });

    it('should return 0 if interestRate is less than 0', () => {
        const instrument: Instrument = {
            capital: 100,
            interestRate: -0.1,
            duration: 10,
            adjustmentFactor: 1.2,
            income: 1000,
        };
        expect(adjustedCapital(instrument)).toBe(0);
    });

    it('should return 0 if duration is less than 0', () => {
        const instrument: Instrument = {
            capital: 100,
            interestRate: 0.1,
            duration: -10,
            adjustmentFactor: 1.2,
            income: 1000,
        };
        expect(adjustedCapital(instrument)).toBe(0);
    });

    it('should return 0 if adjustmentFactor is less than 0', () => {
        const instrument: Instrument = {
            capital: 100,
            interestRate: 0.1,
            duration: 10,
            adjustmentFactor: -1.2,
            income: 1000,
        };
        expect(adjustedCapital(instrument)).toBe(-120);
    });

    it('should return 0 if income is less than 0', () => {
        const instrument: Instrument = {
            capital: 100,
            interestRate: 0.1,
            duration: 10,
            adjustmentFactor: 1.2,
            income: -1000,
        };
        expect(adjustedCapital(instrument)).toBe(-120);
    });

    it('should return the correct adjusted capital if all conditions are met', () => {
        const instrument: Instrument = {
            capital: 1000,
            interestRate: 0.05,
            duration: 5,
            adjustmentFactor: 1.1,
            income: 5000,
        };
        expect(adjustedCapital(instrument)).toBe(1100);
    });
});

