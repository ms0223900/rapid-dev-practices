class Organization {
    constructor(organization: { country: string; name: string }) {
        this._name = organization.name
        this._country = organization.country
    }

    _country: string;

    get country() {
        return this._country;
    }

    set country(__country: string) {
        this._country = __country
    }

    _name: string;

    get name() {
        return this._name;
    }

    set name(__name) {
        this._name = __name
    }
}

describe('Encapsulate Data', function () {
    it('get organization data', () => {
        const organization = { name: "Acme Gooseberries", country: "GB" };
        const organization1 = new Organization(organization);
        expect(organization1.name).toEqual("Acme Gooseberries")
        expect(organization1.country).toEqual("GB")
    });

    it('should set name', () => {
        const organization = { name: "Acme Gooseberries", country: "GB" };
        const organization1 = new Organization(organization);
        organization1.name = "hi"
        expect(organization1.name).toEqual("hi")
        expect(organization.name).toEqual("Acme Gooseberries")
    });

    it('should set country', () => {
        const organization = { name: "Acme Gooseberries", country: "GB" };
        const organization1 = new Organization(organization);
        organization1.country = "CH"
        expect(organization1.country).toEqual("CH")
        expect(organization.country).toEqual("GB")
    });


});
