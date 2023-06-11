/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
   let ans = 2;
    
    for (let i = 2; i < nums.length; i++) {
        if (nums[i] !== nums[ans - 2]) {
            nums[ans] = nums[i];
            ans++;
        }
    }
    
    return ans;
};