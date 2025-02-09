/**
 * @param {number[]} nums
 * @return {number}
 */
var countBadPairs = function(nums) {
    let count = new Map();
    console.log(count)
    let goodPairs = 0, totalPairs = 0;

    for(let i = 0; i < nums.length; i++){
        totalPairs += i;
        
        if(count.has(nums[i] - i)){
            goodPairs += count.get(nums[i] - i);
            count.set(nums[i] - i, count.get(nums[i] - i) + 1);
        } else {
            count.set(nums[i] - i, 1);
        }
    }

    return totalPairs - goodPairs
};