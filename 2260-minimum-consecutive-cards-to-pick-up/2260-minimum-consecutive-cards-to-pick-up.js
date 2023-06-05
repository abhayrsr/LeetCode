/**
 * @param {number[]} cards
 * @return {number}
 */
var minimumCardPickup = function(cards) {
    let array = [];
    let min = Infinity;
    
    for(let i = 0; i <= 1000000; i++){
        array.push(-1);
    }
    
    for(let i = 0; i < cards.length; i++){
        
        if(array[cards[i]] !== -1){
            min = Math.min(min, i - array[cards[i]] + 1);
        }
        
        array[cards[i]] = i;
        
        
    }
    //console.log(array)
    
    return min == Infinity ? -1 : min;
};