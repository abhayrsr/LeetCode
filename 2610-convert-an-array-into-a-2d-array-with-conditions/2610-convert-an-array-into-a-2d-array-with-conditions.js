/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findMatrix = function(nums) {
    let freq = Array(nums.length + 1).fill(0);
    let ans = []
    for(const num of nums){
        if(freq[num] >= ans.length){
            ans.push([]);
        }
        ans[freq[num]].push(num);
        freq[num]++;
    }
    return ans;
};