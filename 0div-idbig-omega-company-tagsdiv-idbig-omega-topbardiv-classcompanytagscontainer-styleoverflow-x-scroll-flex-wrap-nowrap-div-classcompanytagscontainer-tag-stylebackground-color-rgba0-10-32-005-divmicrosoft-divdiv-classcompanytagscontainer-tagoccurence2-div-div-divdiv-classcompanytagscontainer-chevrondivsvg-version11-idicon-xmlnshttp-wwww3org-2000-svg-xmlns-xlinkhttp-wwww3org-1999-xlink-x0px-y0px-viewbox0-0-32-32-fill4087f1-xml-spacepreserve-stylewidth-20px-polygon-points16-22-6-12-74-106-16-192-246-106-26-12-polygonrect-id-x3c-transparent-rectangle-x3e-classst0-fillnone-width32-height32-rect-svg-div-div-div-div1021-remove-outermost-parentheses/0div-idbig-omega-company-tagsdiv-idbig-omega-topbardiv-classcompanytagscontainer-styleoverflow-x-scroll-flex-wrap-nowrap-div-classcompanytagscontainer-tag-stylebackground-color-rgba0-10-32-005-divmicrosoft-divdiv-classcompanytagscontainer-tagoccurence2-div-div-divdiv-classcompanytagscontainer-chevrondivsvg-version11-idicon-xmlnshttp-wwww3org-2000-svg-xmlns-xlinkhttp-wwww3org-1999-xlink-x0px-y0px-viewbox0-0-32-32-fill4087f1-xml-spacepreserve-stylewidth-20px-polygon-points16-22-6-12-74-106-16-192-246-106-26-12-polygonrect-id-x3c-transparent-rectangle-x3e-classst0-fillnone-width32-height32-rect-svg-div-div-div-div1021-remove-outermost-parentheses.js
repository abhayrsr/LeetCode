/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    let stack = [];
    let count1 = 0, count2 = 0;
    let result = ""
    
    for(let i = 0; i < s.length; i++){
        if(s.charAt(i) == "("){
            count1++
            stack.push(s.charAt(i));
        }
        else if(s.charAt(i) == ")"){
            count2++
            stack.push(s.charAt(i));
        }
        
        if(count1 == count2){
            stack.pop();
            stack.shift();
            result += stack.join("");
            stack  = [];
        }
    }
    return result;
};