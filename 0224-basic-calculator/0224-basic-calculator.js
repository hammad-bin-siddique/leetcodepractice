/**
 * @param {string} s
 * @return {number}
 */
const calculate = function (s) {
    let result = 0;
    let num = 0;
    let sign = 1;
    let stack = [];

    for (let i = 0; i < s.length; i++) {
        const c = s[i];

        if (c >= "0" && c <= "9") {
            num = num * 10 + Number(c);
        }

        else if (c === "+" || c === "-") {
            result += sign * num;
            num = 0;
            sign = c === "+" ? 1 : -1
        }

        else if (c === "(") {
            stack.push(result);
            stack.push(sign);
            result = 0;
            sign = 1;
        }

        else if(c === ")") {
            result += (sign * num); 
            num = 0;

            const prevSign = stack.pop(); 
            const prevResult = stack.pop(); 

            result = result * prevSign; 
            result += prevResult;
        }
    }

    result += sign * num;
    return result;


};