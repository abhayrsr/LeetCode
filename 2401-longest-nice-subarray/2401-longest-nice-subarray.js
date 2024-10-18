/**
 * @param {number[]} nums
 * @return {number}
 */
var longestNiceSubarray = function(nums) {
    let right = 1, left = 0, maxLen = 1
    
    while(right < nums.length){
        let second = nums[right]
        let flag = true
        
        for(let i = right - 1; i >= left; i--){
            if((nums[i] & second) != 0){
                flag = false;
                break;
            }
        }
        
        if(flag){
            maxLen = Math.max(maxLen, right - left + 1)
            right++
        } else {
            left++
        }
    }
    
    return maxLen;
};
    