/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    let index = -1;
    
    for(let i = nums.length-2; i >= 0; i--){
        if(nums[i] < nums[i+1]){
            index = i;
            break;
        }
    }
    
    if(index == -1) return nums.reverse();
    
    for(let i = nums.length-1; i >= index; i--){
        if(nums[i] > nums[index]){
            [nums[i], nums[index]] = [nums[index], nums[i]];
            break;
        }
    }
    
    
    function reverse(arr, startIndex, endIndex) {
    while (startIndex < endIndex) {
        [arr[startIndex], arr[endIndex]] = [arr[endIndex], arr[startIndex]];
        startIndex++;
        endIndex--;
    }
        return arr;
}
    
    return reverse(nums, index + 1, nums.length - 1);
    
};