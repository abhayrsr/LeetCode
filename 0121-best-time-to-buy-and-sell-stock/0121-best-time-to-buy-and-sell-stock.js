/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
     let min = prices[0], track = min, res = 0;
    for(let i = 1; i < prices.length; i++){
        min = Math.min(min, prices[i]);
        res = Math.max(res, prices[i] - min);
    }
    return res;
};