/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let left = 0, right = s.length - 1;
    
    while(left < right){
        if(!isAlphanumeric(s[left])){
            left++;
        }
        else if(!isAlphanumeric(s[right])){
            right--;
        }
        else if((s[left]).toLowerCase() !== (s[right]).toLowerCase()){
            return false;
        } else {
            left++;
            right--;
        }
    }
    
   return true;
};

 function isAlphanumeric(char){
        let code = char.charCodeAt(0);
        return ((code >= 'a'.charCodeAt(0) && code <= 'z'.charCodeAt(0)) || (code >= 'A'.charCodeAt(0) && code <= 'Z'.charCodeAt(0) || (code >= '0'.charCodeAt(0)) && code <= '9'.charCodeAt(0)) )
    }