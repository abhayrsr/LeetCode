/**
 * @param {number[][]} score
 * @param {number} k
 * @return {number[][]}
 */
var sortTheStudents = function(score, k) {
    let extra = new Map();
    
    for(let i = 0; i < score.length; i++){
        extra.set(score[i][k], i);
    }
    
    let sorted = ([...extra.entries()].sort(([keyA],[keyB]) => keyB - keyA));
    let sortedMap = new Map(sorted);
    
    let ans = [];
    
    for(const value of sortedMap.values()){
        ans.push(score[value]);
    }
    
    return ans;
   

//    for(let i = 0; i < score.length; i++){
//        for(let j = 0; j < score.length; j++){
//            if(score[i][k] > score[j][k]){
//                [score[i], score[j]] = [score[j], score[i]];
//            }
//        }
//    }

//    return score;
};