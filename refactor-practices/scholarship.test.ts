function getAvg(scores: number[]) {
    return scores.reduce((prev, next) => prev + next, 0) / scores.length;
}

interface AvgScoreScholarship {
    avg: number
    scholarship: number
}

class ScholarConfig {
    private normaStudentScholarConfig: AvgScoreScholarship[] = [
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

    private disabledStudentScholarConfig: AvgScoreScholarship[] = [
        {
            avg: 70,
            scholarship: 1000,
        },
    ];

    getConfig(_student: Student) {
        if (_student instanceof NormalStudent) {
            return this.normaStudentScholarConfig;
        }
        if (_student instanceof DisabledStudent) {
            return this.disabledStudentScholarConfig;
        }
        return [];
    }
}

class Course {
    private _subject: string;
    private _score: number;

    constructor(subject: string, score: number) {
        this._subject = subject
        this._score = score
    }

    static makeLiterature(score: number) {
        return new Course("Literature", score);
    }

    static makeNature(score: number) {
        return new Course("Nature", score);
    }

    static makeMath(score: number) {
        return new Course("Math", score);
    }

    getScore() {
        return this._score;
    }
}

class ScholarshipCalculator {
    private _student: Student
    private _scholarConfig: ScholarConfig;

    constructor(student: Student, scholarConfig: ScholarConfig) {
        this._scholarConfig = scholarConfig
        this._student = student
    }

    calculate(courses: Course[]) {
        const avgScoreScholarshipList = this._scholarConfig.getConfig(this._student);
        return this.getScholar(avgScoreScholarshipList, courses);
    }

    private getScholar(avgScoreScholarshipList: AvgScoreScholarship[], courses: Course[]) {
        for (let i = 0; i < avgScoreScholarshipList.length; i++) {
            const avgScholar = avgScoreScholarshipList[i];
            let scores = courses.map(course => course.getScore());
            if (this.checkShouldGetScholarship(scores, avgScholar)) {
                return avgScholar.scholarship;
            }
        }
        return 0
    }

    private checkShouldGetScholarship(scores: number[], avgScholar: AvgScoreScholarship) {
        return getAvg(scores) >= avgScholar.avg;
    }
}

interface Student {
}

class NormalStudent implements Student {
}

class DisabledStudent implements Student {
}

describe('Normal students scholarship', function () {
    const scholarshipCalculator = new ScholarshipCalculator(new NormalStudent(), new ScholarConfig());

    it('should not get scholarship if less than 80.', () => {
        expect(scholarshipCalculator.calculate([new Course("Literature", 79), new Course("Nature", 80)])).toEqual(0)
    });

    it('should get $1000 if courses scores average more than 80.', () => {
        expect(scholarshipCalculator.calculate([Course.makeLiterature(80), Course.makeNature(80)])).toEqual(1000)
    });

    it('should get $1000 if courses scores average more than 80.(avg is 81)', () => {
        expect(scholarshipCalculator.calculate([Course.makeLiterature(80), Course.makeNature(82)])).toEqual(1000)
    });

    it('should get $1500 if courses scores average more than 90.', () => {
        expect(scholarshipCalculator.calculate([Course.makeLiterature(80), Course.makeNature(100)])).toEqual(1500)
    });

    it('should get $1500 if courses scores average more than 90.(3 courses)', () => {
        expect(scholarshipCalculator.calculate([Course.makeLiterature(80), Course.makeNature(90), Course.makeMath(100)])).toEqual(1500)
    });

    it('should get $2000 if courses scores average more than 97.', () => {
        expect(scholarshipCalculator.calculate([Course.makeLiterature(98), Course.makeNature(100)])).toEqual(2000)
    });

    it('should get $5000 if courses scores average 100.', () => {
        expect(scholarshipCalculator.calculate([Course.makeLiterature(100), Course.makeNature(100), Course.makeMath(100)])).toEqual(5000)
    });
});
describe('Disabled students scholarship', function () {
    const scholarshipCalculator = new ScholarshipCalculator(new DisabledStudent(), new ScholarConfig());

    it('should not get scholarship if less than 70.', () => {
        expect(scholarshipCalculator.calculate([Course.makeLiterature(69), Course.makeNature(70)])).toEqual(0)
    });

    it('should get scholarship $1000 if bigger or equal than 70.', () => {
        expect(scholarshipCalculator.calculate([Course.makeLiterature(70), Course.makeNature(70)])).toEqual(1000)
    });

// TODO, 如果有個規則是：數學班學生的國文分數超過 90 分，即給獎學金做鼓勵 ($500)
});
