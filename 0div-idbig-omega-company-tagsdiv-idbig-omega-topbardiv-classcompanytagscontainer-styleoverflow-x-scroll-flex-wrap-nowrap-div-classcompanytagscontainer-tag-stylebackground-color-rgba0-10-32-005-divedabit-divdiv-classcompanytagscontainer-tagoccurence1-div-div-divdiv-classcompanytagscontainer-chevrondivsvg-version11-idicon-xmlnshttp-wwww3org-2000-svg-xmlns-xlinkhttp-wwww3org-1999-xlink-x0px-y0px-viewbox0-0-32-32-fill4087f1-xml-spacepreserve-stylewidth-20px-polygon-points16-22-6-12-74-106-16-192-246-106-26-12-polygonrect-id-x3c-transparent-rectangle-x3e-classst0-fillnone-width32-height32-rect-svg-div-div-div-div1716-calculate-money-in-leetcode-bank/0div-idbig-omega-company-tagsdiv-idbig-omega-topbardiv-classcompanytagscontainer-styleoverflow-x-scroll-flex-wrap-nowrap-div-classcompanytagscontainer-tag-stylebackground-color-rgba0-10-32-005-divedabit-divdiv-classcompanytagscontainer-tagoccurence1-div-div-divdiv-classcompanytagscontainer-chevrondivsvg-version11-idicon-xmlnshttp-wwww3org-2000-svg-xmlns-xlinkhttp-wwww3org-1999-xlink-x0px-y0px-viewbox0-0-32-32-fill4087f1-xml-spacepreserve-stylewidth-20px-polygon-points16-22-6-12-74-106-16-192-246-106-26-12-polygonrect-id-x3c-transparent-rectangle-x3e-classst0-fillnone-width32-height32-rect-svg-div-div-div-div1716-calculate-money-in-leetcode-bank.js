/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function(n) {
    let sum = 0;
    let x = 1;
    while(n > 0){
        let i = x;
        for(i = x; i <= x+6; i++){
            sum += i;
            n--;
            if(n == 0){
                break;
            }
        }
        x++;
    }
    return sum;
};