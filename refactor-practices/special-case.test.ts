class SpecialCaseCustomer {
    private _name: string;

    constructor(_name: string) {
        this._name = _name;
    }

    get name() {
        return this._name;
    }
}

class UnknownCustomer {
    get name() {
        return "unknown";
    }
}

class Site {
    private _customer: SpecialCaseCustomer | UnknownCustomer;

    constructor(_customer: SpecialCaseCustomer | UnknownCustomer) {
        this._customer = _customer;
    }

    get customer() {
        if (this._customer.name === "unknown") {
            return new UnknownCustomer();
        }
        return this._customer;
    }
}

function isUnknown(arg: SpecialCaseCustomer | UnknownCustomer) {
    if (!((arg instanceof SpecialCaseCustomer) || (arg instanceof UnknownCustomer)))
        throw new Error(`investigate bad value: <${arg}>`);
    return ((arg as SpecialCaseCustomer).name === "unknown");
}

describe('special case', () => {
    it('should return true if the customer is "unknown"', () => {
        const site = new Site(new SpecialCaseCustomer("unknown"));
        expect(isUnknown(site.customer)).toBe(true);
    });

    it('should return false if the customer is not "unknown"', () => {
        const site = new Site(new SpecialCaseCustomer("known"));
        expect(isUnknown(site.customer)).toBe(false);
    });

    it('should throw an error if the customer is not a SpecialCaseCustomer or UnknownCustomer', () => {
        expect(() => isUnknown("abc" as any)).toThrow();
    });
});
