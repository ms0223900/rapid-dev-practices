export class ParkFeeCalc {
    private parkingTime = 0;

    private firstHalfHourFee = 10;
    private secondHalfHourFee = 20;
    private thirdHalfHourFee = 30;

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
        return this.getFirstHourFee() + this.getSecondHourFee() + this.getThirdHourLaterFee();
        if (this.parkingTime > 120) {
            return 90;
        }
    }

    private getThirdHourLaterFee() {
        return this.thirdHalfHourFee * this.getHalfHourAmount(this.parkingTime - 120);
    }

    private getSecondHourFee() {
        const parkingTime = Math.min(60, this.parkingTime - 60);
        return this.secondHalfHourFee * this.getHalfHourAmount(parkingTime);
    }

    private getFirstHourFee() {
        const parkingTime = Math.min(60, this.parkingTime);
        return this.firstHalfHourFee * this.getHalfHourAmount(parkingTime);
    }

    private getHalfHourAmount(parkingTime: number) {
        return Math.ceil(parkingTime / 30);
    }
}
