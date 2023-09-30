/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  let sumOfS = 0;
  let sumoOfT = 0;
  for (let char of s) {
    sumOfS = sumOfS + char.charCodeAt(0);
  }
  for (let char of t) {
    sumoOfT = sumoOfT + char.charCodeAt(0);
  }
  return String.fromCharCode(sumoOfT - sumOfS)
};