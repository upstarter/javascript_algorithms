const head = ([x]) => x
const tail = ([, ...xs]) => xs
const def = x => typeof x !== 'undefined'
const undef = x => !def(x)
const first = ([x, ...xs], n = 1) => def(x) && n ? [x, ...first(xs, n - 1)] : []
const last = (xs, n = 1) => reverse(first(reverse(xs), n))
// const flatten = ([x, ...xs]) => def(x)
//     ? isArray(x) ? [...flatten(x), ...flatten(xs)] : [x, ...flatten(xs)]
//     : []

const map = ([x, ...xs], fn) => {
  if (undef(x)) return []
  return [fn(x), ...map(xs, fn)]
}

const filter = ([x, ...xs], fn) => def(x)
    ? fn(x)
        ? [x, ...filter(xs, fn)] : [...filter(xs, fn)]
    : []

const reject = ([x, ...xs], fn) => {
  if (undef(x)) return []
  if (!fn(x)) {
    return [x, ...reject(xs, fn)]
  } else {
    return [...reject(xs, fn)]
  }
}

const partition = (xs, fn) => [filter(xs, fn), reject(xs, fn)]

const reduce = ([x, ...xs], fn, memo, i = 0) => def(x)
    ? reduce(xs, fn, fn(memo, x, i), i + 1) : memo

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
