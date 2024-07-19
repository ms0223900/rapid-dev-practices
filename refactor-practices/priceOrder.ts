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

interface PriceData {
    basePrice: number;
    discount: number;
}

function applyShipping(shippingMethod: ShippingMethod, quantity: number, {basePrice, discount}: PriceData) {
    const shippingCost = ((basePrice > shippingMethod.discountThreshold)
        ? shippingMethod.discountedFee : shippingMethod.feePerCase) * quantity;
    return basePrice - discount + shippingCost;
}

function calculatePriceData(product: Product, quantity: number) {
    const basePrice = product.basePrice * quantity;
    const discount = Math.max(quantity - product.discountThreshold, 0)
        * product.basePrice * product.discountRate;
    return {basePrice, discount};
}

export function priceOrder(product: Product, quantity: number, shippingMethod: ShippingMethod) {
    const priceData = calculatePriceData(product, quantity);
    return applyShipping(shippingMethod, quantity, priceData);
}
