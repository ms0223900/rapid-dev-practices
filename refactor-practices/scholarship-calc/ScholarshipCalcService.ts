import {Student} from "./types";
import {Course} from "./course";
import {ScholarCalculatorFactory} from "./ScholarCalculatorFactory";

export class ScholarshipCalcService {
    private _student: Student

    constructor(student: Student) {
        this._student = student
    }

    calculate(courses: Course[]) {
        return ScholarCalculatorFactory.getCalculator(this._student).calculate(courses);
    }
}
