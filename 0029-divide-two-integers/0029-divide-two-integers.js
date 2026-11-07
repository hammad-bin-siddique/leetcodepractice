/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
    if (dividend === -2147483648 && divisor === -1) return 2147483647;

    const negative = (dividend < 0) !== (divisor < 0);
    let a = Math.abs(dividend);
    const b = Math.abs(divisor);
    let ans = 0;

    while (a >= b) {
        let temp = b, multiple = 1;
        while (temp + temp <= a) {
            temp += temp;
            multiple += multiple;
        }
        a -= temp;
        ans += multiple;
    }
    return negative ? 0 - ans : ans;
};