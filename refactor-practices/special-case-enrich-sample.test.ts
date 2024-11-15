interface NormalCustomer {
    name: string;
    billingPlan: string;
    paymentHistory: {
        weeksDelinquentInLastYear: number;
    };
}

interface SiteInEnrichCase {
    name: string;
    location: string;
    customer: string | NormalCustomer;
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

function getCustomerName(site: SiteInEnrichCase) {
    const customer = site.customer;
    if (customer === "unknown") {
        return "occupant";
    }
    return (customer as NormalCustomer).name;
}

describe("getCustomerName", () => {
    it("should return the name of the customer", () => {
        expect(getCustomerName(site1)).toBe("Acme Industries");
        expect(getCustomerName(site2)).toBe("occupant");
    });
});