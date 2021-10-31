// Given a sorted array and a number x, find a pair in array whose sum is closest to x.
function closestSum(arr, x) {
    let right = arr.length - 1;
    let left = 0;
    let diff;
    let vals = [];
    while (left < right) {
        if (!diff || (Math.abs(arr[left] + arr[right] - x) < diff)) {
            diff = Math.abs((arr[left] + arr[right]) - x);
            vals = [arr[left], arr[right]];
        }
        if (arr[left] + arr[right] > x) {
            right--;
        } else {
            left++;
        }
    }
    return vals;
}

console.log(closestSum([10,22,28,29,30,40], 54));