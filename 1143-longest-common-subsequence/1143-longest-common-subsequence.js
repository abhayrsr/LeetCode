/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    let len1 = text1.length - 1, len2 = text2.length - 1;
    let dp = Array.from({ length: len1+1 }, () => Array(len2+1).fill(-1));
    // console.log(text1[len1], len2)
    function lcs(text1, text2, len1, len2){
        if(len1 + 1 == 0 || len2 + 1 == 0){
            return 0;
        }
        if(dp[len1][len2] !== -1) return dp[len1][len2];
        if(text1[len1] === text2[len2]){
            return dp[len1][len2] = 1 + lcs(text1, text2, len1-1, len2-1);
        } else{
            return dp[len1][len2] = Math.max(lcs(text1, text2, len1-1, len2), lcs(text1, text2, len1, len2-1));
        }
    }

    const res = lcs(text1, text2, len1, len2, dp);
    return res;
};