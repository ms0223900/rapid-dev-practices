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
    }
}

describe("alertForMiscreant", () => {
    it("should set off alarms when Don is found", () => {
        const setOffAlarmsSpy = jest.spyOn(AlarmSystem, "setOffAlarms");

        AlarmSystem.alertForMiscreant(["Don", "John"]);

        expect(setOffAlarmsSpy).toHaveBeenCalled();
    });
});