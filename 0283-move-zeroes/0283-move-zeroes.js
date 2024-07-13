/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let countZero = 0, pointer = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] === 0){
            countZero++
        } else {
            nums[pointer] = nums[i]
            pointer++;
        }
    }
    
    let tracker = nums.length - 1
    while(countZero !== 0){
        nums[tracker] = 0
        tracker--
        countZero--
    }
    
    return nums
};