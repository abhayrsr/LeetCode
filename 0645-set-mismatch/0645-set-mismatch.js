/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    let ans = new Array(2).fill(0);
    for(const num of nums){
        if(nums[Math.abs(num) - 1] < 0){
            ans[0] = Math.abs(num);
        } else {
            nums[Math.abs(num) - 1] *= -1;
        }
    }
    for(let i = 0; i < nums.length; i++){
        if(nums[i] > 0){
            ans[1] = i+1;
        }
    }
    
    return ans;
};
