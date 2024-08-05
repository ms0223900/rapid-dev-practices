import {ScholarHelper} from "./helpers";
import {AvgScoreScholarship, ScholarCalculator, Student} from "./types";
import {Course} from "./course";

class NormalStudentScholarCalculator implements ScholarCalculator {
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

    calculate(courses: Course[]): number {
        return ScholarHelper.getByAvgScores(this.normaStudentScholarConfig, courses)
    }
}

class DisabledStudentScholarCalculator implements ScholarCalculator {
    private disabledStudentScholarConfig: AvgScoreScholarship[] = [
        {
            avg: 70,
            scholarship: 1000,
        },
    ];

    calculate(courses: Course[]): number {
        const literatureCourse = courses.find(course => course.getSubject() === "Literature");
        if (literatureCourse?.getScore() >= 90) return 500;

        return ScholarHelper.getByAvgScores(this.disabledStudentScholarConfig, courses);
    }
}

class ScholarCalculatorFactory {
    static getCalculator(_student: Student): ScholarCalculator {
        if (_student instanceof DisabledStudent) {
            return new DisabledStudentScholarCalculator();
        }
        return new NormalStudentScholarCalculator();
    }
}

class ScholarshipCalcService {
    private _student: Student

    constructor(student: Student) {
        this._student = student
    }

    calculate(courses: Course[]) {
        return ScholarCalculatorFactory.getCalculator(this._student).calculate(courses);
    }
}

class NormalStudent implements Student {
}

class DisabledStudent implements Student {
}

describe('Normal students scholarship', function () {
    const scholarshipCalculator = new ScholarshipCalcService(new NormalStudent());

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
    const scholarshipCalculator = new ScholarshipCalcService(new DisabledStudent());

    it('should not get scholarship if less than 70.', () => {
        expect(scholarshipCalculator.calculate([Course.makeLiterature(69), Course.makeNature(70)])).toEqual(0)
    });

    it('should get scholarship $1000 if bigger or equal than 70.', () => {
        expect(scholarshipCalculator.calculate([Course.makeLiterature(70), Course.makeNature(70)])).toEqual(1000)
    });

    it('should get scholarship $500 if course Literature more than 90.', () => {
        expect(scholarshipCalculator.calculate([Course.makeLiterature(90), Course.makeNature(10)])).toEqual(500)
    });


// TODO, 如果有個規則是：國文(Literature)分數超過 90 分，即給獎學金做鼓勵 ($500)
});
