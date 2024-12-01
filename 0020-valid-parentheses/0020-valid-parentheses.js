var isValid = function(s) {
    let stack = [];
    
    for(let i = 0; i < s.length; i++){
        if(s.charAt(i) === "("){
                stack.push(")")
            } else if(s.charAt(i) === "{"){
                stack.push("}")
            } else if(s.charAt(i) === "[") {
                stack.push("]")
            } else if(s.charAt(i) === ")"){
                if(stack[stack.length - 1] === ")"){
                    stack.pop()
                } else {
                    return false
                }
            } else if(s.charAt(i) === "}"){
                if(stack[stack.length - 1] === "}"){
                    stack.pop()
                } else {
                    return false
                }
            } else if(s.charAt(i) === "]"){
                if(stack[stack.length - 1] === "]"){
                    stack.pop()
                } else {
                    return false
                }
            }
        }
    
    return stack.length === 0
};