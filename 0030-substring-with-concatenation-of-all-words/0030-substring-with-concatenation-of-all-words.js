/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
/** @param {string} s @param {string[]} words @return {number[]} */
var findSubstring = function (s, words) {
    const ans = [];
    const n = s.length, m = words.length, len = words[0].length;
    if (m * len > n) return ans;
    const need = new Map();
    for (const word of words) need.set(word, (need.get(word) || 0) + 1);

    for (let offset = 0; offset < len; offset++) {
        let seen = new Map();
        let left = offset, count = 0;
        for (let right = offset; right + len <= n; right += len) {
            const word = s.slice(right, right + len);
            if (!need.has(word)) {
                seen = new Map();
                count = 0;
                left = right + len;
                continue;
            }
            seen.set(word, (seen.get(word) || 0) + 1);
            count++;
            while (seen.get(word) > need.get(word)) {
                const old = s.slice(left, left + len);
                seen.set(old, seen.get(old) - 1);
                left += len;
                count--;
            }
            if (count === m) {
                ans.push(left);
                const old = s.slice(left, left + len);
                seen.set(old, seen.get(old) - 1);
                left += len;
                count--;
            }
        }
    }
    return ans;
};