class RomanNumberConverter {
    convert(number: number) {
        let res = '';
        for (let i = 0; i < number; i++) {
            res += 'I'
        }
        return res;
    }
}

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


});
