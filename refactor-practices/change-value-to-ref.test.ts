interface CustomerData2 {
    customerId: number;
    name: string;
}

class Customer2 {
    private _customerId: number;
    private _name: string;

    constructor(data: CustomerData2) {
        this._customerId = data.customerId;
        this._name = data.name;
    }

    get customerId(): number {
        return this._customerId;
    }

    get name(): string {
        return this._name;
    }
}

interface OrderData {
    orderNumber: number;
    customerData: CustomerData2;
}

class CustomerOrder {
    getCustomer() {
        throw new Error("Method not implemented.");
    }
    private _orderNumber: number;
    private _customer: Customer2;

    constructor(data: OrderData) {
        this._orderNumber = data.orderNumber;
        this._customer = new Customer2(data.customerData);
    }

    get orderNumber(): number {
        return this._orderNumber;
    }

    set orderNumber(value: number) {
        this._orderNumber = value;
    }

    get customer(): Customer2 {
        return this._customer;
    }

    set customer(value: Customer2) {
        this._customer = value;
    }
}

describe('change-value-to-ref', () => {
    it('should change value to ref', () => {
        const order = new CustomerOrder({
            orderNumber: 1,
            customerData: {
                customerId: 1,
                name: 'John Doe',
            },
        });

        expect(order.customer.name).toBe('John Doe');
        expect(order.customer.customerId).toBe(1);
    });
});
