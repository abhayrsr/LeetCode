/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let l = 0, r = height.length - 1;
    let lMax = 0, rMax = 0, min = 0, sum = 0;
    let result = 0;
    while(l < r){
        lMax = Math.max(height[l], lMax)
        rMax = Math.max(height[r], rMax)
        min = Math.min(lMax, rMax)
        
        if(min === lMax){
            sum = min - height[l]
            if(sum > 0){
                result += sum
            }
        } else {
            sum = min - height[r]
            if(sum > 0){
                result += sum
            }
        }
        
        if(lMax <= rMax){
            l++
        } else {
            r--
        }
        
    }
    return result;
};