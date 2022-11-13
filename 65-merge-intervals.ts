function merge(intervals: number[][]): number[][] {
    const INTERVAL_START = 0;
    const INTERVAL_END = 1;
    const intervalsLength = intervals.length;
    
    intervals = intervals.sort((a, b) => a[INTERVAL_START] - b[INTERVAL_START]);
    
    let currentMergedIndex = 0;
    const mergedIntervals: number[][] = []
    mergedIntervals.push(intervals[0]);

    for (let i = 1; i < intervalsLength; ++i) {
        // check if the current interval is withing the last merged interval
        // if not -> currentMergedIndex++
        // push current interval to mergedInterval
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

console.log(merge([[1,3],[2,6],[8,10],[15,18]])) // [[1,6],[8,10],[15,18]]



// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18 ]]
// Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].

// Input: intervals = [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping