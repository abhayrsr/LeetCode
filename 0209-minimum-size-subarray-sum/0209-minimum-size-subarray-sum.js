/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let left = 0, sum  = 0;
    let res = Infinity;

    for(let i = 0; i < nums.length; i++){
        sum = sum + nums[i];
        
        while(sum >= target){
            res = Math.min(i-left+1, res);
            sum = sum - nums[left];
            left++;
            
        }
    }
    if(res === Infinity) return 0;
    else return res;
};