/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let answer = [];
    let n = nums.length;
    nums.sort((a,b) => a - b);
    for(let i = 0; i < n; i++){
        if(i > 0 && nums[i-1] == nums[i]) continue;
        let j = i+1, k = n-1;
        while(j < k){
            let sum = nums[i] + nums[j] + nums[k];
            if(sum < 0){
                j++;
            }
            else if(sum > 0){
                k--;
            } else {
                let triplet = [nums[i], nums[j], nums[k]];
                answer.push(triplet);
                j++;
                k--;
                while(j < k && (nums[j-1] == nums[j])) j++;
                while(j < k && (nums[k+1] == nums[k])) k--;
            }
        }
    }
    return answer;
};