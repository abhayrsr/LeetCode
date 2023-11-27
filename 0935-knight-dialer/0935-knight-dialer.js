/**
 * @param {number} n
 * @return {number}
 */
var knightDialer = function(n) {
    const jumps = [
            [4, 6],
            [6, 8],
            [7, 9],
            [4, 8],
            [3, 9, 0],
            [],
            [1, 7, 0],
            [2, 6],
            [1, 3],
            [2, 4]
        ];

        const MOD = 10 ** 9 + 7;
        const dp = Array.from({ length: n + 1 }, () => Array(10).fill(0));

        for (let square = 0; square < 10; square++) {
            dp[0][square] = 1;
        }

        for (let remain = 1; remain < n; remain++) {
            for (let square = 0; square < 10; square++) {
                let ans = 0;
                for (let next_square of jumps[square]) {
                    ans = (ans + dp[remain - 1][next_square]) % MOD;
                }

                dp[remain][square] = ans;
            }
        }

        let ans = 0;
        for (let square = 0; square < 10; square++) {
            ans = (ans + dp[n - 1][square]) % MOD;
        }

        return ans;
};