/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var getAverages = function(nums, k) {
    if(k > nums.length){
        return Array(nums.length).fill(-1);
    }
    const result = Array(nums.length).fill(-1);
    console.log(result);
    let left = 0;
    let sum = 0;
    
    for(right= 0; right < nums.length; right++){
        sum+=nums[right]
        
        if(right - left + 1 === k*2 + 1){
            const avg = Math.floor(sum/(k*2 + 1));
            result[right-k] = avg;
            sum-=nums[left];
            left++;
        }
    }
    return result;
};