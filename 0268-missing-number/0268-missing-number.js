/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    if(nums.length == 1){
        if(nums[0] == 0) return 1;
        else if(nums[0] == 1) return 0;
    };
    let n = nums.length;
    let asum = n*(n+1)/2;
    let sum = 0;
    
    for(let i = 0; i < nums.length; i++){
        sum = sum + nums[i];
    }
    
    if(asum == sum && nums[0] == 0){
        return nums[n-1] + 1;
    } else {
        return asum-sum;
    }
    
};