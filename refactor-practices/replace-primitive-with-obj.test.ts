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
    constructor(data: { priority: string }) {
        this._priority = new Priority(data.priority)
    }

    private _priority: Priority;

    get priority() {
        return this._priority;
    }

    get priorityString() {
        return this._priority.toString();
    }
}

describe('Replace primitive with object', function () {
    it('should filter by priority', () => {
        const order1 = new Order({ priority: "normal" });
        const order2 = new Order({ priority: "high" });
        const order3 = new Order({ priority: "rush" });
        const orders = [order1, order2, order3];
        // const highPriorityCount = orders.filter(order => order.priorityString === "high" || order.priorityString === "rush").length;
        const highPriorityCount = orders.filter(order => order.priority.higherThan(new Priority("normal"))).length;

        expect(highPriorityCount).toEqual(2)
    });
});
