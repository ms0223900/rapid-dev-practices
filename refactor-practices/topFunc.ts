function trackSum(points = []) {
    const time = calculateTime();
    const distance = calculateDistance();
    const pace = time / 60 / distance;
    return ({
        time,
        distance,
        pace
    });

    function calculateDistance() {
        let res = 0;
        for (let i = 0; i < points.length; i++) {
            res += getDistance(points[i - 1], points[i])
        }
        return res;
    }

    function calculateTime() {
        return 0;
    }

    function getDistance(point: any, point2: any) {
        return 0;
    }

}
