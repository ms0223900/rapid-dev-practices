class Organization {
    country: string;

    constructor(organization: { country: string; name: string }) {
        this._name = organization.name
        this.country = organization.country
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


});
