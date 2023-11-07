/**
 * @param {number[]} dist
 * @param {number[]} speed
 * @return {number}
 */
var eliminateMaximum = function(dist, speed) {
    let n = dist.length;
    let time = dist.map((d, i) => d/speed[i]);
    time.sort((a,b) => a-b);
    
    for(let i = 0; i < n; i++){
        if(time[i] <= i){
            return i
        }
    }
    return n
};