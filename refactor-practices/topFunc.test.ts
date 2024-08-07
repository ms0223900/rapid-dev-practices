function trackSum(points: Point[] = []) {
    const time = calculateTime();
    const distance = calculateDistance(points);
    const pace = time / 60 / distance;
    return ({
        time,
        distance,
        pace
    });

    function calculateTime() {
        return 0;
    }
}

describe('track summary', function () {
    it('all ok', () => {
        expect(trackSum([
            {
                lat: 10,
                lon: 20,
            },
            {
                lat: 20,
                lon: 30,
            }
        ])).toEqual({"distance": 959.9270419268914, "pace": 0, "time": 0})
    });
});

function getDistance(p1: Point, p2: Point) {
    const EARTH_RADIUS = 3959; // in miles
    const dLat = radians(p2.lat) - radians(p1.lat);
    const dLon = radians(p2.lon) - radians(p1.lon);
    const a = Math.pow(Math.sin(dLat / 2), 2)
        + Math.cos(radians(p2.lat))
        * Math.cos(radians(p1.lat))
        * Math.pow(Math.sin(dLon / 2), 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return EARTH_RADIUS * c;
}

function calculateDistance(points = []) {
    let res = 0;
    for (let i = 1; i < points.length; i++) {
        res += getDistance(points[i - 1], points[i])
    }
    return res;
}

function radians(deg: any) {
    return deg * Math.PI / 180;
}

interface Point {
    lat: number
    lon: number;
}
