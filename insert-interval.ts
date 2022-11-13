// array is sorted
function insert(intervals: number[][], newInterval: number[]): number[][] {

    intervals.push(newInterval);
    const result = merge(intervals);
    return result
};

function merge(intervals: number[][]): number[][] {
    const INTERVAL_START = 0;
    const INTERVAL_END = 1;
    const intervalsLength = intervals.length;
    
    intervals = intervals.sort((a, b) => a[INTERVAL_START] - b[INTERVAL_START]);
    
    let currentMergedIndex = 0;
    const mergedIntervals: number[][] = []
    mergedIntervals.push(intervals[0]);

    for (let i = 1; i < intervalsLength; ++i) {
        const currentInterval = intervals[i]
        if (currentInterval[INTERVAL_START] > mergedIntervals[currentMergedIndex][INTERVAL_END]) {
            currentMergedIndex++
            mergedIntervals.push(currentInterval);
        }
        // if it is -> merge
        else {
            if (currentInterval[INTERVAL_START] < mergedIntervals[currentMergedIndex][INTERVAL_START]) {
                mergedIntervals[currentMergedIndex][INTERVAL_START] = currentInterval[INTERVAL_START]
            }
            if (currentInterval[INTERVAL_END] > mergedIntervals[currentMergedIndex][INTERVAL_END]) {
                mergedIntervals[currentMergedIndex][INTERVAL_END] = currentInterval[INTERVAL_END]

            }
        }
    }
    return mergedIntervals

};

console.log(insert([[1,3],[6,9]],[2,5])) // [[1,5],[6,9]]
// Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
// Output: [[1,5],[6,9]]
// Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
// Output: [[1,2],[3,10],[12,16]]
// Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].