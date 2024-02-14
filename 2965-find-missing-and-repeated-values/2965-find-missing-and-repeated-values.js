/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function(grid) {
    let map = new Array(grid.length*grid.length+1).fill(0);
    let p1 = 0, p2 = 0;
    let n = grid.length;
    for(let i = 0; i < grid.length; i++){
        let track = 0;
        while(track !== n){
            map[grid[i][track]]++;
            track++;
        }
    }
    console.log(map)
    for(let i = 1; i < map.length; i++){
        if(map[i] == 2){
            p1 = i;
        } 
        else if(map[i] == 0){
            p2 = i;
        }
    }
    return [p1,p2];
};