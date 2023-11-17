/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let res = "";
    if(strs.length == 1) return strs[0];
    for(let i = 0; i < strs[0].length; i++){
        for(let j = 1; j < strs.length; j++){
            if(strs[0][i] !== strs[j][i]){
                return res;
            }
            if(j === strs.length - 1){
                res += strs[0][i];
            }
            
        }
        
    }
    return res;
};