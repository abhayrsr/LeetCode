/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kInversePairs = function(n, k) {
    const MOD = 1000000007;
    let dp = new Array(k + 1).fill(0);
    dp[0] = 1;
    for (let i = 2; i <= n; i++) {
        for (let j = 1; j <= k; j++) {
            dp[j] = (dp[j] + dp[j - 1]) % MOD;
        }
        for (let j = k; j >= i; j--) {
            dp[j] = (dp[j] - dp[j - i] + MOD) % MOD;
        }
    }
    return dp[k]; 
};