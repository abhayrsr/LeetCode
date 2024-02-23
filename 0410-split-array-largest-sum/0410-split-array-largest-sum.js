/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var splitArray = function(nums, k) {
  let low = Math.max(...nums), high = nums.reduce((acc, curr) => acc + curr, 0);
    
  var split = function(nums, sum){
    let split = 1, splitSum = 0;
    for(let i = 0; i < nums.length; i++){
        if(splitSum + nums[i] <= sum){
            splitSum += nums[i];
        } else {
            split++;
            splitSum = nums[i];
        }
    }
    return split;
}
  while(low <= high){
      let mid = parseInt((low+high)/2);
      let noOfSplit = split(nums, mid);
      if(noOfSplit > k) low = mid+1;
      else high = mid-1;
  }
    return low;
};