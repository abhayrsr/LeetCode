/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    let rows = image.length, columns = image[0].length;
    let set = new Set();
    let pixel = image[sr][sc];
    
    function dfs(r,c){
        
        if((r < 0 || r >= rows || c < 0 || c >= columns) || image[r][c] !== pixel || set.has((r + ',' + c))){
            return;
        }
        
        if(image[r][c] === pixel){
            image[r][c] = color;
        }
        
        set.add((r + ',' + c));
        
        dfs(r+1, c);
        // console.log('x')
        dfs(r-1, c);
        // console.log('y')
        dfs(r, c+1);
        // console.log('z')
        dfs(r, c-1);
        // console.log('a')
        
    }
    
    dfs(sr,sc);
    return image;
};
