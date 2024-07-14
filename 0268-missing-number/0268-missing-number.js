/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let sum1 = 0,  sum2 = 0
    for(let i=0; i < nums.length; i++){
        sum1+=nums[i]
        sum2+=i
    }
    sum2 = sum2 + nums.length;
    return sum2 - sum1;
};