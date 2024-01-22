/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    let verify = parseInt(nums.length / 3);
    nums.sort((a, b) => a - b);
    let count = 0, track = nums[0];
    let result = new Set();

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == track) {
            count++;
        } else {
            count = 1;
            track = nums[i];
        }

        if (count > verify && !result.has(nums[i])) {
            result.add(nums[i]);
        }
    }

    return Array.from(result); 
};