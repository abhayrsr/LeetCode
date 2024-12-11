/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if(numRows === 1) return [[1]]
    
    let output = [[1], [1, 1]]
    
    if(numRows === 2) return output
    
    
    for(let i = 1; i < numRows - 1; i++){
        let space = [1]
        for(let j = 1; j <= i; j++){
            let val = output[i][j-1] + output[i][j]
            space.push(val)
        }
        space.push(1)
        output.push(space)
    }
    
    return output
};