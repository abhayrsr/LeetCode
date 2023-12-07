/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function(num) {
  let nums = num.split("");
  for(let i = nums.length - 1; i >= 0; i--){
    if(nums[i]%2 !== 0){
      break;
    } else {
      nums.pop();
    }
  }
  return nums.join("");
};