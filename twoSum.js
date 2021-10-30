/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    let remainderMap = new Map();
    for (let i=0; i<nums.length; i++) {
        if (remainderMap.has(nums[i])) {
            let arr = remainderMap.get(nums[i]);
            return [...arr, i];
        }
        let remainder = target - nums[i];
        remainderMap.set(remainder, [i]);
    }
};