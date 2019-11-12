// an immediately resolved promise
var p2 = Promise.resolve("foo");

// can get it after the fact, unlike events
p2.then((res) => console.log(res));

var p = new Promise(function(resolve, reject) {
   setTimeout(() => resolve(4), 2000);
});

// handler can't change promise, just value
p.then((res) => {
  res += 2;
  console.log(res);
});

// still gets 4
p.then((res) => console.log(res));

// Promise Combination
// Combine one or more promises into new promises without having to take care of ordering of the underlying asynchronous operations yourself.

function fetchAsync (url, timeout, onData, onError) {
    …
}
let fetchPromised = (url, timeout) => {
    return new Promise((resolve, reject) => {
        fetchAsync(url, timeout, resolve, reject)
    })
}
Promise.all([
    fetchPromised("http://backend/foo.txt", 500),
    fetchPromised("http://backend/bar.txt", 500),
    fetchPromised("http://backend/baz.txt", 500)
]).then((data) => {
    let [ foo, bar, baz ] = data
    console.log(`success: foo=${foo} bar=${bar} baz=${baz}`)
}, (err) => {
    console.log(`error: ${err}`)
})
