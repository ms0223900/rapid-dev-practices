interface BillingPlan {
    name: string;
    plan: string;
}

const billingPlan = {
    basic: {
        name: "basic",
        plan: "basic"
    }
}

interface PaymentHistory {
    getWeeksDelinquent(): number;
}

class CustomerPaymentHistory implements PaymentHistory {
    getWeeksDelinquent(): number {
        return 100
    }
}

class SpecialCaseCustomer {
    private _name: string;

    constructor(_name: string) {
        this._name = _name;
    }

    get name() {
        return this._name;
    }

    get customerName() {
        return this.name;
    }

    get isUnknown() {
        return false;
    }

    getBillingPlan(): BillingPlan {
        return {
            name: "mock",
            plan: "mock"
        };
    }

    get paymentHistory() {
        return new CustomerPaymentHistory();
    }
}

class UnknownCustomer {
    get name() {
        return "unknown";
    }

    get customerName() {
        return "occupant";
    }

    get isUnknown() {
        return true;
    }

    getBillingPlan(): BillingPlan {
        return billingPlan.basic;
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
    return arg.isUnknown;
}

function getPlan(customer: SpecialCaseCustomer | UnknownCustomer): BillingPlan {
    return customer.getBillingPlan();
}

function getWeeksDelinquent(customer: SpecialCaseCustomer | UnknownCustomer): number {
    return isUnknown(customer) ? 0 : (customer as SpecialCaseCustomer).paymentHistory.getWeeksDelinquent();
}

describe('special case', () => {
    it('should return true if the customer is "unknown"', () => {
        const site = new Site(new SpecialCaseCustomer("unknown"));
        const customer = site.customer;

        expect(getWeeksDelinquent(customer)).toBe(0);
        expect(getPlan(customer)).toEqual(billingPlan.basic);
        expect(customer.customerName).toBe("occupant");
        expect(isUnknown(customer)).toBe(true);
    });

    it('should return false if the customer is not "unknown"', () => {
        const site = new Site(new SpecialCaseCustomer("abc"));
        const customer = site.customer;

        expect(getWeeksDelinquent(customer)).toBe(100);
        expect(getPlan(customer)).toEqual({
            name: "mock",
            plan: "mock"
        });
        expect(customer.customerName).toBe("abc");
        expect(isUnknown(customer)).toBe(false);
    });

    it('should throw an error if the customer is not a SpecialCaseCustomer or UnknownCustomer', () => {
        expect(() => isUnknown("abc" as any)).toThrow();
    });
});
