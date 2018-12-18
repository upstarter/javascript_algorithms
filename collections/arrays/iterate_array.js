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

console.log(ids)
