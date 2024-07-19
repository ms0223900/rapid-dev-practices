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

function applyShipping(shippingMethod: ShippingMethod, quantity: number, discount: number, {basePrice}: {
    basePrice: number
}) {
    const shippingCost = ((basePrice > shippingMethod.discountThreshold)
        ? shippingMethod.discountedFee : shippingMethod.feePerCase) * quantity;
    return basePrice - discount + shippingCost;
}

export function priceOrder(product: Product, quantity: number, shippingMethod: ShippingMethod) {
    const basePrice = product.basePrice * quantity;
    const discount = Math.max(quantity - product.discountThreshold, 0)
        * product.basePrice * product.discountRate;
    let priceData = {basePrice};
    return applyShipping(shippingMethod, quantity, discount, priceData);
}
