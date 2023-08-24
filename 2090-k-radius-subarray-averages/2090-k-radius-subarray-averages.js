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
    let sum = 0;
    let left = 0;
    for(let right = 0; right < nums.length; right++){
        sum+=nums[right];
        if(right - left + 1 === 2*k + 1){
            let avg = Math.floor(sum/(2*k+1));
            result[right - k] = avg;
            sum-=nums[left];
            left++;
        }
    }
    return result;
};