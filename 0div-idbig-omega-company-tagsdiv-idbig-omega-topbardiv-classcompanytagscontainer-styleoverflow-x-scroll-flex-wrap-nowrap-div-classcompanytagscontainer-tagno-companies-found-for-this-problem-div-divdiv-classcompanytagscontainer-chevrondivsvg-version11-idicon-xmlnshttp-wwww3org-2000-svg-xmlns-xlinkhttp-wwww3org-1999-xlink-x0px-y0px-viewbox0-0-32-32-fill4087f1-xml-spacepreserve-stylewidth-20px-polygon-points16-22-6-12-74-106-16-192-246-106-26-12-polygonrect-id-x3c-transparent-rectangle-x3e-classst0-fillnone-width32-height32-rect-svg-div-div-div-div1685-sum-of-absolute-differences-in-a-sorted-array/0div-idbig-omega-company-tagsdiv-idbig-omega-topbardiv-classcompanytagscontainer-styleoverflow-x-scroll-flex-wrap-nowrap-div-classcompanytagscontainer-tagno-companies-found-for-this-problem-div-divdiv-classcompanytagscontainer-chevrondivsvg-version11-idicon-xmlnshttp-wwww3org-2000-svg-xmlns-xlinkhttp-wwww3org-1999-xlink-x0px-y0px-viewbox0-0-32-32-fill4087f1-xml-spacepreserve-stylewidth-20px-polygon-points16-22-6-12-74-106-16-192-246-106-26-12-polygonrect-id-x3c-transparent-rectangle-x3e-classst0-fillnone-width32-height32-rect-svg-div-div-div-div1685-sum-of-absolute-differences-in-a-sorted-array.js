/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSumAbsoluteDifferences = function(nums) {
    let res = [];
    let totalSum = 0, leftSum = 0, rightSum = 0;
    for(let i = 0; i < nums.length; i++){
        totalSum+=nums[i];
    }
    
    for(let i = 0; i< nums.length; i++){
        
        rightSum = (totalSum - nums[i] - leftSum);
        // console.log(leftSum, rightSum)
        let sum =  (nums[i]*i - leftSum) + (rightSum- nums[i]*(nums.length-i-1));
        res.push(sum);
        leftSum += nums[i];
    }
    
    return res;
};