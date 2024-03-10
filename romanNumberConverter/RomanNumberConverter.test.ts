import {RomanNumberConverter} from "./RomanNumberConverter";

describe('Roman Number Converter', function () {
    let romanNumberConverter = new RomanNumberConverter();
    beforeEach(() => {
        romanNumberConverter = new RomanNumberConverter();
    });

    it('be I if 1', () => {
        expect(romanNumberConverter.convert(1)).toBe('I')
    });

    it('be II if 2', () => {
        expect(romanNumberConverter.convert(2)).toBe('II')
    });


    it('be III if 3', () => {
        expect(romanNumberConverter.convert(3)).toBe('III')
    });


    it('be IV if 4', () => {
        expect(romanNumberConverter.convert(4)).toBe('IV')
    });


    it('be V if 5', () => {
        expect(romanNumberConverter.convert(5)).toBe('V')
    });


    it('be VI if 6', () => {
        expect(romanNumberConverter.convert(6)).toBe('VI')
    });


    it('be VII if 7', () => {
        expect(romanNumberConverter.convert(7)).toBe('VII')
    });


    it('be VIII if 8', () => {
        expect(romanNumberConverter.convert(8)).toBe('VIII')
    });


});
