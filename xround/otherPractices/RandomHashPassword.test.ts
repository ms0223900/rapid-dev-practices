import { RandomHashPassword } from "./RandomHashPassword";

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
