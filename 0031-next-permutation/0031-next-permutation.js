/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {

    let n = nums.length;
    let pivot = -1;

    for(let i = n - 2; i >= 0; i--){
        if(nums[i] < nums[i + 1]){
            pivot = i;
            break;
        }
    }

    if(pivot === -1){
        nums.reverse();
        return;
    }

    for(let i = n - 1; i > pivot; i--){
        if(nums[i] > nums[pivot]){
            [nums[i], nums[pivot]] = [nums[pivot], nums[i]];
            break;
        }
    }

    let left = pivot + 1, right = n - 1;
    while(left < right){
        [nums[left], nums[right]] = [nums[right], nums[left]];
        left++;
        right--;
    }
};