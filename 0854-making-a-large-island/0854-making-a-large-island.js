/**
 * @param {number[][]} grid
 * @return {number}
 */
var largestIsland = function(grid) {
    const find_val = (ref, grid, i, j) => {
        if (i < 0 || j < 0 || i >= grid.length || j >= grid[0].length || grid[i][j] === 0 || grid[i][j] === ref) {
            return 0;
        }
        grid[i][j] = ref;
        return 1 + (find_val(ref, grid, i + 1, j) + find_val(ref, grid, i - 1, j) + find_val(ref, grid, i, j + 1) + find_val(ref, grid, i, j - 1));
    };

    const n = grid.length;
    let ref = 2, maxArea = -1;
    const mp = new Map();

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                const k = find_val(ref, grid, i, j);
                mp.set(ref, k);
                ref += 1;
                maxArea = Math.max(maxArea, k);
            }
        }
    }

    mp.set(0, 0);
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 0) {
                let sum = 0;
                const seen = new Set();
                if (i > 0) seen.add(grid[i - 1][j]);
                if (j > 0) seen.add(grid[i][j - 1]);
                if (i < n - 1) seen.add(grid[i + 1][j]);
                if (j < n - 1) seen.add(grid[i][j + 1]);
                seen.forEach(val => sum += mp.get(val));
                maxArea = Math.max(maxArea, sum + 1);
            }
        }
    }
    return maxArea;
};