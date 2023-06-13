/**
 * @param {number[][]} score
 * @param {number} k
 * @return {number[][]}
 */
var sortTheStudents = function(score, k) {
    let map = [];
    let output = [];
    for(let i = 0; i < score.length; i++){
        map.push([score[i][k], i]);
    }
    
    map.sort((a,b) => b[0] - a[0]);
    
    for(let i = 0; i < map.length; i++){
        output.push(score[map[i][1]]);
    }
    
    return output;
   

//    for(let i = 0; i < score.length; i++){
//        for(let j = 0; j < score.length; j++){
//            if(score[i][k] > score[j][k]){
//                [score[i], score[j]] = [score[j], score[i]];
//            }
//        }
//    }

//    return score;
};