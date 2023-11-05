/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var getWinner = function(arr, k) {
    let win = 0, element = arr[0];
    
    for(let i = 1; i < (arr.length); i++){
        if(element > arr[i]){
            if(++win == k || (i == arr.length - 1)) return element;
        } else {
            win = 0;
            element = arr[i];
            win++
            if(win == k || (i == arr.length - 1)) return element;
        }
    }
    
};