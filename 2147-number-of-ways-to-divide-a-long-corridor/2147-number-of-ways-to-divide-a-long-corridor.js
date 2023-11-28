/**
 * @param {string} corridor
 * @return {number}
 */
var numberOfWays = function(corridor) {
    let seats = [];
    for(let i = 0; i < corridor.length; i++){
        if(corridor[i] == "S"){
            seats.push(i);
        }
    }
    if(seats.length == 0 || seats.length%2 !== 0) return 0;

    let res = 1;

    for(let i = 1; i < seats.length - 1; i+=2){
        res = (res*(seats[i+1] - seats[i]))%(10**9+7);
        
    }

    return res;
};