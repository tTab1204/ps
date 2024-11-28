/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// O(N*N)
var twoSum = function (nums, target) {
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        result = [i, j];
        break;
      }
    }
  }

  return result;
};

// O(N)
var twoSum = function (nums, target) {
  let obj = {};

  let result = [];

  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];

    if (obj.hasOwnProperty(complement)) {
      result = [obj[complement], i];
    }

    obj[nums[i]] = i;
  }

  return result;
};
