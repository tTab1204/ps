/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  nums.sort((a, b) => a - b);

  let cnt = 0;

  /**
   * 1. nums 배열을 오름차순 정렬
   * 2. nums 배열 순회
   * 3. 만약, nums[i]가 cnt와 같다면, cnt++
   * 4. 만약, nums[i]가 cnt와 다르다면, cnt를 한번 더 +1 해주고, 거기서 순회 종료
   * 5. cnt 반환
   */
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === cnt) {
      cnt++;
    } else {
      break;
    }
  }

  return cnt;
};

// 다른 풀이
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let res = nums.length;

  for (let i = 0; i < nums.length; i++) {
    res += i - nums[i];
  }

  return res;
};
