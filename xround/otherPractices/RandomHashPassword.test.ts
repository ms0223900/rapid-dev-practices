class RandomHashPassword {
    generate() {
        const hashed = Math.random().toString(36).slice(2) + new Date().getTime().toString(36);
        const newHashed = this.makeOneCharacterUppercase(hashed);
        return newHashed;
    }

    private makeOneCharacterUppercase(hashed: string) {
        let newHashed = ''
        for (let i = 0; i < hashed.length; i++) {
            newHashed += hashed[i]
            if (hashed[i].match(/[a-z]/)) {
                newHashed += hashed[i].toUpperCase()
            }
        }
        return newHashed;
    }
}

describe('RandomHashPassword', function () {
    it('should get hash and always not same', () => {
        const randomHashPassword = new RandomHashPassword();
        const generatedPwd1 = randomHashPassword.generate();
        const generatedPwd2 = randomHashPassword.generate();
        expect(generatedPwd1).not.toEqual(generatedPwd2)
    });

    it('should include upper case character', () => {
        const randomHashPassword = new RandomHashPassword();
        const generatedPwd1 = randomHashPassword.generate();
        expect(generatedPwd1.match(/[A-Z]/)).not.toBeNull()
    });
});
