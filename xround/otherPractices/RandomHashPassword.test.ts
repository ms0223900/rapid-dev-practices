class RandomHashPassword {
    generate({
                 withSpecialChar = false,
                 length = 8,
             } = {
        withSpecialChar: false as boolean,
        length: 8,
    }) {
        let hashed: string;
        hashed = Math.random().toString(36).slice(2) + new Date().getTime().toString(36);
        hashed = hashed.slice(0, withSpecialChar ? length - 1 : length)
        hashed += withSpecialChar ? this.#getSpecialChar() : ''
        const newHashed = this.makeOneCharacterUppercase(hashed);
        return newHashed;
    }

    makeOneCharacterUppercase(text = '') {
        let res = ''
        for (let i = 0; i < text.length; i++) {
            const currentChar = this.#getCurrentChar(text[i], res);
            res += currentChar
        }
        return res;
    }

    // @ts-ignore
    #getSpecialChar() {
        return ['&', '.', '_', '-'][0];
    }

    // @ts-ignore
    #getCurrentChar(currentOriginChar = '', currentAllText = '') {
        if (this.#isNoneAlphabetUppercased(currentAllText)) {
            return currentOriginChar.toUpperCase();
        } else {
            return currentOriginChar;
        }
    }

    // @ts-ignore
    #isNoneAlphabetUppercased(currentAllText = '') {
        return currentAllText.match(/[A-Z]/) === null;
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
        // console.log("generatedPwd: ", generatedPwd);
        expect(generatedPwd.match(/[a-z]/)).not.toBeNull()
    });

    it('can have special char', () => {
        const generatedPwd = randomHashPassword.generate({
            withSpecialChar: true
        });
        // console.log("generatedPwd: ", generatedPwd);
        expect(generatedPwd.match(/[&._-]/)).not.toBeNull()
    });

    it('can assign length', () => {
        const generatedPwd = randomHashPassword.generate({
            withSpecialChar: true,
            length: 15,
        });
        console.log("generatedPwd: ", generatedPwd);
        expect(generatedPwd.match(/[&._-]/)).not.toBeNull()
        expect(generatedPwd).toHaveLength(15)
    });

    it('can assign small length', () => {
        const generatedPwd = randomHashPassword.generate({
            length: 4,
        });
        expect(generatedPwd).toHaveLength(4)
    });


});
