class AlarmSystem {
    private static miscreants = ["Don", "John"];

    static setOffAlarms() {
        console.log("setOffAlarms");
    }

    private static findMiscreant(people: string[]) {
        return people.find((person) => this.miscreants.includes(person));
    }

    static alertForMiscreant(people: string[]) {
        const miscreant = this.findMiscreant(people);
        if (miscreant) {
            this.setOffAlarms();
        }
    }
}

describe("alertForMiscreant", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("should set off alarms when Don is found", () => {
        const setOffAlarmsSpy = jest.spyOn(AlarmSystem, "setOffAlarms");

        AlarmSystem.alertForMiscreant(["Don", "John"]);

        expect(setOffAlarmsSpy).toHaveBeenCalled();
    });

    it("should not set off alarms when no miscreant is found", () => {
        const setOffAlarmsSpy = jest.spyOn(AlarmSystem, "setOffAlarms");

        AlarmSystem.alertForMiscreant(["Alice", "Bob"]);

        expect(setOffAlarmsSpy).not.toHaveBeenCalled();
    });
});
