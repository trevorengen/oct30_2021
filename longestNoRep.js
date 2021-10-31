/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    let max = 0;
    let maxSub = '';
    let tempStr;
    let idx;
    for (let i=0; i<s.length; i++) {
        tempStr = s[i];
        idx = maxSub.indexOf(tempStr);
        if (idx > -1) maxSub = maxSub.substring(idx+1);
        maxSub += tempStr;
        max = Math.max(max, maxSub.length);
    }
    return max;
};

console.log(lengthOfLongestSubstring('sfddfsgfdsggdfsfgdssfgdreyewyvnbxvcnghyjd'));