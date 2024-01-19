/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;

    // Create a copy of the matrix to store the minimum falling path sum
    const dp = [...Array(rows)].map(() => Array(cols));

    // Initialize the first row of dp with the same values as the first row of the matrix
    for (let j = 0; j < cols; j++) {
        dp[0][j] = matrix[0][j];
    }

    // Calculate the minimum falling path sum for each cell
    for (let i = 1; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            // Calculate the minimum falling path sum for the current cell
            dp[i][j] = matrix[i][j] + Math.min(
                dp[i - 1][j], // directly above
                (j > 0 ? dp[i - 1][j - 1] : Infinity), // above and to the left
                (j < cols - 1 ? dp[i - 1][j + 1] : Infinity) // above and to the right
            );
        }
    }

    // Find the minimum value in the last row of dp, which represents the minimum falling path sum
    return Math.min(...dp[rows - 1]);
};