/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function(s, t) {
    let map = new Map();
    let res = 0;
    for(let i = 0; i < t.length; i++){
        if(map.has(t[i])){
            map.set(t[i], map.get(t[i]) + 1);
        } else {
            map.set(t[i], 1)
        }
    }
    
    for(let i = 0; i < s.length; i++){
        // console.log(map)
        if(map.has(s[i])){
            map.set(s[i], map.get(s[i]) - 1);
            if(map.get(s[i]) == 0){
                map.delete(s[i]);
            }
        } else {
            res++;
        }
    }
    
    return res;
};