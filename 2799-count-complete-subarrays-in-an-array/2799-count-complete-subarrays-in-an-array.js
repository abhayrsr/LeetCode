/**
 * @param {number[]} nums
 * @return {number}
 */
var countCompleteSubarrays = function(nums) {
    let set = new Set(nums);
    let left = 0, right = 0, count = 0;
    let map = new Map()
    
    while(right < nums.length){
        map.set(nums[right], (map.get(nums[right]) || 0) + 1)
        
        while(set.size === map.size){
            count += nums.length - right
            map.set(nums[left], map.get(nums[left]) - 1)
            if(map.get(nums[left]) === 0){
                map.delete(nums[left])
            }
            left++;
        }
        
        right++;
    }
    
    return count;
    
};