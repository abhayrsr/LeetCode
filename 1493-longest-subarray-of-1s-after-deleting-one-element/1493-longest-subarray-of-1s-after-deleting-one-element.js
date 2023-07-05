/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    let curr = 0;
    let prev = 0;
    let ans = 0;
    
    for(let i in nums){
        if(nums[i] === 1){
            curr++;
        } else if(nums[i] === 0){
            ans = Math.max(ans, prev + curr);
            prev = curr;
            curr = 0;
        }
    }
    ans = Math.max(ans, prev + curr);
    if(ans == nums.length){
        return ans - 1;
    } else {
        return ans;
    }
};