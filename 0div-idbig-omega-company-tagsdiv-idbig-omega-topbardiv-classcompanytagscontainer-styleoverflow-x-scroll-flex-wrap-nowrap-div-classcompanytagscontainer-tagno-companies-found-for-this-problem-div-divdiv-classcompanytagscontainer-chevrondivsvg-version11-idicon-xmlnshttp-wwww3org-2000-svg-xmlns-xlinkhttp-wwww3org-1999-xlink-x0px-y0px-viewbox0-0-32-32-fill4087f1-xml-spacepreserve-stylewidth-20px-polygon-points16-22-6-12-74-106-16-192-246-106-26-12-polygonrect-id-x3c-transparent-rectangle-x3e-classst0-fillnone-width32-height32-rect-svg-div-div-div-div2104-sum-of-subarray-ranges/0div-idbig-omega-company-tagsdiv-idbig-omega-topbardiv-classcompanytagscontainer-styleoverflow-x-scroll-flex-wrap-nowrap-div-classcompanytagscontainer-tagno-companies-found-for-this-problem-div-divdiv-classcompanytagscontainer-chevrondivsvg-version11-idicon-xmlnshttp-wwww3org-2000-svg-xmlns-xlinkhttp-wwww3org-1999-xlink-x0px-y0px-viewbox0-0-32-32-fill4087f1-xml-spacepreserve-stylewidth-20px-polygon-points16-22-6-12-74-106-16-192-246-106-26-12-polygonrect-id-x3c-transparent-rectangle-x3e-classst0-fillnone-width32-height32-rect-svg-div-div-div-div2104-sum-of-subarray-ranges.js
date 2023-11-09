/**
 * @param {number[]} nums
 * @return {number}
 */
var subArrayRanges = function(nums) {
    let left = 0, right= 0, total = 0;
    
    for(left = 0; left < nums.length; left++){
        let min = nums[left];
        let max = nums[left];
        for(right = left + 1; right < nums.length; right++){
            min = Math.min(min, nums[right]);
            max = Math.max(max, nums[right]);
            total += (max - min);
        }
    }   
    return total;
};