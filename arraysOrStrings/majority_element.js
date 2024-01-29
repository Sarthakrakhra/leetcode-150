/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let max = 0;
  let maxNum = 0;

  for (let i = 0; i < nums.length; i++) {
    let count = 0;
    for (let j = i; j < nums.length; j++) {
      if (nums[j] == nums[i]) {
        count++;
      }
    }

    if (count > max) {
      max = count;
      maxNum = nums[i];
    }
  }

  return maxNum;
};

console.log(majorityElement([3, 2, 3]));
