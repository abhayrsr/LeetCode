/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function(s) {
let total = 0;
let setArr;
for(let i=0; i<=s.length - 3; i++){
setArr = new Set(s.slice(i, i+3));

    if(setArr.size === 3){
        total++;
    }
}

return total;
};