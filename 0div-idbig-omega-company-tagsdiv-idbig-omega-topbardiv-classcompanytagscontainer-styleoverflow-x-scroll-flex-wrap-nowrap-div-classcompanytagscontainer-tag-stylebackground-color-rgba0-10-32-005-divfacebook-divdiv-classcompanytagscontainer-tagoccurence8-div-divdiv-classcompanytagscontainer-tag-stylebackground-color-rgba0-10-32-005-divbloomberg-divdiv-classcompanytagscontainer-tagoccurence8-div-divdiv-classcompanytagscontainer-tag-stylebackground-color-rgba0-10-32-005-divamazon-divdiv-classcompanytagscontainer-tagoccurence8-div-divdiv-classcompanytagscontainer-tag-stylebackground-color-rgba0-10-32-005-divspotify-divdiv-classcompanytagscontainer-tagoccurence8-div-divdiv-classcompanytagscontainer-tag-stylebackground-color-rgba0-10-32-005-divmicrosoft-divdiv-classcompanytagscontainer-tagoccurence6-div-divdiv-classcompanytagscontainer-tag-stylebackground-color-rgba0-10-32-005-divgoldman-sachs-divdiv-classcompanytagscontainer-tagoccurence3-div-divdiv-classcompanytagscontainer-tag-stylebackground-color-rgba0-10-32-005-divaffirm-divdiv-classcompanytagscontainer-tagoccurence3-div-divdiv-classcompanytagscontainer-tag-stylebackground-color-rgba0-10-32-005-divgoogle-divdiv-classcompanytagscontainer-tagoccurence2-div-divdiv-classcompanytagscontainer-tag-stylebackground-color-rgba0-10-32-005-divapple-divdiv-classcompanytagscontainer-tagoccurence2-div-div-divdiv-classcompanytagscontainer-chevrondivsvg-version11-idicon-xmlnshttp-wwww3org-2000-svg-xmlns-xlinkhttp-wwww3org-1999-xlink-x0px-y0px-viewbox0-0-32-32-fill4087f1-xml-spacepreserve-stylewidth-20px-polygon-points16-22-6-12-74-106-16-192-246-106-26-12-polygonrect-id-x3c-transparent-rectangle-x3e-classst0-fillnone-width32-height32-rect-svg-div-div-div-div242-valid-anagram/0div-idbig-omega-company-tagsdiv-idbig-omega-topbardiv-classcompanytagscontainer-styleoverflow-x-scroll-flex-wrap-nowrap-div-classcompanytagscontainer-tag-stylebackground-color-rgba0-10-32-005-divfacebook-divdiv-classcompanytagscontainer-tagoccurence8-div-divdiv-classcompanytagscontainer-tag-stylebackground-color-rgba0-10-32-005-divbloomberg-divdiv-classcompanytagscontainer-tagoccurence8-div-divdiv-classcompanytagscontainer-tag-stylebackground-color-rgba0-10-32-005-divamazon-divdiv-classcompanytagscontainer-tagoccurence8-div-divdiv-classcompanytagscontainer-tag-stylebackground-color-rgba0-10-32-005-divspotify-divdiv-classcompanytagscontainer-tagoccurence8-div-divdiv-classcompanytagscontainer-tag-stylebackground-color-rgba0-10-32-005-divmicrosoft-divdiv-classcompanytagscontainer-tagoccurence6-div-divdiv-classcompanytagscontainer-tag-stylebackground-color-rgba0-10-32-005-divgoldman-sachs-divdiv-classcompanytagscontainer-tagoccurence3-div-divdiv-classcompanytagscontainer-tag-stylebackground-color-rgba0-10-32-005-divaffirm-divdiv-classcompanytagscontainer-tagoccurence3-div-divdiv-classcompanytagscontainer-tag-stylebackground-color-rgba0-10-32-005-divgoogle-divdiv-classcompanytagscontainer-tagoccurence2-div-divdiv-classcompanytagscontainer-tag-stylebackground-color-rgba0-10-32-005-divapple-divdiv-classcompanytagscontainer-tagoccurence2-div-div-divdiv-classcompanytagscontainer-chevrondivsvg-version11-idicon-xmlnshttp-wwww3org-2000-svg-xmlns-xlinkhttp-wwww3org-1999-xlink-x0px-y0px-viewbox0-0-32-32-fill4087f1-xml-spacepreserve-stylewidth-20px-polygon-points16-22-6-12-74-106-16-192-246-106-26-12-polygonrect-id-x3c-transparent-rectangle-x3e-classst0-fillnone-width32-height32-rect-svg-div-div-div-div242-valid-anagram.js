/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let arr = new Array(26).fill(0);
    
    if(s.length !== t.length) return false;
    
    for(let i = 0; i < s.length; i++){
        arr[s.charCodeAt(i) - 'a'.charCodeAt(0)] += 1;
    }
    
    for(let i = 0; i < t.length; i++){
        if(arr[t.charCodeAt(i) - 'a'.charCodeAt(0)]){
            arr[t.charCodeAt(i) - 'a'.charCodeAt(0)] -= 1;
        } else {
            return false;
        }
        
    }
    return true; 
};