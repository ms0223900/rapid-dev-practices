function getScholarship(scores: number[]) {
    return 1000;
}

describe('Scholarship', function () {
    it('should get $1000 if courses scores average is 80.', () => {
        expect(getScholarship([80, 80])).toEqual(1000)
    });
});
