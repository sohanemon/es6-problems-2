//1.
const arr = [1, 9, 17, 22];
const addUsingFor = (arr) => {
  let sum = 0;
  for (let e of arr) {
    sum += e;
  }
  return sum;
};
console.log(addUsingFor(arr)); //49
//or
const addUsingReduce = (arr) => arr.reduce((p, c) => p + c);
console.log(addUsingReduce(arr)); //49

/** note:
 * reduce returns last 'previous' value
 * it doesn't returns array like map
 * and not just only operates like forEach
 */
