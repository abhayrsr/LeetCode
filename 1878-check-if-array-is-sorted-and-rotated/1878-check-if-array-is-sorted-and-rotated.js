/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function(nums) {
    let count = 0;

    if(nums[nums.length - 1] > nums[0]) count++;

    for(let i = 1; i < nums.length; i++){
        if(nums[i-1] > nums[i]) count++;
    }

    return count === 1 || count === 0 ? true : false
};