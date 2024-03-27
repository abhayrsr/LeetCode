/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let space = s.split(' ');
    let stack = [];
    
    for(let i = 0; i < space.length; i++){
        if(space[i] !== ''){
            stack.push(space[i]);
        }
    }
    
    return stack.reverse().join(' ');
};