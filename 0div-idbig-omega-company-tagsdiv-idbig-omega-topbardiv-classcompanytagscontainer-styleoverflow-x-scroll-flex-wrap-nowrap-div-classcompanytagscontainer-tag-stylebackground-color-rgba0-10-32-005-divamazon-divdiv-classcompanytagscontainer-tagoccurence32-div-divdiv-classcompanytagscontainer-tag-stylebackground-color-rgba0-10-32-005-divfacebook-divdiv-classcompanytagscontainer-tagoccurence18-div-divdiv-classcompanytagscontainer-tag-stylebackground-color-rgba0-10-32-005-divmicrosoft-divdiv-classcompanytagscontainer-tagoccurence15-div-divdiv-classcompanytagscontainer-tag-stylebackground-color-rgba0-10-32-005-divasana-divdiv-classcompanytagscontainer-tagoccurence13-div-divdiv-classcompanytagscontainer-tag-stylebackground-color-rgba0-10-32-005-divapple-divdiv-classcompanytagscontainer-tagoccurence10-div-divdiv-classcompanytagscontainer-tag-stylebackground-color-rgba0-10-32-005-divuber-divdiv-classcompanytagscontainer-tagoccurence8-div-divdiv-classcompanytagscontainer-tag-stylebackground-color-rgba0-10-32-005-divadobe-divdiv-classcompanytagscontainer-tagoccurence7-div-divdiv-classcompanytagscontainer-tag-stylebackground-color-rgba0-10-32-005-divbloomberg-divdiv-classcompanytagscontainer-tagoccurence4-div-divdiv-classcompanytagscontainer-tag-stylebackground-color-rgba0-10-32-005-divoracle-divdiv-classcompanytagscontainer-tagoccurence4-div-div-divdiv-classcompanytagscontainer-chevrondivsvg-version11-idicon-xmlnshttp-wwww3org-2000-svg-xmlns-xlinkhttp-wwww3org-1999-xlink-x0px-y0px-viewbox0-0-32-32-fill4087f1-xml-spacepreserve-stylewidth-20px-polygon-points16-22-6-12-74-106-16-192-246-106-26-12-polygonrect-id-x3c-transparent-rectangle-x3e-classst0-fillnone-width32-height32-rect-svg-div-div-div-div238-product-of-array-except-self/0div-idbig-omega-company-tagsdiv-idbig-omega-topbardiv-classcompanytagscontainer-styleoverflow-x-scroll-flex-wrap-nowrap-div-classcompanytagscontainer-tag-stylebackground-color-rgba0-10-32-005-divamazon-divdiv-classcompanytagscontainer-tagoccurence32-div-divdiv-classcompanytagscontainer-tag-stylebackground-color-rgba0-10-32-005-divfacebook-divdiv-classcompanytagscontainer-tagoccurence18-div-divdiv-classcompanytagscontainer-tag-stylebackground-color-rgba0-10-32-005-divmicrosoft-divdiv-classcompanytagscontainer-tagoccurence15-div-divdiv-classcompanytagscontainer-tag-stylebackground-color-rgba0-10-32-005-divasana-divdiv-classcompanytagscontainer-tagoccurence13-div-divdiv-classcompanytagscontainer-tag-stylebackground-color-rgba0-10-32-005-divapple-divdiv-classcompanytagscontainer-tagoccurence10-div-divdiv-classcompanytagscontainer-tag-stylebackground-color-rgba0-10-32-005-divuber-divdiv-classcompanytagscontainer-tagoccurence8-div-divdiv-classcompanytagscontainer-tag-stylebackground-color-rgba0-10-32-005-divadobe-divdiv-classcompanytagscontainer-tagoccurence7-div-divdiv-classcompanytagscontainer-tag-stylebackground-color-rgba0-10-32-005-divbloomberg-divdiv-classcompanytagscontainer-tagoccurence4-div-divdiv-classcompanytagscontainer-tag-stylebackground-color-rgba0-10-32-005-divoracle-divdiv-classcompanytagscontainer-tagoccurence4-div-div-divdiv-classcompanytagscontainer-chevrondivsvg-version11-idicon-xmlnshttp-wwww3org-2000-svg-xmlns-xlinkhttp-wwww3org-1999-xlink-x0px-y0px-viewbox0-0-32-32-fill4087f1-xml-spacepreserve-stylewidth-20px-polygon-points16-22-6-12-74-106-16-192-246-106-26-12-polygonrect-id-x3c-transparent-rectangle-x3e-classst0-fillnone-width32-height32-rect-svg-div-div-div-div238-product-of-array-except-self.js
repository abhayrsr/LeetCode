/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let res = [];
    let prefix = 1;
    for(let i = 0; i < nums.length; i++){
        res[i] = prefix;
        prefix *= nums[i];
    }
    // console.log(res);
    let postfix = 1;
    for(let i = nums.length - 1; i >= 0; i--){
        res[i] *= postfix;
        postfix *= nums[i];
    }
    return res;
};