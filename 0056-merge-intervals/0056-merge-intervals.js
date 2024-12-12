/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a,b) => a[0] - b[0])
    let i = 0, j = 1;
    let answer = []
    
    for(let i = 0; i < intervals.length; i++){
        if(answer.length === 0 || intervals[i][0] > answer[answer.length - 1][1]){
            answer.push(intervals[i])
        } else {
            answer[answer.length-1][1] = Math.max(answer[answer.length - 1][1], intervals[i][1])
        }
    }
    
    return answer;
};