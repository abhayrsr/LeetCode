/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function(nums) {
    let diff = (nums[0] - nums[1]);
    let check = 0
    for(let i = 1; i < nums.length; i++){
        if(nums[i-1] > nums[i]){
            check++;
        }
    }
    
    if(nums[nums.length - 1] > nums[0]){
        check++;
    }
    
    return check < 2 ? true : false;
};