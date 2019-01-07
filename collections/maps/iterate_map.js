var myMap = new Map();
myMap.set(1, "one");
myMap.set(2, "two");

for (var [key, value] of myMap) {
  console.log(key + " = " + value);
}

console.log('*************')
// using forEach
myMap.forEach((value, key) => {
  console.log(key + " = " + value);
}, myMap)

console.log('*************')
// reduce
myMap.entries(myMap).reduce( (acc, i) => {
  acc.push(i);
  return acc;
}, [])
