interface CustomerInEnrichCase {
    name: string;
    billingPlan: string;
    paymentHistory: {
        weeksDelinquentInLastYear: number;
    };
}

interface SiteInEnrichCase {
    name: string;
    location: string;
    customer: string | CustomerInEnrichCase;
}

const registry = {
    billingPlans: {
        basic: "basic-plan-451"
    }
}

const site1: SiteInEnrichCase = {
    name: "Acme Boston",
    location: "Malden MA",
    customer: {
        name: "Acme Industries",
        billingPlan: "plan-451",
        paymentHistory: {
            weeksDelinquentInLastYear: 7
        },
    }
}

const site2 = {
    name: "Acme Dallas",
    location: "Dallas TX",
    customer: "unknown"
}

function isUnknown(customer: string | CustomerInEnrichCase): customer is string {
    return typeof customer === "string" && customer === "unknown";
}

function getCustomerName(site: SiteInEnrichCase) {
    const customer = site.customer;
    if (isUnknown(customer)) {
        return "occupant";
    }
    return customer.name;
}

function getPlanForCustomer(site: SiteInEnrichCase) {
    const customer = site.customer;
    if (isUnknown(customer)) {
        return registry.billingPlans.basic;
    }
    return customer.billingPlan;
}


function getWeeksDelinquentForCustomer(site: SiteInEnrichCase) {
    const customer = site.customer;
    if (isUnknown(customer)) {
        return 0;
    }
    return customer.paymentHistory.weeksDelinquentInLastYear;
}



describe("getCustomerName", () => {
    it("should return the name of the customer", () => {
        expect(getCustomerName(site1)).toBe("Acme Industries");
        expect(getCustomerName(site2)).toBe("occupant");
    });

    it("should return the plan for the customer", () => {
        expect(getPlanForCustomer(site1)).toBe("plan-451");
        expect(getPlanForCustomer(site2)).toBe("basic-plan-451");
    });

    it("should return the weeks delinquent for the customer", () => {
        expect(getWeeksDelinquentForCustomer(site1)).toBe(7);
        expect(getWeeksDelinquentForCustomer(site2)).toBe(0);
    });
});
