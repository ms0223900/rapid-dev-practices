import {ScholarCalculator, Student} from "./types";
import {DisabledStudent} from "./DisabledStudent";
import {DisabledStudentScholarCalculator} from "./DisabledStudentScholarCalculator";
import {NormalStudentScholarCalculator} from "./NormalStudentScholarCalculator";

export class ScholarCalculatorFactory {
    static getCalculator(_student: Student): ScholarCalculator {
        if (_student instanceof DisabledStudent) {
            return new DisabledStudentScholarCalculator();
        }
        return new NormalStudentScholarCalculator();
    }
}
