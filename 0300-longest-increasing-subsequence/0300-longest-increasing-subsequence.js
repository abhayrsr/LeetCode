/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    if (!nums || nums.length === 0) {
        return 0;
    }
    
    let n = nums.length;
    let space = new Array(n).fill(1);
    
    for(let i = 1; i < n; i++){
        for(let j = 0; j < i; j++){
            if(nums[i] > nums[j]){
                space[i] = Math.max(space[i], space[j] + 1);
            }
        }
    }
    
    return Math.max(...space);
};