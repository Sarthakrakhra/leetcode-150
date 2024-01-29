/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  let idx = -1;

  for (let i = 0; i < haystack.length; i++) {
    let match = true;
    for (let j = 0; j < needle.length; j++) {
      if (haystack[i + j] != needle[j]) {
        match = false;
        break;
      }
    }

    if (match) {
      idx = i;
      break;
    }
  }

  return idx;
};

console.log(strStr("sadbutsad", "sad"));
console.log(strStr("leetcode", "leeto"));
