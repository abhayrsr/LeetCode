/**
 * @param {number[]} arr
 * @return {number}
 */
var sumSubarrayMins = function(arr) {
    let result = 0;
    for(let left = 0; left < arr.length; left++){
        let min = arr[left];
        for(let right = left; right < arr.length; right++){
            min = Math.min(min, arr[right]);
            result += min;
        } 
    }
    return result%(10**9+7);
};