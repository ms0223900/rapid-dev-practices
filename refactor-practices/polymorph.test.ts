interface IBird {
    name: string;
    type: string;
    numberOfCoconuts?: number;
    voltage?: number;
    isNailed?: boolean;
}

function plumages(birds: IBird[]) {
    return new Map(birds.map(b => [b.name, Bird.create(b).plumage]));
}

function speeds(birds: IBird[]) {
    return new Map(birds.map(b => [b.name, Bird.create(b).speed]));
}

class Bird implements IBird {
    static create(bird: IBird) {
        switch (bird.type) {
            case 'AfricanSwallow':
                return new AfricanSwallow(bird);
            case 'EuropeanSwallow':
                return new EuropeanSwallow(bird);
            case 'NorwegianBlueParrot':
                return new NorwegianBlueParrot(bird);
            default:
                return new Bird(bird);
        }
    }

    name: string;
    type: string;
    numberOfCoconuts?: number;
    voltage?: number;
    isNailed?: boolean;

    constructor(bird: IBird) {
        this.name = bird.name;
        this.type = bird.type;
        Object.assign(this, bird);
    }

    get plumage() {
        return "unknown";
    }

    get speed() {
        return 0;
    }
}

class AfricanSwallow extends Bird {
    constructor(bird: IBird) {
        super(bird);
    }

    get plumage() {
        return (this.numberOfCoconuts > 2) ? "tired" : "average";
    }

    get speed() {
        return 40 - 2 * this.numberOfCoconuts;
    }
}

class EuropeanSwallow extends Bird {
    constructor(bird: IBird) {
        super(bird);
    }

    get plumage() {
        return "average";
    }

    get speed() {
        return 35;
    }
}

class NorwegianBlueParrot extends Bird {
    constructor(bird: IBird) {
        super(bird);
    }

    get plumage() {
        return (this.voltage > 100) ? "scorched" : "beautiful";
    }

    get speed() {
        return (this.isNailed) ? 0 : 10 + this.voltage / 10;
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