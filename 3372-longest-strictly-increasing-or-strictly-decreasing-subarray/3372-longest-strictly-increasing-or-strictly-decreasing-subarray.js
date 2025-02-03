/**
 * @param {number[]} nums
 * @return {number}
 */
var longestMonotonicSubarray = function(nums) {
    let countInc = 1, countDec = 1;
    let i = 0, j = 1;
    let maxInc = -Infinity, maxDec = -Infinity;

    while(j < nums.length){
        if(nums[i] < nums[j]){
            countInc++;
            maxInc = Math.max(maxInc, countInc);
            i++;
            j++;
        } else {
            countInc = 1;
            i++;
            j++;
        }
    }

    if(maxInc === -Infinity){
        maxInc = countInc
    }

    let l = 0, k = 1;

    while(k < nums.length){
        if(nums[l] > nums[k]){
            countDec++;
            maxDec = Math.max(maxDec, countDec);
            l++;
            k++;
        } else {
            countDec = 1;
            l++;
            k++;
        }
    }

    if(maxDec === -Infinity){
        maxDec = countDec
    }

    return Math.max(maxInc, maxDec)
    
};