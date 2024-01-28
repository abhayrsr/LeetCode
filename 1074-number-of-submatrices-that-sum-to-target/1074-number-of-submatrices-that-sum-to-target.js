/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {number}
 */
const numSubmatrixSumTarget = (g, target) => {
    let n = g.length;
    let m = g[0].length;
    let res = 0;
    for (let i = 0; i < n; i++) { // prefix sum for each row, use original grid to save
        for (let j = 1; j < m; j++) {
            g[i][j] += g[i][j - 1];
        }
    }
    for (let i = 0; i < m; i++) { // for every possible (left column, right column) range
        for (let j = i; j < m; j++) {
            let ma = new Map();
            ma.set(0, 1);
            let cur = 0;
            for (let k = 0; k < n; k++) { // accumulate the prefix sum of submatrices by adding up the sum of values for each row
                cur += g[k][j] - (i > 0 ? g[k][i - 1] : 0);
                res += ma.get(cur - target) || 0;
                ma.set(cur, ma.get(cur) + 1 || 1);
            }
        }
    }
    return res;
};