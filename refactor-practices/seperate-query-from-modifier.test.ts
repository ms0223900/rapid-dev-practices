class AlarmSystem {
    static setOffAlarms() {
        console.log("setOffAlarms");
    }

    static findMiscreant(people: string[]) {
        return people.find((person) => person === "Don" || person === "John");
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
