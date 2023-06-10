/**
 * @param {number[]} nums
 * @return {number}
 */
var countElements = function(nums) {
    let max = Math.max(...nums);
    let min = Math.min(...nums);
    let count = 0;

    for(let i = 0; i < nums.length; i++){
        if( nums[i] < max && nums[i] > min){
            count++;
        }
    }
    return count;
}