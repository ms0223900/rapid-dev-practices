/**
 * @param input - The input concentration e.g. 100
 * @param target - The target concentration e.g. 0.00000001 (1ppm)
 * 假設每次稀釋後都取1ml，稀釋後的濃度為稀釋前的濃度除以稀釋倍數
 * 預期可以用最少的水量 * 最少稀釋次數達到目標濃度（也就是最小的總體積）
 * @returns  The minimum dilution water volume and the minimum dilution times
 * [dilutionSize, dilutionTimes]
 */
function minTotalVolumeDilution(input: number, target: number): number {
    const minDilutionSize = 1;
    const maxDilutionSize = input / target; // 1 次就完成

    function getDilutionTimes(size: number): number {
        const maxTimes = 32;
        let j = 0;
        while (j <= maxTimes) {
            const dilutedConcentration = Math.pow(1 / size, j) * input;
            if (dilutedConcentration <= target) {
                return j;
            }
            j++;
        }
        return maxTimes;
    }

    let res: [number, number] = [maxDilutionSize, 1];
    let sizeLeft = minDilutionSize;
    let sizeRight = maxDilutionSize;

    while (sizeLeft < sizeRight) {
        const mid = Math.floor((sizeLeft + sizeRight) / 2);
        const currentSizeTimes = getDilutionTimes(mid);
        if (mid * currentSizeTimes <= res[0] * res[1]) {
            res = [mid, currentSizeTimes];
        }
        // 如果當前稀釋次數比之前的稀釋次數多，則繼續往右找
        if (currentSizeTimes > res[1]) {
            sizeLeft = mid + 1;
        } else {
            sizeRight = mid;
        }
    }

    return res[0] * res[1];
}

describe('minDilution', () => {
    it('should return the dilution factor', () => {
        expect(minTotalVolumeDilution(5, 0.01)).toEqual(18);
    });

    it('should return the dilution factor', () => {
        expect(minTotalVolumeDilution(10, 0.0001)).toEqual(32);
    });
});
