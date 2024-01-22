/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    let x = 0, y = 0;
    
    for(let i = 1; i <= nums.length; i++){
        x += nums[i-1] - i;
        y += nums[i-1]**2 - i**2;
    }
    
    let missing = (y - x**2)/(2*x);
    let duplicate = missing + x;
    return [duplicate, missing];
};
