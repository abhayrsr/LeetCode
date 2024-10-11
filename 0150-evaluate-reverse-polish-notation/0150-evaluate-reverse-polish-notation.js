/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = [];
    
    for(let i = 0; i < tokens.length; i++){
        if(tokens[i] !== '+' && tokens[i] !== '-' && tokens[i] !== '*' && tokens[i] !== '/'){
            stack.push(tokens[i])
        } else {
            let p;
            if(tokens[i] === '+'){
                p = Number(stack[stack.length - 2]) + Number(stack[stack.length - 1])
            } else if(tokens[i] === '-'){
                p = stack[stack.length - 2] - stack[stack.length - 1]
            } else if(tokens[i] === '*'){
                p = stack[stack.length - 2] * stack[stack.length - 1]
            } else {
                p = parseInt(stack[stack.length - 2] / stack[stack.length - 1])
            }
            stack.pop()
            stack.pop()
            stack.push(p)
            // console.log(stack)
        }
    }
    return Number(stack[0])
};