import {Course} from "./course";

export interface AvgScoreScholarship {
    avg: number
    scholarship: number
}

export interface ScholarCalculator {
    calculate(courses: Course[]): number
}

export interface Student {
}
