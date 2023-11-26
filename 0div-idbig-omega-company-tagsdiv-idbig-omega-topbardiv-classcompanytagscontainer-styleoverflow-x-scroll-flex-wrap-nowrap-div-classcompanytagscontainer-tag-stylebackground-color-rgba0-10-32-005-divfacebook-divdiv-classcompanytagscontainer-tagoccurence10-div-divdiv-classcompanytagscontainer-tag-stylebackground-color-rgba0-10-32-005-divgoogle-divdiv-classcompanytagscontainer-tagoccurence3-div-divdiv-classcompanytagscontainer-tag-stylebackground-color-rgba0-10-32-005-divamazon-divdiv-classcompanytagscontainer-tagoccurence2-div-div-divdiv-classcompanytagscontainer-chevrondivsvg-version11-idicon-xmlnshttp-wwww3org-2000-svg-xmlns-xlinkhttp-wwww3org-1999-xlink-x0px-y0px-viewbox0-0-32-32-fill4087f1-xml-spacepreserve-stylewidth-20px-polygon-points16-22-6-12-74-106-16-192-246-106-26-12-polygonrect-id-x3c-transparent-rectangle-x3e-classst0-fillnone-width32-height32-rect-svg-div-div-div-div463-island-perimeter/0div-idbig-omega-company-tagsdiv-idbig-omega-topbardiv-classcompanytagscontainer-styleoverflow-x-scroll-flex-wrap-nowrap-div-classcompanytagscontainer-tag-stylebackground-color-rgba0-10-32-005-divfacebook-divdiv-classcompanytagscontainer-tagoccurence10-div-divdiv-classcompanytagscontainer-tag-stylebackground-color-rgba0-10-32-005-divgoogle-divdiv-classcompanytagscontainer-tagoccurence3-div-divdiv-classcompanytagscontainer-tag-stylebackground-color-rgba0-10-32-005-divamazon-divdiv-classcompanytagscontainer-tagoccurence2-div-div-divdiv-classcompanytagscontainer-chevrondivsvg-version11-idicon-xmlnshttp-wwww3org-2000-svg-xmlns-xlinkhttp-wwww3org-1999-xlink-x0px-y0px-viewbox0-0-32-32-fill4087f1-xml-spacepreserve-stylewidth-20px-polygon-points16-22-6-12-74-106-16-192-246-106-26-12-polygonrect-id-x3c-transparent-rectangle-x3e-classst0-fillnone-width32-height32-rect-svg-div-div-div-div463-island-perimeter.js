/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    let rows = grid.length, columns = grid[0].length;
    let set = new Set();
    
    function dfs(r,c){
        if(r < 0 || r >= rows || c < 0 || c >= columns || grid[r][c] == "0"){
            return 1;
        }
        
        if(set.has((r + ',' + c))){
            return 0;
        }
        
        set.add((r + ',' + c));
        
        return dfs(r+1, c) + dfs(r-1, c) + dfs(r, c+1) + dfs(r, c-1);
    }
    
    for(let r = 0; r < rows; r++){
        for(let c = 0; c < columns; c++){
            if(grid[r][c]) return dfs(r,c);
        }
    }
};