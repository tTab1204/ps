/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  s.sort((a, b) => a - b);

  g.sort((a, b) => a - b);

  let cnt = 0;

  let i = 0;
  let j = 0;

  while (i < g.length && j < s.length) {
    if (g[i] <= s[j]) {
      cnt++;
      i++;
    }

    j++;
  }

  return cnt;
};
