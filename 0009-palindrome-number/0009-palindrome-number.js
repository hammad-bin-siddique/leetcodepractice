/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function(x) {
    if(x < 0){
        return false; 
    }

    // convert x to string so we can reverse it 
    let str = x.toString();
    let strSplit = str.split("");
    let reversedStr = strSplit.reverse();
    let newString = strSplit.join("");

    if(str === newString) {
        return true;
    }
    else {
        return false;
    }
};