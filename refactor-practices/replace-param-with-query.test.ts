class OrderInReplaceParamWithQuery {
    constructor(private quantity: number, private itemPrice: number) { }

    get finalPrice() {
        const basePrice = this.quantity * this.itemPrice;
        return this.discountedPrice(basePrice);
    }

    discountedPrice(basePrice: number) {
        switch (this.discountLevel) {
            case 1: return basePrice * 0.95;
            case 2: return basePrice * 0.9;
        }
    }

    get discountLevel() {
        return this.quantity > 100 ? 2 : 1;
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
