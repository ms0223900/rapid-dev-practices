class SpecialCaseCustomer {
    private _name: string;

    constructor(_name: string) {
        this._name = _name;
    }

    get name() {
        return this._name;
    }
}

function isUnknown(arg: SpecialCaseCustomer | string) {
    if (!((arg instanceof SpecialCaseCustomer) || (arg === "unknown")))
        throw new Error(`investigate bad value: <${arg}>`);
    return ((arg as SpecialCaseCustomer).name === "unknown");
}

describe('special case', () => {
    it('should return true if the argument is "unknown"', () => {
        expect(isUnknown(new SpecialCaseCustomer("unknown"))).toBe(true);
    });

    it('should throw an error if the argument is not a SpecialCaseCustomer or "unknown"', () => {
        expect(() => isUnknown("abc")).toThrow();
    });
});
