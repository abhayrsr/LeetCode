/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let n = matrix.length, m = matrix[0].length;
    let left = 0, right = m-1;
    let top = 0, bottom = n-1;
    let result = [];
    
    while(top<=bottom && left <= right){
        for(let i = left; i <= right; i++){
              result.push(matrix[top][i]);
        }
        top++;
        
        for(let i = top; i <= bottom; i++){
            result.push(matrix[i][right]);
        }
        right--;
        
        if(top <= bottom){
            for(let i = right; i >= left; i--){
                result.push(matrix[bottom][i]);
            }
            bottom--;
        }
        
        if(left <= right){
            for(let i = bottom; i >= top; i--){
                result.push(matrix[i][left]);
            }
            left++;
        }  
    }
    return result;
};