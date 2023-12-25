/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    let countMap = new Map();

    function countWays(index) {
        if (countMap.has(index)) return countMap.get(index);
        let ways = 0;

        if (index < s.length) {
            let a1 = parseInt(s.charAt(index));
            if (a1 >= 1 && a1 <= 26) ways += countWays(index + 1);
            
            if (a1 !== 0 && index + 1 < s.length) {
                let a2 = parseInt(s.substring(index, index + 2));
                if (a2 >= 1 && a2 <= 26) ways += countWays(index + 2);
            }
            countMap.set(index, ways);
            return ways;
        } else {
            return 1;
        }
    }

    return countWays(0);

};