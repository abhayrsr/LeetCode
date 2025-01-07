/**
 * @param {string} s
 * @return {number}
 */
/**
 * @param {string} s
 * @return {number}
 */
var countPalindromicSubsequence = function(s) {
    let left = Array(26).fill(0);
    let right = Array(26).fill(0);
    let subsequence = new Set();

    for(let char of s){
        right[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    for(let char of s){
        let mid = char.charCodeAt(0) - 'a'.charCodeAt(0);
        right[mid]--;

        for(let j = 0; j < 26; j++){
            if(left[j] > 0 && right[j] > 0){
                subsequence.add(26 * mid + j);
            }
        }

        left[mid]++;
    }

    return subsequence.size;
};