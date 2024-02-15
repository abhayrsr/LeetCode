/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let pre = 1 , suff =  1;
    let max = -Infinity;
    for(let i = 0; i < nums.length; i++){
        if(pre == 0) pre  = 1;
        if(suff == 0) suff = 1;
        pre = pre * nums[i];
        suff = suff * nums[nums.length - i - 1];
        max = Math.max(max, Math.max(pre,suff));
    }
    return max;
};