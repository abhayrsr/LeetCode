/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let map = new Map();
    
    for(let n = 0; n < nums.length; n++){
        if(map.has(nums[n])){
            map.set(nums[n], map.get(nums[n]) + 1)
        } else {
            map.set(nums[n], 1)
        }
    }
    
    let sorted = Array.from(map.entries()).sort((a, b) => b[1] - a[1]);
    
    let res = []
    
    for(let i = 0; i < k; i++){
        res.push(sorted[i][0])
    }
    
    return res;
};