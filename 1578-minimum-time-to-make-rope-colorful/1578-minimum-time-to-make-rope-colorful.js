/**
 * @param {string} colors
 * @param {number[]} neededTime
 * @return {number}
 */
var minCost = function(colors, neededTime) {
    let l = 0, res = 0;
    
    for(let r = 1; r < colors.length; r++){
        if(colors[l] == colors[r]){
            if(neededTime[l] <= neededTime[r]){
                res += neededTime[l];
                l = r;
            } else {
                res += neededTime[r];
        }
      } else {
          l = r;
      }
    }
    return res;
};