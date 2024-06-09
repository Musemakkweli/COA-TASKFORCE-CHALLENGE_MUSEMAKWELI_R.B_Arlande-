/**
 * Function to determine if a contiguous subarray exists that sums up to the target value.
 * @param {number[]} arr - The array of integers to be checked.
 * @param {number} target - The target sum we are trying to find within a subarray.
 * @returns {boolean} - Returns true if such a subarray is found, otherwise false.
 */
function hasTargetSumSubarray(arr, target) {
    // Initialize the current cumulative sum and a map to store cumulative sums encountered.
    let currSum = 0;
    let sumMap = new Map();

    // Iterate over the array elements
    for (let i = 0; i < arr.length; i++) {
        currSum += arr[i];

        // Check if the current cumulative sum is equal to the target sum.
        if (currSum === target) {
            return true;
        }

        // Check if there exists a subarray (ending at the current index) with the target sum.
        if (sumMap.has(currSum - target)) {
            return true;
        }

        // Store the current cumulative sum in the map.
        sumMap.set(currSum, i);
    }

    // Return false if no subarray with the target sum is found.
    return false;
}

// Test cases to validate the function
// Test Case 1
console.log("Test Case 1:");
console.log(`Input: arr = [4, 2, 7, 1, 9, 5], target = 14`);
console.log(`Expected: true, Actual: ${hasTargetSumSubarray([4, 2, 7, 1, 9, 5], 14)}`);

// Test Case 2
console.log("Test Case 2:");
console.log(`Input: arr = [1, 2, 3, 4, 5], target = 9`);
console.log(`Expected: true, Actual: ${hasTargetSumSubarray([1, 2, 3, 4, 5], 9)}`);

// Test Case 3
console.log("Test Case 3:");
console.log(`Input: arr = [1, 2, 3, 4, 5], target = 15`);
console.log(`Expected: true, Actual: ${hasTargetSumSubarray([1, 2, 3, 4, 5], 15)}`);

// Test Case 4
console.log("Test Case 4:");
console.log(`Input: arr = [1, 2, 3, 4, 5], target = 16`);
console.log(`Expected: false, Actual: ${hasTargetSumSubarray([1, 2, 3, 4, 5], 16)}`);

// Test Case 5
console.log("Test Case 5:");
console.log(`Input: arr = [0, 0, 0, 0], target = 0`);
console.log(`Expected: true, Actual: ${hasTargetSumSubarray([0, 0, 0, 0], 0)}`);

// Test Case 6
console.log("Test Case 6:");
console.log(`Input: arr = [5], target = 10`);
console.log(`Expected: false, Actual: ${hasTargetSumSubarray([5], 10)}`);

// Test Case 7
console.log("Test Case 7:");
console.log(`Input: arr = [5, -3, 2, 3, 1], target = 5`);
console.log(`Expected: true, Actual: ${hasTargetSumSubarray([5, -3, 2, 3, 1], 5)}`);

// Test Case 8
console.log("Test Case 8:");
console.log(`Input: arr = [1, -1, 1, -1, 1, -1], target = 0`);
console.log(`Expected: true, Actual: ${hasTargetSumSubarray([1, -1, 1, -1, 1, -1], 0)}`);
