/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if (nums.length === 0) return 0;
    
    let set = new Set(nums)
    let longestStreak = 0
    
    for(let num of set){
        if(!set.has(num-1)){
            let currentNum = num
            let currentStreak = 1
            
            while(set.has(currentNum+1)){
                currentNum++
                currentStreak++
            }
            longestStreak = Math.max(currentStreak, longestStreak)
        }
        
    }
    return longestStreak
//     let numSet = new Set(nums);
//     let longestStreak = 0;
//     console.log(numSet)

//     for (let num of numSet) {
//         console.log(num)
//         if (!numSet.has(num - 1)) {
//             let currentNum = num;
//             let currentStreak = 1;

//             while (numSet.has(currentNum + 1)) {
//                 currentNum++;
//                 currentStreak++;
//             }

//             longestStreak = Math.max(longestStreak, currentStreak);
//         }
//     }

//     return longestStreak;
};