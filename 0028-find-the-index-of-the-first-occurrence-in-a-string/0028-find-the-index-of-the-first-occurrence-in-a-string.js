/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    for (let i = 0; i < haystack.length; i++) {
    let isMatched = true;
    for (let j = 0; j < needle.length; j++) {
      if (haystack[i + j] !== needle[j]) {
        isMatched = false;
        break;
      }
    }
    if (isMatched) return i;
  }
  return -1;
};