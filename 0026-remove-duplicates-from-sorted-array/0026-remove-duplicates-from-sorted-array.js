/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function(nums) {
    let k = 1;
    for (let i = 1; i < nums.length; i++) {
        let current = nums[i];
        if(current !== nums[i - 1]) {
            nums[k] = current;
            k++
        }
    }
    return k;
}

let num = [0,0,1,1,1,2,2,3,3,4]
console.log(removeDuplicates(num));