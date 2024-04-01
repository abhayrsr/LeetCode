/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let result = [];
    for(let i = 0; i < 2**nums.length; i++){
        let miniArray = [];
        for(let j = 0; j < nums.length; j++){
            if(i & (1 << j)){
                miniArray.push(nums[j]);
            }
        }
        result.push(miniArray);
    }
    return result;
};