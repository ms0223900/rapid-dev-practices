class AlarmSystem {
    static setOffAlarms() {
        console.log("setOffAlarms");
    }

    static alertForMiscreant(people: string[]) {
        for (const p of people) {
            if (p === "Don" || p === "John") {
                this.setOffAlarms();
                return;
            }
        }
        return;
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
