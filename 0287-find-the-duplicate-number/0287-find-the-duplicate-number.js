/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let slow = 0, fast = 0;
   
    while(true){
        slow = nums[slow];
        fast = nums[nums[fast]];
        if(slow === fast){
            break;
        }
    }

    let slowNew = 0;

    while(true){
        slowNew = nums[slowNew];
        slow = nums[slow];
        if(slowNew === slow){
            return slowNew;
        }
    }
};