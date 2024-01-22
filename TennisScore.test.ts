// @ts-ignore
function TennisHelper() {
    const scoreLookUpMap = {
        1: "fifteen",
        2: "love fifteen",
        3: "fifteen",
    }

    return ({
        getScore: (score: number) => {
            return (
                scoreLookUpMap[score]
            )
        }
    })
}

describe('Tennis Score', function () {
    let res = ''

    function given_score(score: number) {
        res = TennisHelper().getScore(score);
    }

    function score_should_be(expected: string = 'love all') {
        expect(res).toStrictEqual(expected)
    }

    it('fifteen', () => {
        expect(TennisHelper().getScore(1)).toStrictEqual('fifteen')
    });

    it('love fifteen', () => {
        given_score(1)
        score_should_be('love fifteen');
    });

    it('love thirty', () => {
        given_score(3)
        score_should_be('love thirty');
    });
});