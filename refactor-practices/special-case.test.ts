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

class NullCustomerPaymentHistory implements PaymentHistory {
    getWeeksDelinquent(): number {
        return 0;
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

    get paymentHistory(): PaymentHistory {
        return new NullCustomerPaymentHistory();
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

function getPlan(customer: SpecialCaseCustomer | UnknownCustomer): BillingPlan {
    return customer.getBillingPlan();
}

function getWeeksDelinquent(customer: SpecialCaseCustomer | UnknownCustomer): number {
    return customer.paymentHistory.getWeeksDelinquent();
}

describe('special case', () => {
    it('should return true if the customer is "unknown"', () => {
        const site = new Site(new SpecialCaseCustomer("unknown"));
        const customer = site.customer;

        expect(getWeeksDelinquent(customer)).toBe(0);
        expect(getPlan(customer)).toEqual(billingPlan.basic);
        expect(customer.customerName).toBe("occupant");
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
    });
});
