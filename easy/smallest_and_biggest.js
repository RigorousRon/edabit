/*
Create a function that takes an array of numbers and returns both the minimum
and maximum numbers, in that order

Examples:

minMax([1, 2, 3, 4, 5]) => [1, 5]
minMax([2334454, 5]) => [5, 2334454]
minMax([1]) => [1, 1]
*/

function minMax(array) {
  const min = Math.min(...array);
  const max = Math.max(...array);

  return [min, max];
}

console.log(minMax([1, 2, 3, 4, 5]));
console.log(minMax([2334454, 5]));
console.log(minMax([1]));