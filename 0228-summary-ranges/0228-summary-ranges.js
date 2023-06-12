/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    let extra = [];
    for(let i = 0; i < nums.length; i++){
        let start = nums[i];
        
        while(i+1 < nums.length && nums[i] + 1 ==  nums[i+1]){
            i++;
        }
        
        if(start !== nums[i]){
            extra.push(start + "->" + nums[i]);
        } else {
            extra.push(String(nums[i]));
        }
    }
    return extra;
};