/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function (nums) {
    let k = 1;

    for (let i = 1; i < nums.length; i++) {
        let current = nums[i];
        if (current !== nums[k - 2]) {
            nums[k] = current;
            k++;
        }
    }
    return k;

};