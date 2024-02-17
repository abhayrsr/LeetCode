/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let low = 1, high = Math.max(...piles);
    let ans = -1;
    
    function totalHours(piles, mid){
        let hrs = 0;
        for(let i = 0; i < piles.length; i++){
            hrs += Math.ceil(piles[i]/mid); 
        }
        return hrs;
    }
    
    while(low <= high){
        let mid = parseInt((low+high)/2); 
        let tH = totalHours(piles, mid);
        
        if(tH <= h){
            ans = tH;
            high = mid-1;
        } else {
            low = mid + 1;
        }
    }
    
    return low;
};