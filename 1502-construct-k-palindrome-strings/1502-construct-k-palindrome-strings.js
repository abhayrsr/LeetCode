/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var canConstruct = function(s, k) {
    let map = new Map();

    if(s.length < k) return false;

    for(let i = 0; i < s.length; i++){
        if(map.has(s[i])){
            map.set(s[i], map.get(s[i]) + 1);
        } else {
            map.set(s[i], 1);
        }
    }

    let count = 0;

    for(let [key, value] of map){
        if(value % 2 !== 0) count++;
    }

    if(count > k) return false;

    return true;
};