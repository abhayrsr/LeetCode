/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let rows = grid.length, columns = grid[0].length;
    let set = new Set();
    
    function dfs(r, c){
        if(r < 0 || r >= rows || c < 0 || c >= columns || grid[r][c] == 0 || (set.has((r + ',' + c))== true)){
            return 0;
        }
        set.add((r + ',' + c));
        
        return(1 + dfs(r+1,c) + dfs(r-1,c) + dfs(r, c+1) + dfs(r, c-1));
    }
    
    let area = 0;
    
    for(let i = 0; i < rows; i++){
        for(let j = 0; j < columns; j++){
            area = Math.max(area, dfs(i,j));
        }
        console.log(area)
    }
    
    return area;
};