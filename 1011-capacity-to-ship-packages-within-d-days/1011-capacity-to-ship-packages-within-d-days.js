/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function(weights, days) {
    let low = Math.max(...weights), high = 0;
    for(let i = 0; i < weights.length; i++){
        high += weights[i];
    }
    
    function calculateDays(weights, cap){
        let load = 0, days = 1;
        for(let i = 0; i < weights.length; i++){
            if(load + weights[i] > cap){
                days+=1;
                load=weights[i];
            } else {
                load += weights[i];
            }
        }
        return days;
    }
    
    while(low <= high){
        let mid = parseInt((low+high)/2);
        let noOfDays = calculateDays(weights, mid);
        
        if(noOfDays <= days){
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return low;
};