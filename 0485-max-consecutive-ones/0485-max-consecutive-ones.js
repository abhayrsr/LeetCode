/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
   let count = 0, max = -Infinity;
    
    for(let i = 0; i < nums.length; i++){
        if(nums[i] == 1){
            count++;
        } else {
            count = 0;
        }
        max = Math.max(max, count);
    }
    return max; 
};