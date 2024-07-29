class Order {
    constructor(data: { priority: string }) {
        this._priority = data.priority
    }

    private _priority: string;

    get priority() {
        return this._priority;
    }

}

describe('Replace primitive with object', function () {
    it('should filter by priority', () => {
        const order1 = new Order({ priority: "normal" });
        const order2 = new Order({ priority: "high" });
        const order3 = new Order({ priority: "rush" });
        const orders = [order1, order2, order3];
        const highPriorityCount = orders.filter(order => order.priority === "high" || order.priority === "rush").length;

        expect(highPriorityCount).toEqual(2)
    });
});
