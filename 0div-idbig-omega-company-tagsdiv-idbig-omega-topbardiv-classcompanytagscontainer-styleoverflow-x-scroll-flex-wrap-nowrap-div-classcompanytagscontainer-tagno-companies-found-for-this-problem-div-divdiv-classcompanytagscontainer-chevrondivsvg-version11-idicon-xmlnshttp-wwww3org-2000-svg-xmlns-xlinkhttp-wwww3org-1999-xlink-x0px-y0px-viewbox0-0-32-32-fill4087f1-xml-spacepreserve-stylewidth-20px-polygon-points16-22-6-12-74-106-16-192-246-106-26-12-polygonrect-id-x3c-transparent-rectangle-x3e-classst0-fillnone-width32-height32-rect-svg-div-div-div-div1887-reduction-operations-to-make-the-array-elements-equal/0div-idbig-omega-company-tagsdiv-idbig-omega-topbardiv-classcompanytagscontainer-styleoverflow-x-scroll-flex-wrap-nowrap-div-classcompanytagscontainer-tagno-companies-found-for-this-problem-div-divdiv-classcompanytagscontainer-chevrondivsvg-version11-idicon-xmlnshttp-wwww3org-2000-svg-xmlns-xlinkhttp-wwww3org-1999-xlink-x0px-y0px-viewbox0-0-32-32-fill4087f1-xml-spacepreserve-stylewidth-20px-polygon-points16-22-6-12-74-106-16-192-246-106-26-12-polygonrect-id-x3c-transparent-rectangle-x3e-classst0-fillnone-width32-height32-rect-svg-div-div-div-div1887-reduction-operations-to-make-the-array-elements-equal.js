/**
 * @param {number[]} nums
 * @return {number}
 */
var reductionOperations = function(nums) {
    let count = 0;
    nums.sort((a,b) => a-b);
    
    for(let i = nums.length - 1; i >= 0; i--){
        if(nums[i] > nums[i-1]){
            count += nums.length - i;
        }
    }
    
    return count;
};