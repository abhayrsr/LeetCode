/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    k = k % nums.length;
    let len = nums.length;
    
        var temp = [];
        
        for(let i = len - k; i < len; i++){
             temp.push(nums[i]);
        }
        
        for(let i = len - 1; i >= k; i--){
            nums[i] = nums[i - k]
        }
         for (let i = 0; i < k; i++) {
            nums[i] = temp[i];
        }
    
        return nums;
};