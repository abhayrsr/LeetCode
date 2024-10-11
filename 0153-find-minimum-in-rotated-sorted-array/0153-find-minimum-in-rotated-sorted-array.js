/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let low = 0, high = nums.length - 1;
    let res = Infinity;
    while(low <= high){
        let mid = parseInt((low + high)/2)
        
        if(nums[low] <= nums[mid]){
            res = Math.min(res, nums[low])
            low = mid + 1;
        } else {
            res = Math.min(res, nums[mid])
            high = mid - 1;
        }

    }
    
    return res;
};