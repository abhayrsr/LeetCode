/**
 * @param {number[]} nums
 * @return {number}
 */
var minPairSum = function(nums) {
    nums.sort((a,b) => a-b);
    let i = 0, j= nums.length - 1;
    let max = 0;
    while(i < j){
        let sum = nums[i] + nums[j];
        max = Math.max(max, sum);
        i++;
        j--;
    }
    return max;
};