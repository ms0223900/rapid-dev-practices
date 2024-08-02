function getAvg(scores: number[]) {
    return scores.reduce((prev, next) => prev + next, 0) / scores.length;
}

function getScholarship(scores: number[]) {
    if (getAvg(scores) >= 90) {
        return 1500;
    }
    return 1000;
}

describe('Scholarship', function () {
    it('should get $1000 if courses scores average more than 80.', () => {
        expect(getScholarship([80, 80])).toEqual(1000)
    });

    it('should get $1000 if courses scores average more than 80.(avg is 81)', () => {
        expect(getScholarship([80, 82])).toEqual(1000)
    });

    it('should get $1500 if courses scores average more than 90.', () => {
        expect(getScholarship([80, 100])).toEqual(1500)
    });

    it('should get $1500 if courses scores average more than 90.(3 courses)', () => {
        expect(getScholarship([80, 90, 100])).toEqual(1500)
    });


});
