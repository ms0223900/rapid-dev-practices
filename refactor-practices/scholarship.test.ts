function getAvg(scores: number[]) {
    return scores.reduce((prev, next) => prev + next, 0) / scores.length;
}

class ScholarshipCalculator {
    private _student: { studentType: string };

    constructor(studentType: string) {
        this._student = {
            studentType: studentType
        }
    }

    calculate(scores: number[]) {
        if (this._student.studentType === "disabled") {
            const avgScoreScholarshipList = [
                {
                    avg: 70,
                    scholarship: 1000,
                },
            ];
            for (let i = 0; i < avgScoreScholarshipList.length; i++) {
                const avgScholar = avgScoreScholarshipList[i];
                if (getAvg(scores) >= avgScholar.avg) {
                    return avgScholar.scholarship;
                }
            }
        }
        const avgScoreScholarshipList = [
            {
                avg: 100,
                scholarship: 5000,
            },
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
}

function getScholarship(scores: number[], studentType: string = "normal") {
    const scholarshipCalculator = new ScholarshipCalculator(studentType);
    return scholarshipCalculator.calculate(scores);
}

describe('Normal students scholarship', function () {
    it('should not get scholarship if less than 80.', () => {
        expect(getScholarship([79, 80], "normal")).toEqual(0)
    });

    it('should get $1000 if courses scores average more than 80.', () => {
        expect(getScholarship([80, 80], "normal")).toEqual(1000)
    });

    it('should get $1000 if courses scores average more than 80.(avg is 81)', () => {
        expect(getScholarship([80, 82], "normal")).toEqual(1000)
    });

    it('should get $1500 if courses scores average more than 90.', () => {
        expect(getScholarship([80, 100], "normal")).toEqual(1500)
    });

    it('should get $1500 if courses scores average more than 90.(3 courses)', () => {
        expect(getScholarship([80, 90, 100], "normal")).toEqual(1500)
    });

    it('should get $2000 if courses scores average more than 97.', () => {
        expect(getScholarship([97, 98], "normal")).toEqual(2000)
    });

    it('should get $5000 if courses scores average 100.', () => {
        expect(getScholarship([100, 100, 100], "normal")).toEqual(5000)
    });
});
describe('Disabled students scholarship', function () {
    it('should not get scholarship if less than 70.', () => {
        expect(getScholarship([69, 70], "disabled")).toEqual(0)
    });

    it('should get scholarship $1000 if bigger or equal than 70.', () => {
        expect(getScholarship([70, 70], "disabled")).toEqual(1000)
    });


});
