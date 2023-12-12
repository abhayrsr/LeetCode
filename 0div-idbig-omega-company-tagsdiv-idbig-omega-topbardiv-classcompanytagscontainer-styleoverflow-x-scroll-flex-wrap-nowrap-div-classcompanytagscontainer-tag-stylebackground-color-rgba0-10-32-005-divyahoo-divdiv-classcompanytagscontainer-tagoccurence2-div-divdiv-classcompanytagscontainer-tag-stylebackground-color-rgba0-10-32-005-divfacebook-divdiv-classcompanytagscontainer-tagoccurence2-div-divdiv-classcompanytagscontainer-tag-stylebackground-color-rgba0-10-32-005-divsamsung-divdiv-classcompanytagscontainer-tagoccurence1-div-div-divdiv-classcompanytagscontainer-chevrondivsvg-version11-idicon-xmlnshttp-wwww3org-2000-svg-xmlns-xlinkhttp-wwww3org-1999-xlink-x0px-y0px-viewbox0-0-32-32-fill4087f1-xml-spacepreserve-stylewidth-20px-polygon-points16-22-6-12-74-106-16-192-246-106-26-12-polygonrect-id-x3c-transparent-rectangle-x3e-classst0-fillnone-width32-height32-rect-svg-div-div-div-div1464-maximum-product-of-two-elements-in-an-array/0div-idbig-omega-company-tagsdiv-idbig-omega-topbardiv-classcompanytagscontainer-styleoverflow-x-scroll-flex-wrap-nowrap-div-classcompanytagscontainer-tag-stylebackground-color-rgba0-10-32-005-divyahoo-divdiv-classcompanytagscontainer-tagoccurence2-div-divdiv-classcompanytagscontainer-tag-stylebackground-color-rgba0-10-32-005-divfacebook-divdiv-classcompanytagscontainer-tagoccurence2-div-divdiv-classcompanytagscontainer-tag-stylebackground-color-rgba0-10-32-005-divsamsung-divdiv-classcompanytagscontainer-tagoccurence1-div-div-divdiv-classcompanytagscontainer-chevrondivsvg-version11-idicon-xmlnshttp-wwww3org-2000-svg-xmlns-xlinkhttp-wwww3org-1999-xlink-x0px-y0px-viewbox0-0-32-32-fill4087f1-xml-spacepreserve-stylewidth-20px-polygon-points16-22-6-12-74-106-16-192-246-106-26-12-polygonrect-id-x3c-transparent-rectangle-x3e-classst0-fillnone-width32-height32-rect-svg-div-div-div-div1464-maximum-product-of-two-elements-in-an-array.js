/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let num = nums.sort((a,b) => a-b);
    return (num[num.length-1]-1)*(num[num.length-2]-1)
};