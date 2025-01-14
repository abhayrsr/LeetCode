/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var findThePrefixCommonArray = function(A, B) {
        const n = A.length;
        const result = new Array(n).fill(0);
        const count = new Array(n + 1).fill(0);
        let common = 0;
        
        for(let i = 0; i < n; i++) {
            count[A[i]]++;
            if(count[A[i]] === 2) common++;
            count[B[i]]++;
            if(count[B[i]] === 2) common++;
            result[i] = common;
        }
        return result;
};