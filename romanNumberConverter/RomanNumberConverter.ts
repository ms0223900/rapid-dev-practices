export class RomanNumberConverter {
    romanNumLookUp = {
        4: 'IV',
    }

    convert(number: number) {
        // let romanNumLookUpArrs = [{
        //     num: 4,
        //     romanStr: 'IV',
        // }];
        // let res = ''
        // for (let i = 0; i < romanNumLookUpArrs.length; i++) {
        //     const repeatTimes = number / romanNumLookUpArrs[i].num;
        //     res += romanNumLookUpArrs[i].romanStr
        //
        // }
        if (number < 10) {
            return this.getNumberUnder10(number);
        }
        return 'X' + this.getNumberUnder10(number - 10);
    }

    private getNumberUnder10(number: number) {
        // TODO, refactor from here
        if (number < 4) {
            return this.getIFromNum(number);
        }
        if (number === 4) {
            return 'IV';
        }
        if (number === 9) {
            return 'IX';
        }
        return 'V' + this.getIFromNum(number - 5);
    }

    private getIFromNum(number: number) {
        return Array(number).fill(0).map(() => 'I').join('');
    }
}
