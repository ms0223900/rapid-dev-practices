export class ParkFeeCalc {
    private parkingTime = 0;

    private firstHalfHourFee = 10;
    private secondHalfHourFee = 20;
    private thirdHalfHourFee = 30;
    private oneHourMin = 60;

    addParkTime(min: number) {
        this.parkingTime += min
    }

    getParkingFee() {
        if (this.parkingTime <= this.oneHourMin) {
            return this.getFirstHourFee();
        }
        if (this.parkingTime <= this.oneHourMin * 2) {
            return this.getSecondHourFee() + this.getFirstHourFee();
        }
        return this.getFirstHourFee() + this.getSecondHourFee() + this.getThirdHourLaterFee();
    }

    private getThirdHourLaterFee() {
        return this.thirdHalfHourFee * this.getHalfHourAmount(this.parkingTime - this.oneHourMin * 2);
    }

    private getSecondHourFee() {
        const parkingTime = Math.min(this.oneHourMin, this.parkingTime - this.oneHourMin);
        return this.secondHalfHourFee * this.getHalfHourAmount(parkingTime);
    }

    private getFirstHourFee() {
        const parkingTime = Math.min(this.oneHourMin, this.parkingTime);
        return this.firstHalfHourFee * this.getHalfHourAmount(parkingTime);
    }

    private getHalfHourAmount(parkingTime: number) {
        return Math.ceil(parkingTime / 30);
    }
}
