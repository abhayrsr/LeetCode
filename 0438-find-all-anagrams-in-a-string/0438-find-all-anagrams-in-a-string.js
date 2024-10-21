/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
     let sLen = s.length;
  let pLen = p.length;
  let result = [];
  let sArr = new Array(26).fill(0);
  let pArr = new Array(26).fill(0);

  for (let i = 0; i < pLen; i++) {
    sArr[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    pArr[p.charCodeAt(i) - 'a'.charCodeAt(0)]++;
  }

  for (let i = 0; i < sLen; i++) {
    if (isAnagram(sArr, pArr)) result.push(i);
    sArr[s.charCodeAt(i) - 'a'.charCodeAt(0)]--;
    sArr[s.charCodeAt(i + pLen) - 'a'.charCodeAt(0)]++;
  }

  function isAnagram(sArr, pArr) {
    for (let i = 0; i < pArr.length; i++) {
      if (sArr[i] !== pArr[i]) return false;
    }
    return true;
  }
  return result;
};