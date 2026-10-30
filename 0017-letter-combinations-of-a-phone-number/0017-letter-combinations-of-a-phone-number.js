/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if(digits.length === 0) return [];
    const phoneBoard = {
        1: [], 
        2: ["a", "b", "c"],
        3: ["d", "e", "f"], 
        4: ["g", "h", "i"],
        5: ["j", "k", "l"],
        6: ["m", "n", "o"],
        7: ["p", "q", "r", "s"], 
        8: ["t", "u", "v"], 
        9: ["w", "x", "y", "z"]
    }

    const combinations = []; 
    const combination = [];

    function backTrack(index) {
        if(index === digits.length) {
            combinations.push(combination.join(""));
            return;
        }

        const phoneStr = phoneBoard[Number(digits[index])];
        for(const ch of phoneStr) {
            combination.push(ch);
            backTrack(index + 1); 
            combination.pop()
        }
    }
    backTrack(0); 
    return combinations;
};