/**
 * @param {number} x
 * @return {number}
 */
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const INT_MAX = 2147483647;   // 2^31 - 1
    const INT_MIN = -2147483648;  // -2^31

    const maxDiv10 = Math.trunc(INT_MAX / 10); // 214748364
    const minDiv10 = Math.trunc(INT_MIN / 10); // -214748364

    let reversed = 0;

    while (x !== 0) {
        const digit = x % 10;      
        x = Math.trunc(x / 10);   

        
        if (reversed > maxDiv10 || (reversed === maxDiv10 && digit > 7)) return 0;
        if (reversed < minDiv10 || (reversed === minDiv10 && digit < -8)) return 0;

        reversed = reversed * 10 + digit;
    }

    return reversed;
};