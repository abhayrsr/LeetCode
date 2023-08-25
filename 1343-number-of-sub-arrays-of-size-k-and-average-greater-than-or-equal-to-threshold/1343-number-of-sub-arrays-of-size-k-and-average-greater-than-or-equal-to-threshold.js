/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
var numOfSubarrays = function(arr, k, threshold) {
    let sum = 0, avg = 0, count = 0;
    
    for(let i = 0; i < k; i++){
        sum+=arr[i];
    }
    avg = parseInt(sum/k);
    
    if(avg >= threshold) count++;
    let left = 0;
    for(let right = k; right < arr.length; right++){
        sum = sum + arr[right] - arr[left];
        avg = parseInt(sum/k);
        if(avg >= threshold) count++;
        left++;
    }
    return count;
};