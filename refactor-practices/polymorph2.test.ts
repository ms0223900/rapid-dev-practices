interface Voyage {
    zone: string;
    length: number;
}

interface VoyageHistory {
    zone: string;
    profit: number;
}

class Rating {
    constructor(protected voyage: Voyage, protected history: VoyageHistory[]) { }

    get value() {
        const vpf = this.getVoyageProfitFactor();
        const vr = this.voyageRisk;
        const chr = this.getCaptainHistoryRisk();
        if (vpf * 3 > (vr + chr * 2)) return "A";
        else return "B";
    }

    getVoyageProfitFactor() {
        let result = 2;

        if (this.voyage.zone === "china") result += 1;
        if (this.voyage.zone === "east-indies") result += 1;

        result += this.getHistoryLengthFactor();
        result += this.getVoyageLengthFactor();
        return result;
    }

    getVoyageLengthFactor() {
        let result = 0;
        if (this.voyage.length > 14) result -= 1;
        return result;
    }

    getHistoryLengthFactor() {
        return this.history.length > 8 ? 1 : 0;
    }

    get voyageRisk() {
        let result = 1;
        if (this.voyage.length > 4) result += 2;
        if (this.voyage.length > 8) result += this.voyage.length - 8;
        if (["china", "east-indies"].includes(this.voyage.zone)) result += 4;
        return Math.max(result, 0);
    }

    getCaptainHistoryRisk() {
        let result = 1;
        if (this.history.length < 5) result += 4;
        result += this.history.filter(v => v.profit < 0).length;
        return Math.max(result, 0);
    }
}

class ExperiencedChinaRating extends Rating {
    constructor(voyage: Voyage, history: VoyageHistory[]) {
        super(voyage, history);
    }

    getVoyageProfitFactor() {
        return super.getVoyageProfitFactor() + 3;
    }

    getVoyageLengthFactor() {
        let result = 0;
        if (this.voyage.length > 12) result += 1;
        if (this.voyage.length > 18) result -= 1;
        return result;
    }

    getHistoryLengthFactor() {
        return this.history.length > 10 ? 1 : 0;
    }

    getCaptainHistoryRisk() {
        return Math.max(super.getCaptainHistoryRisk() - 2, 0);
    }
}

function createRating(voyage: Voyage, history: VoyageHistory[]) {
    if (voyage.zone === "china" && hasChina(history)) return new ExperiencedChinaRating(voyage, history);
    else return new Rating(voyage, history);
}

function rating(voyage: Voyage, history: VoyageHistory[]) {
    return createRating(voyage, history).value;
}

function hasChina(history: VoyageHistory[]) {
    return history.some(v => "china" === v.zone);
}

describe('rating', () => {
    it('should return the correct rating for the voyage', () => {
        const voyage: Voyage = { zone: 'china', length: 10 };
        const history: VoyageHistory[] = [{ zone: 'china', profit: 100 }, { zone: 'east-indies', profit: 200 }];
        expect(rating(voyage, history)).toBe('A');
    });

    it('should return the correct rating for the voyage', () => {
        const voyage: Voyage = { zone: 'east-indies', length: 10 };
        const history: VoyageHistory[] = [{ zone: 'east-indies', profit: 100 }, { zone: 'east-indies', profit: 200 }];
        expect(rating(voyage, history)).toBe('B');
    });
});
