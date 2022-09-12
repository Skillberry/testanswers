const assert = require("assert");

function flatten(array) {
  let flattenedArray = [];
  if (!Array.isArray(array)) {
    return array
  }
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      flattenedArray = flattenedArray.concat(flatten(array[i]));
    } else {
      flattenedArray.push(array[i]);
    }
  }
  return flattenedArray;
}

assert.deepEqual(
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
  flatten([1, 2, 3, [4, 5, [6, 7, 8], 9, [10], [11, [12, 13]]]])
)

assert.strictEqual(
  'one',
  flatten('one')
)