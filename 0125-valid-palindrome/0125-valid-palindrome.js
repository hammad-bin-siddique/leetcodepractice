/**
 * @param {string} s
 * @return {boolean}
 */
function reverseString(str) {
    const stack = [];

    for (let i = 0; i < str.length; i++) {
        stack.push(str[i]);
    }

    let reversed = "";
    while (stack.length > 0) {
        reversed += stack.pop();
    }

    return reversed;
}

function isPalindrome(s) {
    const cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, "");

    return cleaned === reverseString(cleaned);
}