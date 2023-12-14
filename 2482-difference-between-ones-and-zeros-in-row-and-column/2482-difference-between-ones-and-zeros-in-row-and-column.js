/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var onesMinusZeros = function(grid) {
    const r = grid.length; 
    const c = grid[0].length; 

    const diff = new Array(r).fill().map(() => new Array(c)); 

    const r1 = new Array(r).fill(0); 
    const c1 = new Array(c).fill(0); 

    for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {
            r1[i] += grid[i][j];
            c1[j] += grid[i][j]; 
        }
    }

    for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {
            diff[i][j] = 2 * (r1[i] + c1[j]) - r - c;
        }
    }

    return diff;
};