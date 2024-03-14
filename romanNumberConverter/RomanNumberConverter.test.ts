import { RomanNumberConverter } from "./RomanNumberConverter";

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


    it('be IX if 9', () => {
        expect(romanNumberConverter.convert(9)).toBe('IX')
    });


    it('be X if 10', () => {
        expect(romanNumberConverter.convert(10)).toBe('X')
    });


    it('be XI if 11', () => {
        expect(romanNumberConverter.convert(11)).toBe('XI')
    });


    it('be XII if 12', () => {
        expect(romanNumberConverter.convert(12)).toBe('XII')
    });


    it('be XIII if 13', () => {
        expect(romanNumberConverter.convert(13)).toBe('XIII')
    });


    it('be XIV if 14', () => {
        expect(romanNumberConverter.convert(14)).toBe('XIV')
    });


    it('be XV if 15', () => {
        expect(romanNumberConverter.convert(15)).toBe('XV')
    });


    it('be XIX if 19', () => {
        expect(romanNumberConverter.convert(19)).toBe('XIX')
    });

    it('be XX if 20', () => {
        expect(romanNumberConverter.convert(20)).toBe('XX')
    });


    it('be XXI if 21', () => {
        expect(romanNumberConverter.convert(21)).toBe('XXI')
    });


    it('be XXI if 21', () => {
        expect(romanNumberConverter.convert(21)).toBe('XXI')
    });


    it('be XL if 40', () => {
        expect(romanNumberConverter.convert(40)).toBe('XL')
    });


});
