/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function(num) {
    let index = -Infinity;
    for(let i = num.length - 1; i >= 0; i--){
        if(num.charAt(i)%2 !== 0){
           index = i;
           break;
        } 
     }
    if(index === -Infinity){
        return "";
    } else return num.substring(0, index+1);
};