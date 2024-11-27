/**
 * 내 풀이
 * 1. 가장 작은 수와 그 다음으로 작은 수를 찾고
 * 2. 거기서 min값을 구한다.
 * 3. 반복
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
  const newNums = nums.sort((a, b) => a - b);
  let answer = 0;

  for (let i = 0; i < newNums.length; i += 2) {
    answer += newNums[i];
  }

  return answer;
};
