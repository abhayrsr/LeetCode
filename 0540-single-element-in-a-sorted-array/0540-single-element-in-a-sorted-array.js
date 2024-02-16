/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    if(nums.length == 1) return nums[0];
    if(nums[0] !== nums[1]) return nums[0];
    if(nums[nums.length-1] !== nums[nums.length-2]) return nums[nums.length-1];
    
    let low = 1, high = nums.length-2;
    
    while(low <= high){
        let mid = parseInt((low+high)/2);
        
        if(nums[mid] !== nums[mid+1] && nums[mid] !== nums[mid-1]){
            return nums[mid];
        }
        else if((mid%2 == 1 && nums[mid] == nums[mid-1]) || (mid%2==0 && nums[mid] == nums[mid+1])){
            low = mid+1;
        } else {
            high = mid-1;
        }
    }
};