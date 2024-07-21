/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let max = -Infinity, sum = 0;
    for(let i=0; i < nums.length; i++){
        sum += nums[i]
        max = Math.max(max, sum);
        if(sum < 0){
            sum = 0;
        }
    }
    
    return max;
};