/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let left = 0, right = s.length - 1
    
    while(left < right){
        if(!isAlphaNum(s[left])){
            left++;
        } else if(!isAlphaNum(s[right])){
            right--;
        } else if(s[left].toLowerCase() !== s[right].toLowerCase()){
            return false
        } else {
            left++;
            right--;
        }
    }
    return true;
};

const isAlphaNum = (str) => {
        return ((str.charCodeAt(0) >= 'a'.charCodeAt(0) && str.charCodeAt(0) <= 'z'.charCodeAt(0)) || (str.charCodeAt(0) >= 'A'.charCodeAt(0) && str.charCodeAt(0) <= 'Z'.charCodeAt(0)) || (str.charCodeAt(0) >= '0'.charCodeAt(0) && str.charCodeAt(0) <= '9'.charCodeAt(0)))
    }