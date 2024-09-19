function acquireData(csvInput: string) {
    const lines = csvInput
        .split("\n")

    const loopRowRecords = lines.slice(1)
        .filter(row => !!row.trim())
        .map(row => row.split(","))
        .filter(records => records[1].trim() === "India")

    const result = loopRowRecords
        .map(records => ({
            city: records[0].trim(),
            phone: records[2].trim()
        }));
    return result;
    // const result = [];
    // for (const records of loopRowRecords) {
    //     result.push({ city: records[0].trim(), phone: records[2].trim() });
    // }
    // return result;
    // return [];
}

describe('pipeline', function () {
    it('should filter correctly.', () => {
        const csv1 = `office, country, telephone 
Chicago, USA, +1 312 373 1000
Beijing, China, +86 4008 900 505
Bangalore, India, +91 80 4064 9570
Porto Alegre, Brazil, +55 51 3079 3550
Chennai, India, +91 44 660 44766`;

        const actual = acquireData(csv1);
        const expected = [{
            "city": "Bangalore",
            "phone": "+91 80 4064 9570"
        }, {
            "city": "Chennai",
            "phone": "+91 44 660 44766"
        }];
        expect(actual).toEqual(expected)
    });
});
