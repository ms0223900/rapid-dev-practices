export class RomanNumberConverter {
    romanNumLookUp = {
        4: 'IV',
    }

    private romanNumLookUpArr = [
        {
            romanStr: 'XL',
            num: 40,
        },
        {
            romanStr: 'X',
            num: 10,
        },
        {
            romanStr: 'IX',
            num: 9,
        },
        {
            romanStr: 'V',
            num: 5,
        },
        {
            romanStr: 'IV',
            num: 4,
        },
        {
            romanStr: 'I',
            num: 1,
        },
    ];

    convert(number: number) {
        let _num = number;
        let res = '';
        for (let i = 0; i < this.romanNumLookUpArr.length; i++) {
            const {romanStr, num} = this.romanNumLookUpArr[i];
            while (_num - num >= 0) {
                res += romanStr
                _num -= num
            }
        }
        return res;
    }
}
