/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let count = 0, ele = nums[0];
    let verify = 0;
    
    for(let i = 0; i < nums.length; i++){
        if(count == 0){
            ele = nums[i];
            count = 1;
        }
        else if(ele == nums[i]){
            count++;
        }
        else if(ele !== nums[i]){
            count--;
        }
    }
    
    for(let i = 0; i < nums.length; i++){
        if(nums[i] == ele) verify++;
    }
    
    if(verify >= parseInt(nums.length/2)) return ele;
    else -1;
};