/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if (nums.length === 0) return 0;
    
    let set = new Set(nums)
    let longestStreak = 0
    
    for(let num of nums){
        let currentNum = num
        let currentStreak = 0
        
        if(!set.has(num-1)){
                while(set.has(currentNum)){
                    currentNum++
                    currentStreak++
                }
            }
        longestStreak = Math.max(currentStreak, longestStreak)
    }
    return longestStreak
};