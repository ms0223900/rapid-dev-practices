export class ParkFeeCalc {
    private parkingTime = 0;

    private firstHalfHourFee = 10;
    private secondHalfHourFee = 20;

    addParkTime(min: number) {
        this.parkingTime += min
    }

    getParkingFee() {
        if (this.parkingTime <= 60) {
            return this.getFirstHourFee();
        }
        if (this.parkingTime <= 120) {
            return this.getSecondHourFee() + this.getFirstHourFee();
        }
        if (this.parkingTime > 120) {
            return 90;
        }
    }

    private getSecondHourFee() {
        return this.secondHalfHourFee * this.getHalfHourAmount(this.parkingTime - 60);
    }

    private getFirstHourFee() {
        const parkingTime = Math.min(60, this.parkingTime);
        return this.firstHalfHourFee * this.getHalfHourAmount(parkingTime);
    }

    private getHalfHourAmount(parkingTime: number) {
        return Math.ceil(parkingTime / 30);
    }
}
