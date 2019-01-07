
var arr = [ {"id":"10", "apple": "crunchy"}, {"id":"11", "orange": "juicy"}];

for (var i = 0; i < arr.length; i++){
  console.log("array index: " + i);
  var obj = arr[i];
  for (var key in obj){
    var value = obj[key];
    console.log(key + ": " + value);
  }
}

let ids = arr.reduce( (acc, fruit) => {
    acc.push(fruit.id)
    return acc;
},[])

// console.log(ids)

let arrange = t => {
  return { num: t.id, groups: t.groups.map(arrange) }
}

let data = [
  {id: 1, groups: [{id: 3, groups: []}]},
  {id: 4, groups: []},
  {id: 5, groups: []}
]

let groups = data.map(arrange)

console.log(groups)

let byID = g => {
    if (g.num === 3) {
      return true
    } else {
      return false
    }
}

// weird hack
const flatten = groups => groups.flatMap(group => [group, ...flatten(group.groups)]);

console.log(flatten(groups))
const filtered = filter(flatten(groups), byID);

console.log(filtered)
