export class ParkFeeCalc {
    private parkingTime = 0;
    private firstHourFee = 10;

    addParkTime(min: number) {
        this.parkingTime += min
    }

    getParkingFee() {
        if (this.parkingTime <= 60) {
            return this.firstHourFee * this.getHalfHourAmount();
        }
        if (this.parkingTime > 90) {
            return 60;
        }
        if (this.parkingTime >= 61) {
            return 40;
        }
    }

    private getHalfHourAmount() {
        return Math.ceil(this.parkingTime / 30);
    }
}
