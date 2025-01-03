/**
 * @param {number[]} nums
 * @return {number}
 */
var waysToSplitArray = function(nums) {
    let space = [], sum1 = 0
    for(let i = 0; i < nums.length; i++ ){
        sum1 += nums[i]
        space.push(sum1)
    }
    
    let count = 0, sum = 0

    for(let i = nums.length - 1; i >= 1; i--){
        sum += nums[i]
        if(space[i-1] >= sum){
            count++
        }
    }

    return count;
};