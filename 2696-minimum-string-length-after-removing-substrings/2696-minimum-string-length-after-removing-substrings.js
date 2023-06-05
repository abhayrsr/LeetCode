/**
 * @param {string} s
 * @return {number}
 */
var minLength = function(s) {
    let stack = [];
    for(let i = 0; i < s.length; i++){
        
        if(stack[stack.length - 1] == "A" && s.charAt(i)== "B"){
            stack.pop();
        }
        else if(stack[stack.length - 1] == "C" && s.charAt(i) == "D"){
            stack.pop();
        }
        else{
            stack.push(s.charAt(i));
        }
 
    }
    //console.log(stack);
    return stack.length;
};