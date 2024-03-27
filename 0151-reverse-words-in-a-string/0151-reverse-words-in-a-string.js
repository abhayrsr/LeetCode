/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let space = s.split(' ');
    let stack = [];
    
    for(let i = space.length-1; i >= 0; i--){
        if(space[i] !== ''){
            stack.push(space[i]);
        }
    }
    
    return stack.join(' ');
};