/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {
    let map = new Array(Math.max(...nums)+1).fill(0);
    let count = 0;
    
    for(let  i = 0; i < nums.length; i++){
        map[nums[i]] = map[nums[i]] + 1;
    }
    // console.log(map)
    let max = Math.max(...map);
    
    for(let i = 0; i < map.length; i++){
        if(map[i] === max){
            count += map[i];
        }
    }
    return count;
};