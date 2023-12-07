/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let count = new Map();
    let bucket = new Array(nums.length + 1);
    
    for(let n in nums){
        if(count.has(nums[n])){
            count.set(nums[n], count.get(nums[n]) + 1);
        } else {
            count.set(nums[n], 1)
        }
    }
    
     count.forEach((freq, key) => {
        if (!bucket[freq]) {
            bucket[freq] = [];
        }
        bucket[freq].push(key);
    });
    
    // console.log(bucket)
    
    const res = [];
    
    for (let i = bucket.length - 1; i >= 0 && k > 0; i--) {
        if (bucket[i]) {
            for (const ele of bucket[i]) {
                res.push(ele);
                k--;
            }
        }
    }

    return res;
    
};