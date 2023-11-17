/**
 * @param {number[]} nums
 * @return {number}
 */
var minPairSum = function(nums) {
    let maxSum = -Infinity;
    let minNum = Infinity;
    let maxNum = -Infinity;
    
    let frequency = new Array(100001).fill(0);
    
    for(let i = 0; i < nums.length; i++){
        frequency[nums[i]]++;
        minNum = Math.min(minNum, nums[i]);
        maxNum = Math.max(maxNum, nums[i]);
    }
    
    let low = minNum , high = maxNum;
    
    while(low <= high){
        if(frequency[low] == 0){
            low++;
        }
        else if(frequency[high] == 0){
            high--;
        }
        else{
            let sum = low + high;
            maxSum = Math.max(sum, maxSum);
            frequency[low]--;
            frequency[high]--;
        }
    }
    return maxSum;
};