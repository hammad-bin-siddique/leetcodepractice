/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const nextGreaterElement = function(nums1, nums2) {
    let stack = []; 
    let result = new Array(nums2.length).fill(-1);


    for (let i = 0; i < nums2.length; i++) {
        while(stack.length > 0 && nums2[i] > nums2[stack[stack.length -1]]) {
            let topIndex = stack.pop();
            result[topIndex] = nums2[i]
        }
        stack.push(i);
    }
    let ans = [];

    for (let i = 0; i < nums1.length; i++) {
      const idx = nums2.indexOf(nums1[i])

        ans.push(result[idx]);
    }


    return ans;
};