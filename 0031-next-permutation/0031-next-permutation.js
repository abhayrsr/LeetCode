/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    let index = -1
    
    for(let i = nums.length - 2; i >= 0; i--){
        if(nums[i] < nums[i+1]){
            index = i
            break;
        }
    }
    
    for(let i = nums.length-1; i >= index; i--){
        if(nums[i] > nums[index]){
            [nums[i], nums[index]] = [nums[index], nums[i]]
            break;
        }
    }
    
    let i = nums.length - 1, j = index+1
    
    while(j < i){
        [nums[i], nums[j]] = [nums[j], nums[i]]
        i--;
        j++;
    }
    
    return nums
    
};