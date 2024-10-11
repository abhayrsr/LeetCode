/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
     let ans = new Array(temperatures.length).fill(0)
     let stack = []
     
     for(let i = 0; i < temperatures.length; i++){
         while(stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]){
             let prevDay = stack.pop()
             ans[prevDay] = i - prevDay
         }
         stack.push(i)
     }
    return ans;
};