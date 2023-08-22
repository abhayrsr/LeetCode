/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let sum = 0;
    let avg = -Infinity;
    for(let i = 0; i < k; i++){
        sum += nums[i];
    }
    avg = Math.max(avg, sum/k);
    let i = 0;
    for(let j = k; j < nums.length; j++){
        sum = sum - nums[i] + nums[j];
        avg = Math.max(avg, sum/k);
        i++;
    }
    return avg;
};