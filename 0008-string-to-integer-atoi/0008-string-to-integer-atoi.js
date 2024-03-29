/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    s = s.trim();
    if(!s) return 0;
    
    let negative = false;
    let out = 0;
    
    if(s[0] === "-"){
        
        if(isNaN(parseInt(s[1]))){
            return 0;
        } else {
            negative = true;
            out = s.charCodeAt(1) - "0".charCodeAt(0)
        }
        
    }
    else if(s[0] === "+"){
        if(isNaN(parseInt(s[1]))){
            return 0;
        } else {
            negative = false;
            out = s.charCodeAt(1) - "0".charCodeAt(0)
        }
    }
    else if(isNaN(parseInt(s[0]))){
        return 0;
    }
    else {
        out = s.charCodeAt(0) - "0".charCodeAt(0)
    }
    
    let j = 0;
    
    if(negative || s[0] === "+"){
        j = 2
    } else {
        j = 1
    }
    
    for(let i = j; i < s.length; i++){
        
        if(!isNaN(parseInt(s[i]))){
            out = out*10 + (s.charCodeAt(i) - "0".charCodeAt(0));
            if(!negative && out >= (2**31 - 1)){
                return 2**31 - 1
            } 
            else if(negative && out >= (2**31)){
                return -(2**31)
            }
            
        } else {
            break;
        }  
    }
    
    if(negative){
        return -out
    } else {
        return out
    }
};