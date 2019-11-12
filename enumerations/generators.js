function* makeRangeIterator(start = 0, end = 100, step = 1) {
    for (let i = start; i < end; i += step) {
        yield i;
    }
}

function* fibonacci() {
  var fn1 = 0;
  var fn2 = 1;
  while (true) {
    var current = fn1;
    fn1 = fn2;
    fn2 = current + fn1;
    var reset = yield current;
    if (reset) {
        fn1 = 0;
        fn2 = 1;
    }
  }
}

var sequence = fibonacci();
console.log(sequence.next().value);     // 0
console.log(sequence.next().value);     // 1
console.log(sequence.next().value);     // 1
console.log(sequence.next().value);     // 2
console.log(sequence.next().value);     // 3
console.log(sequence.next().value);     // 5
console.log(sequence.next().value);     // 8
console.log(sequence.next(true).value); // 0
console.log(sequence.next().value);     // 1
console.log(sequence.next().value);     // 1
console.log(sequence.next().value);     // 2

// Generator Control-Flow
// Support for generators, a special case of Iterators where the control flow can be paused and resumed, in order to support asynchronous programming in the style of "co-routines" in combination with Promises (see below). [Notice: the generic async function usually is provided by a reusable library and given here just for better understanding. See co or Bluebird's coroutine in practice.]
// ECMAScript 6 — syntactic sugar: reduced | traditional
//  generic asynchronous control-flow driver
function async (proc, ...params) {
    let iterator = proc(...params)
    return new Promise((resolve, reject) => {
        let loop = (value) => {
            let result
            try {
                result = iterator.next(value)
            }
            catch (err) {
                reject(err)
            }
            if (result.done)
                resolve(result.value)
            else if (   typeof result.value      === "object"
                     && typeof result.value.then === "function")
                result.value.then((value) => {
                    loop(value)
                }, (err) => {
                    reject(err)
                })
            else
                loop(result.value)
        }
        loop()
    })
}

//  application-specific asynchronous builder
function makeAsync (text, after) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(text), after)
    })
}

//  application-specific asynchronous procedure
async(function* (greeting) {
    let foo = yield makeAsync("foo", 300)
    let bar = yield makeAsync("bar", 200)
    let baz = yield makeAsync("baz", 100)
    return `${greeting} ${foo} ${bar} ${baz}`
}, "Hello").then((msg) => {
    console.log("RESULT:", msg) // "Hello foo bar baz"
})

// Generator Methods
// Support for generator methods, i.e., methods in classes and on objects, based on generator functions.
// ECMAScript 6 — syntactic sugar: reduced | traditional
class Clz {
    * bar () {
        …
    }
}
let Obj = {
    * foo () {
        …
    }
}
