/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let low = 0, high = nums.length - 1
    
    while(low <= high){
        let mid = parseInt((low+high)/2)
        if(nums[mid] < target){
            low++
        } else if(nums[mid] > target){
            high--
        } else {
            return mid
        }
    }
    
    return -1;
};