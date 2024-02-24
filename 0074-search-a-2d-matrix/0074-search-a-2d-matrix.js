/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let ans = -1;
    function find(arr, ele){
        let low = 0, high = arr.length-1;
        while(low <= high){
            let mid = parseInt((low + high)/2);
            if(arr[mid] > ele){
                high = mid - 1;
            } else {
                ans = arr[mid];
                low = mid + 1;
            }
        }
        
        if(ans == target) return true;
        else return false;
    }
    for(let i = 0; i < matrix.length; i++){
        let bool = find(matrix[i], target);
        if(bool == true){
            return true;
        } 
    }
    return false;
};