/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let result = [[1], [1,1]];
    let n = 2;
    
    if(numRows == 1) return [[1]];
    if(numRows == 2) return result;
    
    while(n !== numRows){
        let space = [1];
        for(let i = 1; i <= n; i++){
            if(i == n){
                space.push(1);
            } else {
                space.push(result[n-1][i-1] + result[n-1][i])
            }
        }
        result.push(space);
        n++;
    }
    
    return result;
};