/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let temp = [];
    
    for(let i = 0; i < s.length; i++){
        let curr = s[i];
        let tempLast = temp[temp.length - 1];
        
        if(curr === "(") temp.push(")");
        else if(curr === "{") temp.push("}");
        else if(curr === "[") temp.push("]");
        else if(curr === tempLast) temp.pop();
        else return false;
    }
    return temp.length === 0;
};