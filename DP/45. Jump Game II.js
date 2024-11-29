// 1주일 뒤에 다시 풀어보기
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  /**
   * [2,3,1,1,4]
   * 문제분석
   * 1. 그니까, nums[i]는 '최대'로 점프할 수 있는 숫자고
   * 2. nums.length - 1까지 도달하는데, 최소 점프 횟수가 몇번일까
   *
   * 접근법
   * - 각 위치에서 가능한 점프 범위 계산?
   * - nums[i](=2)와 nums[i+1](=3)이, nums.length 보다 크거나 같다면?
   * - 현재 가능한 범위 내에서 다음 점프를 위한 가장 유리한 위치를 선택
   */

  let jumps = 0; // 실제 점프 횟수
  let currentJumpEnd = 0; // 최대로 점프할 수 있는 범위
  let farthest = 0; // 현재 위치(i)에서 가장 멀리 갈 수 있는 위치

  for (let i = 0; i < nums.length - 1; i++) {
    farthest = Math.max(farthest, nums[i] + i);

    if (i === currentJumpEnd) {
      jumps++;
      currentJumpEnd = farthest;
    }

    if (currentJumpEnd >= nums.length - 1) break;
  }

  return jumps;
};
