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

class Price {
    private _price: number;

    constructor(price: number) {
        this._price = price
    }

    toNumber() {
        return this._price;
    }

    higherOrEqual(price: Price) {
        return this._price >= price.toNumber();
    }

    lowerOrEqual(price: Price) {
        return this._price <= price.toNumber();
    }

    isBetween(price: Price, price2: Price) {
        return this.higherOrEqual(price) && this.lowerOrEqual(price2);
    }
}

class Order {
    constructor(data: { price: number; priority: string }) {
        this._priority = new Priority(data.priority)
        this._price = new Price(data.price)
    }

    private _price: Price;

    get price() {
        return this._price;
    }

    private _priority: Priority;

    get priority() {
        return this._priority;
    }
}

function getHighPriorityOrdersCount(orders: Order[]) {
    return orders.filter(order => order.priority.higherThan(new Priority("normal"))).length;
}

function getOrdersByPriceRange(orders: Order[], priceRange: number[]) {
    return orders.filter(order => order.price.isBetween(new Price(priceRange[0]), new Price(priceRange[1])));
}

function orders() {
    const order1 = new Order({priority: "normal", price: 100});
    const order2 = new Order({priority: "high", price: 200});
    const order3 = new Order({priority: "rush", price: 300});

    const orders = [order1, order2, order3];
    return orders;
}

describe('Replace primitive with object', function () {
    it('should filter by priority', () => {
        const orders1 = orders();
        const highPriorityCount = getHighPriorityOrdersCount(orders1);

        expect(highPriorityCount).toEqual(2)
    });

    it('should get order by price range', () => {
        const orders1 = orders();
        const ordersByPriceRange = getOrdersByPriceRange(orders1, [150, 250]);

        expect(ordersByPriceRange.length).toEqual(1)
    });


});
