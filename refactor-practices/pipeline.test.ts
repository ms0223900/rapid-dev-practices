function acquireData(csvInput: string) {
    const lines = csvInput
        .split("\n")
        .slice(1)
        .filter(row => !!row.trim())

    const result = [];
    for (const line of lines) {
        const record = line.split(",");
        if (record[1].trim() === "India") {
            result.push({ city: record[0].trim(), phone: record[2].trim() });
        }
    }
    return result;
    return [];
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
