import {AvgScoreScholarship, ScholarCalculator} from "./types";
import {Course} from "./course";
import {ScholarHelper} from "./helpers";

export class DisabledStudentScholarCalculator implements ScholarCalculator {
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
