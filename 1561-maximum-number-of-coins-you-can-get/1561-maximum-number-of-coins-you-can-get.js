/**
 * @param {number[]} piles
 * @return {number}
 */
var maxCoins = function(piles) {
    piles.sort((a,b) => a-b);
    let sum = 0;
    for(let i = Math.floor(piles.length/3); i < piles.length; i+=2){
        sum+=piles[i];
    }
    return sum;
};