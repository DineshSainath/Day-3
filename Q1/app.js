/*
1.  How to compare two JSON to have the same properties that are in different order?
Let obj1 = {name: “Person 1”, age:5};
Let obj2 = {age:5, name:”Person 1”};

*/

// 1. we first convert the json to strings using stringify
// 2. sort the properties within each json
// 3. compare the strings and display the result.

function compareIt(obj1, obj2) {
  //stringify and sort
  var str1 = JSON.stringify(obj1, Object.keys(obj1).sort())
  var str2 = JSON.stringify(obj2, Object.keys(obj2).sort())
  //compare the sorted
  return str1 === str2
}
let obj1 = { name: 'person1', age: 5 }
let obj2 = { age: 5, name: 'person1' }
//display the comparison result
console.log(compareIt(obj1, obj2))
