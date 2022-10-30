function maxSlidingWindow(numbers: number[], windowSize: number): number[] {
	let result = [];
	let window = [];

	// check if array is empty and return the result
	if (numbers.length === 0) return result;

	// if window size is greater than array size -> window size is array size
	if (windowSize > numbers.length) windowSize = numbers.length;

	// iterate over first k elements to get the first max number
	for (let i = 0; i < windowSize; i++) {
		while (window.length && numbers[i] > numbers[window[window.length - 1]]) {
			window.pop()
		}
		window.push(i)
	}

	result.push(numbers[window[0]]);

	for (let i = windowSize; i < numbers.length; i++) {
		if (window.length && window[0] <= i - windowSize) window.shift();
		while (window.length && numbers[i] >= numbers[window[window.length - 1]]) {
			window.pop();
		}

		window.push(i);
		result.push(numbers[window[0]]);
	}

	return result;
}
const nums = [1, 3, -1, -3, 5, 3, 6, 7], k = 3
console.log(maxSlidingWindow(nums, k)); // [ 3, 3, 5, 5, 6, 7 ]
