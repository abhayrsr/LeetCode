/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    let stack = "";
    let counter = 0;
    
    for(let c of s){
        if(c == "("){
            counter++;
        } 
        
        if(counter > 1){
            stack += c;
        }
        
        if(c == ")"){
            counter--;
        }
    }
    return stack;
};