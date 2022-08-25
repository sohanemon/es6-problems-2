//1.
const friends = [
  {
    name: "Mehedi",
    age: 20,
  },
  {
    name: "Rakib",
    age: 15,
  },
  {
    name: "Siam",
    age: 22,
  },
];

console.log(friends.reduce((p, c) => p + c.age, 0)); //57

/**
 * first index value not required always
 * most of the case it is 0
 * but some time it needs to assign
 * as this time it is settled as 0
 */
