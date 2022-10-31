export function minWindow(str1: string, str2: string): string {
	let indexStr1 = 0;
	let indexStr2 = 0;
	let minimumSubSeq = ""
	let s1Length = str1.length;
	let s2Length = str2.length;
	let length = Infinity;
	while (indexStr1 < s1Length) {
		if (str1[indexStr1] === str2[indexStr2]) {
			indexStr2++
			if (indexStr2 === s2Length) {

				let start = indexStr1;
				let end = start + 1;

				indexStr2--;

				while (indexStr2 >= 0) {
					if (str1[start] === str2[indexStr2]) indexStr2--;

					start--;
				}

				start++;

				if (end - start < length) {
					length = end - start;
					minimumSubSeq = str1.substring(start, end)
				}
				indexStr2 = 0;
			}
		}
		indexStr1++;
	}
	return minimumSubSeq;
}

console.log(minWindow("abcdebdde", "bde")) // bcde
console.log(minWindow("fgrqsqsnodwmxzkzxwqegkndaa", "kzed")) // kzxwqegknd

