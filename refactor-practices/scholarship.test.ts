function getAvg(scores: number[]) {
    return scores.reduce((prev, next) => prev + next, 0) / scores.length;
}

function getScholarship(scores: number[]) {
    const avgScoreScholarshipList = [
        {
            avg: 97,
            scholarship: 2000,
        },
        {
            avg: 90,
            scholarship: 1500,
        },
        {
            avg: 80,
            scholarship: 1000,
        },
    ];
    for (let i = 0; i < avgScoreScholarshipList.length; i++) {
        const avgScholar = avgScoreScholarshipList[i];
        if (getAvg(scores) >= avgScholar.avg) {
            return avgScholar.scholarship;
        }
    }
    return 0
}

describe('Scholarship', function () {
    it('should not get scholarship if less than 80.', () => {
        expect(getScholarship([79, 80])).toEqual(0)
    });

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

    it('should get $2000 if courses scores average more than 97.', () => {
        expect(getScholarship([97, 98])).toEqual(2000)
    });


});
