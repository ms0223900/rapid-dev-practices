class OrderInReplaceParamWithQuery {
    constructor(private quantity: number, private itemPrice: number) { }

    get finalPrice() {
        const basePrice = this.quantity * this.itemPrice;
        let discountLevel: number;
        if (this.quantity > 100) discountLevel = 2;
        else discountLevel = 1;
        return this.discountedPrice(basePrice, discountLevel);
    }

    discountedPrice(basePrice: number, discountLevel: number) {
        switch (discountLevel) {
            case 1: return basePrice * 0.95;
            case 2: return basePrice * 0.9;
        }
    }
}

describe("OrderInReplaceParamWithQuery", () => {
    it("should return 95 when quantity is 100 and itemPrice is 1", () => {
        expect(new OrderInReplaceParamWithQuery(100, 1).finalPrice).toBe(95);
    });

    it("should return 180 when quantity is 200 and itemPrice is 1", () => {
        expect(new OrderInReplaceParamWithQuery(200, 1).finalPrice).toBe(180);
    });
});
