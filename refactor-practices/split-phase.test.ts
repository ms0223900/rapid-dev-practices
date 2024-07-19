import { priceOrder } from "./priceOrder";

describe('price order', function () {
    it('should get correct price', () => {
        const actual = priceOrder({
            discountRate: 0.1,
            discountThreshold: 3,
            basePrice: 1000,
        }, 3, {
            feePerCase: 10,
            discountedFee: 10,
            discountThreshold: 2
        });

        const expected = 3030;
        expect(actual).toEqual(expected)

    });
});
