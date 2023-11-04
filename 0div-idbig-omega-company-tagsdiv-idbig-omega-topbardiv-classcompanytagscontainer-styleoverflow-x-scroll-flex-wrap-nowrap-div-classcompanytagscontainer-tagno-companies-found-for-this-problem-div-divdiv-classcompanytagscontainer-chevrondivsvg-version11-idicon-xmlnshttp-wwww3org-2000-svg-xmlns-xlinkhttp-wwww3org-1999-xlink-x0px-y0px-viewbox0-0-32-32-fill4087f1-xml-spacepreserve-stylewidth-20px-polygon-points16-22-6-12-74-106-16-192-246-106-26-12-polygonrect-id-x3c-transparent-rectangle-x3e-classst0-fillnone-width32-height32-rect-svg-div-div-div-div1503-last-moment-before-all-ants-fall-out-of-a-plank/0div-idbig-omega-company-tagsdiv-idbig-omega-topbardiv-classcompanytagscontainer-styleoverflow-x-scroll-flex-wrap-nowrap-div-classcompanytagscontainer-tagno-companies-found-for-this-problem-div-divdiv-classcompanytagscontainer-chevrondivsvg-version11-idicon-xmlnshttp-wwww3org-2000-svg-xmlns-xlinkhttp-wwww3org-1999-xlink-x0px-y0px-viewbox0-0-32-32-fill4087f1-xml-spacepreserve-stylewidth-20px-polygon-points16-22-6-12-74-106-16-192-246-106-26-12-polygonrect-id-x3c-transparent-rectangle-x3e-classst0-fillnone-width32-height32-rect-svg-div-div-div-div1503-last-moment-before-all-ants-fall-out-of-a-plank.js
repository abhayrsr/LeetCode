/**
 * @param {number} n
 * @param {number[]} left
 * @param {number[]} right
 * @return {number}
 */
var getLastMoment = function(n, left, right) {
    let time  = 0;
    
    for(let i = 0; i < left.length; i++){
        time = Math.max(time, left[i]);
    }
    
    for(let i = 0; i < right.length; i++){
        time = Math.max(time, n - right[i]);
    }
    
    return time;
};