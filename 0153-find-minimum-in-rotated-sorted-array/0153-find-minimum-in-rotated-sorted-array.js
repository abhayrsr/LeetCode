/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let low = 0, high = nums.length - 1;
    let res;
    while(low <= high){
        let mid = parseInt((low + high)/2)
        
        if(nums[mid]  > nums[low] && nums[mid] > nums[high]){
            low = mid
        } else if(nums[mid] < nums[low] && nums[mid] < nums[high]){
            high = mid
        } else if(nums[mid] === nums[low] || nums[mid] === nums[high]){
            res = Math.min(nums[low], nums[high])
            console.log(res)
            break;
        } else if (nums[mid] > nums[low] && nums[mid] < nums[high]){
            high = mid
        } else {
            low = mid
        }
    }
    
    return res;
};