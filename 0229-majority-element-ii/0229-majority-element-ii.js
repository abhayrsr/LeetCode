/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    let verify = parseInt(nums.length/3);
    let count1 = 0, ele1 = -Infinity;
    let count2 = 0, ele2 = -Infinity;
    let res = [];
    
    for(let i = 0; i < nums.length; i++){
        if(count1 == 0 && nums[i] !== ele2){
            count1 = 1;
            ele1 = nums[i];
        }
        else if(count2 == 0 && nums[i] !== ele1){
            count2 = 1;
            ele2 = nums[i];
        }
        else if(ele1 == nums[i]){
            count1++;
        }
        else if(ele2 == nums[i]){
            count2++;
        }
        else{
            count1--;
            count2--;
        }
    }
    
    count1 = 0; 
    count2 = 0;
    
    for(let i = 0; i < nums.length; i++){
        if(ele1 == nums[i]) count1++;
        else if(ele2 == nums[i]) count2++;
    }
    if(count1 > verify){
        res.push(ele1);
    }
    if(count2 > verify){
        res.push(ele2);
    }
    return res;
};