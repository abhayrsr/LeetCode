/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function(arr) {
    arr.sort((a,b) => a-b);
    let diff = arr[0] - arr[1];
    for(let i = 1; i < arr.length; i++){
        if(i+1 < arr.length){
            if(arr[i] - arr[i+1] !== diff) return false;
        }
    }
    return true;
};