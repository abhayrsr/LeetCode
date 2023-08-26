/**
 * @param {string} s
 * @return {number}
 */
var removePalindromeSub = function(s) {
    let i = 0, j = s.length - 1;
    let count = 0;
    if(!s) return 0;
    while(i < j){
        if(s.charAt(i) !== s.charAt(j)) return 2;
        i++;
        j--;
    }
    
    return 1;
    
};