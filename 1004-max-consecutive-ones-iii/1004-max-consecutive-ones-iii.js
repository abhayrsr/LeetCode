/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let left = 0, right = 0, max = 0;
    let value = [0,0];
    
    while(right < nums.length){
        const num = nums[right];
        value[num] = value[num] ? value[num] + 1 : 1;
        
        if(value[1] > max) max = value[1];
        
        if((right - left + 1) - max > k){
            value[nums[left]]--;
            left++
        }
        right++;
    }
    
    if(k === 0) return max;
    else return right -left;
};