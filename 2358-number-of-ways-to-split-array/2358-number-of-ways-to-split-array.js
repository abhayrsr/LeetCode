/**
 * @param {number[]} nums
 * @return {number}
 */
var waysToSplitArray = function(nums) {
    let sum1 = 0
    for(let i = 0; i < nums.length; i++ ){
        sum1 += nums[i]
    }

    let count = 0, sum = 0
    for(let i = 0; i < nums.length - 1; i++){
        sum += nums[i]
        sum1 -= nums[i]

        if(sum >= sum1){
            count++
        }
    }

    return count;
};