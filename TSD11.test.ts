class Tennis {
    getScore() {
        return 'love all';

    }
}

describe('Tennis Score', function () {
    it('hi', () => {
        const tennis = new Tennis();
        expect(tennis.getScore()).toEqual('love all')
    });
});
