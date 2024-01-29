/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  if (nums.length == 1) {
    return 1;
  }

  let left = 0;
  let right = left + 1;

  while (right < nums.length) {
    if (nums[left] == nums[right]) {
      right++;
    } else {
      nums[left + 1] = nums[right];
      left++;
      right++;
    }
  }

  return left + 1;
};

console.log(removeDuplicates([1, 1]));
