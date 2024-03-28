/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let stack = [];
    let depth = 0;
    
    for(let i = 0; i < s.length; i++){
        if(s.charAt(i) === "("){
            stack.push(s[i]);
            depth = depth > stack.length ? depth : stack.length;
        }
        else if(s.charAt(i) === ")"){
            stack.pop();
        }
    }
    return depth;
};