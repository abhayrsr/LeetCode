/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    let answer = [];
    let n = nums.length;
    nums.sort((a,b) => a-b);
    
    for(let i = 0; i < n; i++){
        if(i > 0 && nums[i-1] == nums[i]) continue;
        for(let j = i + 1; j < n; j++){
            if(j !== (i+1) && nums[j-1] == nums[j]) continue;
            let k = j+1;
            let l = n-1;
            while(k < l){
                let sum = nums[i] + nums[j] + nums[k] + nums[l];
                if(sum < target){
                    k++;
                }
                else if(sum > target){
                    l--;
                } else if(sum == target){
                    let quad = [nums[i], nums[j], nums[k], nums[l]];
                    answer.push(quad);
                    k++;
                    l--;
                    while(k < l && nums[k-1] == nums[k]) k++;
                    while(k < l && nums[l+1] == nums[l]) l--;
                }
            }
        }
    }
    return answer;
};