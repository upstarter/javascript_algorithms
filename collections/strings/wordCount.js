const fruitBasket = ['banana', 'cherry', 'orange', 'apple', 'cherry', 'orange', 'apple', 'banana', 'cherry', 'orange', 'fig' ];
const count = fruitBasket.reduce( (acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
} , {})

console.log(count)
