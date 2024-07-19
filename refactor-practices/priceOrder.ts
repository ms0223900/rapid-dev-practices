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

function applyShipping(shippingMethod: ShippingMethod, quantity: number, {basePrice, discount}: {
    basePrice: number;
    discount: number
}) {
    const shippingCost = ((basePrice > shippingMethod.discountThreshold)
        ? shippingMethod.discountedFee : shippingMethod.feePerCase) * quantity;
    return basePrice - discount + shippingCost;
}

export function priceOrder(product: Product, quantity: number, shippingMethod: ShippingMethod) {
    const basePrice = product.basePrice * quantity;
    const discount = Math.max(quantity - product.discountThreshold, 0)
        * product.basePrice * product.discountRate;
    const priceData = {basePrice, discount};
    return applyShipping(shippingMethod, quantity, priceData);
}
