/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let rows = grid.length, columns = grid[0].length;
    let set = new Set();
    
    function dfs(r,c){
        if(r < 0 || r >= rows || c < 0 || c >= columns || grid[r][c] == 0 || set.has((r + "," + c))){
            return 0;
        }
        
        set.add((r + "," + c));
        
        return (1 + dfs(r+1, c) + dfs(r-1, c) + dfs(r, c+1) + dfs(r, c-1));
    }
    
    let count = 0;
    for(let r = 0; r < rows; r++){
        for(let c = 0; c < columns; c++){
            if(dfs(r,c)){
                count++;
            }
        }
    }
    return count;
    
};