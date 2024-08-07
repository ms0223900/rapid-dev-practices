function top_calculateDistance(points = []) {
    let res = 0;
    for (let i = 0; i < points.length; i++) {
        res += getDistance(points[i - 1], points[i])
    }
    return res;

    function getDistance(p1: any, p2: any) {
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

    function radians(deg: any) {
        return deg * Math.PI / 180;
    }

}

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

        function getDistance(p1: any, p2: any) {
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

        function radians(deg: any) {
            return deg * Math.PI / 180;
        }

    }

    function calculateTime() {
        return 0;
    }

}
