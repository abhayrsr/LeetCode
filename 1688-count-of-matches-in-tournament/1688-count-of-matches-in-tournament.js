/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function(n) {
    let count = 0;
    let count1 = 0
    while(n > 1){
        count1 = Math.floor(n / 2);
        count += count1;
        n = n - count1;
    }
    return count;
};



