/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let result = []
    let pre = 1, post = 1
    for(let i = 0; i < nums.length; i++){
        result.push(pre)
        pre = pre * nums[i]
    }
    
    for(let i = result.length -1 ; i >= 0; i--){
        result[i] = result[i] * post
        post = post * nums[i]
    }
    return result;
};