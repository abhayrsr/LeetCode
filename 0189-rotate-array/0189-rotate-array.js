/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    k = k % nums.length;
    let len = nums.length;
    
    nums = nums.reverse();
    
    var low = 0, high = k - 1;
    
    while(low <= high){
        [nums[low], nums[high]] = [nums[high], nums[low]];
        low++;
        high--;
    }  
    
    var low = k , high = nums.length - 1;
    
    while(low <= high){
        [nums[low], nums[high]] = [nums[high], nums[low]];
        low++;
        high--;
    }
    
    return nums;
};