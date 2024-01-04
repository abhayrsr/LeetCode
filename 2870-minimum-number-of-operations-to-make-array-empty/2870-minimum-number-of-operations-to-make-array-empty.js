/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    let count = 0;
    let map = new Map();
    
    for(let i = 0; i < nums.length; i++){
        if(map.has(nums[i])){
            map.set(nums[i], map.get(nums[i]) + 1);
        } else {
            map.set(nums[i], 1)
        }
    }
    
    for(let key of map.keys()){
        
        if(map.get(key) == 1){
            return -1;
        }
        else if(map.get(key) % 3 == 0){
            count += parseInt(map.get(key)/3);
        }
        else if(map.get(key) % 3 == 1){
            count += (parseInt(map.get(key)/3) - 1) + 2;
        }
        else if(map.get(key) % 3 == 2){
            count += parseInt(map.get(key)/3) + 1;
        }
        // console.log(count);
    }
    return count;
};