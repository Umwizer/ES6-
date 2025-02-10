
// // Given an array, return the reversed version of the array (a different kind of reverse though), you reverse portions of the array,
// //  you'll be given a length argument which represents the length of each portion you are to reverse.

// // E.g

// // selReverse([1,2,3,4,5,6], 2)
// //  //=> [2,1, 4,3, 6,5]
// // if after reversing some portions of the array and the length of the remaining portion in the array is not up to the length argument, just reverse them.

// // selReverse([2,4,6,8,10,12,14,16], 3)
// //  //=> [6,4,2, 12,10,8, 16,14]
// // selReverse(array, length)

// // array - array to reverse
// // length - length of each portion to reverse
// // Note : if the length argument exceeds the array length, reverse all of them, if the length argument is zero do not reverse at all.


// // statement

// // Sure! Let’s go through a problem that could be asked on Codewars involving selective array reversing.

// // Problem Example:
// // Given an array of numbers, you need to reverse the order of elements in a specific portion of the array
// // , but leave the other parts untouched. For example, you might be asked to reverse only the elements that are at odd indices.

// // Problem Statement:
// // Input:
// // An array of integers, and an instruction to reverse the portion of the array that meets certain conditions (like reversing elements at odd indices).

// // Output:
// // Return the modified array with the specified portion reversed.
// olution Approach:
// Here’s how you would solve this problem:

// Identify the Elements to Reverse: First, extract the elements at the odd indices.

// Reverse These Elements: Reverse the selected elements.

// Place Them Back in Their Original Positions: Put the reversed elements back into the odd indices of the original array.


function selReverse(array,length){ 
    const toReverse = array.slice(0,array)
    toReverse.reverse();
    return [...toReverse,...array.slice(length)];
}