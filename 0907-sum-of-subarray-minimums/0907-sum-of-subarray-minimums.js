/**
 * @param {number[]} arr
 * @return {number}
 */
var sumSubarrayMins = function(arr) {
    const n = arr.length;
    const mod = 1e9 + 7;

    // Initialize arrays to store the count of elements on the left and right that are greater than the current element
    const left = new Array(n).fill(0);
    const right = new Array(n).fill(0);

    // Initialize arrays to store the next smaller element on the left and right for each element
    const nextSmallerLeft = new Array(n).fill(0);
    const nextSmallerRight = new Array(n).fill(0);

    const stack = [];

    // Calculate the next smaller element on the left
    for (let i = 0; i < n; i++) {
        while (stack.length > 0 && arr[i] < arr[stack[stack.length - 1]]) {
            stack.pop();
        }
        nextSmallerLeft[i] = stack.length > 0 ? stack[stack.length - 1] : -1;
        stack.push(i);
    }

    // Clear the stack for the right traversal
    stack.length = 0;

    // Calculate the next smaller element on the right
    for (let i = n - 1; i >= 0; i--) {
        while (stack.length > 0 && arr[i] <= arr[stack[stack.length - 1]]) {
            stack.pop();
        }
        nextSmallerRight[i] = stack.length > 0 ? stack[stack.length - 1] : n;
        stack.push(i);
    }

    // Calculate the count of elements on the left and right that are greater than the current element
    for (let i = 0; i < n; i++) {
        left[i] = i - nextSmallerLeft[i];
        right[i] = nextSmallerRight[i] - i;
    }

    let result = 0;

    // Calculate the sum of minimums over all subarrays
    for (let i = 0; i < n; i++) {
        result = (result + arr[i] * left[i] * right[i]) % mod;
    }

    return result;
};