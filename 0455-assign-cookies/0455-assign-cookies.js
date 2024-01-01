/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    let count = 0;
    g.sort((a,b) => {return a-b});
    s.sort((a,b) => {return a-b});
   
    for(let i=g.length-1,j=s.length-1; j>=0 && i>=0 ;i--)
        {
            if(s[j]>=g[i]) 
            {
                count++;
                j--;
            }
        }
        return count;
};