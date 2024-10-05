/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    if(t.length>s.length)
        return "";
    
    let map1 = {};
    for(let i=0;i<t.length;i++){
        if(map1[t[i]]){
            map1[t[i]]++;
        }
        else
            map1[t[i]] = 1;
    }
    
    let count = 0;
    let ans = "";
    let map = {};
    let j = 0;
    for(let i=0;i<s.length;i++){
        if(map1[s[i]]){
           // console.log(count)
           if(map[s[i]]){
               map[s[i]]++;
           }
            else
                map[s[i]] = 1;
            if(map[s[i]]<=map1[s[i]]){
                count++;
            }
        }
        if(count==t.length){
             
            while(count==t.length&&j<s.length){
                let temp = s.slice(j,i+1);
               
                if(ans.length>temp.length||ans===""){
                  
                    ans = temp;
                }
                    if(map[s[j]]-1<map1[s[j]])
                        count--;
                    map[s[j]]--;
                
                j++;
            }
        }
        
    }
    return ans;
};