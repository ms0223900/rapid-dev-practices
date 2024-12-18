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

const getCustomerName = (site: EnrichedSite) => site.customer.name;

const getPlanForCustomer = (site: EnrichedSite) => site.customer.billingPlan;

const getWeeksDelinquentForCustomer = (site: EnrichedSite) => site.customer.paymentHistory.weeksDelinquentInLastYear;

function enrichSite(site: SiteInEnrichCase): EnrichedSite {
    const res = global.structuredClone(site) as EnrichedSite;

    if (isUnknown(res.customer)) {
        const unknownCustomer: CustomerInEnrichCase = {
            isUnknown: true,
            name: "occupant",
            billingPlan: registry.billingPlans.basic,
            paymentHistory: {
                weeksDelinquentInLastYear: 0
            }
        };

        res.customer = unknownCustomer;
        return res;
    }

    res.customer.isUnknown = false;
    return res;
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
