import {AvgScoreScholarship, ScholarCalculator} from "./types";
import {Course} from "./course";
import {ScholarHelper} from "./helpers";

export class NormalStudentScholarCalculator implements ScholarCalculator {
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
