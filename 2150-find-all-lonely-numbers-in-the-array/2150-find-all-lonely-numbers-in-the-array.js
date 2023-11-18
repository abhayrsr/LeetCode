/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findLonely = function(nums) {
    let result = [];
    let map = new Map();
    
    for(let i = 0; i < nums.length; i++){
        if(map.has(nums[i])){
            map.set(nums[i], map.get(nums[i]) + 1);
        } else {
            map.set(nums[i], 1);
        }
    }
    
    for(let i = 0; i < nums.length; i++){
        if(map.get(nums[i]) === 1 && !(map.has(nums[i] + 1) ||  map.has(nums[i] - 1))){
            result.push(nums[i]);
        }
    }
    
    return result;
};