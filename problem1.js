//1.
function makeEvenByForLoop(arr = []) {
  const newArr = [];
  for (let e of arr) {
    newArr.push(e + 1);
  }
  return newArr;
}
console.log(makeEvenByForLoop([1, 3, 5, 7])); //[2, 4, 6, 8];

//or
function makeEvenByMap(arr = []) {
  return arr.map((e) => e + 1);
}
console.log(makeEvenByMap([1, 3, 5, 7])); //[ 2, 4, 6, 8 ]

//2.
const arr = [33, 50, 79, 78, 90, 101, 30];
const divisibleBy10 = (arr) => arr.filter((e) => !(e % 10));
console.log(divisibleBy10(arr)); //[ 50, 90, 30 ]

const divisibleBy10WithFind = (arr) => arr.find((e) => !(e % 10));
console.log(divisibleBy10WithFind(arr)); //50

/** note:
 * filter returns an array
 * find returns a number
 *
 * filter returns all match
 * find returns first match
 */
