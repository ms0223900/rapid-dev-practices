interface Product {
    discountRate: number;
    discountThreshold: number;
    basePrice: number;
}

interface ShippingMethod {
    feePerCase: number;
    discountedFee: number;
    discountThreshold: number;
}

function getDiscount(product: Product, quantity: number) {
    return Math.max(quantity - product.discountThreshold, 0)
        * product.basePrice * product.discountRate;
}

function getShippingPerCase(basePrice: number, shippingMethod: ShippingMethod) {
    return (basePrice > shippingMethod.discountThreshold)
        ? shippingMethod.discountedFee : shippingMethod.feePerCase;
}

function priceOrder(product: Product, quantity: number, shippingMethod: ShippingMethod) {
    const basePrice = product.basePrice * quantity;
    const discount = getDiscount(product, quantity);
    const shippingCost = getShippingPerCase(basePrice, shippingMethod) * quantity;
    return basePrice - discount + shippingCost;
}

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
