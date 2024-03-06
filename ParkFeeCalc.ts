export class ParkFeeCalc {
    private parkingTimeMin = 0;

    private firstHalfHourFee = 10;
    private secondHalfHourFee = 20;
    private thirdHalfHourFee = 30;
    private oneHourMin = 60;
    private parkingTimes = 0;

    addParkTime(min: number) {
        this.parkingTimeMin += min
    }

    getParkingFee() {
        if (this.parkingTimes <= 1 && this.parkingTimeMin < this.oneHourMin / 2) {
            return 0;
        }
        if (this.parkingTimeMin <= this.oneHourMin) {
            return this.getFirstHourFee();
        }
        if (this.parkingTimeMin <= this.oneHourMin * 2) {
            return this.getSecondHourFee() + this.getFirstHourFee();
        }
        return this.getFirstHourFee() + this.getSecondHourFee() + this.getThirdHourLaterFee();
    }

    addParkingTimes() {
        this.parkingTimes++
    }

    private getThirdHourLaterFee() {
        return this.thirdHalfHourFee * this.getHalfHourAmount(this.parkingTimeMin - this.oneHourMin * 2);
    }

    private getSecondHourFee() {
        const parkingTime = Math.min(this.oneHourMin, this.parkingTimeMin - this.oneHourMin);
        return this.secondHalfHourFee * this.getHalfHourAmount(parkingTime);
    }

    private getFirstHourFee() {
        const parkingTime = Math.min(this.oneHourMin, this.parkingTimeMin);
        return this.firstHalfHourFee * this.getHalfHourAmount(parkingTime);
    }

    private getHalfHourAmount(parkingTime: number) {
        return Math.ceil(parkingTime / 30);
    }
}
