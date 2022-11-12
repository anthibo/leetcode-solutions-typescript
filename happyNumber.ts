// Helper function that calculates the sum of digits.
function sumDigits(number: number) {
    let totalSum = 0;
    while (number > 0) {
        let temp = Math.floor(number / 10),
            digit = number % 10;
        number = temp;
        totalSum += digit ** 2;
    }
    return totalSum;
}

function isHappy(n: number){
    let slow = n;
    let fast = sumDigits(n)
    while(fast !== slow && fast !==1){
        fast = sumDigits(sumDigits(fast))
        if(fast === 1) return true
        slow = sumDigits(slow)
    }
    return fast === 1;
}

