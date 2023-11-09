/**
 * @param {string} s
 * @return {number}
 */
var numSub = function(s) {
    let left = 0, total = 0;
    
    for(let i = 0; i < s.length; i++){
        if(s.charAt(i) == 0){
            left = i + 1;
        } else {
            if(s.charAt(left) == s.charAt(i)){
                total += i - left + 1;
            } 
        }
    }
    
    return total%(10**9 + 7);
};