class Priority {
    private _val: string;

    constructor(val: string) {
        this._val = val
    }

    private static legalValues() {
        return ["low", "normal", "high", "rush"];
    }

    toString() {
        return this._val;
    }

    higherThan(other: Priority) {
        return this.getIndex() > other.getIndex();
    }

    private getIndex() {
        return Priority.legalValues().findIndex(val => val === this._val);
    }
}

class Order {
    constructor(data: { price: number; priority: string }) {
        this._priority = new Priority(data.priority)
        this._price = data.price
    }

    private _price: number;

    get price() {
        return this._price;
    }

    private _priority: Priority;

    get priority() {
        return this._priority;
    }

    get priorityString() {
        return this._priority.toString();
    }
}

function getHighPriorityOrdersCount(orders: Order[]) {
    return orders.filter(order => order.priority.higherThan(new Priority("normal"))).length;
}

function getOrdersByPriceRange(orders: Order[], priceRange: number[]) {
    return orders.filter(order => order.price >= priceRange[0] && order.price <= priceRange[1]);
}

describe('Replace primitive with object', function () {
    it('should filter by priority', () => {
        const order1 = new Order({priority: "normal", price: 100});
        const order2 = new Order({priority: "high", price: 200});
        const order3 = new Order({priority: "rush", price: 300});

        const orders = [order1, order2, order3];
        const highPriorityCount = getHighPriorityOrdersCount(orders);

        expect(highPriorityCount).toEqual(2)
    });

    it('should get order by price range', () => {
        const order1 = new Order({priority: "normal", price: 100});
        const order2 = new Order({priority: "high", price: 200});
        const order3 = new Order({priority: "rush", price: 300});

        const orders = [order1, order2, order3];
        const ordersByPriceRange = getOrdersByPriceRange(orders, [150, 250]);

        expect(ordersByPriceRange.length).toEqual(1)
    });


});
