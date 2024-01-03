/**
 * @param {string[]} bank
 * @return {number}
 */
var numberOfBeams = function(bank) {
    let row = bank.length, col = bank[0].length;
    let sum = 0, res = 0;
    for(let i = 0; i < row; i++){
        let val = 0;
        for(let j = 0; j < col; j++){
            if(bank[i][j] == '1'){
                val += parseInt(bank[i][j]);
            }
        }
        if(val == 0){
            continue;
        } 
        if(i == 0){
            res = val;
        } else {
            res*=val;
            sum+=res;
            res = val;
        }  
    }
    return sum;
};