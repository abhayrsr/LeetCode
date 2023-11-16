/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let stack = s.split(" ");
    let result = [];
    let str = ""
    
    for(let i = stack.length - 1; i >= 0; i--){
        if(stack[i] == ""){
            continue;
        }
        else result.push(stack[i])
    }
    
    for(let i = 0; i < result.length; i++){
        if(i == result.length - 1){
            str += result[i];
            break;
        }
        
        str+=result[i];
        str+=" ";
    }
    
    return str;
};