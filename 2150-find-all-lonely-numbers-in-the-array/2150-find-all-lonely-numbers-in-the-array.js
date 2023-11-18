/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findLonely = function(nums) {
    let result = [];
    nums.sort((a,b) => a-b);
    let left = 0, right = 1;
    
    while(right <= nums.length){
        if(nums[left] == nums[right] || nums[left] == nums[left-1] || nums[left] == nums[left - 1] + 1 || nums[left] == nums[left+1] - 1){
            left++;
            right++;
            continue;
        } else {
            result.push(nums[left]);
            left++;
            right++;
        }
    }
    
    return result;
};