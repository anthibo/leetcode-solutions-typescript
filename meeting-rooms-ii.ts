
export function findSets(intervals: number[][]) {
    intervals = intervals.sort(([a, b], [c, d]) => a - c)
    const minHeap = [intervals[0][1]]
    for (let i = 1; i < intervals.length; ++i) {
        const [start, end] = intervals[i]
        const leastEndTime = minHeap[0]
        console.log(leastEndTime)
        if (leastEndTime <= start) {
            minHeap.shift()
        }
        minHeap.push(end)
    }
    console.table(minHeap)
    return minHeap.length;
}

console.log(findSets([[1, 7], [2, 6], [3, 7], [4, 8], [5, 8]])) // 5
// [[2, 8], [3, 4], [3, 9], [5, 11], [8, 20], [11, 15]]
// [[1, 7], [2, 6], [3, 7], [4, 8], [5, 8]]

