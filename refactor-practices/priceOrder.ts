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
    quantity: number
}

export function priceOrder(product: Product, quantity: number, shippingMethod: ShippingMethod) {
    const priceData = calculatePriceData(product, quantity);
    return applyShipping(shippingMethod, priceData);
}

function applyShipping(shippingMethod: ShippingMethod, {basePrice, discount, quantity}: PriceData) {
    const shippingCost = ((basePrice > shippingMethod.discountThreshold)
        ? shippingMethod.discountedFee : shippingMethod.feePerCase) * quantity;
    return basePrice - discount + shippingCost;
}

function calculatePriceData(product: Product, quantity: number): PriceData {
    const basePrice = product.basePrice * quantity;
    const discount = Math.max(quantity - product.discountThreshold, 0)
        * product.basePrice * product.discountRate;
    return {basePrice, discount, quantity};
}
