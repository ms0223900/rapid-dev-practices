interface CustomerInEnrichCase {
    isUnknown?: boolean;
    name: string;
    billingPlan: string;
    paymentHistory: {
        weeksDelinquentInLastYear: number;
    };
}

interface SiteInEnrichCase {
    name: string;
    location: string;
    customer: string | CustomerInEnrichCase
}

interface EnrichedSite extends SiteInEnrichCase {
    customer: CustomerInEnrichCase;
}
function isUnknown(customer: EnrichedSite["customer"] | string): customer is string {
    if (typeof customer === "string") {
        return customer === "unknown";
    }
    return customer.isUnknown ?? false;
}

const registry = {
    billingPlans: {
        basic: "basic-plan-451"
    }
}

function getCustomerName(site: EnrichedSite) {
    const customer = site.customer;
    if (isUnknown(customer)) {
        return "occupant";
    }
    return customer.name;
}

function getPlanForCustomer(site: EnrichedSite) {
    const customer = site.customer;
    if (isUnknown(customer)) {
        return registry.billingPlans.basic;
    }
    return customer.billingPlan;
}


function getWeeksDelinquentForCustomer(site: EnrichedSite) {
    const customer = site.customer;
    if (isUnknown(customer)) {
        return 0;
    }
    return customer.paymentHistory.weeksDelinquentInLastYear;
}

function enrichSite(site: SiteInEnrichCase): EnrichedSite {
    const res = global.structuredClone(site);
    const unknownCustomer: CustomerInEnrichCase = {
        isUnknown: true,
        name: "occupant",
        billingPlan: registry.billingPlans.basic,
        paymentHistory: {
            weeksDelinquentInLastYear: 0
        }
    };
    if (isUnknown(res.customer)) {
        res.customer = unknownCustomer;
        return res as EnrichedSite;
    }
    res.customer.isUnknown = false;
    return res as EnrichedSite;
}


describe("getCustomerName", () => {

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

    it("should return the name of the customer", () => {
        const enrichedSite1 = enrichSite(site1);
        expect(getCustomerName(enrichedSite1)).toBe("Acme Industries");

        const enrichedSite2 = enrichSite(site2);
        expect(getCustomerName(enrichedSite2)).toBe("occupant");
    });

    it("should return the plan for the customer", () => {
        const enrichedSite1 = enrichSite(site1);
        expect(getPlanForCustomer(enrichedSite1)).toBe("plan-451");

        const enrichedSite2 = enrichSite(site2);
        expect(getPlanForCustomer(enrichedSite2)).toBe("basic-plan-451");
    });

    it("should return the weeks delinquent for the customer", () => {
        const enrichedSite1 = enrichSite(site1);
        expect(getWeeksDelinquentForCustomer(enrichedSite1)).toBe(7);

        const enrichedSite2 = enrichSite(site2);
        expect(getWeeksDelinquentForCustomer(enrichedSite2)).toBe(0);
    });
});
