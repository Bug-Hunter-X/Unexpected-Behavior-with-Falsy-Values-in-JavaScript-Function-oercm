# Unexpected Behavior with Falsy Values in JavaScript

This repository demonstrates a common JavaScript bug related to handling falsy values in a function. The original code checks explicitly for null values but doesn't account for other falsy values such as 0, '', or false.

The `bug.js` file contains the buggy code. The `bugSolution.js` file provides a corrected version that addresses this issue by using a more robust check for falsy values.  This solution uses a more comprehensive approach to avoid unexpected behavior when dealing with a wider range of input values.

## Bug Description
The original function `foo` only explicitly checks for `null` values.  However, in JavaScript, values like `0`, `false`, and `''` (empty string) are also considered falsy. Therefore, the function may produce unintended results if these values are passed as arguments.

## Solution
The solution employs a more general check to identify any falsy input, ensuring that the function handles all falsy values consistently.