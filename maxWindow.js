/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var maxSlidingWindow = function(nums, k) {
    let queue = [];
    let maxArr = [];
    if (nums.length === k) return [Math.max(...nums)];
    for (let i=0; i<nums.length; i++) {
        if (nums[i] > maxArr[maxArr.length-1]) {
            queue = [];
        } else {
            while (queue.length > 0 && nums[i] > queue[queue.length - 1]) {
                queue.pop();
            }
        }
        queue.push(nums[i]);
        let window = i + 1 - k;
        if (window >= 0) {
            maxArr.push(queue[0]);
            if (nums[window] === queue[0]) queue.shift();
        }
    }
    return maxArr;
};