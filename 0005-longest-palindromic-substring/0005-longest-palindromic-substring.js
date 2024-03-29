/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let res = "";
    let resLen = 0;
    
    for(let i = 0; i < s.length; i++){
        let l = i;
        let r = i;
        //odd length
        while(l >= 0 && r < s.length && s[l] == s[r]){
            if(r-l+1 > resLen){
                res = s.substring(l, r+1);
                resLen = r-l+1;
                console.log(res);
            }
            l-=1;
            r+=1;
        }
        
        l = i;
        r = i+1;
        //even length
        while(l >= 0 && r < s.length && s[l] == s[r]){
            if(r-l+1 > resLen){
                res = s.substring(l, r+1);
                resLen = r-l+1;
                console.log(res, "n");
            }
            l-=1;
            r+=1;
        }
    }
    return res;
};