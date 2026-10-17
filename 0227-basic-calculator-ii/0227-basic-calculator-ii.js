/**
 * @param {string} s
 * @return {number}
 */
const calculate = function (s) {
    let num = "";
    let sign = "+";
    const stack = [];

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        if (char >= "0" && char <= "9") {
            num += char;
        }


        const isOperator = char !== " " && (char < "0" || char > "9");

        if (isOperator || i === s.length - 1) {
            if (sign === "+") {
                stack.push(Number(num));
            } else if (sign === "-") {
                stack.push(-Number(num));
            } else if (sign === "*") {
                stack.push(stack.pop() * Number(num));
            } else if (sign === "/") {
                stack.push(Math.trunc(stack.pop() / Number(num)));
            }
            sign = char;
            num = "";
        }
    }
    return stack.reduce((acc, cur) => {
        return acc + cur
    }, 0);
};