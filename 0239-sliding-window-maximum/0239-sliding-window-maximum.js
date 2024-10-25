/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    let output = [], q = []
    let l = 0, r= 0
    
    while(r < nums.length){
        while(q.length && (nums[q[q.length - 1]] <  nums[r])){
           q.pop() 
        }   
        q.push(r)
        
        if(l > q[0])
            q.shift()
        
        if((r + 1) >= k){
            output.push(nums[q[0]])
            l += 1;
        }
            
        r += 1
    }
    return output;
};

//  const res = [];
//     const queue = [];
//     let [l, r] = [0, 0];

//     while (r < nums.length) {
//         while (queue.length && nums[queue[queue.length - 1]] < nums[r]) {
//             queue.pop();
//         }
//         queue.push(r);
//         if (l > queue[0]) queue.shift();

//         if (r + 1 >= k) {
//             res.push(nums[queue[0]]);
//             l += 1;
//         }
//         r += 1;
//     }
//     return res;