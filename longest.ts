function findLongestSubstring(inputString: string): number{
    let longestSubString = 0;
    const inputStringSize = inputString.length;
    if(inputStringSize === 0) return longestSubString;
    let index1 = 0, index2 = 0;
    const currentSubstringElements = new Set()
    while(index1 < inputStringSize){
       if(currentSubstringElements.has(inputString[index2])){
        if(currentSubstringElements.size > longestSubString) {
            longestSubString = currentSubstringElements.size
        }
        index1++
        if(inputStringSize - index1 <= longestSubString) break;
        index2 = index1
        currentSubstringElements.clear()
       }
       else{
        currentSubstringElements.add(inputString[index2])
        if(index2 < inputStringSize - 1) index2++
       }
    }
    return longestSubString;
}



console.log(findLongestSubstring('educative'))
// "abcdbea" 5

// longest -> 5
// abcd
// bcd
// cdbea
