/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    if(t == "") return ""
    
    let countT = new Map(), window = new Map()
    
    for(let c = 0; c < t.length; c++){
        if(countT.has(t[c])){
            countT.set(t[c], countT.get(t[c]) + 1)
        } else {
            countT.set(t[c], 1)
        }
    }
    
    let have = 0, need = countT.size;
    let res = [-1, -1], resLen = Infinity;
    let l = 0;
    
    for(let r = 0; r < s.length; r++){
        let c = s[r];
        if(window.has(c)) {
            window.set(c, window.get(c) + 1)
        } else {
            window.set(c, 1)
        }
        
        if(countT.has(c) && (window.get(c) === countT.get(c))){
            have += 1
        }
        // console.log(have, need)
        
        while(have === need){
            if(r - l + 1 < resLen){
                res = [l, r]
                resLen = (r - l + 1)
            }
            window.set(s[l], window.get(s[l]) - 1)
            if(countT.has(s[l]) && (window.get(s[l]) < countT.get(s[l]))){
                have -= 1
            }
            l += 1
        }
    }
    
    if(resLen === Infinity) return ""
    else {
        let ans = ""
        for(let i = res[0]; i <= res[1]; i++){
            ans += s[i]
        }
        return ans;
    }
};