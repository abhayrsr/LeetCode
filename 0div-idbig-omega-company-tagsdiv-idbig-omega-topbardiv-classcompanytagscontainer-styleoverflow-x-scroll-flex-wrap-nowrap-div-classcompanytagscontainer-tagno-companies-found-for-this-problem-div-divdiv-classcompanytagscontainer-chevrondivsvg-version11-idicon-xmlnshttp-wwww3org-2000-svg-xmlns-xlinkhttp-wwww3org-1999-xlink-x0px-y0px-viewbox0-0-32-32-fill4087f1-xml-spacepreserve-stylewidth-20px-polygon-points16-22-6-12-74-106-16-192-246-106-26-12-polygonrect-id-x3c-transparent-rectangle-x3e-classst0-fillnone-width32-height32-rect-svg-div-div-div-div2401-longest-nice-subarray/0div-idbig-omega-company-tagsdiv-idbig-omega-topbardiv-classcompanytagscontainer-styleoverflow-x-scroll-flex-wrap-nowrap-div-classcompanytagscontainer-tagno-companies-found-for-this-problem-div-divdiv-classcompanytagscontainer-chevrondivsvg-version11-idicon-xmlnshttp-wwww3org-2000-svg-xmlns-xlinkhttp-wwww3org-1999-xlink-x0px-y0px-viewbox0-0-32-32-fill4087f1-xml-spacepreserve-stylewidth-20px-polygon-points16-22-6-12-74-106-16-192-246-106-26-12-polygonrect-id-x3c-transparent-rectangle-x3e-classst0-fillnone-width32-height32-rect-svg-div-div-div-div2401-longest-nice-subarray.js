/**
 * @param {number[]} nums
 * @return {number}
 */
var longestNiceSubarray = function(nums) {
    let left = 0, right = 1;
    let max = 1;
    while(right < nums.length){
        let flag = true;
        for(let i = right - 1; i >= left; i--){
            let first = nums[right];
            let second = nums[i];
            
            if((first & second) !== 0){
                flag = false;
                break;
            }  
        }
        
        if(flag){
            max = Math.max(max, right-left+1);
            right++;
        } else {
            left++;
        }
    }
    return max;
};