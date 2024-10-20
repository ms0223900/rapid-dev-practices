interface IBird {
    name: string;
    type: string;
    numberOfCoconuts?: number;
    voltage?: number;
    isNailed?: boolean;
}

function plumages(birds: IBird[]) {
    return new Map(birds.map(b => [b.name, plumage(b)]));
}

function speeds(birds: IBird[]) {
    return new Map(birds.map(b => [b.name, airSpeedVelocity(b)]));
}

function plumage(bird: IBird) {
    switch (bird.type) {
        case 'EuropeanSwallow':
            return "average";
        case 'AfricanSwallow':
            return (bird.numberOfCoconuts > 2) ? "tired" : "average";
        case 'NorwegianBlueParrot':
            return (bird.voltage > 100) ? "scorched" : "beautiful";
        default:
            return "unknown";
    }
}

function airSpeedVelocity(bird: IBird) {
    switch (bird.type) {
        case 'EuropeanSwallow':
            return 35;
        case 'AfricanSwallow':
            return 40 - 2 * bird.numberOfCoconuts;
        case 'NorwegianBlueParrot':
            return (bird.isNailed) ? 0 : 10 + bird.voltage / 10;
        default:
            return 0;
    }
}

describe('plumages', () => {
    it('should return the correct plumage for each bird', () => {
        const birds = [
            { name: 'EuropeanSwallow', type: 'EuropeanSwallow' },
            { name: 'AfricanSwallow', type: 'AfricanSwallow', numberOfCoconuts: 3 },
            { name: 'AfricanSwallow2', type: 'AfricanSwallow', numberOfCoconuts: 2 },
            { name: 'NorwegianBlueParrot', type: 'NorwegianBlueParrot', voltage: 101, isNailed: false },
            { name: 'NorwegianBlueParrot2', type: 'NorwegianBlueParrot', voltage: 99, isNailed: false }
        ];
        const result = plumages(birds);
        expect(result).toEqual(new Map([
            ['EuropeanSwallow', 'average'],
            ['AfricanSwallow', 'tired'],
            ['AfricanSwallow2', 'average'],
            ['NorwegianBlueParrot', 'scorched'],
            ['NorwegianBlueParrot2', 'beautiful']
        ]));
    });

    it('should return the correct speeds for each bird', () => {
        const birds = [
            { name: 'EuropeanSwallow', type: 'EuropeanSwallow' },
            { name: 'AfricanSwallow', type: 'AfricanSwallow', numberOfCoconuts: 3 },
            { name: 'AfricanSwallow2', type: 'AfricanSwallow', numberOfCoconuts: 2 },
            { name: 'NorwegianBlueParrot', type: 'NorwegianBlueParrot', voltage: 101, isNailed: false },
            { name: 'NorwegianBlueParrot2', type: 'NorwegianBlueParrot', voltage: 99, isNailed: false }
        ];
        const result = speeds(birds);
        expect(result).toEqual(new Map([
            ['EuropeanSwallow', 35],
            ['AfricanSwallow', 34],
            ['AfricanSwallow2', 36],
            ['NorwegianBlueParrot', 20.1],
            ['NorwegianBlueParrot2', 19.9]
        ]));
    });
});