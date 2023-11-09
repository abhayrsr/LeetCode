/**
 * @param {string} s
 * @return {number}
 */
var countHomogenous = function(s) {
    let left = 0, total = 0;

    for(let i = 0; i < s.length; i++){
        if(s.charAt(left) == s.charAt(i)){
            total+= i - left + 1;
        } else {
            total += 1;
            left = i;
        }
    }

    return total%(10**9+7);
};