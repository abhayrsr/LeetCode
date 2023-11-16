/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let stack = [];
    s = s.split(" ");
    for(let i = s.length - 1; i >= 0; i--){
        if(s[i] !== ""){
            stack.push(s[i]);
        }
    }

    return stack.join(" ");
};