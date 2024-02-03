/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  k = k % nums.length; // we do mod in case the number of places to move is greater than the length of nums

  function swapElements(left, right) {
    let l = left;
    let r = right;
    while (l < r) {
      [nums[r], nums[l]] = [nums[l], nums[r]];

      l++;
      r--;
    }
  }

  // reverse array
  swapElements(0, nums.length - 1);

  // reverse back the segments of 0 -> k - 1 and k -> nums.length - 1
  swapElements(0, k - 1);
  swapElements(k, nums.length - 1);
};

rotate([1, 2, 3, 4, 5, 6, 7], 3); // [5,6,7,1,2,3,4]
rotate([-1, -100, 3, 99], 2); // [3,99,-1,-100]
