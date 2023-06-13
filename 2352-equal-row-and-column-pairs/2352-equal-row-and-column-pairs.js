/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) {
    let count = 0;
    let transpose = []
    for(let i = 0; i < grid.length; i++){
        let extra = [i];
        for(let j = 0; j < grid.length; j++){
            extra[j] = grid[j][i];
        }
        transpose.push(extra);
    }
    
    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < transpose.length; j++){
            if(arrayEquals(grid[i], transpose[j])){
                count++;
            }
        }
    }
    return count;
};

function arrayEquals(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
}