/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let map = new Map();
    if(s.length !== t.length) return false;
    for(let i = 0; i < s.length; i++){
        if(map.has(s.charAt(i))){
            map.set(s.charAt(i), map.get(s.charAt(i)) + 1);
        } else {
            map.set(s.charAt(i), 1);
        }
    }

    for(let i = 0; i < t.length; i++){
        if(map.has(t.charAt(i))){
            map.set(t.charAt(i), map.get(t.charAt(i)) - 1);
        }
    }

    for(const [key,values] of map.entries()){
        if(map.get(key) !== 0){
            return false;
        }
    }

    return true;
};