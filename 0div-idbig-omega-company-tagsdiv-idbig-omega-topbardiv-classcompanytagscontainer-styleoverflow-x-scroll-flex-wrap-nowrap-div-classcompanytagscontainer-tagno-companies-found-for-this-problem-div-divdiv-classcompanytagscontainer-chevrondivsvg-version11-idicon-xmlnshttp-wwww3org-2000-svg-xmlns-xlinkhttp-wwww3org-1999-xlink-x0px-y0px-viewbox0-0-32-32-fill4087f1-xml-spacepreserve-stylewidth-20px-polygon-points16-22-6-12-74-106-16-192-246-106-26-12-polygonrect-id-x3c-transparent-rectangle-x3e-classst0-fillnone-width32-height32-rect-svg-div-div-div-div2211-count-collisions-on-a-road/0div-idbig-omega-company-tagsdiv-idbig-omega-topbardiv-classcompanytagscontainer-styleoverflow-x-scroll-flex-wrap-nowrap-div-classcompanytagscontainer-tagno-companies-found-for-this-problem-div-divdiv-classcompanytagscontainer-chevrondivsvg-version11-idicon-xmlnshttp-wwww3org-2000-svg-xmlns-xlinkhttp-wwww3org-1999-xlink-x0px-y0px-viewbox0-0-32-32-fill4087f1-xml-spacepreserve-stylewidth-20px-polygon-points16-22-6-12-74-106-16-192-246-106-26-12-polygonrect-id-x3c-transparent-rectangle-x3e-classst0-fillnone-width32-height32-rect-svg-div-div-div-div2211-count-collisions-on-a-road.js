/**
 * @param {string} directions
 * @return {number}
 */
var countCollisions = function(directions) {
    let left = 0, right = directions.length - 1;
    
    while(left < directions.length && directions.charAt(left) == "L"){
        left++;
    }
    
    while(right >= 0  && directions.charAt(right) == "R"){
        right--;
    }
    
    let count = 0;
    
    for(let i = left; i <= right; i++){
        if(directions[i] !== "S"){
            count++;
        }
    }
    
    return count;
    
};