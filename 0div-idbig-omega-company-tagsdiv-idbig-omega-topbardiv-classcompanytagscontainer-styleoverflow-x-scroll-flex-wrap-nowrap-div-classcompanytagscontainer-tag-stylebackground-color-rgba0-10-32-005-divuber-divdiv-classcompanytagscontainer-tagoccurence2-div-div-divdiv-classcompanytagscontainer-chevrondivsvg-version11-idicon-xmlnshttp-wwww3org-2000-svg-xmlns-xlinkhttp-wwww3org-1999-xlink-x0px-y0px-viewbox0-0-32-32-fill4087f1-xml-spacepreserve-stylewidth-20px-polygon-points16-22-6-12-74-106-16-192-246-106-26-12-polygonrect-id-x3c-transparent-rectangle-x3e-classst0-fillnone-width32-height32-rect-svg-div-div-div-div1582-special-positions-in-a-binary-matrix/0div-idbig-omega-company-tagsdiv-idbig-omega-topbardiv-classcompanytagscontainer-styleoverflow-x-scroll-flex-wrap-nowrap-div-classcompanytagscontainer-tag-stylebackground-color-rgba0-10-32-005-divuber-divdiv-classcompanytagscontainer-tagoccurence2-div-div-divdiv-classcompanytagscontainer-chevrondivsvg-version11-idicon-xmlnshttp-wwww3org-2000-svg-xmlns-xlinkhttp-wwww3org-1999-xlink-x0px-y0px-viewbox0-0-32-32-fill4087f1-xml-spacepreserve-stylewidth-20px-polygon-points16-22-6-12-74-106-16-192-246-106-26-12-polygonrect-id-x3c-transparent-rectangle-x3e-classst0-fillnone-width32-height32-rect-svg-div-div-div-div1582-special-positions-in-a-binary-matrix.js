/**
 * @param {number[][]} mat
 * @return {number}
 */

var numSpecial = function(mat) {
    let sum = 0;
    
    for(let r = 0; r < mat.length; r++){
        for(let c = 0; c < mat[r].length; c++){
            if(mat[r][c] === 1){
                if(isValidRow(r) && isValidCol(c)){
                sum++;
            }
            }
        }
    }
    
    function isValidRow(r){
     let count = 0
        let rows = mat[r]
        for (let i = 0; i < rows.length; i++) {
            if (rows[i] === 1) {
                count++
            }
        }
    
         if(count > 1) return false;
        else return true;
}
    function isValidCol(c){
    let count = 0
    for(let i = 0; i < mat.length; i++){
        let rows = mat[i]
        if(rows[c] === 1){
            count++
        }
    }
         if(count > 1) return false;
        else return true;
}
    return sum;
};



