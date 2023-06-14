/**
 * @param {number[][]} grid
 * @return {number}
 */
var deleteGreatestValue = function(grid) {
    let ans = 0;
    let extra = [];
    let k = grid[0].length - 1;
    for(let i = 0; i < grid.length; i++){
        grid[i].sort((a,b) => a - b);
    }
    let len = grid[0].length;
    while(len > 0){
        let max = -Infinity;
        for(let i = grid.length - 1; i >= 0; i--){
            
            max = Math.max(grid[i][k], max);
            grid[i].pop();
            // console.log(grid)
            // console.log(max, grid[i][k])
        }
        
        ans += max;
        len--;
        k--;
    }
    
    return ans;
};