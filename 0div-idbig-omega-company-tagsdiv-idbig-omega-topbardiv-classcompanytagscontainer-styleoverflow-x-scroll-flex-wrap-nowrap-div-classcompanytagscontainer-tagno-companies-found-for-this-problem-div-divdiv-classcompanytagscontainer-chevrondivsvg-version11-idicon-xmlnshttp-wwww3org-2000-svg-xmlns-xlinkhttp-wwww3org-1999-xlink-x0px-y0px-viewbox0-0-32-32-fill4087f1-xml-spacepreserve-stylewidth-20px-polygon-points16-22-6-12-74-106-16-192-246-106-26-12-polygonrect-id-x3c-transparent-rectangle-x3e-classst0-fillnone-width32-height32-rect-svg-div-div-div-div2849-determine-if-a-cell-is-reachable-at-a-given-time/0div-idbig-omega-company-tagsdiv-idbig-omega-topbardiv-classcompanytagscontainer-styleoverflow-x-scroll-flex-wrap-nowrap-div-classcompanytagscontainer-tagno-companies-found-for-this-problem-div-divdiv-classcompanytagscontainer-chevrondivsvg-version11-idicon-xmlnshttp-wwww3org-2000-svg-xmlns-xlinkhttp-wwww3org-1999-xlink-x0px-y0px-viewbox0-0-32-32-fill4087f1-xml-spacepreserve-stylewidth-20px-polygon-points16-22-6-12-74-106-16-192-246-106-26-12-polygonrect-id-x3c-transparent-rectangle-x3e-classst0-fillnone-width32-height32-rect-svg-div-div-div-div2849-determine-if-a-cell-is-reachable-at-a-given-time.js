/**
 * @param {number} sx
 * @param {number} sy
 * @param {number} fx
 * @param {number} fy
 * @param {number} t
 * @return {boolean}
 */
var isReachableAtTime = function(sx, sy, fx, fy, t) {
    let xDist = Math.abs(fx-sx);
    let yDist = Math.abs(fy-sy);
    
    if(xDist === 0 && yDist === 0){
        return t !== 1;
    }
    
    return xDist <= t && yDist <= t
};