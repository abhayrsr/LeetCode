/**
 * @param {number[]} nums
 * @return {number}
 */
var countCompleteSubarrays = function(nums) {
    let n = nums.length;
    let count = 0;
    let distinctElements = new Set(nums);
    let totalDistinct = distinctElements.size;

    let windowCount = new Map();
    let left = 0;

    for (let right = 0; right < n; right++) {
         
        windowCount.set(nums[right], (windowCount.get(nums[right]) || 0) + 1);

        while (windowCount.size === totalDistinct) {
            count += n - right;

            windowCount.set(nums[left], windowCount.get(nums[left]) - 1);
                if (windowCount.get(nums[left]) === 0) {
                    windowCount.delete(nums[left]);
                }

                left++;
            }
        }

        return count;
};