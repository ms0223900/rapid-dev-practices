import {AvgScoreScholarship} from "./types";
import {Course} from "./course";

function getAvg(scores: number[]) {
    return scores.reduce((prev, next) => prev + next, 0) / scores.length;
}

export const ScholarHelper = {
    checkAvgGteThanScholarAvg: function (scores: number[], avgScholar: AvgScoreScholarship) {
        return getAvg(scores) >= avgScholar.avg;
    },
    getByAvgScores(avgScoreScholarshipList: AvgScoreScholarship[], courses: Course[]) {
        for (let i = 0; i < avgScoreScholarshipList.length; i++) {
            const avgScholar = avgScoreScholarshipList[i];
            const scores = courses.map(course => course.getScore());
            if (this.checkAvgGteThanScholarAvg(scores, avgScholar)) {
                return avgScholar.scholarship;
            }
        }
        return 0;
    }
};
