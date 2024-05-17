class RandomHashPassword {
    generate() {
        const hashed = Math.random().toString(36).slice(2) + new Date().getTime().toString(36);
        const newHashed = this.makeOneCharacterUppercase(hashed);
        return newHashed;
    }

    makeOneCharacterUppercase(text = '') {
        let res = ''
        let uppercaseCharAmount = 0
        for (let i = 0; i < text.length; i++) {
            let currentOriginChar = text[i];
            let currentChar: string;
            if (this.isLowerCaseChar(currentOriginChar) && uppercaseCharAmount === 0) {
                uppercaseCharAmount++
                currentChar = currentOriginChar.toUpperCase();
            } else {
                currentChar = currentOriginChar;
            }
            res += currentChar
        }
        return res;
    }

    isLowerCaseChar(char = '') {
        return char.match(/[a-z]/);
    }
}

describe('RandomHashPassword', function () {
    let randomHashPassword: RandomHashPassword;
    beforeEach(() => {
        randomHashPassword = new RandomHashPassword();
    });

    it('should get hash and always not same', () => {
        const generatedPwd1 = randomHashPassword.generate();
        const generatedPwd2 = randomHashPassword.generate();
        expect(generatedPwd1).not.toEqual(generatedPwd2)
    });

    it('should include upper case character', () => {
        const generatedPwd = randomHashPassword.generate();
        expect(generatedPwd.match(/[A-Z]/)).not.toBeNull()
    });

    it('should include at lease one lower case character', () => {
        const generatedPwd = randomHashPassword.generate();
        expect(generatedPwd.match(/[a-z]/)).not.toBeNull()
    });

});
