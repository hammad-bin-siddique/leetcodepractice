/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = function(nums, val) {
    let k = 0; 
    for (let i = 0; i < nums.length; i++) {
        let current = nums[i]; 
        if(current !== val){
            nums[k] = current;
            k++;
        }
    }
    return k;
};