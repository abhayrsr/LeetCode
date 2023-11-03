/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function(target, n) {
    let result = [];
    let i = 0, j = 1;
    for(i = 0; i < n;){
        if(target[i] == undefined) break;
        if(target[i] == j){
            result.push("Push");
            i++;
            j++;
        } else {
            result.push("Push");
            result.push("Pop");
            j++;
        }
    }
    return result;
};