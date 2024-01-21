/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let ans = 0, sum = 0;
    let map = new Map();
    map.set(0,1);
    
    for(let i = 0; i < nums.length; i++){
        sum += nums[i];
        let rSum = sum - k;
        if(map.has(rSum)){
            ans += map.get(rSum);
        }
        
        if(map.has(sum)){
            map.set(sum, map.get(sum) + 1);
        } else {
            map.set(sum, 1);
        }
    }
    
    return ans;
};