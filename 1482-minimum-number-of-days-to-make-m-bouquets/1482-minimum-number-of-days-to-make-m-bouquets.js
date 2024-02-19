/**
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var minDays = function(bloomDay, m, k) {
   function possible(bloomDay, day, k){
       let bouquet = 0, count = 0;
       
       for(let i = 0; i < bloomDay.length; i++){
           if(bloomDay[i] <= day){
               count++;
           } else {
               bouquet += parseInt(count/k);
               count = 0;
           }
       }
       bouquet += parseInt(count/k);
       return bouquet;
   } 
    
    if(m*k > bloomDay.length){
        return -1;
    }
    
    let low = Math.min(...bloomDay), high = Math.max(...bloomDay);
    let ans = -1;
    
    while(low <= high){
        let mid = parseInt((low+high)/2);
        let bNo = possible(bloomDay, mid, k);
        
        if(bNo >= m){
            ans = mid;
            high = mid-1;
        } else {
            low = mid+1;
        }
    }
    return ans;
};