/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let row = matrix.length, col = matrix[0].length
    let top = 0, bot = row - 1
    let rowTarget = 0;
    
    while(top <= bot){
        rowTarget = parseInt((top + bot) / 2)
        
        if(target > matrix[rowTarget][col - 1]){
            top = rowTarget + 1
        } else if(target < matrix[rowTarget][0]){
            bot = rowTarget - 1
        } else {
            break;
        }
    }
    
    if(top > bot) return false
    else {
        let l = 0, r = col - 1
        while(l <= r){
            let m = parseInt((l+r)/2)
            if(target > matrix[rowTarget][m]){
                l = m + 1
            } else if(target < matrix[rowTarget][m]){
                r = m - 1
            } else {
                return true
            }
        }
        return false;
    }
};