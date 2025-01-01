/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function(s) {
    let sumZero = 0, sumOne = 0, max = -Infinity;
    
    for(let i = 0; i < s.length; i++){
        if(s[i] == '1'){
            sumOne++
        }
    }
    console.log(sumOne)
    
    for(let i = 0; i < s.length - 1; i++){
        if(s[i] == '0'){
            sumZero++;
        }
        if(s[i] == '1'){
            sumOne--;
        }
        max = Math.max(max, sumOne+sumZero)
    }
    return max;
};