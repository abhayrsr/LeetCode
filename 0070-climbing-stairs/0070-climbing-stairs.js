/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(n === 1) return 1;
    else if(n === 2) return 2;
    let n1 = 1, n2 = 2, ways = 0;
    
    for(let i = 3; i <= n; i++){
        ways = n1 + n2;
        n1 = n2;
        n2 = ways;
    }
    return ways;
};