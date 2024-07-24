class Organization {
    name: string;

    constructor(organization: { country: string; name: string }) {
        this.name = organization.name
    }

}

describe('Encapsulate Data', function () {
    it('get organization data', () => {
        const organization = { name: "Acme Gooseberries", country: "GB" };
        const organization1 = new Organization(organization);
        expect(organization1.name).toEqual("Acme Gooseberries")
    });
});
