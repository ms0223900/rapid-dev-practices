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

export function priceOrder(product: Product, quantity: number, shippingMethod: ShippingMethod) {
    const basePrice = product.basePrice * quantity;
    const discount = getDiscount(product, quantity);
    const shippingCost = getShippingPerCase(basePrice, shippingMethod) * quantity;
    return basePrice - discount + shippingCost;
}
