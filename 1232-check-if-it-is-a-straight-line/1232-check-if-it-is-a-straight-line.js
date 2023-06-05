/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coordinates) {
    let x1 = coordinates[0][0];
    let y1 = coordinates[0][1];
    let x2 = coordinates[1][0];
    let y2 = coordinates[1][1];
    
    for(let i = 2; i < coordinates.length; i++){
        let x3 = coordinates[i][0];
        let y3 = coordinates[i][1];
        
        if((y2 - y1)*(x3 - x2) != (y3 - y2)*(x2 - x1)) return false;
    }
    return true;
};