/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
var smallestDivisor = function(nums, threshold) {
    let low = 1, high = Math.max(...nums);
    let ans = -1;
    function possibleSum(nums, mid){
        let sum = 0;
        for(let i = 0; i < nums.length; i++){
            sum += Math.ceil(nums[i]/mid);
        }
        return sum;
    }
    
    while(low <= high){
        let mid = parseInt((low+high)/2);
        let sum = possibleSum(nums, mid);
        if(sum <= threshold){
            ans = mid
            high = mid-1;
        } else {
            low = mid+1;
        }
        
    }
    return ans;
};