/**
 * @param {number} n
 * @return {number}
 */
var minimumOneBitOperations = function(n) {
    if(n == 0) return 0;
    
    k = 0;
    while(2**k <= n){
        k+=1;
    }
    k-=1
    return 2 ** (k+1) - 1 - minimumOneBitOperations(2**k ^ n);
    
};