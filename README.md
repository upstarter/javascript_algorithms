# javascript_algorithms
Javascript Algorithms

### Dynamic Property Names
ES6 adds the ability to create or add properties with dynamically assigned keys.

```javascript
let  city= 'sheffield_'

let a = {    [ city + 'population' ]: 350000}

a[ city + 'county' ] = 'South Yorkshire'

console.log(a)

// {sheffield_population: 350000, sheffield_county: 'South Yorkshire' }
```

### for … of Loops
ES6 adds a way to iterate over each of the values in an array. This is different from the existing for ... in loop that loops over the key/index.

```javascript
let a = ['a', 'b', 'c', 'd' ]

// ES6 
for ( var val of a ) {    console.log( val );} 
// "a" "b" "c" "d"

// pre-ES6 
for ( var idx in a ) {    console.log( idx );}  // 0 1 2 3
```

Using the new for … of loop saves adding a let val = a[idx] inside each loop.

Arrays, strings, generators and collections are all iterable in standard JavaScript. Plain objects can't normally be iterated over, unless you have defined an iterator for it.

#### Destructuring Assignment
Parameter Context Matching
Intuitive and flexible destructuring of Arrays and Objects into individual parameters during function calls.
ECMAScript 6 — syntactic sugar: reduced | traditional
```javascript
function f ([ name, val ]) {
    console.log(name, val)
}
function g ({ name: n, val: v }) {
    console.log(n, v)
}
function h ({ name, val }) {
    console.log(name, val)
}
f([ "bar", 42 ])
g({ name: "foo", val:  7 })
h({ name: "bar", val: 42 })
```

#### Modules
Default & Wildcard
Marking a value as the default exported value and mass-mixin of values.
ECMAScript 6 — syntactic sugar: reduced | traditional

```javascript
//  lib/mathplusplus.js
export * from "lib/math"
export var e = 2.71828182846
export default (x) => Math.exp(x)

//  someApp.js
import exp, { pi, e } from "lib/mathplusplus"
console.log("e^{π} = " + exp(pi))
```

#### Meta-Programming
### Proxying
Hooking into runtime-level object meta-operations.
```js
let target = {
    foo: "Welcome, foo"
}
let proxy = new Proxy(target, {
    get (receiver, name) {
        return name in receiver ? receiver[name] : `Hello, ${name}`
    }
})
proxy.foo   === "Welcome, foo"
proxy.world === "Hello, world"
```

#### Reflection
Make calls corresponding to the object meta-operations.
```js
let obj = { a: 1 }
Object.defineProperty(obj, "b", { value: 2 })
obj[Symbol("c")] = 3
Reflect.ownKeys(obj) // [ "a", "b", Symbol(c)
```
