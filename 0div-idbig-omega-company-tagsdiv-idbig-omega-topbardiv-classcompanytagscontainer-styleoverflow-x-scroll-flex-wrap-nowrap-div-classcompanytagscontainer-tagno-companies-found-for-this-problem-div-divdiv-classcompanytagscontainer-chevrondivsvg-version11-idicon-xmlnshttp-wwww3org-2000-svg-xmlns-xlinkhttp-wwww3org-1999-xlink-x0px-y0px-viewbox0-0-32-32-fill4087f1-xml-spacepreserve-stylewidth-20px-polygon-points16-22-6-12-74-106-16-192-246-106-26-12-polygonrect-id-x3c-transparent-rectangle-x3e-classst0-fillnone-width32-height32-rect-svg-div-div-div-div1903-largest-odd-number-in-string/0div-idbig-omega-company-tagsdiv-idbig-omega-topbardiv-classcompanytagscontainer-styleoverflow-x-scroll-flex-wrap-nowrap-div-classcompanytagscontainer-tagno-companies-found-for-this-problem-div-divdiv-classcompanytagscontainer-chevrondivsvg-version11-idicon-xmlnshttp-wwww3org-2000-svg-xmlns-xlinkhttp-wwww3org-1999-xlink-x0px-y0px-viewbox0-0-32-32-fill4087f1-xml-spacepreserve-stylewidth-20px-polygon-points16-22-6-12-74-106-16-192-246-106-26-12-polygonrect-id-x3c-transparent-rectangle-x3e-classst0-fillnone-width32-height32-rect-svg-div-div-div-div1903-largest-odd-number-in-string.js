/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function(num) {
    let str = num.split("");
    for(let i = str.length - 1; i >= 0; i--){
        if(str[i]%2 == 0){
            str.pop();
        } else {
            break;
        }
    }
    
    return str.join("");
};