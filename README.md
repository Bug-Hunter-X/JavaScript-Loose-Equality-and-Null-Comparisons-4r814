# JavaScript Loose Equality and Null Comparisons

This example demonstrates a subtle error that can occur in JavaScript when using loose equality (==) to compare values to null.  The function `foo` is designed to return null if either of its arguments is null. However, due to the quirks of loose equality, unexpected behavior might arise.

The `bug.js` file contains the buggy code. The `bugSolution.js` file provides a corrected version using strict equality (===).