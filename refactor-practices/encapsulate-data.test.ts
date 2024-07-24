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

const organization = { name: "Acme Gooseberries", country: "GB" };
describe('Encapsulate Data', function () {
    it('get organization data', () => {
        const organization1 = new Organization(organization);
        expect(organization1.name).toEqual("Acme Gooseberries")
        expect(organization1.country).toEqual("GB")
    });

    it('should set name', () => {
        const organization1 = new Organization(organization);
        organization1.name = "hi"
        expect(organization1.name).toEqual("hi")
        expect(organization.name).toEqual("Acme Gooseberries")
    });

    it('should set country', () => {
        const organization1 = new Organization(organization);
        organization1.country = "CH"
        expect(organization1.country).toEqual("CH")
        expect(organization.country).toEqual("GB")
    });
});

let customerData: CustomerRawData = {
    "1920": {
        name: "martin",
        id: "1920",
        usages: {
            "2016": {
                "1": 50,
                "2": 55,
                // remaining months of the year
            },
            "2015": {
                "1": 70,
                "2": 63,
                // remaining months of the year
            }
        }
    },
    "38673": {
        name: "neal",
        id: "38673",
        // more customers in a similar form
        usages: {}
    }
};

interface Usage {
    [year: string]: {
        [month: string]: number;
    };
}

interface Customer {
    name: string;
    id: string;
    usages: Usage;
}

interface CustomerRawData {
    [id: string]: Customer;
}

class CustomerData {
    private _data: CustomerRawData;

    constructor(customerData: CustomerRawData) {
        this._data = customerData
    }

    getRawData() {
        return this._data;
    }
}

function getCustomerData() {
    return customerData
}

function compareUsage(customerId: string, laterYear: string, month: string) {
    const later = getCustomerData()[customerId].usages[laterYear][month];
    const earlier = getCustomerData()[customerId].usages[String(Number(laterYear) - 1)][month];
    return {
        laterAmount: later,
        change: later - earlier,
    };
}

function setRawDataOfCustomers(rawData: CustomerRawData) {

}

function setUsage(customerId: string, year: string, month: string, amount: number) {
    getCustomerData()[customerId].usages[year][month] = amount
}

describe('Encapsulated customer data', function () {
    it("compare usage", () => {
        expect(compareUsage("1920", "2016", "2")).toEqual({
            laterAmount: 55,
            change: -8,
        })
    });

    it("set usage", () => {
        setUsage("1920", "2016", "2", 60)
        expect(compareUsage("1920", "2016", "2")).toEqual({
            laterAmount: 60,
            change: -3,
        })
    });


});
