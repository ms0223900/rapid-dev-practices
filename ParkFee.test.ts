import {ParkFeeCalc} from "./ParkFeeCalc";

// 累進費率 kata
describe('Car Parking Fee', function () {
    let parkFeeCalc = new ParkFeeCalc();
    beforeEach(() => {
        parkFeeCalc = new ParkFeeCalc();
    });

    it('should be $10 if parking time is 1 minutes', () => {
        parkFeeCalc.addParkTime(1)
        expect(parkFeeCalc.getParkingFee()).toEqual(10)
    });

    it('should be $10 if parking time is 29 minutes', () => {
        parkFeeCalc.addParkTime(29)
        expect(parkFeeCalc.getParkingFee()).toEqual(10)
    });

    it('should be $10 if parking time is 30 minutes', () => {
        parkFeeCalc.addParkTime(30)
        expect(parkFeeCalc.getParkingFee()).toEqual(10)
    });

    it('should be $20 if parking time is 60 minutes', () => {
        parkFeeCalc.addParkTime(60)
        expect(parkFeeCalc.getParkingFee()).toEqual(20)
    });

    it('should be $40 if parking time is 61 minutes', () => {
        parkFeeCalc.addParkTime(61)
        expect(parkFeeCalc.getParkingFee()).toEqual(40)
    });


    it('should be $40 if parking time is 90 minutes', () => {
        parkFeeCalc.addParkTime(90)
        expect(parkFeeCalc.getParkingFee()).toEqual(40)
    });


    it('should be $60 if parking time is 119 minutes', () => {
        parkFeeCalc.addParkTime(119)
        expect(parkFeeCalc.getParkingFee()).toEqual(60)
    });

    it('should be $60 if parking time is 120 minutes', () => {
        parkFeeCalc.addParkTime(120)
        expect(parkFeeCalc.getParkingFee()).toEqual(60)
    });

});
