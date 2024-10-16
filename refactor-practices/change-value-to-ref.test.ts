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

    constructor(data: OrderData, customerRepository: CustomerRepository) {
        this._orderNumber = data.orderNumber;
        customerRepository.create(data.customerData);
        this._customer = customerRepository.getCustomer(data.customerData.customerId);
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

interface CustomerRepository {
    create(customerData: CustomerData2): unknown;
    getCustomer(customerId: number): Customer2;
}

class CustomerRepositoryImpl implements CustomerRepository {
    private _customers: Map<number, Customer2> = new Map();

    getCustomer(customerId: number): Customer2 {
        return this._customers.get(customerId);
    }

    create(customerData: CustomerData2): void {
        if (!this._customers.has(customerData.customerId)) {
            this._customers.set(customerData.customerId, new Customer2(customerData));
        }
    }
}

describe('change-value-to-ref', () => {
    it('should change value to ref', () => {
        const customerRepository = new CustomerRepositoryImpl();
        const order = new CustomerOrder({
            orderNumber: 1,
            customerData: {
                customerId: 1,
                name: 'John Doe',
            },
        }, customerRepository);

        expect(order.customer.name).toBe('John Doe');
        expect(order.customer.customerId).toBe(1);
    });

    it('should only one customer with same customerId', () => {
        const customerRepository = new CustomerRepositoryImpl();

        const order = new CustomerOrder({
            orderNumber: 1,
            customerData: {
                customerId: 1,
                name: 'John Doe',
            },
        }, customerRepository);

        const order2 = new CustomerOrder({
            orderNumber: 2,
            customerData: {
                customerId: 1,
                name: 'John Doe 2',
            },
        }, customerRepository);

        expect(order2.customer.name).toBe('John Doe');
        expect(order2.customer.customerId).toBe(1);
    });
});