class ProductPlan {
    products: { amount: number }[];
    totalAmount: number = 0;
    
    constructor() {
        this.products = [];
    }

    addProduct(amount: number) {
        this.products.push({ amount });
        this.totalAmount += amount;
    }

    removeProduct(amount: number) {
        this.products.pop();
        this.totalAmount -= amount;
    }

    getTotalAmount(): number {
        return this.totalAmount;
    }
}

// derived variable
class ProductPlan2 {
    products: { amount: number }[];
    
    constructor() {
        this.products = [];
    }

    addProduct(amount: number) {
        this.products.push({ amount });
    }

    removeProduct(amount: number) {
        this.products.pop();
    }

    getTotalAmount(): number {
        return this.products.reduce((total, product) => total + product.amount, 0);
    }
}

describe('ProductPlan', () => {
    it('should calculate total amount correctly', () => {
        const plan = new ProductPlan();
        plan.addProduct(100);
        plan.addProduct(200);
        const total = plan.getTotalAmount();
        expect(total).toBe(300); // 驗證總金額為 300
    });
});

describe('ProductPlan2', () => {
    it('should calculate total amount correctly', () => {
        const plan = new ProductPlan2();
        plan.addProduct(100);
        plan.addProduct(200);
        const total = plan.getTotalAmount();
        expect(total).toBe(300); // 驗證總金額為 300
    });
});