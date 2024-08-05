export class Course {
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

    getSubject() {
        return this._subject;
    }
}
